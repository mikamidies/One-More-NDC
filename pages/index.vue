<template>
  <div class="master">
    <DesktopNavbar class="desktop" />
    <HomeHero />
    <HomeTeam />
    <HomeOffer />
    <HomeWhy />
    <HomeProjects />
    <HomePartners />
    <DesktopFooter />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@media screen and (max-width: 1200px) {
  .desktop {
    display: none;
  }
}
</style>
