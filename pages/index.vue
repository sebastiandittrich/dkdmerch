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
    <div class="sticky top-0 inset-y-0 p-6 z-0 blurry">
      <div class="container mx-auto">
        <img src="/img/dkd-black.svg" alt="DKD Schriftzug" class="h-8 w-auto">
      </div>
    </div>
    <div class="p-8">
      <div class="container mx-auto">
        <div v-for="design of inventory.designs" :key="design.name">
          <h2 class="font-bold text-3xl">{{ design.title }}</h2>
          <div class="flex flex-col items-stretch justify-start md:flex-row md:flex-wrap md:justify-center">
            <div v-for="item of inventory.items.filter(item => item.design == design.name)" :key="item.title" class="bg-white rounded-lg shadow-lg overflow-hidden border mt-8 md:ml-8 flex flex-col items-stretch justify-start">
              <img class="self-center h-64 p-4" :src="item.image" :alt="item.title">
              <div class="p-8 pt-6 border-t">
                <div class="flex flex-row items-center justify-start">
                  <div v-if="item.new" class="flex flex-row items-center justify-start bg-green-200 text-xs uppercase tracking-wide text-green-900 font-bold px-2 rounded mr-2">
                    New
                  </div>
                  <div class="flex flex-row items-center justify-start bg-gray-200 text-xs uppercase tracking-wide text-grey-700 font-bold px-2 rounded">
                    {{ item.type }}
                  </div>
                </div>
                <h3 class="font-bold mt-4 text-xl">{{design.title}}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-gray-100 p-16 mt-32">
    <div class="container mx-auto text-center">
      <div>
        Built by <a href="https://owner.todoninja.de" class="link">Sebastian Dittrich</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    inventory() {
      return this.$store.state.inventory
    },
  },
  methods: {
    scrollToClothes() {
      $('scroll')
    },
  }
}
</script>

