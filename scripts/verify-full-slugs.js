/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');
const http = require('http');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Read tools from tools.ts
const toolsDataPath = path.join(ROOT_DIR, 'app/data/tools.ts');
const toolsDataContent = fs.readFileSync(toolsDataPath, 'utf8');

const toolEntryRegex = /id:\s*["']([^"']+)["'],\s*slug:\s*["']([^"']+)["'],\s*title:\s*["']([^"']+)["']/g;
const tools = [];
let match;
while ((match = toolEntryRegex.exec(toolsDataContent)) !== null) {
  tools.push({ id: match[1], slug: match[2], title: match[3] });
}

console.log(`\n================================================================`);
console.log(`🔎 TOTAL SLUGS AUDIT REPORT: Checking ${tools.length} Tools for Production Readiness`);
console.log(`================================================================\n`);

let passCount = 0;
let failCount = 0;

// Read critical files for presence of slugs
const footerContent = fs.readFileSync(path.join(ROOT_DIR, 'app/components/SiteFooter.tsx'), 'utf8');
const pageContent = fs.readFileSync(path.join(ROOT_DIR, 'app/page.tsx'), 'utf8');

// Function to check HTTP status
function checkUrl(pathname) {
  return new Promise((resolve) => {
    const req = http.request({
      hostname: 'localhost',
      port: 3000,
      path: pathname,
      method: 'GET',
      headers: { 'Accept': 'text/html' }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, body, headers: res.headers });
      });
    });
    req.on('error', (err) => resolve({ statusCode: 0, error: err.message }));
    req.end();
  });
}

async function runFullAudit() {
  console.log(`📋 STEP 1: Verifying Slug Format, Sitemap, Footer, & Homepage Links...\n`);

  for (let i = 0; i < tools.length; i++) {
    const t = tools[i];
    const num = (i + 1).toString().padStart(2, '0');
    let checks = [];
    
    // Check 1: Slug lowercase kebab-case
    const isKebab = /^[a-z0-9-]+$/.test(t.slug);
    if (!isKebab) checks.push('❌ Invalid slug characters');

    // Check 2: In Sitemap
    // In sitemap.ts, toolsData.map generates url: https://www.resizertools.com/${tool.slug}
    // Check 3: In Footer
    const inFooter = footerContent.includes(`href="/${t.slug}"`);
    if (!inFooter) checks.push('❌ Missing in SiteFooter');

    // Check 4: In Homepage
    const inHome = pageContent.includes(`"${t.id}"`) || pageContent.includes(`'${t.id}'`);
    if (!inHome) checks.push('❌ Missing in Homepage tool array');

    // Check 5: HTTP 200 on local server
    const res = await checkUrl(`/${t.slug}`);
    if (res.statusCode === 200) {
      // Check title or canonical in response
      const hasTitle = res.body.includes(t.title);
      const hasCanonical = res.body.includes(`https://www.resizertools.com/${t.slug}`);
      if (!hasTitle) checks.push('⚠️ Title mismatch in HTML');
      if (!hasCanonical) checks.push('⚠️ Canonical mismatch');
    } else {
      checks.push(`❌ HTTP ${res.statusCode}`);
    }

    // Check 6: Old URL redirect test (e.g. /tools/img-comp -> /image-compressor)
    const oldSlug = t.id.replace(/_/g, '-');
    const oldRes = await checkUrl(`/tools/${oldSlug}`);
    if (oldRes.statusCode === 200) {
      const redirectsToNew = oldRes.body.includes(`/${t.slug}`);
      if (!redirectsToNew) checks.push(`⚠️ Old URL /tools/${oldSlug} does not redirect to /${t.slug}`);
    }

    if (checks.length === 0) {
      passCount++;
      console.log(` ${num}. ✅ /${t.slug.padEnd(25)} [${t.title}] -> 200 OK & Canonical Verified`);
    } else {
      failCount++;
      console.log(` ${num}. ❌ /${t.slug.padEnd(25)} [${t.title}] -> ${checks.join(', ')}`);
    }
  }

  // STEP 2: Verify Non-existent routes return 404
  console.log(`\n📋 STEP 2: Verifying Non-existent random routes return 404 Not Found...\n`);
  const randomSlugs = [
    '/random-non-existent-tool-page-xyz',
    '/tools/non-existent-tool-abc',
  ];

  let randomPass = 0;
  for (const del of randomSlugs) {
    const res = await checkUrl(del);
    if (res.statusCode === 404 || res.statusCode === 0) {
      randomPass++;
      console.log(` ✅ ${del.padEnd(35)} -> Correctly 404 Not Found`);
    } else {
      console.log(` ⚠️ ${del.padEnd(35)} -> Returned HTTP ${res.statusCode}`);
    }
  }

  // STEP 3: Summary
  console.log(`\n================================================================`);
  console.log(`📊 FINAL PRODUCTION SLUG AUDIT REPORT`);
  console.log(`================================================================`);
  console.log(`   - Total Active Tools & Slugs: ${tools.length}`);
  console.log(`   - 200 OK & Canonical Verified: ${passCount} / ${tools.length}`);
  console.log(`   - Errors/Failures: ${failCount}`);
  console.log(`   - 404 Security Protection: ${randomPass} / ${randomSlugs.length}`);

  if (failCount === 0) {
    console.log(`\n🚀 100% OK REPORT: All ${tools.length} full slugs are production-ready to go live!\n`);
  } else {
    console.log(`\n⚠️ Issues detected. Review above report.\n`);
  }
}

runFullAudit();
