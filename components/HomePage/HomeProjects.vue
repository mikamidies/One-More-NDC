<template>
  <div class="wrap" id="projects">
    <div class="container">
      <div class="header">
        <div class="left">
          <div>
            <h4 class="title">
              {{ $store.state.translations["main.our_works"] }}
            </h4>
            <div class="tags">
              <p>{{ $store.state.translations["main.development"] }}</p>
              <p>{{ $store.state.translations["main.seo"] }}</p>
              <p>{{ $store.state.translations["main.branding"] }}</p>
            </div>
          </div>
          <div class="brando">
            <img src="@/assets/img/logo/brand-color.png" alt="" class="brand" />
          </div>
        </div>
        <div class="right">
          <h4>{{ $store.state.translations["main.free_concept"] }}</h4>
          <p>{{ $store.state.translations["main.give_birth"] }}</p>
        </div>
      </div>
      <div class="items">
        <div v-for="item in projects" :key="item.id" class="item">
          <div class="img">
            <img :src="item.image" alt="" class="pic" />
          </div>
          <div class="top">
            <h2 class="name">{{ item.title }}</h2>
            <a :href="item.url" target="_blank" class="link">
              {{ `${item.url}`.replace("https://", "") }}
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
          <p class="sub">{{ item.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projects"],
};
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
  transition: 0.4s;
}
.img {
  overflow: hidden;
  margin-bottom: 16px;
}
.img:hover .pic {
  transform: scale(1.1);
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
@media screen and (max-width: 1024px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }
  .title {
    font-size: 40px;
    font-style: normal;
    line-height: 120%;
    max-width: 70%;
    font-family: var(--decor-bd);
  }
  .tags {
    display: none;
  }
  .left {
    gap: 0;
    justify-content: space-between;
    width: 100%;
  }
  .right {
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
    gap: 36px;
  }
  .header {
    margin-bottom: 48px;
    padding: 0 16px;
  }
  .container {
    padding: 0;
  }
  .pic {
    height: 264px;
    border-radius: 16px;
  }
  .top,
  .sub {
    padding: 0 20px;
  }
  .name {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
  .link {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    gap: 8px;
  }
  .sub {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
