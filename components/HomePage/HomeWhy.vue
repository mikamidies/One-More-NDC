<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">{{ $store.state.translations["main.why_us"] }}</h4>
      <div class="items">
        <div class="item">
          <h4 class="name">
            {{ $store.state.translations["main.cardo_title-1"] }}
          </h4>
          <p class="sub">
            {{ $store.state.translations["main.cardo_txt-1"] }}
          </p>
        </div>
        <div class="item">
          <h4 class="name">
            {{ $store.state.translations["main.cardo_title-2"] }}
          </h4>
          <p class="sub">
            {{ $store.state.translations["main.cardo_txt-2"] }}
          </p>
        </div>
        <div class="item">
          <h4 class="name">
            {{ $store.state.translations["main.cardo_title-3"] }}
          </h4>
          <p class="sub">
            {{ $store.state.translations["main.cardo_txt-3"] }}
          </p>
        </div>
        <div class="item">
          <h4 class="name">
            {{ $store.state.translations["main.cardo_title-4"]
            }}<span>
              {{ $store.state.translations["main.cardo_span"] }}
            </span>
          </h4>
          <p class="sub">
            {{ $store.state.translations["main.cardo_txt-4"] }}
          </p>
          <a href="#" class="telegram">
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
            @mazoongroup
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.9674 8.05304L16.9144 12L12.9674 15.947M7.71641 12H16.9024M21.6374 12C21.6374 17.1556 17.458 21.335 12.3024 21.335C7.14683 21.335 2.96741 17.1556 2.96741 12C2.96741 6.84446 7.14683 2.66504 12.3024 2.66504C17.458 2.66504 21.6374 6.84446 21.6374 12Z"
                stroke="#393939"
                stroke-width="1.2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="red">
        <div class="left">
          <p class="par">
            {{ $store.state.translations["main.red_title"] }}
          </p>
          <div class="telega">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
              >
                <path
                  d="M14.0075 0C14.4483 0 14.7808 0.386641 14.6029 1.10579L12.4455 11.2745C12.2947 11.9975 11.8578 12.1715 11.2546 11.8351L6.10843 8.0344C6.08847 8.02008 6.07221 8.00121 6.061 7.97936C6.04978 7.95751 6.04393 7.9333 6.04393 7.90874C6.04393 7.88418 6.04978 7.85997 6.061 7.83812C6.07221 7.81627 6.08847 7.7974 6.10843 7.78308L12.0511 2.41651C12.3218 2.17679 11.9931 2.0608 11.6374 2.27732L4.17909 6.98274C4.15647 6.99749 4.13079 7.0069 4.10399 7.01025C4.0772 7.0136 4.04999 7.0108 4.02444 7.00207L0.857845 6.00067C0.154159 5.79575 0.154159 5.31245 1.01637 4.96834L13.6866 0.0811946C13.7871 0.0329886 13.8962 0.00538155 14.0075 0Z"
                  fill="white"
                />
              </svg>
              <p>@ndc_manager</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M13.6078 6.28711L19.3208 12.0001L13.6078 17.7131M6.00684 12.0001H19.3038"
                  stroke="#EAEAEA"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <p class="txt">
            {{ $store.state.translations["main.red_sub"] }}
          </p>
        </div>
        <div class="right">
          <a href="tel:+998 97 666 66 66"> +998 97 666 66 66 </a>
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
                d="M13.164 8.05304L17.111 12L13.164 15.947M7.913 12H17.099M21.834 12C21.834 17.1556 17.6546 21.335 12.499 21.335C7.34342 21.335 3.164 17.1556 3.164 12C3.164 6.84446 7.34342 2.66504 12.499 2.66504C17.6546 2.66504 21.834 6.84446 21.834 12Z"
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
    </div>

    <ApplicationModal
      class="modaller"
      :class="{ open: modalHandle }"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalHandle: false,
    };
  },

  methods: {
    closeModal() {
      this.modalHandle = false;
    },
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
  padding-bottom: 80px;
}
.title {
  color: var(--White, #fff);
  text-align: center;
  font-family: var(--decor-bd);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-bottom: 16px;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}
.item {
  border-radius: 30px;
  background: #1b1b1b;
  padding: 24px;
}
.name {
  color: var(--White, #fff);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
}
.sub {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.name span {
  color: #ff2ed1;
  font-family: var(--decor-bd);
  font-size: 29px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.telegram {
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 160% */
  align-items: center;
  gap: 8px;
  border-radius: 34px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 8px 16px;
  display: inline-flex;
  margin-top: 10px;
}
.red {
  border-radius: 30px;
  background: #d84471;
  padding: 27px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
}
.par {
  color: var(--White, #fff);
  font-family: var(--decor-bd);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-bottom: 10px;
}
.txt {
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 450px;
}
.right a {
  color: var(--White, #fff);
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 40px; /* 142.857% */
}
.right button {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  gap: 16px;
  border-radius: 16px;
  border: 1px solid var(--White, #fff);
  padding: 16px 32px;
  display: flex;
  align-items: center;
}
.right {
  display: flex;
  align-items: center;
  gap: 32px;
}
.telega {
  display: none;
}
@media screen and (max-width: 1024px) {
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
  .title {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 24px;
  }
  .container {
    padding: 0;
  }
  .item {
    padding: 16px;
    border-radius: 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    position: relative;
  }
  .name {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
  }
  .sub {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .name span {
    color: #00ffd1;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    font-style: italic;
  }
  .telegram {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    padding: 8px 16px;
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
  .item:last-child {
    padding-bottom: 80px;
  }
  .red {
    flex-direction: column;
    padding: 16px 32px;
    text-align: center;
    gap: 30px;
  }
  .txt,
  .right a {
    display: none;
  }
  .telega {
    display: flex;
    justify-content: center;
  }
  .telega a {
    color: white;
    display: inline-flex;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.15);
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    gap: 4px;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .par {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
}
</style>
