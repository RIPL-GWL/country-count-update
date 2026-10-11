import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/frontend/components/site-chrome";
import { HeroSection, FundingNeedsSection, WhoCanApplyFormSection, FundingProcessSection, AcrossIndiaSection, DisclaimerSection } from "@/frontend/features/fund-your-business/sections";
export const Route = createFileRoute("/fund-your-startup")({
  head: () => ({ meta: [{ title: "Fund Your Startup — Funding Guidance | Rishishwar Industry" }, { name: "description", content: "Explore startup funding guidance for working capital, equipment and expansion, subject to eligibility and approval." }, { property: "og:title", content: "Fund Your Startup — Rishishwar Industry" }, { property: "og:description", content: "Funding guidance and application support for startups at their next stage of growth." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: FundingPage,
});
function FundingPage() { return <div className="funding-page min-h-screen bg-background"><SiteHeader /><main><HeroSection title="Fund Your Startup" suffix="" /><FundingNeedsSection /><WhoCanApplyFormSection /><FundingProcessSection /><AcrossIndiaSection /><DisclaimerSection /></main><SiteFooter /></div>; }