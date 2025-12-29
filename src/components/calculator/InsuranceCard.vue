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
        <i class="pi pi-shield"></i>
        Bảo hiểm bắt buộc
      </div>
    </template>
    <template #content>
      <div class="result-row">
        <span class="label">BHXH (8%)</span>
        <span class="value negative">-{{ formatVND(store.socialInsurance) }}</span>
      </div>
      <div class="result-row">
        <span class="label">BHYT (1.5%)</span>
        <span class="value negative">-{{ formatVND(store.healthInsurance) }}</span>
      </div>
      <div class="result-row">
        <span class="label">BHTN (1%)</span>
        <span class="value negative">-{{ formatVND(store.unemploymentInsurance) }}</span>
      </div>
      <Divider />
      <div class="result-row total">
        <span class="label">Tổng bảo hiểm</span>
        <span class="value negative">-{{ formatVND(store.totalInsurance) }}</span>
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

.result-row .value.negative {
  color: #dc2626;
}

.result-row.total {
  font-size: 1rem;
}

.result-row.total .label {
  font-weight: 600;
  color: #1f2937;
}
</style>

