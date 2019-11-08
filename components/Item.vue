<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden border flex flex-col items-stretch justify-start">
    <div class="p-4 flex flex-row justify-center" :style="item.store == 'teespring' ? 'background: #f6f6f8' : ''">
      <img class="h-64 w-auto" :src="item.image" :alt="item.title">
    </div>

    <div class="p-8 py-6 border-t">
      <div class="flex flex-row items-center justify-start">
        <div v-if="isNew" class="flex flex-row items-center justify-start bg-green-200 text-xs uppercase tracking-wide text-green-900 font-bold px-2 rounded mr-2">
          New
        </div>
        <div class="flex flex-row items-center justify-start bg-gray-200 text-xs uppercase tracking-wide text-grey-700 font-bold px-2 rounded">
          {{ item.type }}
        </div>
      </div>
      <h3 class="font-bold mt-4 text-xl">{{design.name}}</h3>
    </div>
    <div class="flex flex-col items-stretch justify-start text-sm">
      <a v-if="item.store == 'amazon'" :href="item.link" class="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 font-bold text-gray-800 text-center tracking-wide" target="_blank" ref="noopener">
        Buy on Amazon
        <i class="feather icon-chevron-right"></i>
      </a>
      <a v-else-if="item.store == 'teespring'" :href="item.link" class="bg-pink-800 hover:bg-pink-900 px-4 py-2 font-bold text-gray-200 text-center tracking-wide" target="_blank" ref="noopener">
        Buy on Teespring
        <i class="feather icon-chevron-right"></i>
      </a>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  props: {
    item: Object,
  },
  computed: {
    design() {
      return this.$store.state.designs.list.filter(design => design.id == this.item.design)[0]
    },
    isNew() {
      return moment().diff(this.item.since, 'days') < 7
    }
  }
}
</script>
