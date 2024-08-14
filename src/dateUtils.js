// dateUtils.js

/**
 * Formats a date string into 'd MMMM yyyy' format.
 * Supports 'YYYY-MM-DD' and 'MM/DD/YYYY' input formats.
 *
 * @param {string} dateString - The date string to format.
 * @returns {string} - The formatted date string.
 */
export function formatDate(dateString) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    let date;
    
    // Try to parse the date
    try {
      date = new Date(dateString); // Handles 'YYYY-MM-DD' and 'MM/DD/YYYY'
    } catch {
      throw new Error('Invalid date');
    }
  
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date');
    }
  
    // Extract day, month, and year
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
  
    // Format the date as '7 May 2024'
    return `${day} ${month} ${year}`;
  }
  