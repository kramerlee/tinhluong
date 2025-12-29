<script setup lang="ts">
import Card from 'primevue/card'
import { useSalaryStore } from '@/stores/salary'
import { useFormatters } from '@/composables/useFormatters'

const store = useSalaryStore()
const { formatVND } = useFormatters()
</script>

<template>
  <Card class="summary-card">
    <template #content>
      <div class="summary-grid">
        <div class="summary-item">
          <span class="summary-label">Lương GROSS</span>
          <span class="summary-value gross">{{ formatVND(store.grossSalary) }}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Bảo hiểm</span>
          <span class="summary-value deduction">-{{ formatVND(store.totalInsurance) }}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Thuế TNCN</span>
          <span class="summary-value deduction">-{{ formatVND(store.taxAmount) }}</span>
        </div>
        <div class="summary-item main">
          <span class="summary-label">Lương NET</span>
          <span class="summary-value net">{{ formatVND(store.netSalary) }}</span>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.summary-card {
  background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%);
  color: white;
}

.summary-card :deep(.p-card-body) {
  padding: 1rem;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.summary-item {
  text-align: center;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.summary-item.main {
  grid-column: span 2;
  background: rgba(255, 255, 255, 0.2);
}

.summary-label {
  display: block;
  font-size: 0.75rem;
  opacity: 0.9;
  margin-bottom: 0.25rem;
}

.summary-value {
  font-size: 1rem;
  font-weight: 700;
}

.summary-value.gross {
  color: #a5d6ff;
}

.summary-value.deduction {
  color: #fca5a5;
}

.summary-value.net {
  font-size: 1.5rem;
  color: #86efac;
}

@media (max-width: 480px) {
  .summary-value.net {
    font-size: 1.25rem;
  }
}
</style>

