import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Data Platforms — TheDataProject.AI",
  description: "Browse and search all 134 data platforms built by TheDataProject.AI, spanning healthcare, government, elections, genealogy, and more.",
};

export default function SitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
