<template>
  <div class="wrap" id="faq">
    <div class="container">
      <h4 class="title">{{ $store.state.translations["main.faq"] }}</h4>
      <div class="flex">
        <div class="left">
          <div
            class="dropdown"
            v-for="item in firstHalf"
            :key="item.id"
            @click="dropAction(item.id), (handleHeight = true)"
            :class="{ heightAuto: dropVal == item.id }"
          >
            <div class="dropdown-button">
              <h5>
                {{ item.question }}
              </h5>
              <span :class="{ rotate180: dropVal == item.id }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 10L12 14L17 10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>
            </div>
            <Transition name="bounceDrop">
              <div v-html="item.answer" class="dropdown-board"></div>
            </Transition>
          </div>
        </div>
        <div class="right">
          <div
            v-for="item in secondHalf"
            :key="item.id"
            class="dropdown"
            @click="dropAction(item.id), (handleHeight = true)"
            :class="{ heightAuto: dropVal == item.id }"
          >
            <div class="dropdown-button">
              <h5>
                {{ item.question }}
              </h5>
              <span :class="{ rotate180: dropVal == item.id }">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 10L12 14L17 10"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  /></svg
              ></span>
            </div>
            <Transition name="bounceDrop">
              <div v-html="item.answer" class="dropdown-board"></div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["faq"],

  data() {
    return {
      dropVal: 1,
      firstHalf: "",
      secondHalf: "",
      handleHeight: false,
    };
  },

  mounted() {
    const half = Math.ceil(this.faq.length / 2);

    const firstHalf = this.faq.slice(0, half);
    const secondHalf = this.faq.slice(half);

    (this.firstHalf = firstHalf), (this.secondHalf = secondHalf);
  },

  methods: {
    dropAction(val) {
      if (val != this.dropVal) {
        this.dropVal = val;
      } else {
        this.dropVal = false;
      }
    },
  },
};
</script>

<style scoped>
.wrap {
  padding-bottom: 80px;
  min-height: 50vh;
}
.title {
  color: var(--White, #fff);
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px; /* 112.5% */
  margin-bottom: 16px;
}
.flex {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.bounceDrop-enter-active {
  animation: bounceDrop-in 0.3s;
}
.bounceDrop-leave-active {
  animation: bounceDrop-in 0.3s reverse;
}
@keyframes bounceDrop-in {
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.dropdown {
  border-radius: 24px;
  border-radius: 16px;
  background: #1b1b1b;
  margin-bottom: 16px;
  max-height: 76px;
  overflow: hidden;
  transition: 0.4s;
}
.dropdown.heightAuto {
  max-height: 100%;
  border-radius: 16px;
  background: #1b1b1b;
}
.dropdown-button span {
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #101010;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.dropdown-button span.rotate180 {
  transform: rotate(180deg);
}
.dropdown-button {
  padding: 22px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
}
.dropdown-button h5 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.4s;
}
.dropdown.heightAuto .dropdown-button h5 {
  -webkit-line-clamp: 5;
}
.dropdown.heightAuto .dropdown-button {
  /* border-bottom: 1px solid #dbdee8; */
}
.dropdown.heightAuto .dropdown-board {
  padding: 0px 32px 22px 32px;
}
.dropdown-board {
  padding: 22px 32px 22px 32px;
  transition: 0.4s;
  color: var(--grey-40, #9a999b);
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 22.4px */
}
.left {
  padding-top: 24px;
}
@media screen and (max-width: 1024px) {
  .flex {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }
  .dropdown {
    margin-bottom: 0;
  }
  .left,
  .right {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0;
  }
  .title {
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }
  .dropdown-button {
    padding: 16px;
    min-height: 76px;
  }
  .dropdown.heightAuto .dropdown-board {
    padding: 0px 16px 16px 16px;
  }
  .wrap {
    min-height: 70vh;
  }
}
</style>
