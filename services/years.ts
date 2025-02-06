export const yearsCounter = Array.from({ length: 11 }, (_, i) =>
  (new Date().getFullYear() - i).toString()
).reverse();
