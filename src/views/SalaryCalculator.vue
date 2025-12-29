<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useSalaryStore } from '@/stores/salary'
import {
  CalculatorHeader,
  TaxNotice,
  IncomeInputForm,
  InsuranceCard,
  DeductionsCard,
  TaxCalculationCard,
  SalarySummary,
  ComparisonCard,
  ReferenceInfo,
  CalculatorFooter
} from '@/components/calculator'

const store = useSalaryStore()

// Page-specific SEO
useHead({
  title: 'Tính Lương NET 2026 - Công cụ tính lương online miễn phí',
  meta: [
    {
      name: 'description',
      content: computed(() => 
        store.isNewTaxBrackets 
          ? 'Tính lương NET từ GROSS với biểu thuế mới 5 bậc từ 01/07/2026. Giảm trừ gia cảnh 15.5 triệu/tháng, người phụ thuộc 6.2 triệu/người.'
          : 'Tính lương NET từ GROSS theo mức giảm trừ gia cảnh 2026. Giảm trừ bản thân 15.5 triệu, người phụ thuộc 6.2 triệu/người/tháng.'
      )
    }
  ]
})
</script>

<template>
  <div class="calculator-container">
    <CalculatorHeader />

    <main class="main-content">
      <TaxNotice />
      <IncomeInputForm />
      <InsuranceCard />
      <DeductionsCard />
      <TaxCalculationCard />
      <SalarySummary />
      <ComparisonCard />
      <ReferenceInfo />
    </main>

    <CalculatorFooter />
  </div>
</template>

<style scoped>
.calculator-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 1rem;
  max-width: 600px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (max-width: 480px) {
  .main-content {
    padding: 0.75rem;
  }
}
</style>
