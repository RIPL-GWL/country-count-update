import { useEffect, useState } from "react";

export const siteThemes = ["navratri", "dark", "light", "bome", "moonlight"] as const;
export type SiteTheme = typeof siteThemes[number];
export const themeLabels: Record<SiteTheme, string> = { navratri: "Navratri Special", dark: "Dark", light: "Light", bome: "Bome · Original", moonlight: "Moon" };
export function resolveTheme(value: string | null): SiteTheme {
  if (value === "navratri-dark") return "dark";
  return siteThemes.find((theme) => theme === value) ?? "navratri";
}
export function isNavratri(theme: SiteTheme) { return theme === "navratri"; }
export function nextSiteTheme(theme: SiteTheme): SiteTheme {
  return siteThemes[(siteThemes.indexOf(theme) + 1) % siteThemes.length] ?? "navratri";
}
export function setSiteTheme(theme: SiteTheme) {
  document.documentElement.classList.remove(...siteThemes, "navratri-dark");
  document.documentElement.classList.add(theme);
  localStorage.setItem("rishishwar-theme", theme);
  window.dispatchEvent(new CustomEvent("site-theme", { detail: theme }));
}
export function useSiteTheme() {
  const [theme, setTheme] = useState<SiteTheme>("navratri");
  useEffect(() => {
    const saved = resolveTheme(localStorage.getItem("rishishwar-theme"));
    setSiteTheme(saved);
    setTheme(saved);
    const update = (event: Event) => setTheme(resolveTheme((event as CustomEvent<string>).detail));
    window.addEventListener("site-theme", update);
    return () => window.removeEventListener("site-theme", update);
  }, []);
  return theme;
}