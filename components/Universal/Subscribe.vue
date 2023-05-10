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

</template>

<script>
export default {

}
</script>

<style>

</style>