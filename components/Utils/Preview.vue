<template>
    <section class="my-10  md:flex items-center justify-between preview">
        <div class="mb-10 md:mb-0 text-center md:text-left">
            <h3>Website is Under </h3>
            <div class="flex items-center justify-center md:justify-start construction">
                <h3
                    class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    Construction</h3>
                <span class="icon">
                    <svg class="slow-flash" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                            stroke-width="32"
                            d="M436.67 184.11a27.17 27.17 0 0 1-38.3 0l-22.48-22.49a27.15 27.15 0 0 1 0-38.29l50.89-50.89a.85.85 0 0 0-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 0 1-7.67 27.14l-173 160.76a40.76 40.76 0 1 0 57.57 57.54l162.15-173.3a27 27 0 0 1 26.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94c27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 0 0-1.36-.22Z" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="32"
                            d="M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 0 1-3.33-21.35a20.76 20.76 0 0 1 3.5-4.62l15.68-15.29a18.66 18.66 0 0 1 5.63-3.87a18.11 18.11 0 0 1 20 3.62c5.45 5.29 15.43 15 33.41 32.52m49.18 46.58c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 0 1 .94 19.92L394.63 444a14 14 0 0 1-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="32"
                            d="m17.34 193.5l29.41-28.74a4.71 4.71 0 0 1 3.41-1.35a4.85 4.85 0 0 1 3.41 1.35h0a9.86 9.86 0 0 0 8.19 2.77c3.83-.42 7.92-1.6 10.57-4.12c6-5.8-.94-17.23 4.34-24.54a207 207 0 0 1 19.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 0 1 206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0 1 10.28 11.64a78.92 78.92 0 0 0-9.21-2.77a68.82 68.82 0 0 0-20-1.26c-13.33 1.09-29.41 7.26-38 14c-13.9 11-19.87 25.72-20.81 44.71c-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 0 1-.34 9.16l-18.22 18a6.88 6.88 0 0 1-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 0 0-18.27 3.87a11.39 11.39 0 0 0-2.64 2a14.14 14.14 0 0 0 .42 20.08l1.71 1.6a4.63 4.63 0 0 1 0 6.64L71.73 246.6a4.71 4.71 0 0 1-3.41 1.4a4.86 4.86 0 0 1-3.41-1.35l-47.57-46.43a4.88 4.88 0 0 1 0-6.72Z" />
                    </svg></span>
            </div>
            <div class="my-5">
                <p class="text-[#CCC3DE] text-xl">We will be live in</p>
                <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
                    <div class="flex items-center gap-5 justify-center md:justify-start">
                        <div>
                            <p class="text-center period">{{ days }} </p>
                            <p class="text-center">Days</p>
                        </div>
                        <div>
                            <p class="text-center period">{{ hours }} </p>
                            <p class="text-center">Hours</p>
                        </div>
                        <div>
                            <p class="text-center period">{{ minutes }} </p>
                            <p class="text-center">minutes</p>
                        </div>
                        <div>
                            <p class="text-center period">{{ seconds }} </p>
                            <p class="text-center">seconds</p>
                        </div>

                    </div>
                </vue-countdown>
            </div>


            <button @click="visitTelegram" class="mt-5 px-6 py-2 text-red-100 h-[3rem] 
                rounded-3xl bg-gradient-to-r from-[#2EEBFC] via-[#5979DF] to-[#7C1DC9]
                 hover:bg-gradient-to-r hover:from[#7C1DC9] hover:via-[#5979DF] hover:to-[#2EEBFC]">Join
                Our Community</button>
            <div class="flex items-center justify-center md:justify-start mt-3 gap-3">
                <a href="https://web.facebook.com/tiwiecosytem/ ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M17.99 1.596a27.982 27.982 0 0 0-3.037-.156C11.59 1.44 9.5 3.582 9.5 7.03v2.341H6.675a.5.5 0 0 0-.5.5v3.85a.5.5 0 0 0 .5.5H9.5v7.72a.5.5 0 0 0 .5.5h3.978a.5.5 0 0 0 .5-.5v-7.72h2.816a.5.5 0 0 0 .496-.435l.497-3.85a.5.5 0 0 0-.496-.565h-3.313V7.412c0-.97.195-1.375 1.408-1.375h2.039a.5.5 0 0 0 .5-.5V2.092a.5.5 0 0 0-.435-.496zm-.565 3.44l-1.54.001c-2.157 0-2.407 1.356-2.407 2.375v2.46a.5.5 0 0 0 .499.5h3.246l-.369 2.85h-2.876a.5.5 0 0 0-.5.5v7.718H10.5v-7.718a.5.5 0 0 0-.5-.5H7.176v-2.85H10a.5.5 0 0 0 .5-.5V7.03c0-2.874 1.665-4.59 4.453-4.59c1.009 0 1.92.055 2.472.103v2.493z" />
                    </svg>
                </a>
                <a href="https://twitter.com/tiwiecosystem">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M19.913 5.322a1.034 1.034 0 0 1 .837 1.629l-1.042 1.481c-.064 5.086-1.765 8.539-5.056 10.264A10.917 10.917 0 0 1 9.6 19.835a12.233 12.233 0 0 1-6.2-1.524a.76.76 0 0 1-.317-.8a.768.768 0 0 1 .63-.6a20.6 20.6 0 0 0 3.745-.886C2 13.5 3.19 7.824 3.71 6.081a1.028 1.028 0 0 1 1.729-.422a9.931 9.931 0 0 0 5.995 2.95A4.188 4.188 0 0 1 12.725 5.3a4.125 4.125 0 0 1 5.7.02ZM4.521 17.794c1.862.872 6.226 1.819 9.667.016c2.955-1.549 4.476-4.732 4.521-9.461a.771.771 0 0 1 .142-.436l1.081-1.538l-.041-.053c-.518-.007-1.029-.014-1.55 0a.835.835 0 0 1-.547-.221a3.13 3.13 0 0 0-4.383-.072a3.174 3.174 0 0 0-.935 2.87a.646.646 0 0 1-.154.545a.591.591 0 0 1-.516.205a10.924 10.924 0 0 1-7.084-3.295c-.67 2.078-1.52 7.094 3.869 9.065a.632.632 0 0 1 .416.538a.625.625 0 0 1-.3.6a13.178 13.178 0 0 1-4.186 1.237Zm7.354-9.144Zm7.793-.161Z" />
                    </svg>
                </a>
                <a href="https://medium.com/@tiwidev01">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                        <path fill="currentColor"
                            d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236c-1.246 0-2.256-1.897-2.256-4.236c0-2.34 1.01-4.236 2.256-4.236c1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795c-.438 0-.793-1.7-.793-3.795c0-2.096.355-3.795.794-3.795c.438 0 .793 1.699.793 3.795z" />
                    </svg>
                </a>
                <a href="https://www.youtube.com/@TIWI_TUBE">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024">
                        <path fill="currentColor"
                            d="M960 509.2c0-2.2 0-4.7-.1-7.6c-.1-8.1-.3-17.2-.5-26.9c-.8-27.9-2.2-55.7-4.4-81.9c-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2c-37.1-1.4-76.8-2.3-116.5-2.8c-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4c-39.7.5-79.4 1.4-116.5 2.8c-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9c-.3 9.7-.4 18.8-.5 26.9c0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6c.1 8.1.3 17.2.5 26.9c.8 27.9 2.2 55.7 4.4 81.9c3 36.1 7.4 66.2 13.4 88.8c12.8 47.9 50.4 85.7 98.3 98.5c28.2 7.6 83.7 12.3 161.7 15.2c37.1 1.4 76.8 2.3 116.5 2.8c13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4c39.7-.5 79.4-1.4 116.5-2.8c78-3 133.5-7.7 161.7-15.2c47.9-12.8 85.5-50.5 98.3-98.5c6.1-22.6 10.4-52.7 13.4-88.8c2.2-26.2 3.6-54 4.4-81.9c.3-9.7.4-18.8.5-26.9c0-2.9.1-5.4.1-7.6v-5.6zm-72 5.2c0 2.1 0 4.4-.1 7.1c-.1 7.8-.3 16.4-.5 25.7c-.7 26.6-2.1 53.2-4.2 77.9c-2.7 32.2-6.5 58.6-11.2 76.3c-6.2 23.1-24.4 41.4-47.4 47.5c-21 5.6-73.9 10.1-145.8 12.8c-36.4 1.4-75.6 2.3-114.7 2.8c-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8c-71.9-2.8-124.9-7.2-145.8-12.8c-23-6.2-41.2-24.4-47.4-47.5c-4.7-17.7-8.5-44.1-11.2-76.3c-2.1-24.7-3.4-51.3-4.2-77.9c-.3-9.3-.4-18-.5-25.7c0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1c.1-7.8.3-16.4.5-25.7c.7-26.6 2.1-53.2 4.2-77.9c2.7-32.2 6.5-58.6 11.2-76.3c6.2-23.1 24.4-41.4 47.4-47.5c21-5.6 73.9-10.1 145.8-12.8c36.4-1.4 75.6-2.3 114.7-2.8c13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8c71.9 2.8 124.9 7.2 145.8 12.8c23 6.2 41.2 24.4 47.4 47.5c4.7 17.7 8.5 44.1 11.2 76.3c2.1 24.7 3.4 51.3 4.2 77.9c.3 9.3.4 18 .5 25.7c0 2.7.1 5.1.1 7.1v4.8zM423 646l232-135l-232-133z" />
                    </svg>
                </a>
            </div>
        </div>
        <div class="construction-img-holder">
            <img src="/assets/construction.svg" alt="" class="construction-img">
        </div>
    </section>

    <div>
        <h4 class="page-titles">Stay Updated!</h4>
    </div>
    <swiper :modules="modules" :autoplay="{delay: 5000, disableOnInteraction: false}"
     navigation :pagination="{ clickable: true }" :slides-per-view="sliderPerView"
        :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
        <swiper-slide>
            <blockquote class="twitter-tweet" data-theme="dark">
                <p lang="en" dir="ltr">TIWI CAT|| <a
                        href="https://twitter.com/search?q=%24TWC&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$TWC</a> has
                    successfully migrate to a new smart contract.<br>0xDA1060158F7D593667cCE0a15DB346BB3FfB3596<br>Our
                    telegram community link is in the bio.</p>&mdash; TIWI Ecosystem || TIWI CAT $TWC (@tiwiecosystem) <a
                    href="https://twitter.com/tiwiecosystem/status/1656131794800869376?ref_src=twsrc%5Etfw">May 10, 2023</a>
            </blockquote>
        </swiper-slide>
        <swiper-slide>
            <blockquote class="twitter-tweet" data-theme="dark">
                <p lang="en" dir="ltr">TIWI CAT|| <a
                        href="https://twitter.com/search?q=%24TWC&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$TWC</a> has
                    successfully migrate to a new smart contract.<br>0xDA1060158F7D593667cCE0a15DB346BB3FfB3596<br>Our
                    telegram community link is in the bio.</p>&mdash; TIWI Ecosystem || TIWI CAT $TWC (@tiwiecosystem) <a
                    href="https://twitter.com/tiwiecosystem/status/1656131794800869376?ref_src=twsrc%5Etfw">May 10, 2023</a>
            </blockquote>
        </swiper-slide>
        <swiper-slide>
            <blockquote class="twitter-tweet" data-theme="dark">
                <p lang="en" dir="ltr">TIWI CAT|| <a
                        href="https://twitter.com/search?q=%24TWC&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$TWC</a> has
                    successfully migrate to a new smart contract.<br>0xDA1060158F7D593667cCE0a15DB346BB3FfB3596<br>Our
                    telegram community link is in the bio.</p>&mdash; TIWI Ecosystem || TIWI CAT $TWC (@tiwiecosystem) <a
                    href="https://twitter.com/tiwiecosystem/status/1656131794800869376?ref_src=twsrc%5Etfw">May 10, 2023</a>
            </blockquote>
        </swiper-slide>
        <swiper-slide>
            <blockquote class="twitter-tweet" data-theme="dark">
                <p lang="en" dir="ltr">TIWI CAT|| <a
                        href="https://twitter.com/search?q=%24TWC&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$TWC</a> has
                    successfully migrate to a new smart contract.<br>0xDA1060158F7D593667cCE0a15DB346BB3FfB3596<br>Our
                    telegram community link is in the bio.</p>&mdash; TIWI Ecosystem || TIWI CAT $TWC (@tiwiecosystem) <a
                    href="https://twitter.com/tiwiecosystem/status/1656131794800869376?ref_src=twsrc%5Etfw">May 10, 2023</a>
            </blockquote>
        </swiper-slide>

    </swiper>

</template>

<script>

import VueCountdown from '@chenfengyuan/vue-countdown';
const recaptchaScript = document.createElement('script')
recaptchaScript.setAttribute(
    'src',
    `https://platform.twitter.com/widgets.js`
)
document.head.appendChild(recaptchaScript)
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
export default {
    components: {
        VueCountdown,
        Swiper,
        SwiperSlide,
    },

    setup() {
        const launchDate = new Date('6/6/2023')
        const today = new Date()

        const visitTelegram = () => {
            window.location = 'https://t.me/tiwieco'
        }
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        
        return {
            time: launchDate - today,
            visitTelegram,
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, Autoplay],
        }
    },

    computed: {
        sliderPerView() {
            
            if (window.innerWidth < 568) {
                return 1
            }
            else if (window.innerWidth > 568 && window.innerWidth < 1200) {
                return 2
            }
            return 3
        }
    }

}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/global.scss";

.preview {
    padding: 2rem 0;

    h3 {
        font-family: $editorial;
        font-size: 4rem;
    }

    .construction {
        h3 {
            cursor: pointer;
        }

        .icon {
            display: none;
        }

        &:hover {
            >span {
                display: block;
            }
        }
    }

    .construction-img {
        width: 75%;
        margin: 0px auto;
    }

    .period {
        color: #CCC3DE;
        font-size: 2.5rem;
        font-weight: 800;
        font-family: $montserrat !important;
    }
}

@media(max-width: 586px) {
    .preview {
        // padding: 0;
        // height: calc(90vh - 68px);
        display: flex;

        h3 {
            font-family: $editorial;
            font-size: 3rem;
        }


    }

    .construction {


        span {
            display: inline-block !important;
        }
    }

    .construction-img-holder {
        display: none;
    }

    .period {
        font-size: 1.5rem !important;
        font-weight: 800;
    }
}
</style>

<style lang=scss>


.swiper-wrapper {
    min-height: 450px;
}
@media(max-width:768px){
    .swiper-wrapper {
    min-height: 370px;
}
}

.swiper-pagination-bullet {
    width: 25px;
    height: 25px;
    background: url(../../public/assets/tiwi-coin.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.swiper-pagination-bullet-active {
    border: 2px solid #03244D;
}

.swiper-button-next{
    opacity: 0;
}
.swiper-button-prev{
    opacity: 0;
}
.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled{
    opacity: 0;
}
</style>