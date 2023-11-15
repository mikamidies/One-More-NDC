<template>
  <div class="wrap">
    <div class="dog">
      <div class="container">
        <div class="top">
          <div class="left">
            <a :href="`tel:${info.number}`" class="num">{{ info.number }}</a>
            <a :href="`mailto:${info.email}`"> {{ info.email }}</a>
            <p>
              {{ info.adress }}
            </p>
          </div>
          <div class="right">
            <ul>
              <li>
                <a href=""> {{ $store.state.translations["main.ux-ui"] }} </a>
              </li>
              <li>
                <a href="">
                  {{ $store.state.translations["main.mobile_development"] }}
                </a>
              </li>
              <li>
                <a href="">{{ $store.state.translations["main.crm"] }} </a>
              </li>
              <li>
                <a href=""> {{ $store.state.translations["main.smm"] }} </a>
              </li>
              <li>
                <a href="">
                  {{ $store.state.translations["main.branding"] }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="bottom">
        <p>{{ $store.state.translations["main.all_rights"] }}</p>
        <div class="socs">
          <a target="_blank" :href="info.facebook">
            {{ $store.state.translations["main.facebook"] }}
          </a>
          <a target="_blank" :href="info.instagram">
            {{ $store.state.translations["main.instagram"] }}
          </a>
          <a target="_blank" :href="info.telegram">
            {{ $store.state.translations["main.telegram"] }}
          </a>
        </div>
      </div>
    </div>

    <div class="red" data-aos="fade-up" data-aos-duration="300">
      <div class="container">
        <div class="cardo">
          <p>{{ $store.state.translations["main.free"] }}</p>
          <button @click="modalHandle = !modalHandle">
            {{ $store.state.translations["services.order_call"] }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M13.1641 8.05304L17.1111 12L13.1641 15.947M7.91306 12H17.0991M21.8341 12C21.8341 17.1556 17.6546 21.335 12.4991 21.335C7.34348 21.335 3.16406 17.1556 3.16406 12C3.16406 6.84446 7.34348 2.66504 12.4991 2.66504C17.6546 2.66504 21.8341 6.84446 21.8341 12Z"
                stroke="white"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="map">
        <div class="iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0850364179273!2d69.2491543250465!3d41.32876420534111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b324f63d6fd%3A0x726da163a0776972!2sJangoh%2036%20a!5e0!3m2!1sru!2s!4v1699957713031!5m2!1sru!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p class="address">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M11.9979 21.332C11.9979 21.332 4.23389 16.667 4.23389 10.444C4.23389 6.14802 7.71589 2.66602 12.0119 2.66602C16.3079 2.66602 19.7899 6.14802 19.7899 10.444C19.7899 16.667 11.9979 21.332 11.9979 21.332Z"
              stroke="#D84471"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0119 13.556C13.73 13.556 15.1229 12.1632 15.1229 10.445C15.1229 8.72686 13.73 7.33402 12.0119 7.33402C10.2937 7.33402 8.90089 8.72686 8.90089 10.445C8.90089 12.1632 10.2937 13.556 12.0119 13.556Z"
              stroke="#D84471"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {{ info.adress }}
        </p>
      </div>
      <div class="info">
        <p>{{ $store.state.translations["main.all_rights"] }}</p>
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
.top {
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.left a,
.left p {
  color: var(--White, #fff);
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px; /* 112.5% */
  display: flex;
}
.right a {
  color: #797979;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 160% */
  display: flex;
  transition: 0.3s;
}
.right ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.dog {
  padding-bottom: 40px;
  border-bottom: 1px solid #444344;
}
.bottom {
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.bottom p {
  color: #797979;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 177.778% */
}
.bottom a {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 177.778% */
  color: #797979;
}
.socs {
  display: flex;
  align-items: center;
  gap: 32px;
}
.right a:hover {
  color: white;
}
.red {
  display: none;
}
.map {
  display: none;
}

@media screen and (max-width: 1024px) {
  .top {
    flex-direction: column;
  }
  .red {
    display: block;
  }
  .red .cardo {
    border-radius: 16px;
    background: #d84471;
    padding: 24px 32px;
    margin-bottom: 24px;
  }
  .dog,
  .bottom {
    display: none;
  }
  .cardo p {
    color: var(--White, #fff);
    text-align: center;
    font-family: var(--decor-bd);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 40px;
  }
  .cardo button {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    border: 1px solid var(--White, #fff);
    padding: 16px 32px;
    justify-content: center;
    width: 100%;
  }
  .info {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    opacity: 0.8;
    text-align: center;
    padding-bottom: 24px;
  }
  .map {
    display: flex;
    flex-direction: column;
    background: black;
  }
  .info {
    background: black;
  }
  .map iframe {
    filter: invert(90%);
    width: 100% !important;
    height: 467px !important;
  }
  .address {
    color: var(--White, #fff);
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px; /* 160% */
    margin: 32px 0;
  }
  .iframe {
    position: relative;
  }
  .iframe::before {
    background: linear-gradient(180deg, #0f0f0f 0%, rgba(10, 10, 10, 0) 100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 125px;
    content: "";
    z-index: 1;
  }
  .iframe::after {
    background: linear-gradient(180deg, #010101 0%, rgba(10, 10, 10, 0) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 125px;
    content: "";
    z-index: 1;
    transform: rotate(180deg);
  }
}
@media screen and (max-width: 390px) {
  .cardo p {
    font-size: 16px;
    margin-bottom: 24px;
  }
  .cardo button {
    font-size: 15px;
    padding: 10px 16px;
  }
  .address svg {
    transform: translateY(5px);
  }
}
</style>
