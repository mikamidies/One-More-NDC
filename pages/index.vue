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
      script: [
        {
          innerHTML: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '503932155421626');
            fbq('track', 'PageView');
          `,
          type: "text/javascript",
          charset: "utf-8",
        },
      ],
      __dangerouslyDisableSanitizers: ["script"],
      noscript: [
        {
          innerHTML: `
            <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=503932155421626&ev=PageView&noscript=1" />
          `,
          body: true,
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
