import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { toolsData, findTool } from "../../data/tools";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return toolsData.map((tool) => ({
    id: tool.id.replace(/_/g, "-"),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const tool = findTool(id);
  const target = tool ? `https://www.resizertools.com/${tool.slug}` : "https://www.resizertools.com";

  return {
    title: tool ? `${tool.title} - Resizer Tools` : "Resizer Tools",
    robots: {
      index: false,
      follow: true,
    },
    alternates: {
      canonical: target,
    },
  };
}

export default async function ToolRedirectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tool = findTool(id);

  if (!tool) {
    notFound();
  }

  const targetSlug = tool.slug || "";
  const targetUrl = targetSlug ? `/${targetSlug}` : "/";

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center p-6 text-center">
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace('${targetUrl}');`,
        }}
      />
      <div className="space-y-4 max-w-md">
        <h1 className="text-xl font-bold">Redirecting to {tool?.title || "Tool"}...</h1>
        <p className="text-sm text-neutral-400">
          This page has moved. If you are not redirected automatically,{" "}
          <Link href={targetUrl} className="text-brand-gold underline font-semibold">
            click here to continue
          </Link>.
        </p>
      </div>
    </div>
  );
}
