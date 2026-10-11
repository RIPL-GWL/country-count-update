import { createFileRoute } from "@tanstack/react-router";
import { CommunityPage } from "@/frontend/features/community/community-page";
const description = "Expand your startup with Rishishwar Industry through market planning, distribution partnerships and funding readiness.";
export const Route = createFileRoute("/scale-your-startup")({
  head: () => ({ meta: [{ title: "Scale Your Startup — Rishishwar Industry" }, { name: "description", content: description }, { property: "og:title", content: "Scale Your Startup — Rishishwar Industry" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CommunityPage title="Scale Your Startup" description={description} kind="scale" />,
});