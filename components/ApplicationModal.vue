<template>
  <div class="wrap">
    <div class="space"></div>
    <div class="body">
      <div class="x">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4.44458 4.43066L11.5552 11.54M4.44458 11.54L11.5552 4.43066"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="left">
        <h4 class="title">Оставить заявку</h4>
        <p class="sub">
          Оставьте Ваши контактные данные и наши менеджеры свяжутся с вами
        </p>
      </div>
      <div class="right">
        <form>
          <div class="flexer">
            <div class="input">
              <span> +998 </span>
              <input
                type="text"
                placeholder="(00) 000-00-00"
                v-mask="'(##) ###-##-##'"
                v-model="myInputModel"
              />
            </div>
            <input type="text" class="second input" placeholder="Ваше имя" />
          </div>
          <div class="flex">
            <div class="manager">
              <div class="img">
                <img src="@/assets/img/person-1.jpg" alt="" />
              </div>
              <div class="block">
                <p class="name">Акмал Икромов</p>
                <p class="status">Менежер</p>
              </div>
            </div>
            <div class="button">
              <span>
                <img src="@/assets/gif/square.gif" alt="" />
              </span>
              <button type="button" class="application">
                <p>Заказать проект</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}
.body {
  border-radius: 24px;
  border: 1px solid var(--Grey, #525252);
  background: #1b1b1b;
  box-shadow: 0px 40px 51.5px 0px rgba(0, 0, 0, 0.25);
  min-width: 1200px;
  padding: 60px 40px 40px 40px;
  display: grid;
  grid-template-columns: 3fr 7fr;
  gap: 40px;
  position: relative;
}
.title {
  color: var(--White, #fff);
  font-family: var(--decor-bd);
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 48px */
  margin-bottom: 8px;
  max-width: 314px;
}
.sub {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  max-width: 314px;
}
form .flexer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 8px;
}
.button {
  position: relative;
  border-radius: 9px;
  background: #a050e2;
  box-shadow: 0px 8px 69px 0px rgba(161, 80, 227, 0.58);
  max-width: 232px;
  height: 56px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 12px 32px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 9px;
}
.input {
  border-radius: 9px;
  background: #252525;
  padding: 15px;
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  min-width: 323px;
  height: 56px;
  border: 1px solid #4b4b4b;
}
.input::placeholder {
  color: #7a7a7a;
}
.input input:focus,
.input input:active,
.input input:focus-visible {
  color: white;
}
.input span {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
}
.manager {
  display: flex;
  align-items: center;
  gap: 12px;
}
.manager img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid white;
}
.name {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 4px;
}
.status {
  color: #adadad;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.x {
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 10px;
  border-radius: 50%;
  background: #303030;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
