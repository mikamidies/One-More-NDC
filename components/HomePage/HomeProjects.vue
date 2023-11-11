<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <div class="left">
          <div>
            <h4 class="title">Наши работы</h4>
            <div class="tags">
              <p>Разработка</p>
              <p>SEO оптимизация</p>
              <p>Брендинг</p>
            </div>
          </div>
          <div class="brando">
            <img src="@/assets/img/logo/brand-color.png" alt="" class="brand" />
          </div>
        </div>
        <div class="right">
          <h4>Бесплатная концепция</h4>
          <p>делаем ваш бизнес сильнее с помощью цифровых технологий</p>
        </div>
      </div>
      <div class="items">
        <div class="item">
          <div class="img">
            <img src="@/assets/img/project-1.jpg" alt="" class="pic" />
          </div>
          <div class="top">
            <h2 class="name">AirTech</h2>
            <a href="#" class="link">
              www.airtech.uz
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M8.63905 7.79297H16.7191V15.872M7.30505 17.207L16.7071 7.80497"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <p class="sub">Платформа для онлайн бронирование</p>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/project-2.jpg" alt="" class="pic" />
          </div>
          <div class="top">
            <h2 class="name">AirTech</h2>
            <a href="#" class="link">
              www.airtech.uz
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M8.63905 7.79297H16.7191V15.872M7.30505 17.207L16.7071 7.80497"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <p class="sub">Платформа для онлайн бронирование</p>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/project-3.jpg" alt="" class="pic" />
          </div>
          <div class="top">
            <h2 class="name">AirTech</h2>
            <a href="#" class="link">
              www.airtech.uz
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M8.63905 7.79297H16.7191V15.872M7.30505 17.207L16.7071 7.80497"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <p class="sub">Платформа для онлайн бронирование</p>
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
.brando {
  position: relative;
  display: inline-flex;
  width: 75px;
  height: 75px;
}
.brand {
  animation: spin 21s infinite linear;
}
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.title {
  color: var(--White, #fff);
  font-size: 64px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px; /* 112.5% */
  margin-bottom: 12px;
}
.tags {
  display: flex;
  align-items: center;
  gap: 32px;
}
.tags p {
  color: #adadad;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 82px;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  row-gap: 40px;
}
.pic {
  width: 100%;
  height: 516px;
  object-fit: cover;
  margin-bottom: 16px;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}
.name {
  color: var(--White, #fff);
  font-family: var(--bold);
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.link {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 12px;
}
.sub {
  color: #adadad;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
