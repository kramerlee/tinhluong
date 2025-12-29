<script setup lang="ts">
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import { useSalaryStore } from '@/stores/salary'
import { useFormatters } from '@/composables/useFormatters'

const store = useSalaryStore()
const { formatVND } = useFormatters()
</script>

<template>
  <Card class="result-card">
    <template #title>
      <div class="card-title">
        <i class="pi pi-minus-circle"></i>
        Giảm trừ gia cảnh
      </div>
    </template>
    <template #content>
      <div class="result-row">
        <span class="label">Bản thân</span>
        <span class="value">{{ formatVND(store.personalDeduction) }}</span>
      </div>
      <div class="result-row">
        <span class="label">Người phụ thuộc ({{ store.dependents }} người)</span>
        <span class="value">{{ formatVND(store.dependentsDeduction) }}</span>
      </div>
      <div class="result-row" v-if="store.otherDeductions > 0">
        <span class="label">Giảm trừ khác</span>
        <span class="value">{{ formatVND(store.otherDeductions) }}</span>
      </div>
      <Divider />
      <div class="result-row total">
        <span class="label">Tổng giảm trừ</span>
        <span class="value">{{ formatVND(store.totalDeductions) }}</span>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.card-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #1e3a5f;
}

.result-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
}

.result-row .label {
  color: #4b5563;
  font-size: 0.875rem;
}

.result-row .value {
  font-weight: 600;
  color: #1f2937;
}

.result-row.total {
  font-size: 1rem;
}

.result-row.total .label {
  font-weight: 600;
  color: #1f2937;
}
</style>

