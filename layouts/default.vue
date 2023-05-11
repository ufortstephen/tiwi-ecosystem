<template>
    <Loader v-if="!showPage" />
    <!-- <div class="bg"></div> -->
    <div class="p-5 page md:w-4/5 mx-auto">
        <Header />

        <router-view />
        <Subscribe />

    </div>
    <Footer />
</template>

<script>
import Header from "~/components/Universal/Header";
import Subscribe from "~/components/Universal/Subscribe";
import Footer from "~/components/Universal/Footer";
import Loader from "~/components/Universal/Loader";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export default {
    name: 'DefaultLayout',
    components: { Header, Footer, Subscribe, Loader },
    data() {
        return {
            showPage: false
        }
    },



    mounted() {
        setTimeout(() => {
            var tl = gsap.timeline()
            tl.to('.page-loader', { x: 100, opacity: 0, display: 'none', duration: 1, ease: 'slow', delay: 2 })


            tl.to('.page', { height: '100%', duration: 1, ease: 'back.out(1.7)', opacity: 1 })
            tl.to(this, { showPage: true, duration: 1, ease: 'slow', }, '+=0.5')

        }, 2000)
    }

}
</script>

<style scoped>
.page {
    height: 1%; 
    opacity: 0 
}
</style>