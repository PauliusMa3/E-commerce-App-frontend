export default function(amount) {
  const options = {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  };
  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = new Intl.NumberFormat("de-De", options);
  return formatter.format(amount / 100);
}
