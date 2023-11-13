<template>
  <div class="master">
    <DesktopNavbar class="desktop" />
    <MobileNavbar class="mobile" />
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
