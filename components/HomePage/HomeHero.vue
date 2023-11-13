<template>
  <div class="wrap">
    <div class="container">
      <div class="top">
        <div class="content">
          <div class="risk"></div>
          <div>
            <h1 class="title">
              Разработка сайта <span>с продающим wow-эффектом</span>
            </h1>
            <p class="sub">
              делаем ваш бизнес сильнее с помощью цифровых решений
            </p>
          </div>
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
              <div class="button">
                <span>
                  <img src="@/assets/gif/square.gif" alt="" />
                </span>
                <button type="button" class="application">
                  <p>Заказать проект</p>
                </button>
              </div>
            </div>
            <p class="hint">Перезвоним за 3 минуты</p>
          </form>
        </div>
        <div class="gifs">
          <div class="blend">
            <div class="back">
              <img src="@/assets/gif/back.gif" alt="" />
            </div>
          </div>
          <div class="square">
            <img src="@/assets/gif/square.gif" alt="" />
          </div>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li>
            <button type="button">
              <p>Каким будеть ваш сайт</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.6639 8.05304L16.6109 12L12.6639 15.947M7.41294 12H16.5989M21.3339 12C21.3339 17.1556 17.1545 21.335 11.9989 21.335C6.84336 21.335 2.66394 17.1556 2.66394 12C2.66394 6.84446 6.84336 2.66504 11.9989 2.66504C17.1545 2.66504 21.3339 6.84446 21.3339 12Z"
                  stroke="#393939"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            <button type="button">
              <p>Как мы работаем</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.6639 8.05304L16.6109 12L12.6639 15.947M7.41294 12H16.5989M21.3339 12C21.3339 17.1556 17.1545 21.335 11.9989 21.335C6.84336 21.335 2.66394 17.1556 2.66394 12C2.66394 6.84446 6.84336 2.66504 11.9989 2.66504C17.1545 2.66504 21.3339 6.84446 21.3339 12Z"
                  stroke="#393939"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>
          <li>
            <button type="button">
              <p>Как получить скидку</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.6639 8.05304L16.6109 12L12.6639 15.947M7.41294 12H16.5989M21.3339 12C21.3339 17.1556 17.1545 21.335 11.9989 21.335C6.84336 21.335 2.66394 17.1556 2.66394 12C2.66394 6.84446 6.84336 2.66504 11.9989 2.66504C17.1545 2.66504 21.3339 6.84446 21.3339 12Z"
                  stroke="#393939"
                  stroke-width="1.2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myInputModel: "",
    };
  },
  mounted() {},
};
</script>

<style scoped>
.wrap {
  padding: 132px 0 120px 0;
  background: black;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.title {
  color: var(--White, #fff);
  font-family: var(--decor-bd);
  font-size: 62px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
  max-width: 1383px;
}
.sub {
  color: var(--White, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 150% */
  opacity: 0.8;
  margin-bottom: 40px;
}
form .flexer {
  display: flex;
  align-items: center;
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
  color: var(--Grey, #525252);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  min-width: 323px;
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
.hint {
  margin-top: 4px;
  padding-left: 58px;
  color: var(--Grey, #525252);
  opacity: 0.8;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 36px; /* 200% */
}
.container {
  position: relative;
}
.gifs {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-60%) translateX(-100px);
}
.back img {
  mix-blend-mode: hard-light;
}
.square img {
  border-radius: 50%;
  position: absolute;
  bottom: 40px;
  left: 40px;
  width: 290px;
  height: 290px;
  object-fit: cover;
}
.content {
  position: relative;
  z-index: 9;
  margin-bottom: 230px;
}
.bottom ul {
  display: flex;
  align-items: center;
  gap: 16px;
}
.bottom button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 32px;
  border-radius: 34px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 160% */
}
.back {
  background-image: url(@/assets/img/black.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.blend {
  mix-blend-mode: color-burn;
}
.risk {
  display: none;
}
@media screen and (max-width: 1200px) {
  .title {
    font-size: 47px;
    font-weight: 500;
    line-height: 120%; /* 56.4px */
    text-transform: uppercase;
  }
  .title span {
    font-size: 25px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
    display: flex;
    max-width: 79%;
  }
  .sub {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .bottom {
    display: none;
  }
  .back {
    display: none;
  }
  .square {
    width: 270px;
    height: 270px;
  }
  .square img {
    position: static;
    width: 100%;
    height: 100%;
  }
  .gifs {
    transform: translateY(-30%);
    right: 8px;
  }
  .content {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .wrap {
    margin-top: 40px;
    padding: 0 0 40px 0;
    height: 95vh;
    position: relative;
  }
  .top {
    height: 100%;
  }
  .risk {
    display: block;
  }
  .flexer {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  .input {
    width: 100%;
  }
  .button {
    max-width: 100%;
    width: 100%;
  }
  .button span,
  .button img {
    width: 400px;
  }
  .hint {
    padding: 0;
    text-align: center;
    color: var(--Grey, #525252);
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 150%; /* 27px */
  }
  .input {
    width: 100%;
    border-radius: 9px;
    background: #fff;
    color: black;
  }

  .input input:focus,
  .input input:active,
  .input input:focus-visible {
    color: black;
  }
  .input span {
    color: black;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 133.333% */
  }
}
</style>
