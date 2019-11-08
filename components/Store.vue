<template>
  <a :href="store.url" :class="`bg-${store.accent_color} rounded-lg p-4 text-${store.text_color} flex flex-row items-center justify-between hover:shadow-lg transition`">
    <div class="flex flex-row items-center justify-start">
      <img :src="store.logo" :alt="`${store.name} Logo`" class="w-8 h-auto">
      <div class="mx-4">
        <div class="font-xl font-bold">
          {{ store.name }}
        </div>
        <div class="text-sm">
          {{ store.description }}
        </div>
      </div>
    </div>
    <i class="feather icon-chevron-right"></i>
  </a>
</template>

<script>
export default {
  props: {
    store: Object,
  }
}
</script>
