export default function formatPrice(price: number): string {
  return new Intl.NumberFormat('bdt').format(price);
}
