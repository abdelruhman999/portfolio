/**
 * Utility functions for handling RTL/LTR direction in the application
 */

export const getDirection = (locale: string): 'rtl' | 'ltr' => {
  return locale === 'ar' ? 'rtl' : 'ltr';
};

export const getTextAlign = (locale: string): string => {
  return locale === 'ar' ? 'text-right' : 'text-left';
};

export const getMarginStart = (locale: string, size: string): string => {
  return locale === 'ar' ? `ml-${size}` : `mr-${size}`;
};

export const getMarginEnd = (locale: string, size: string): string => {
  return locale === 'ar' ? `mr-${size}` : `ml-${size}`;
};

export const getPaddingStart = (locale: string, size: string): string => {
  return locale === 'ar' ? `pl-${size}` : `pr-${size}`;
};

export const getPaddingEnd = (locale: string, size: string): string => {
  return locale === 'ar' ? `pr-${size}` : `pl-${size}`;
};

export const getBorderStart = (locale: string, size: string): string => {
  return locale === 'ar' ? `border-l-${size}` : `border-r-${size}`;
};

export const getBorderEnd = (locale: string, size: string): string => {
  return locale === 'ar' ? `border-r-${size}` : `border-l-${size}`;
};

export const getFloatStart = (locale: string): string => {
  return locale === 'ar' ? 'float-left' : 'float-right';
};

export const getFloatEnd = (locale: string): string => {
  return locale === 'ar' ? 'float-right' : 'float-left';
};