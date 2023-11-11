<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title">Почему мы?</h4>
      <div class="items">
        <div class="item">
          <h4 class="name">Комплексные решения</h4>
          <p class="sub">
            Мы предлагаем создание сайта под ключ, начиная с разработки сайта и
            заканчивая технической поддержкой.
          </p>
        </div>
        <div class="item">
          <h4 class="name">Для нас нет невозможного</h4>
          <p class="sub">
            Мы находим решения для бизнес-задач любой сложности и работаем на
            результат.
          </p>
        </div>
        <div class="item">
          <h4 class="name">Ваш отзыв - наша репутация</h4>
          <p class="sub">
            Мы всегда доводим дело до конца и не бросаем заказчиков с нерешенной
            проблемой или задачей.
          </p>
        </div>
        <div class="item">
          <h4 class="name">Каждый дизайн:<span> индивидуален </span></h4>
          <p class="sub">
            У нас дочерняя компания Mazmoon которая будет заниматься дизайном
            вашего проекта
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
          <p class="par">Свяжитесь с нами - и вы сами увидите!</p>
          <p class="txt">
            делаем ваш бизнес сильнее с помощью цифровых технологий
          </p>
        </div>
        <div class="right">
          <a href="tel:+998 97 666 66 66"> +998 97 666 66 66 </a>
          <button>
            Заказать званок
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
</style>
