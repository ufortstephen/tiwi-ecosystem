<template>
    <section class="my-10  md:flex items-center justify-between preview">
        <div class="mb-10 md:mb-0 text-center  md:text-left">
            <h3>Website is Under </h3>
            <div class="flex items-center justify-center md:justify-start construction">
                <h3
                    class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    Construction</h3>

            </div>
            <div class="my-5">
                <p class="text-[#CCC3DE] text-lg mb-5 md:mb-0">We will be live in</p>
                <vue-countdown :time="time" v-slot="{ days, hours, minutes, seconds }">
                    <div class="flex items-center gap-5 justify-center md:justify-start">
                        <div>
                            <p class="text-center period">{{ days }} </p>
                            <p class="text-center text-[#CCC3DE] text-sm">Days</p>
                        </div>
                        <div>
                            <p class="text-center period">{{ hours }} </p>
                            <p class="text-center text-[#CCC3DE] text-sm">Hours</p>
                        </div>
                        <div>
                            <p class="text-center period">{{ minutes }} </p>
                            <p class="text-center text-[#CCC3DE] text-sm">minutes</p>
                        </div>
                        <div>
                            <p class="text-center period">{{ seconds }} </p>
                            <p class="text-center text-[#CCC3DE] text-sm">seconds</p>
                        </div>

                    </div>
                </vue-countdown>
            </div>


            <div class="flex items-center flex-wrap justify-center md:justify-start gap-3 mt-10">
                <button @click="visitTelegram" class=" px-6 py-2 text-red-100 h-[3rem] 
                rounded-3xl bg-gradient-to-r from-[#2EEBFC] via-[#5979DF] to-[#7C1DC9]
                 hover:bg-gradient-to-r hover:from[#7C1DC9] hover:via-[#5979DF]
                  hover:to-[#2EEBFC]">Join
                    Our Community</button>
                <div  
                class="p-1  bg-gradient-to-r from-rose-500 to-purple-500 rounded-3xl     hover:bg-gradient-to-r hover:from[#7C1DC9] hover:via-[#5979DF]
                  hover:to-[#2EEBFC]">
                    <button @click="viewWhitePaper" class="px-6 py-2 text-white bg-[#000A1C] rounded-3xl">View Whitepaper</button>
                </div>
            </div>
            <!-- <div class="flex items-center justify-start md:justify-start mt-3 gap-3">
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
            </div> -->
        </div>
        <div class="construction-img-holder">
            <img src="/assets/construction.svg" alt="" class="construction-img">
        </div>
    </section>

    <div>
        <h4 class="page-titles">Stay Updated!</h4>
    </div>
    <swiper :modules="modules" :autoplay="{ delay: 5000, disableOnInteraction: false }" navigation
        :pagination="{ clickable: true }" :slides-per-view="sliderPerView" :space-between="50" @swiper="onSwiper"
        @slideChange="onSlideChange">
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
            window.location = 'https://t.me/tiwi_ecosystem'
        }
        const viewWhitePaper = () => {
            window.location = 'https://drive.google.com/file/d/1BvR9lK8tuCDG8ij6LktWJnqOI2JqzQ3w/view?usp=sharing'
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
            viewWhitePaper,
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
        // font-family: $editorial;
        // font-family: $montserrat;
        font-size: 3rem;
        font-weight: 700;
        line-height: 47px;
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
        width: 65%;
        // margin: 0px auto;
        margin-left: auto;
    }

    .period {
        color: #CCC3DE;
        font-size: 1.8rem;
        font-weight: 800;
        // font-family: $montserrat !important;
    }
}

@media(max-width: 586px) {
    .preview {
        // padding: 0;
        // height: calc(90vh - 68px);
        display: flex;

        h3 {
            // font-family: $montserrat;
            font-size: 2rem;
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
        font-size: 1rem !important;
        font-weight: 800;
    }
}
</style>

<style lang=scss>
.swiper-wrapper {
    min-height: 450px;
}

@media(max-width:768px) {
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

.swiper-button-next {
    opacity: 0;
}

.swiper-button-prev {
    opacity: 0;
}

.swiper-button-next.swiper-button-disabled,
.swiper-button-prev.swiper-button-disabled {
    opacity: 0;
}
</style>