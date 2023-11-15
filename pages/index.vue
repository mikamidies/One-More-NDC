<template>
  <div class="master">
    <DesktopNavbar class="desktop" />
    <MobileNavbar class="mobile" />
    <HomeHero />
    <HomeTeam :team="team" />
    <HomeOffer />
    <HomeWhy />
    <HomeProjects :projects="projects" />
    <HomePartners :partners="partners" />
    <HomeFaq :faq="faq" />
    <DesktopFooter />
  </div>
</template>

<script>
import faqApi from "@/api/faq";
import teamApi from "@/api/team";
import projectsApi from "@/api/projects";
import partnersApi from "@/api/partners";
import translationsApi from "@/api/translations";

export default {
  async asyncData({ $axios, store }) {
    const faq = await faqApi.getFaq($axios);
    const team = await teamApi.getTeam($axios);
    const projects = await projectsApi.getProjects($axios);
    const partners = await partnersApi.getPartners($axios);
    const translations = await translationsApi.getTranslations($axios);

    await store.commit("getTranslations", translations.data);

    return {
      faq,
      team,
      projects,
      partners,
    };
  },
};
</script>

<style scoped>
.master {
  overflow: hidden;
}
.mobile {
  display: none;
}
@media screen and (max-width: 1200px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
