<template>
  <div class="wrap">
    <div class="top-cont">
      <div class="container-big">
        <div class="top">
          <div class="left">
            <NuxtLink to="/">
              <img src="@/assets/img/logo/brand.svg" alt="" />
            </NuxtLink>
          </div>
          <div class="right">
            <NuxtLink class="link" to="/#team">{{
              $store.state.translations["main.agency"]
            }}</NuxtLink>
            <NuxtLink class="link" to="/#projects">{{
              $store.state.translations["main.works"]
            }}</NuxtLink>
            <a :href="`tel:${info.number}`" class="tel">
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
              {{ info.number }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container-big">
      <div class="bottom">
        <div class="left">
          <ul>
            <li>
              <NuxtLink to="/#projects" class="link">
                {{ $store.state.translations["main.site_development"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#offers" class="link">
                {{ $store.state.translations["main.mobile_development"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#offers" class="link">
                {{ $store.state.translations["main.businnes_auto"] }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#offers" class="link">
                {{ $store.state.translations["main.complex_pack"] }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="right">
          <div @click="modalHandle = !modalHandle" type="button" class="button">
            <span>
              <img src="@/assets/gif/square.gif" alt="" />
            </span>
            <button class="application">
              <p>{{ $store.state.translations["main.order_project"] }}</p>
            </button>
          </div>
        </div>
      </div>
    </div>

    <ApplicationModal
      class="modaller"
      :class="{ open: modalHandle }"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
import infoApi from "@/api/info.js";

export default {
  data() {
    return {
      modalHandle: false,
      info: {},
    };
  },

  methods: {
    closeModal() {
      this.modalHandle = false;
    },
  },

  async fetch() {
    const info = await infoApi.getInfo(this.$axios);

    this.info = info;
  },

  watch: {
    modalHandle(val) {
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
.modaller.open {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
  z-index: 99;
  transform: translateY(0);
}

.wrap {
  background: black;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 38px 0 28px 0;
}
.top-cont {
  border-bottom: 1px solid #444344;
}
.top .right {
  display: flex;
  align-items: center;
  gap: 64px;
}
.link {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  opacity: 0.8;
}
.tel {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--White, #fff);
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px; /* 142.857% */
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}
.bottom ul {
  display: flex;
  align-items: center;
  gap: 72px;
}
.button {
  position: relative;
  border-radius: 9px;
  background: #a050e2;
  box-shadow: 0px 8px 69px 0px rgba(161, 80, 227, 0.58);
  max-width: 232px;
  max-height: 46px;
  overflow: hidden;
}
.button span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  height: 340px;
  pointer-events: none;
  z-index: 1;
  mix-blend-mode: plus-lighter;
  opacity: 0.2;
}
.button button {
  position: relative;
  z-index: 2;
  color: var(--White, #fff);
  font-family: var(--decor-bd);
  padding: 12px 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
