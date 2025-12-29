import { useSalaryStore } from '@/stores/salary'

export function useFormatters() {
  const store = useSalaryStore()

  /**
   * Format number as Vietnamese Dong currency
   */
  function formatVND(value: number): string {
    return store.formatCurrency(value) + ' ₫'
  }

  /**
   * Format difference value with + or - prefix
   */
  function formatDiff(value: number): string {
    const prefix = value > 0 ? '+' : ''
    return prefix + store.formatCurrency(value) + ' ₫'
  }

  return {
    formatVND,
    formatDiff
  }
}

