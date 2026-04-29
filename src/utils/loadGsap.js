// Shared GSAP lazy loader — used by AgentsShowcaseV2 and ProblemSolution
let gsapCache = null;

export async function loadGsap() {
  if (gsapCache) return gsapCache;
  const [{ gsap }, { ScrollTrigger }, { ScrollToPlugin }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
    import('gsap/ScrollToPlugin'),
  ]);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsapCache = { gsap, ScrollTrigger, ScrollToPlugin };
  return gsapCache;
}
