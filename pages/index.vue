<template>
<div>
  <div class="bg-black h-screen text-white flex flex-col items-center justify-center relative shadow-xl z-10">

    <img src="/img/dkd-white.svg" alt="DKD Schriftzug" class="h-12 w-auto">
    <div v-scroll-to="'.sticky'" class="px-8 py-4 border-white border-4 mt-16 font-bold text-white hover:text-black hover:bg-white rounded-lg cursor-pointer select-none transition">
      Browse Clothing
    </div>

    <i class="feather icon-chevron-down absolute bottom-0 mb-8 text-5xl mt-32"></i>
  </div>

  <div>
    <div class="sticky top-0 inset-y-0 p-6">
      <div class="container mx-auto">
        <img src="/img/dkd-black.svg" alt="DKD Schriftzug" class="h-8 w-auto">
      </div>
    </div>
    <div class="p-8">
      <div class="container mx-auto">

        <h2 class="font-bold text-3xl text-center">All Designs</h2>

        <div class="flex flex-col items-stretch justify-start md:flex-row md:flex-wrap md:justify-center md:items-center">
          <Item v-for="item of $store.state.items.list" :key="item.title" :item="item" class="mt-8 md:mx-4" />
        </div>

        <div class="text-center">
          <h2 class="font-bold text-3xl mt-16">Interested in more?</h2>
          <div class="text-sm font-bold text-gray-500">Take a look at our stores!</div>
        </div>

        <div class="flex flex-col items-stretch md:items-center justify-start">
          <div class="flex flex-col items-stretch justify-start">
            <Store v-for="store of $store.state.stores.list" :key="store.id" :store="store" class="mt-8" />
          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="bg-gray-100 p-16 mt-32">
    <div class="container mx-auto text-center">
      <div>
        Built by <a href="https://dittrich.dev" class="link">Sebastian Dittrich</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Item from '@/components/Item'
import Store from '@/components/Store'

export default {
  components: {
    Item,
    Store,
  },
  methods: {
    scrollToClothes() {
      $('scroll')
    },
  }
}
</script>
