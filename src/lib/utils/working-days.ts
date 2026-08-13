// ============================================
// WORKING DAYS CONFIGURATION
// ============================================

// Sunday = 0, Monday = 1, ..., Saturday = 6
export const WORKING_DAYS = [0, 1, 2, 3, 4]; // Sunday to Thursday

// ============================================
// WORKING DAYS UTILITIES
// ============================================

/**
 * Check if a given date is a working day
 * @param date - The date to check
 * @returns true if the date is a working day (Sun-Thu)
 */
export function isWorkingDay(date: Date): boolean {
  return WORKING_DAYS.includes(date.getDay());
}

/**
 * Calculate the number of working days between two dates
 * @param startDate - Start date (inclusive)
 * @param endDate - End date (inclusive)
 * @returns Number of working days
 */
export function calculateWorkingDays(startDate: Date, endDate: Date): number {
  let count = 0;
  const current = new Date(startDate);
  current.setHours(0, 0, 0, 0);
  
  const end = new Date(endDate);
  end.setHours(0, 0, 0, 0);
  
  while (current <= end) {
    if (isWorkingDay(current)) {
      count++;
    }
    current.setDate(current.getDate() + 1);
  }
  
  return count;
}

/**
 * Check if a lead can be returned to marketing based on 5 working days rule
 * @param assignedAt - Date when lead was assigned to sales
 * @returns true if less than 5 working days have passed
 */
export function canReturnToMarketing(assignedAt: Date): boolean {
  const now = new Date();
  const workingDays = calculateWorkingDays(assignedAt, now);
  return workingDays < 5;
}

/**
 * Get remaining working days before return is disabled
 * @param assignedAt - Date when lead was assigned to sales
 * @returns Number of working days remaining (0 if already expired)
 */
export function getWorkingDaysRemaining(assignedAt: Date): number {
  const now = new Date();
  const elapsed = calculateWorkingDays(assignedAt, now);
  return Math.max(0, 5 - elapsed);
}

/**
 * Get working days elapsed since assignment
 * @param assignedAt - Date when lead was assigned to sales
 * @returns Number of working days elapsed
 */
export function getWorkingDaysElapsed(assignedAt: Date): number {
  const now = new Date();
  return calculateWorkingDays(assignedAt, now);
}

/**
 * Format a user-friendly message about working days remaining
 * @param assignedAt - Date when lead was assigned to sales
 * @returns Formatted message
 */
export function formatWorkingDaysMessage(assignedAt: Date): string {
  const remaining = getWorkingDaysRemaining(assignedAt);
  if (remaining === 0) {
    return 'Cannot return (5 working days passed)';
  }
  return `${remaining} working day${remaining > 1 ? 's' : ''} remaining to return`;
}

/**
 * Get the date when the 5-day return period expires
 * @param assignedAt - Date when lead was assigned to sales
 * @returns Date when return period expires
 */
export function getReturnExpiryDate(assignedAt: Date): Date {
  const current = new Date(assignedAt);
  let workingDaysAdded = 0;
  
  while (workingDaysAdded < 5) {
    current.setDate(current.getDate() + 1);
    if (isWorkingDay(current)) {
      workingDaysAdded++;
    }
  }
  
  return current;
}
