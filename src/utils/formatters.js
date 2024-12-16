export const formatValue = (value) => {
  if (value === "NaN" || value === undefined || value === null) return 'n/a';
  if (typeof value === 'number') {
    // For phone numbers, just take the digits before decimal point
    return String(value).split('.')[0].replace(/^44/, '');
  }
  return value;
};