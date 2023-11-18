<template>
  <div class="wrap">
    <div class="container">
      <NuxtLink to="/">
        <img src="@/assets/img/logo/brand.svg" alt="" />
      </NuxtLink>
      <div class="burger">
        <button @click="menuHandle = !menuHandle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M8.88843 11.1133H13.3334M17.7784 11.1133H22.2218M26.6668 11.1133H31.1118M8.88843 19.9999H13.3334M17.7784 19.9999H22.2218M26.6668 19.9999H31.1118M8.88843 28.8866H13.3334M17.7784 28.8866H22.2218M26.6668 28.8866H31.1118"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="menu" :class="{ open: menuHandle }">
      <div class="up">
        <div class="lang">
          <a
            :href="switchLocalePath('ru')"
            :class="{ active: $i18n.locale == 'ru' }"
            >{{ $store.state.translations["main.russian"] }}</a
          >
          <a
            :href="switchLocalePath('uz')"
            :class="{ active: $i18n.locale == 'uz' }"
          >
            {{ $store.state.translations["main.uzbek"] }}</a
          >
        </div>
        <div class="links">
          <ul>
            <li @click="(menuHandle = false), scrollElement('offers')">
              <button>
                {{ $store.state.translations["main.mobile_development"] }}
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.6901 8.05304L14.6371 12L10.6901 15.947M21.3341 12C21.3341 17.1556 17.1546 21.335 11.9991 21.335C6.84348 21.335 2.66406 17.1556 2.66406 12C2.66406 6.84446 6.84348 2.66504 11.9991 2.66504C17.1546 2.66504 21.3341 6.84446 21.3341 12Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li @click="(menuHandle = false), scrollElement('offers')">
              <button>
                {{ $store.state.translations["main.site_development"] }}
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.6901 8.05304L14.6371 12L10.6901 15.947M21.3341 12C21.3341 17.1556 17.1546 21.335 11.9991 21.335C6.84348 21.335 2.66406 17.1556 2.66406 12C2.66406 6.84446 6.84348 2.66504 11.9991 2.66504C17.1546 2.66504 21.3341 6.84446 21.3341 12Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li @click="(menuHandle = false), scrollElement('offers')">
              <button>
                {{ $store.state.translations["main.businnes_auto"] }}
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.6901 8.05304L14.6371 12L10.6901 15.947M21.3341 12C21.3341 17.1556 17.1546 21.335 11.9991 21.335C6.84348 21.335 2.66406 17.1556 2.66406 12C2.66406 6.84446 6.84348 2.66504 11.9991 2.66504C17.1546 2.66504 21.3341 6.84446 21.3341 12Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
            <li @click="(menuHandle = false), scrollElement('offers')">
              <button>
                {{ $store.state.translations["main.complex_pack"] }}
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10.6901 8.05304L14.6371 12L10.6901 15.947M21.3341 12C21.3341 17.1556 17.1546 21.335 11.9991 21.335C6.84348 21.335 2.66406 17.1556 2.66406 12C2.66406 6.84446 6.84348 2.66504 11.9991 2.66504C17.1546 2.66504 21.3341 6.84446 21.3341 12Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom">
        <h4 class="par">{{ $store.state.translations["main.contact_us"] }}</h4>
        <p class="sub">{{ $store.state.translations["main.we_joy"] }}</p>

        <div class="person">
          <div class="img">
            <img src="@/assets/img/person-1.jpg" alt="" />
          </div>
          <div class="block">
            <p class="name">
              {{ $store.state.translations["main.manager_name"] }}
            </p>
            <p class="status">
              {{ $store.state.translations["main.manager"] }}
            </p>
          </div>
        </div>

        <div class="num">
          <a :href="`tel:${info.number}`"> {{ info.number }} </a>
        </div>

        <div class="telega">
          <a :href="info.telegram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
            >
              <path
                d="M13.6591 0C14.0999 0 14.4324 0.386641 14.2545 1.10579L12.0971 11.2745C11.9463 11.9975 11.5094 12.1715 10.9062 11.8351L5.76004 8.0344C5.74008 8.02008 5.72383 8.00121 5.71261 7.97936C5.70139 7.95751 5.69554 7.9333 5.69554 7.90874C5.69554 7.88418 5.70139 7.85997 5.71261 7.83812C5.72383 7.81627 5.74008 7.7974 5.76004 7.78308L11.7027 2.41651C11.9734 2.17679 11.6447 2.0608 11.289 2.27732L3.8307 6.98274C3.80808 6.99749 3.7824 7.0069 3.75561 7.01025C3.72881 7.0136 3.7016 7.0108 3.67605 7.00207L0.509457 6.00067C-0.19423 5.79575 -0.19423 5.31245 0.667979 4.96834L13.3382 0.0811946C13.4387 0.0329886 13.5478 0.00538155 13.6591 0Z"
                fill="white"
              />
            </svg>
            @ndc_manager
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M13.2594 6.28711L18.9724 12.0001L13.2594 17.7131M5.65845 12.0001H18.9554"
                stroke="#EAEAEA"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>

        <div class="x">
          <button @click="menuHandle = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M11.1116 11.0767L28.8882 28.85M11.1116 28.85L28.8882 11.0767"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import infoApi from "@/api/info.js";

