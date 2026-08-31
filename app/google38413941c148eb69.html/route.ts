export const dynamic = "force-static";

export function GET() {
  return new Response("google-site-verification: google38413941c148eb69.html", {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
