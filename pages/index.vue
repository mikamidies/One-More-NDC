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
  data() {
    return {};
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "facebook-domain-verification",
          name: "facebook-domain-verification",
          content: "lpoapvto6pqebfmr6bqmpkdvfyl90o",
        },
      ],
    };
  },

  async asyncData({ $axios, query, i18n }) {
    const faq = await faqApi.getFaq($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    });
    const team = await teamApi.getTeam($axios);
    const projects = await projectsApi.getProjects($axios, {
      ...query,
      headers: {
        language: i18n.locale,
      },
    });
    const partners = await partnersApi.getPartners($axios);

    return {
      faq,
      team,
      projects,
      partners,
    };
  },

  async fetch() {
    const translations = await translationsApi.getTranslations(this.$axios, {
      headers: {
        Language: this.$i18n.locale,
      },
    });

    await this.$store.commit("getTranslations", translations.data);
  },

  watch: {
    async currentLang(val) {
      const translations = await translationsApi.getTranslations(this.$axios, {
        headers: {
          Language: this.$i18n.locale,
        },
      });

      await this.$store.commit("getTranslations", translations.data);
    },
  },

  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
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
