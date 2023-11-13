<template>
  <div class="wrap">
    <div class="dog">
      <div class="container">
        <div class="top">
          <div class="left">
            <a href="" class="num">+998 97 666 66 66</a>
            <a href=""> info@ndc.uz </a>
            <p>
              Uzbekistan, Tashkent <br />
              Sergeli-6
            </p>
          </div>
          <div class="right">
            <ul>
              <li>
                <a href=""> UX/UI design </a>
              </li>
              <li>
                <a href=""> Mobile dev </a>
              </li>
              <li>
                <a href=""> Crm cystem </a>
              </li>
              <li>
                <a href=""> Social Media Marketing </a>
              </li>
              <li>
                <a href=""> Branding </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="bottom">
        <p>©2022 Все права защищены.</p>
        <div class="socs">
          <a href="#"> Facebook </a>
          <a href="#"> Instagram </a>
          <a href="#"> Telegram </a>
        </div>
      </div>
    </div>

    <div class="red">
      <div class="container">
        <div class="cardo">
          <p>Бесплатно получите анализ: зачем нужен Вашему бизнесу сайт</p>
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
        <div class="info">
          <p>©2022 Все права защищены.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
}
</style>
