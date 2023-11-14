<template>
  <div class="wrap" id="team">
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
            {{ $store.state.translations["main.ndc"] }}
          </p>
          <h4 class="title">
            {{ $store.state.translations["main.wow"] }}
          </h4>
        </div>
        <div class="right">
          <div class="items">
            <div class="item">
              <p class="num">5+</p>
              <p class="sub">{{ $store.state.translations["main.years"] }}</p>
            </div>
            <div class="item">
              <p class="num">24+</p>
              <p class="sub">{{ $store.state.translations["main.members"] }}</p>
            </div>
            <div class="item">
              <p class="num">150+</p>
              <p class="sub">
                {{ $store.state.translations["main.projects"] }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p class="sup">{{ $store.state.translations["main.team"] }}</p>
        <div class="humans">
          <div v-for="item in team" :key="item.id" class="person">
            <img :src="item.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["team"],
};
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
  margin-bottom: 20px;
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
  max-height: 98px;
}
.person img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  transition: 0.5s;
}
.person {
  border: 4px solid white;
  border-radius: 50%;
  overflow: hidden;
  margin-left: -12px;
}
.person:hover img {
  width: 146px;
  height: 146px;
}
.container {
  padding: 0 16px;
}
@media screen and (max-width: 1200px) {
  .top {
    flex-direction: column;
    align-items: flex-start;
  }
  .left,
  .right {
    width: 100%;
  }
  .wrap {
    padding: 40px 0;
    border-radius: 24px;
  }
  .sup {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 38.4px */
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .num {
    color: #9735ff;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  .sub {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .items {
    justify-content: flex-start;
    gap: 20px;
  }
  .humans {
    display: flex;
    flex-wrap: wrap;
    max-height: max-content;
    margin-left: 8px;
  }
  .person:hover img {
    width: 60px;
    height: 60px;
  }
  .person img {
    width: 60px;
    height: 60px;
  }
  .person:nth-child(13),
  .person:nth-child(14) {
    display: none;
  }
}
</style>
