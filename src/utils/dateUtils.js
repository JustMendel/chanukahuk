export const formatTime = (timeStr) => {
  if (!timeStr) return '';
  try {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes} ${period}`;
  } catch {
    return timeStr;
  }
};

export const parseEventDate = (dateStr) => {
  try {
    const [, day, month] = dateStr.split(' ');
    const year = month === 'Dec' ? '2024' : '2025';
    const monthNum = month === 'Dec' ? '12' : '01';
    const paddedDay = day.padStart(2, '0');
    return new Date(`${year}-${monthNum}-${paddedDay}`);
  } catch {
    return null;
  }
};

export const formatEventDate = (dateStr) => {
  try {
    const [, day, month] = dateStr.split(' ');
    const year = month === 'Dec' ? '2024' : '2025';
    const paddedDay = day.padStart(2, '0');
    const monthNum = month === 'Dec' ? '12' : '01';
    return `${year}-${monthNum}-${paddedDay}`;
  } catch {
    return null;
  }
};