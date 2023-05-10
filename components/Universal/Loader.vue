<template>
    <div class="page-loader page-load" id="page-loader">

        <div class="flex items-center justify-end me-4 gap-3 pt-5">
            <h3>LOADING ...</h3>
            <!-- <h3>{{ loading }}</h3> -->
        </div>

        <div class="image">
            <img src="/assets/tiwi-logo.svg" alt="" class="header-logo">
            <p>A decentralized ecosystem of real-world utilities and cryptographic application.</p>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
export default {

    data() {
        return {
            loading: 1
        }
    },
    mounted() {

     
    
    }
}
</script>

<style scoped lang="scss">
@import "~/assets/scss/global.scss";

.page-loader {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: black;
    z-index: 999999999;
    overflow: hidden;

    .image {
        height: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;

        p {
            text-align: center;
            font-family: $poppins;
            // font-size: 4rem
        }
    }
}
</style>