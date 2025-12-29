<script setup lang="ts">
import { computed } from 'vue'
import Card from 'primevue/card'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import { useSalaryStore } from '@/stores/salary'
import { useFormatters } from '@/composables/useFormatters'

const store = useSalaryStore()
const { formatVND } = useFormatters()

const grossSalaryModel = computed({
  get: (): number => store.grossSalary,
  set: (val: number | null) => store.setGrossSalary(val)
})

const dependentsModel = computed({
  get: (): number => store.dependents,
  set: (val: number | null) => store.setDependents(val)
})

const otherDeductionsModel = computed({
  get: (): number => store.otherDeductions,
  set: (val: number | null) => store.setOtherDeductions(val)
})

const showComparisonModel = computed({
  get: (): boolean => store.showComparison,
  set: (val: boolean) => store.setShowComparison(val)
})
</script>

<template>
  <Card class="input-card">
    <template #title>
      <div class="card-title">
        <i class="pi pi-pencil"></i>
        Thông tin thu nhập
      </div>
    </template>
    <template #content>
      <div class="form-group">
        <label for="gross">Lương GROSS (VNĐ)</label>
        <InputNumber
          id="gross"
          v-model="grossSalaryModel"
          :min="0"
          :max="1000000000"
          locale="vi-VN"
          placeholder="Nhập lương gross"
          class="w-full"
          inputClass="w-full"
        />
      </div>

      <div class="form-group">
        <label for="dependents">Số người phụ thuộc</label>
        <InputNumber
          id="dependents"
          v-model="dependentsModel"
          :min="0"
          :max="20"
          showButtons
          buttonLayout="horizontal"
          :step="1"
          class="w-full"
          inputClass="w-full text-center"
          decrementButtonClass="p-button-secondary"
          incrementButtonClass="p-button-secondary"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
        />
        <small class="hint">Giảm trừ: {{ formatVND(store.DEPENDENT_DEDUCTION) }}/người</small>
      </div>

      <div class="form-group">
        <label for="other">Giảm trừ khác (VNĐ)</label>
        <InputNumber
          id="other"
          v-model="otherDeductionsModel"
          :min="0"
          locale="vi-VN"
          placeholder="Đóng góp từ thiện, v.v."
          class="w-full"
          inputClass="w-full"
        />
      </div>

      <div class="form-group checkbox-group">
        <Checkbox
          v-model="showComparisonModel"
          inputId="comparison"
          :binary="true"
        />
        <label for="comparison" class="checkbox-label">
          <i class="pi pi-chart-bar"></i>
          So sánh với trước 2026
        </label>
      </div>

      <Button
        label="Đặt lại"
        icon="pi pi-refresh"
        severity="secondary"
        outlined
        class="reset-btn"
        @click="store.reset()"
      />
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

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
}

.form-group .hint {
  display: block;
  margin-top: 0.25rem;
  color: #6b7280;
  font-size: 0.75rem;
}

.checkbox-group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f0f9ff;
  border-radius: 8px;
  border: 1px solid #bae6fd;
}

.checkbox-label {
  display: flex !important;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin-bottom: 0 !important;
  color: #0369a1 !important;
  font-weight: 500 !important;
}

.w-full {
  width: 100%;
}

.text-center {
  text-align: center;
}

.reset-btn {
  width: 100%;
  margin-top: 0.5rem;
}

@media (max-width: 480px) {
  .checkbox-group {
    padding: 0.625rem;
  }

  .checkbox-label {
    font-size: 0.875rem;
  }
}
</style>

