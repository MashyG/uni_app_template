<template>
  <view class="flex flex-col items-center justify-center">
    <image class="h-24 w-24 mt-24 mx-auto mb-6" src="/static/logo.png" />
    <view class="flex justify-center">
      <text class="text-lg text-gray-600">{{ title }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
</script>
