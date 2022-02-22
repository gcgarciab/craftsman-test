function formatNumber(value: number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
  });

  return formatter.format(value);
}

export default formatNumber;
