const FORMATTED_CURRENCY = new Intl.NumberFormat(undefined, {
  currency: 'PHP',
  style: 'currency',
});

export function formatCurrency(number: number) {
  return FORMATTED_CURRENCY.format(number);
}
