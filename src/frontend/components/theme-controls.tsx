import { Moon, MoonStar, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { nextSiteTheme, setSiteTheme, useSiteTheme } from "../lib/site-theme";

export function ThemeCycle() {
  const theme = useSiteTheme();
  const Icon = theme === "light" || theme === "navratri" ? Sun : theme === "moonlight" ? MoonStar : Moon;
  return <Button variant="outline" size="icon" className="theme-cycle" aria-label="Change theme" title="Change theme" onClick={() => setSiteTheme(nextSiteTheme(theme))}><Icon /></Button>;
}
