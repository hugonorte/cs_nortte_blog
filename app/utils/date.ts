/**
 * Formats a date string or Date object to the "dd/mm/YYYY" format.
 * 
 * @param date - The date to format (string or Date object)
 * @returns The formatted date string or an empty string if the date is invalid.
 */
export const formatDate = (date: string | Date | undefined | null): string => {
  if (!date) return '';

  try {
    const d = typeof date === 'string' ? new Date(date) : date;
    
    // Check if the date is valid
    if (isNaN(d.getTime())) {
        return '';
    }

    return d.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return '';
  }
};
