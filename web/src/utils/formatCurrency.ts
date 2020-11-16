export default function formatCurrency(number: number | undefined): string {
  if (!number) {
    return "R$ 0,00";
  }

  return Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(number);
}