export default {
  data() {
    return {
      info: {},
      menuHandle: false,
    };
  },

  methods: {
    scrollElement(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    },
  },

  async fetch() {
    const info = await infoApi.getInfo(this.$axios, {
      headers: {
        language: this.$i18n.locale,
      },
    });

    this.info = info;
  },

  mounted() {},

  watch: {
    menuHandle(val) {
      if (val) {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100vh";
      } else {
        document.body.style.overflow = "auto";
        document.body.style.height = "auto";
      }
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 100%;
  z-index: 999;
  padding: 16px 0;
  background: black;
  border-bottom: 1px solid var(--Grey, #525252);
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.burger {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 40px;
  height: 40px;
}
.burger button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  z-index: 99;
}
.menu {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 0 0 0;
}
.lang {
  border-radius: 12px;
  background: #202020;
  margin: 0 16px 12px 16px;
  padding: 6px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
}
.lang a {
  color: var(--White, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  border-radius: 6px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lang a.active {
  background: var(--Grey, #525252);
}
.links ul {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.links li {
  border-radius: 10px;
  background: #1b1b1b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}
.links a {
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
}
.bottom {
  border-radius: 16px 16px 0px 0px;
  background: linear-gradient(180deg, #a44fe6 0%, #8c58ce 100%);
  padding: 24px 16px;
}
.par {
  color: var(--White, #fff);
  text-align: center;
  font-family: var(--decor-bd);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-bottom: 4px;
}
.sub {
  color: var(--White, #fff);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 32px;
}
.person {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}
.person img {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid white;
}
.name {
  color: var(--White, #fff);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.status {
  color: var(--White, #fff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.num a {
  color: var(--White, #fff);
  font-family: var(--decor-bd);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 1.6px;
  padding: 16px 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid #fff;
  margin-bottom: 16px;
}
.telega {
  text-align: center;
  margin-bottom: 32px;
}
.telega a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 10px;
  background: #a26adf;
  padding: 4px 8px;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 160% */
}
.x {
  display: flex;
  justify-content: center;

  margin-bottom: 12px;
}
.x button {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #1b1b1b;
}
.menu {
  transition: 0.2s;
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  pointer-events: none;
}
.up {
  transition: 0.4s;
  transform: translateX(-100%);
}
.bottom {
  transition: 0.3s;
  transform: translateY(100%);
}
.menu.open {
  opacity: 1;
  visibility: visible;
  z-index: 1000;
  pointer-events: initial;
}
.menu.open .up {
  transform: translateX(0%);
}
.menu.open .bottom {
  transform: translateY(0%);
}
@media screen and (max-width: 380px) {
  .bottom {
    padding: 16px;
  }
  .person img {
    width: 50px;
    height: 50px;
  }
  .name {
    font-size: 18px;
  }
  .sub {
    font-size: 14px;
    margin-bottom: 16px;
  }
  .person {
    margin-bottom: 16px;
  }
  .num a {
    padding: 8px 16px;
    font-size: 14px;
  }
  .telega {
    margin-bottom: 16px;
  }
  .links li {
    padding: 8px 12px;
  }
  .x button {
    width: 50px;
    height: 50px;
  }
}
</style>
