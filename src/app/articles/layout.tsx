import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles — TheDataProject.AI",
  description: "Research, analysis, and insights across our 134 data platforms.",
};

export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
