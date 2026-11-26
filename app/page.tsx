import type { Metadata } from "next";
import WorkspaceHome from "./components/WorkspaceHome";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Resizer Tools - Free Online PDF & Image Utilities Platform",
  description:
    "Compress, resize, merge, split, rotate, watermark, lock, unlock, and sign PDF or image files 100% locally in your browser. Zero server uploads, private and secure.",
  alternates: {
    canonical: "https://www.resizertools.com",
  },
};

export default function HomePage() {
  return <WorkspaceHome />;
}
