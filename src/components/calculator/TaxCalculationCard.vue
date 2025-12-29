<script setup lang="ts">
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { useSalaryStore } from '@/stores/salary'
import { useFormatters } from '@/composables/useFormatters'

const store = useSalaryStore()
const { formatVND } = useFormatters()
</script>

<template>
  <Card class="result-card">
    <template #title>
      <div class="card-title">
        <i class="pi pi-percentage"></i>
        Tính thuế TNCN
        <span v-if="store.isNewTaxBrackets" class="title-badge">5 bậc mới</span>
        <span v-else class="title-badge old">7 bậc</span>
      </div>
    </template>
    <template #content>
      <div class="result-row">
        <span class="label">Thu nhập trước thuế</span>
        <span class="value">{{ formatVND(store.incomeBeforeTax) }}</span>
      </div>
      <div class="result-row">
        <span class="label">Thu nhập chịu thuế</span>
        <span class="value highlight">{{ formatVND(store.taxableIncome) }}</span>
      </div>

      <Divider />

      <div class="tax-table" v-if="store.taxDetails.length > 0">
        <h4>
          Chi tiết thuế theo bậc
          <span v-if="store.isNewTaxBrackets" class="bracket-info">(Biểu thuế mới)</span>
        </h4>
        <DataTable :value="store.taxDetails" size="small" stripedRows>
          <Column field="bracket" header="Bậc thuế"></Column>
          <Column field="rate" header="Thuế suất"></Column>
          <Column header="Thu nhập">
            <template #body="{ data }">
              {{ formatVND(data.taxableAmount) }}
            </template>
          </Column>
          <Column header="Thuế">
            <template #body="{ data }">
              {{ formatVND(data.tax) }}
            </template>
          </Column>
        </DataTable>
      </div>

      <div class="no-tax" v-else>
        <i class="pi pi-check-circle"></i>
        <span>Không phát sinh thuế TNCN</span>
      </div>

      <Divider />
      <div class="result-row total">
        <span class="label">Tổng thuế TNCN</span>
        <span class="value negative">-{{ formatVND(store.taxAmount) }}</span>
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

.title-badge {
  font-size: 0.625rem;
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  background: #dcfce7;
  color: #166534;
  font-weight: 600;
  text-transform: uppercase;
}

.title-badge.old {
  background: #f3f4f6;
  color: #6b7280;
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

.result-row .value.highlight {
  color: #2563eb;
}

.result-row.total {
  font-size: 1rem;
}

.result-row.total .label {
  font-weight: 600;
  color: #1f2937;
}

.tax-table h4 {
  margin: 0 0 0.75rem;
  font-size: 0.875rem;
  color: #4b5563;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.bracket-info {
  font-size: 0.75rem;
  color: #059669;
  font-weight: 500;
}

.no-tax {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #ecfdf5;
  border-radius: 8px;
  color: #059669;
  font-weight: 500;
}

@media (max-width: 480px) {
  :deep(.p-datatable) {
    font-size: 0.75rem;
  }

  :deep(.p-datatable .p-datatable-thead > tr > th),
  :deep(.p-datatable .p-datatable-tbody > tr > td) {
    padding: 0.5rem 0.25rem;
  }
}
</style>

