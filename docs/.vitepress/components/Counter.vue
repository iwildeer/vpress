<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="counter">
    <button class="counter-btn" @click="count++">点我涨功德</button>
    <span class="counter-count">当前赛博功德：<b>{{ count }}</b></span>
  </div>
</template>

<style scoped>
.counter {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0;
}

.counter-btn {
  padding: 4px 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: var(--vp-c-brand-3);
  color: var(--vp-c-white);
  cursor: pointer;
  font-size: 14px;
}

.counter-btn:hover {
  background-color: var(--vp-c-brand-2);
}

.counter-count b {
  color: var(--vp-c-brand-1);
}
</style>
