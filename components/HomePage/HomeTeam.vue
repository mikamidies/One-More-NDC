<template>
  <div class="wrap">
    <div class="container">
      <div class="top">
        <div class="left">
          <p class="sup">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M5.89724 4.26817V0H7.09461V4.26817L9.22871 0.570176L10.2632 1.17293L8.12908 4.87093L11.8271 2.73684L12.4217 3.7713L8.73184 5.90539H13V7.10276H8.73184L12.4217 9.23685L11.8271 10.2713L8.12908 8.13722L10.2632 11.8352L9.22871 12.4298L7.09461 8.73183V13H5.89724V8.73183"
                fill="#525252"
              />
              <path
                d="M7.09461 4.26817V0H5.89724V4.26817L3.76316 0.57832L2.7287 1.17293L4.86279 4.87093L1.16479 2.73684L0.570179 3.7713L4.26817 5.90539H0V7.10276H4.26817L0.570179 9.23685L1.16479 10.2713L4.86279 8.13722L2.7287 11.8352L3.76316 12.4298L5.89724 8.73183V13H7.09461V8.73183"
                fill="#525252"
              />
            </svg>
            National Development Community
          </p>
          <h4 class="title">
            Мы предлагаем создание сайта с продающим wow-эффектом
          </h4>
        </div>
        <div class="right">
          <div class="items">
            <div class="item">
              <p class="num">5+</p>
              <p class="sub">Лет в cфере</p>
            </div>
            <div class="item">
              <p class="num">24+</p>
              <p class="sub">Членов команды</p>
            </div>
            <div class="item">
              <p class="num">150+</p>
              <p class="sub">Проектов</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p class="sup">Над вашим проектом будут работать</p>
        <div class="humans">
          <div class="person">
            <img src="@/assets/img/special-person-2.png" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/special-person-1.png" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/special-person-3.png" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/special-person-4.png" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/special-person-5.png" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/special-person-6.png" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/person-15.jpg" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/person-16.jpg" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/person-9.jpg" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/person-10.jpg" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/person-11.jpg" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/person-12.jpg" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/person-13.jpg" alt="" />
          </div>
          <div class="person">
            <img src="@/assets/img/person-14.jpg" alt="" />
          </div>
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
  border-radius: 30px;
  background: #fff;
  padding: 64px 0;
  color: var(--black);
}
.sup {
  color: var(--Grey, #525252);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 16px;
}
.title {
  color: var(--Black, #0f0f0f);
  font-family: var(--decor-md);
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 110%; /* 44px */
}
.items {
  display: flex;
  align-items: center;
  gap: 48px;
  justify-content: flex-end;
}
.top {
  display: flex;
  align-items: center;
  margin-bottom: 48px;
}
.left,
.right {
  width: 50%;
}
.num {
  margin-bottom: 4px;
  color: #414141;
  font-family: var(--decor-md);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.sub {
  color: var(--Grey, #525252);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
}
.humans {
  display: flex;
  align-items: center;
}
.person img {
  width: 90px;
  height: 90px;
  object-fit: cover;
}
.person {
  border: 4px solid white;
  border-radius: 50%;
  overflow: hidden;
  margin-left: -12px;
}
</style>
