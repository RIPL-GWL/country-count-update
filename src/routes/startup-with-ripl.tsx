import { createFileRoute } from "@tanstack/react-router";
import { CommunityPage } from "@/frontend/features/community/community-page";
const description = "Start your business journey with RIPL: explore FMCG market access, retail partnerships and business guidance.";
export const Route = createFileRoute("/startup-with-ripl")({
  head: () => ({ meta: [{ title: "Startup with RIPL — Rishishwar Industry" }, { name: "description", content: description }, { property: "og:title", content: "Startup with RIPL — Rishishwar Industry" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CommunityPage title="Startup with RIPL" description={description} kind="startup" />,
});