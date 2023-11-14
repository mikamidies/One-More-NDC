<template>
  <div class="wrap" id="offers">
    <div class="container">
      <h4 class="title">
        {{ $store.state.translations["services.we_offer"] }}
      </h4>
      <div class="big">
        <div class="left">
          <p class="tag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M5.89724 4.26817V0H7.09461V4.26817L9.22871 0.570176L10.2632 1.17293L8.12908 4.87093L11.8271 2.73684L12.4217 3.7713L8.73184 5.90539H13V7.10276H8.73184L12.4217 9.23685L11.8271 10.2713L8.12908 8.13722L10.2632 11.8352L9.22871 12.4298L7.09461 8.73183V13H5.89724V8.73183"
                fill="#A05BFF"
              />
              <path
                d="M7.09461 4.26817V0H5.89724V4.26817L3.76316 0.57832L2.7287 1.17293L4.86279 4.87093L1.16479 2.73684L0.570179 3.7713L4.26817 5.90539H0V7.10276H4.26817L0.570179 9.23685L1.16479 10.2713L4.86279 8.13722L2.7287 11.8352L3.76316 12.4298L5.89724 8.73183V13H7.09461V8.73183"
                fill="#A05BFF"
              />
            </svg>
            {{ $store.state.translations["services.for_businnes"] }}
          </p>
          <h4 class="name">
            {{ $store.state.translations["services.businnes_site-dev"] }}
          </h4>
          <p class="sub">
            {{ $store.state.translations["services.businnes_site-sub"] }}
          </p>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path d="M2 8.5404L7.27304 14.5L16 4.5" stroke="white" />
              </svg>
              {{ $store.state.translations["services.exclusive_design"] }}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path d="M2 8.5404L7.27304 14.5L16 4.5" stroke="white" />
              </svg>
              {{ $store.state.translations["services.mobile_responsive"] }}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path d="M2 8.5404L7.27304 14.5L16 4.5" stroke="white" />
              </svg>
              {{ $store.state.translations["services.tech_task"] }}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path d="M2 8.5404L7.27304 14.5L16 4.5" stroke="white" />
              </svg>
              {{ $store.state.translations["services.fill_content"] }}
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M9.00076 15.9989V5.99988M3.99976 10.9994H14.0003M9.00001 6.00063H12.4125C13.083 6.00063 13.6808 5.57913 13.9065 4.94763C14.2755 3.91488 13.5098 2.82812 12.4125 2.82812C11.0453 2.82812 9.82576 3.68762 9.36601 4.97537L9.00001 6.00063ZM9.00001 6.00063H5.58751C4.91701 6.00063 4.31926 5.57913 4.09351 4.94763C3.72526 3.91413 4.49101 2.82812 5.58751 2.82812C6.95476 2.82812 8.17426 3.68762 8.63401 4.97537L9.00001 6.00063ZM11.7503 15.9996H6.24976C5.00701 15.9996 3.99976 14.9924 3.99976 13.7496V8.24988C3.99976 7.00713 5.00701 5.99988 6.24976 5.99988H11.7495C12.9923 5.99988 13.9995 7.00713 13.9995 8.24988V13.7496C14.0003 14.9924 12.993 15.9996 11.7503 15.9996Z"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {{ $store.state.translations["services.domain_hosting"] }}
            </li>
          </ul>
          <button @click="modalHandle = !modalHandle" class="all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M2.00024 6.00073V2.00098M2.00024 2.00098H5.99999M2.00024 2.00098L6.99974 7.00048M2.00024 11.9992V15.999M2.00024 15.999H5.99999M2.00024 15.999L6.99974 10.9995M15.9997 6.00073V2.00098M15.9997 2.00098H12M15.9997 2.00098L11.0002 7.00048M15.9997 11.9992V15.999M15.9997 15.999H12M15.9997 15.999L11.0002 10.9995"
                stroke="white"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ $store.state.translations["services.see_all"] }}
          </button>
          <div class="buttons">
            <div @click="appHandle = !appHandle" class="button">
              <span>
                <img src="@/assets/gif/square.gif" alt="" />
              </span>
              <button type="button" class="application">
                <p>{{ $store.state.translations["services.what_price"] }}</p>
              </button>
            </div>
            <button @click="modalHandle = !modalHandle" class="include">
              {{ $store.state.translations["services.dev_includes"] }}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M2.00024 6.00073V2.00098M2.00024 2.00098H5.99999M2.00024 2.00098L6.99974 7.00048M2.00024 11.9992V15.999M2.00024 15.999H5.99999M2.00024 15.999L6.99974 10.9995M15.9997 6.00073V2.00098M15.9997 2.00098H12M15.9997 2.00098L11.0002 7.00048M15.9997 11.9992V15.999M15.9997 15.999H12M15.9997 15.999L11.0002 10.9995"
                  stroke="white"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="right">
          <img src="@/assets/img/project-1.jpg" alt="" class="project" />
        </div>
      </div>
      <div class="items">
        <div class="item">
          <p class="tag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M5.89724 4.26817V0H7.09461V4.26817L9.22871 0.570176L10.2632 1.17293L8.12908 4.87093L11.8271 2.73684L12.4217 3.7713L8.73184 5.90539H13V7.10276H8.73184L12.4217 9.23685L11.8271 10.2713L8.12908 8.13722L10.2632 11.8352L9.22871 12.4298L7.09461 8.73183V13H5.89724V8.73183"
                fill="#A05BFF"
              />
              <path
                d="M7.09461 4.26817V0H5.89724V4.26817L3.76316 0.57832L2.7287 1.17293L4.86279 4.87093L1.16479 2.73684L0.570179 3.7713L4.26817 5.90539H0V7.10276H4.26817L0.570179 9.23685L1.16479 10.2713L4.86279 8.13722L2.7287 11.8352L3.76316 12.4298L5.89724 8.73183V13H7.09461V8.73183"
                fill="#A05BFF"
              />
            </svg>
            {{ $store.state.translations["services.development_of"] }}
          </p>
          <h4 class="name">
            {{ $store.state.translations["services.e-shop"] }}
          </h4>
          <p class="sub">
            {{ $store.state.translations["services.e-shop_sub"] }}
          </p>

          <button @click="appHandle = !appHandle" class="order">
            {{ $store.state.translations["services.order_project"] }}
          </button>
        </div>
        <div class="item">
          <p class="tag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M5.89724 4.26817V0H7.09461V4.26817L9.22871 0.570176L10.2632 1.17293L8.12908 4.87093L11.8271 2.73684L12.4217 3.7713L8.73184 5.90539H13V7.10276H8.73184L12.4217 9.23685L11.8271 10.2713L8.12908 8.13722L10.2632 11.8352L9.22871 12.4298L7.09461 8.73183V13H5.89724V8.73183"
                fill="#A05BFF"
              />
              <path
                d="M7.09461 4.26817V0H5.89724V4.26817L3.76316 0.57832L2.7287 1.17293L4.86279 4.87093L1.16479 2.73684L0.570179 3.7713L4.26817 5.90539H0V7.10276H4.26817L0.570179 9.23685L1.16479 10.2713L4.86279 8.13722L2.7287 11.8352L3.76316 12.4298L5.89724 8.73183V13H7.09461V8.73183"
                fill="#A05BFF"
              />
            </svg>
            {{ $store.state.translations["services.development_of"] }}
          </p>
          <h4 class="name">
            {{ $store.state.translations["services.businnes_automata"] }}
          </h4>
          <p class="sub">
            {{ $store.state.translations["services.businnes_automata-sub"] }}
          </p>
          <button @click="appHandle = !appHandle" class="order">
            {{ $store.state.translations["services.order_project"] }}
          </button>
        </div>
        <div class="item">
          <p class="tag">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <path
                d="M5.89724 4.26817V0H7.09461V4.26817L9.22871 0.570176L10.2632 1.17293L8.12908 4.87093L11.8271 2.73684L12.4217 3.7713L8.73184 5.90539H13V7.10276H8.73184L12.4217 9.23685L11.8271 10.2713L8.12908 8.13722L10.2632 11.8352L9.22871 12.4298L7.09461 8.73183V13H5.89724V8.73183"
                fill="#A05BFF"
              />
              <path
                d="M7.09461 4.26817V0H5.89724V4.26817L3.76316 0.57832L2.7287 1.17293L4.86279 4.87093L1.16479 2.73684L0.570179 3.7713L4.26817 5.90539H0V7.10276H4.26817L0.570179 9.23685L1.16479 10.2713L4.86279 8.13722L2.7287 11.8352L3.76316 12.4298L5.89724 8.73183V13H7.09461V8.73183"
                fill="#A05BFF"
              />
            </svg>
            {{ $store.state.translations["services.development_of"] }}
          </p>
          <h4 class="name">
            {{ $store.state.translations["services.mobile-app"] }}
          </h4>
          <p class="sub">
            {{ $store.state.translations["services.mobile-app_sub"] }}
          </p>
          <button @click="appHandle = !appHandle" class="order">
            {{ $store.state.translations["services.order_project"] }}
          </button>
        </div>
      </div>
    </div>

    <div :class="{ open: modalHandle }" class="modaller">
      <div @click="modalHandle = false" class="space"></div>
      <div class="body">
        <div class="x" @click="modalHandle = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4.44482 4.43066L11.5555 11.54M4.44482 11.54L11.5555 4.43066"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="top">
          <div class="left">
            <h4 class="title">
              {{ $store.state.translations["services.businnes_site-dev"] }}
            </h4>
            <p class="sub">
              {{ $store.state.translations["services.modal_sub"] }}
            </p>
            <div @click="appHandle = !appHandle" class="button">
              <span>
                <img src="@/assets/gif/square.gif" alt="" />
              </span>
              <button type="button" class="application">
                <p>{{ $store.state.translations["services.what_price"] }}</p>
              </button>
            </div>
          </div>
          <div class="right">
            <img src="@/assets/img/project-1.jpg" alt="" class="pic" />
          </div>
        </div>
        <div class="mid">
          <h4 class="par">
            {{ $store.state.translations["services.service_include"] }}
          </h4>
          <div class="includes">
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>
                {{ $store.state.translations["services.exclusive_design"] }}
              </p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{{ $store.state.translations["services.optimization"] }}</p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{{ $store.state.translations["services.online_chat"] }}</p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>
                {{ $store.state.translations["services.yandex_google"] }}
              </p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{{ $store.state.translations["services.ssl_cert"] }}</p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{{ $store.state.translations["services.guide_staff"] }}</p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{{ $store.state.translations["services.multi_lang"] }}</p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{{ $store.state.translations["services.telegram_bot"] }}</p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{{ $store.state.translations["services.google_business"] }}</p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>
                {{ $store.state.translations["services.domain_name"] }}
              </p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{{ $store.state.translations["services.admin_panel"] }}</p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{{ $store.state.translations["services.corpo_mail"] }}</p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{{ $store.state.translations["services.google_anal"] }}</p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>
                {{ $store.state.translations["services.seo_optimization"] }}
              </p>
            </div>
            <div class="inc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 12L10.5347 14.2812C10.9662 14.6696 11.6366 14.6101 11.993 14.1519L16 9M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#A05BFF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{{ $store.state.translations["services.hosting_year"] }}</p>
            </div>
          </div>
        </div>
        <div class="bottom">
          <h4 class="par">
            {{ $store.state.translations["services.why_need"] }}
          </h4>
          <div class="cards">
            <div class="cardo">
              <h4>{{ $store.state.translations["services.cardo_title-1"] }}</h4>
              <p>
                {{ $store.state.translations["services.cardo_txt-1"] }}
              </p>
            </div>
            <div class="cardo">
              <h4>{{ $store.state.translations["services.cardo_title-2"] }}</h4>
              <p>
                {{ $store.state.translations["services.cardo_txt-2"] }}
              </p>
            </div>
            <div class="cardo">
              <h4>{{ $store.state.translations["services.cardo_title-3"] }}</h4>
              <p>
                {{ $store.state.translations["services.cardo_txt-3"] }}
              </p>
            </div>
            <div class="cardo">
              <h4>{{ $store.state.translations["services.cardo_title-4"] }}</h4>
              <p>
                {{ $store.state.translations["services.cardo_txt-4"] }}
              </p>
            </div>
            <div class="cardo">
              <h4>{{ $store.state.translations["services.cardo_title-5"] }}</h4>
              <p>
                {{ $store.state.translations["services.cardo_txt-5"] }}
              </p>
            </div>
            <div class="cardo">
              <h4>{{ $store.state.translations["services.cardo_title-6"] }}</h4>
              <p>
                {{ $store.state.translations["services.cardo_txt-6"] }}
              </p>
            </div>
          </div>
          <div class="red">
            <h4>{{ $store.state.translations["services.red-title"] }}</h4>
            <button @click="appHandle = !appHandle">
              {{ $store.state.translations["services.order_call"] }}
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
        </div>
      </div>
    </div>

    <ApplicationModal
      class="modaller"
      :class="{ open: appHandle }"
      @closeModal="closeModal"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalHandle: false,
      appHandle: false,
    };
  },

  methods: {
    closeModal() {
      this.appHandle = false;
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
    appHandle(val) {
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
.wrap {
  padding: 80px 0;
}
.title {
  color: var(--White, #fff);
  font-family: var(--decor-bd);
  margin-bottom: 16px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.button {
  position: relative;
  border-radius: 9px;
  background: #a050e2;
  box-shadow: 0px 8px 69px 0px rgba(161, 80, 227, 0.58);
  max-width: 250px;
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
.big {
  border-radius: 30px;
  background: #1b1b1b;
  box-shadow: 0px 4px 21.8px 0px #000;
  padding: 40px 72px 40px 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.tag {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #adadad;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 16px;
}
.tag svg {
  animation: spin 7s infinite linear;
}
.name {
  margin-bottom: 8px;
  color: var(--White, #fff);
  font-family: var(--decor-bd);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
.sub {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 24px;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 18px;
}
li {
  color: #bbb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  display: flex;
  align-items: center;
  gap: 8px;
}
.all {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
}
.buttons {
  display: flex;
  align-items: center;
  gap: 16px;
}
.include {
  border-radius: 16px;
  border: 1px solid var(--Grey, #525252);
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
  padding: 16px 24px;
}
.project {
  width: 100%;
  height: 350px;
  border-radius: 10px;
  object-fit: cover;
  max-width: 556px;
}
.right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  align-items: center;
  margin-top: 24px;
}
.item {
  border-radius: 30px;
  background: #1b1b1b;
  padding: 32px 20px;
}
.item .name {
  color: var(--White, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
}
.item .sub {
  color: #adadad;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
}
.order {
  border-radius: 9px;
  background: #000;
  padding: 12px 24px;
  color: var(--White, #fff);
  font-family: var(--decor-bd);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
}
.modaller {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  padding: 80px 0;
  overflow: auto;
  display: flex;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 1000;
  transition: 0.4s;
}
.space {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}
.modaller.open {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
  /* z-index: 1000; */
}
.body {
  border-radius: 24px;
  border: 1px solid var(--Grey, #525252);
  background: #1b1b1b;
  box-shadow: 0px 40px 51.5px 0px rgba(0, 0, 0, 0.25);
  padding: 80px;
  max-width: 80%;
  height: max-content;
  position: relative;
}
.pic {
  width: 100%;
  height: 415px;
  border-radius: 16px;
  object-fit: cover;
}
.modaller .title {
  color: var(--White, #fff);
  font-family: var(--decor-bd);
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 48px */
  margin-bottom: 8px;
  max-width: 400px;
}
.modaller .sub {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  margin-bottom: 40px;
  max-width: 450px;
}
.modaller .top {
  display: grid;
  grid-template-columns: 4fr 6fr;
  align-items: center;
  padding-bottom: 64px;
  border-bottom: 1px solid var(--Grey, #525252);
}
.includes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
.par {
  color: var(--White, #fff);
  text-align: center;
  font-family: var(--decor-bd);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  margin-bottom: 24px;
}
.mid {
  padding: 40px 0;
}
.inc {
  display: grid;
  grid-template-columns: 1fr 9fr;
  align-items: center;
  gap: 0px;
}
.inc p {
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.cardo {
  border-radius: 30px;
  background: var(--Black, #0f0f0f);
  padding: 24px;
}
.cardo h4 {
  color: var(--White, #fff);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
}
.cardo p {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.red {
  border-radius: 30px;
  background: #d84471;
  padding: 36px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.red h4 {
  color: var(--White, #fff);
  font-family: var(--decor-bd);
  max-width: 453px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.red button {
  border-radius: 16px;
  border: 1px solid var(--White, #fff);
  padding: 16px 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
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
@media screen and (max-width: 1200px) {
  .container {
    padding: 0;
  }
  .big {
    padding: 16px;
    display: flex;
    flex-direction: column-reverse;
    gap: 24px;
    border-radius: 24px;
  }
  .project {
    height: 220px;
  }
  .title {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    padding-left: 16px;
    margin-bottom: 16px;
  }
  .tag {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 16px;
  }
  .name {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 8px;
  }
  .sub {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .buttons {
    flex-direction: column;
    align-items: flex-start;
  }
  .button {
    width: 100%;
    max-width: 100%;
  }
  .button img,
  .button span {
    width: 400px;
  }
  .include {
    width: 100%;
    justify-content: center;
  }
  .items {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 8px;
    gap: 8px;
  }
  .item {
    padding: 24px 16px;
    border-radius: 24px;
  }
  .item .tag {
    margin-bottom: 8px;
  }
  .item .name {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .item .sub {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 16px;
  }
  .order {
    width: 100%;
  }
  .modaller {
    padding: 0;
  }
  .body {
    max-width: 100%;
    border: 0;
    padding: 120px 16px 56px 16px;
    border-radius: 0;
    transform: translateY(100%);
    transition: 0.4s;
  }
  .modaller.open .body {
    transform: translateY(0);
  }
  .modaller .top {
    display: flex !important;
    flex-direction: column-reverse;
    align-items: flex-start;
    padding-bottom: 0px;
    border-bottom: 0;
  }
  .x {
    top: 48px;
    left: 50%;
    right: auto;
    transform: translateX(-50%) scale(1.5);
  }
  .pic {
    height: 220px;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 16px;
  }
  .right {
    justify-content: flex-start;
    width: 100%;
  }
  .modaller .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    padding: 0;
    margin-bottom: 8px;
  }
  .modaller .sub {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 32px;
  }
  .includes {
    grid-template-columns: repeat(1, 1fr);
    gap: 12px;
  }
  .par {
    margin-bottom: 16px;
    text-align: left;
  }
  .cards {
    grid-template-columns: repeat(1, 1fr);
    gap: 2px;
    margin: 0 -16px;
  }

  .cardo {
    border-radius: 16px;
    background: #1b1b1b;
    padding: 16px;
    display: grid;
    grid-template-columns: 4fr 6fr;
    gap: 10px;
  }
  .cardo h4 {
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 130%;
  }
  .cardo p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .red {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    text-align: center;
    margin: 24px -16px 0 -16px;
    border-radius: 16px;
    padding: 24px 32px;
  }
  .red h4 {
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .red button {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    width: 100%;
    justify-content: center;
  }
}
</style>
