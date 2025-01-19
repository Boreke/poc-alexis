<template>
  <div>
    <Switch
      v-model="enabled"
      :class="enabled ? 'bg-blue-900' : 'bg-blue-600'"
      class="relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-4' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

const enabled = ref(false)
</script>
