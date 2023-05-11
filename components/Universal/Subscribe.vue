<template>
  <h4 class="page-titles">Subscribe for Updates</h4>
  
<form class="md:w-1/3 mx-auto">
    <div class="flex">
        <label for="location-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
     
        <div class="relative w-full">
            <input type="search" id="location-search" 
            class="block p-5 w-full z-20 text-sm text-gray-900 bg-transarent rounded-[50px]
              focus:ring-blue-500 focus:border-blue-500 
               dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
             placeholder="Enter your email" required>
            <button type="submit"
             class="absolute top-0 right-[-4px] p-5 text-sm 
             font-medium   
              rounded-r-[50px]
              text-red-100
                 bg-gradient-to-r from-[#2EEBFC] via-[#5979DF] to-[#7C1DC9]
                 hover:bg-gradient-to-r hover:from[#7C1DC9] hover:via-[#5979DF] hover:to-[#2EEBFC] ">
                SUBSCRIBE
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>

<div class="flex items-center justify-center mt-[2rem] gap-5 links">
    <a 
    href="mailto: tiwidev01@gmail.com"
    class="flex gap-2 items-center">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256"><path fill="currentColor" d="M224 52H32a4 4 0 0 0-4 4v136a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a4 4 0 0 0-4-4Zm-10.28 8L128 138.57L42.28 60ZM216 196H40a4 4 0 0 1-4-4V65.09L125.3 147a4 4 0 0 0 5.4 0L220 65.09V192a4 4 0 0 1-4 4Z"/></svg></span>
        <h6 class="text-md md:text-lg">Email</h6>
    </a>
    <a 
    href="https://t.me/tiwi_ecosystem"
    class="flex gap-2 items-center">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" stroke-linejoin="round" d="m14.5 1.5l-14 5l4 2l6-4l-4 5l6 4l2-12Z"/></svg></span>
        <h6  class="text-md md:text-lg">Telegram</h6>
    </a>
    <a 
    href="https://medium.com/@tiwidev01"
    class="flex gap-3 items-center">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M8 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0 2A6 6 0 1 0 8 6a6 6 0 0 0 0 12Zm9.5-6c0-.866-.092-1.798-.456-2.597a.048.048 0 0 0-.088 0c-.363.8-.456 1.731-.456 2.597c0 .866.092 1.798.456 2.597c.018.038.07.038.088 0c.363-.8.456-1.731.456-2.597Zm-.5 5c1.5 0 2.5-2.239 2.5-5s-1-5-2.5-5s-2.5 2.239-2.5 5s1 5 2.5 5Zm4-.5c.552 0 1-1.739 1-4.5s-.448-4.5-1-4.5s-1 1.739-1 4.5s.448 4.5 1 4.5Z"/></g></svg></span>
        <h6 class="text-md md:text-lg">Medium</h6>
    </a>
   
</div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

h6{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}

.links {
    a {
        &:hover{
            opacity: 0.8;
        }
    }
}

</style>