<template>
  <div class="master">
    <DesktopNavbar class="desktop" />
    <MobileNavbar class="mobile" />
    <HomeHero />
    <HomeTeam :team="team" />
    <HomeOffer />
    <HomeWhy />
    <HomeProjects :projects="projects" />
    <HomePartners />
    <HomeFaq :faq="faq" />
    <DesktopFooter />
  </div>
</template>

<script>
import faqApi from "@/api/faq";
import teamApi from "@/api/team";
import projectsApi from "@/api/projects";

export default {
  async asyncData({ $axios }) {
    const faq = await faqApi.getFaq($axios);
    const team = await teamApi.getTeam($axios);
    const projects = await projectsApi.getProjects($axios);

    return {
      faq,
      team,
      projects,
    };
  },
};
</script>

<style scoped>
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
