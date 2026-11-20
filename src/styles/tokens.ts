/**
 * Single Source of Truth for Figma Design System Tokens
 * Extracted from Figma file mCVVO2zZsbcTtD25Ez64qz:
 * - Design Foundation (node 80:5443)
 * - Design Components (node 80:5478)
 * - Home | Empty (node 93:8278)
 */

export const designTokens = {
  colors: {
    /** Primary surface & text token (#FFFFFF) */
    primary: '#FFFFFF',
    /** Secondary dark surface & primary text (#171717) */
    secondary: '#171717',
    /** Light/secondary muted text & border (#4D4D4D) */
    secondaryLight: '#4D4D4D',
    /** Modal/popup header & body dark surface (#141414) */
    secondarySurface: '#141414',
    /** Brand accent (#F3562B) */
    accent: '#F3562B',
    /** Light/accent (#F89D84) */
    accentLight: '#F89D84',
    /** Accent hover state (rgba(243, 86, 43, 0.8)) */
    accentHover: 'rgba(243, 86, 43, 0.8)',
    /** Progress delta badge background (#F46740) */
    accentBadge: '#F46740',
    /** Design foundation canvas gray (#D6D6D6) */
    canvas: '#D6D6D6',
    priority: {
      high: {
        text: '#FCB9E5',
        bg: '#3F0E2B',
        border: '#FCB9E5',
      },
      medium: {
        text: '#F3B507',
        bg: '#342707',
        border: '#F3B507',
      },
      low: {
        text: '#2DD4C1',
        bg: '#0D302A',
        border: '#2DD4C1',
      },
    },
  },
  typography: {
    fontFamily: ['"Plus Jakarta Sans"', 'sans-serif'],
    styles: {
      focus: {
        fontSize: '48px',
        lineHeight: 'normal',
        letterSpacing: '0px',
        fontWeight: '400',
      },
      title: {
        fontSize: '20px',
        lineHeight: 'normal',
        letterSpacing: '0px',
        fontWeight: '700',
      },
      bodytitle: {
        fontSize: '16px',
        lineHeight: 'normal',
        letterSpacing: '0px',
        fontWeight: '600',
      },
      text1: {
        fontSize: '16px',
        lineHeight: 'normal',
        letterSpacing: '0px',
        fontWeight: '500',
      },
      caption: {
        fontSize: '14px',
        lineHeight: 'normal',
        letterSpacing: '0px',
        fontWeight: '500',
      },
      input: {
        fontSize: '14px',
        lineHeight: 'normal',
        letterSpacing: '0px',
        fontWeight: '500',
      },
      button: {
        fontSize: '16px',
        lineHeight: 'normal',
        letterSpacing: '0px',
        fontWeight: '600',
      },
      label: {
        fontSize: '12px',
        lineHeight: 'normal',
        letterSpacing: '0px',
        fontWeight: '600',
      },
      label2: {
        fontSize: '10px',
        lineHeight: 'normal',
        letterSpacing: '0px',
        fontWeight: '500',
      },
    },
  },
  spacing: {
    '0.5': '2px',
    '1': '4px',
    '1.5': '6px',
    '2': '8px',
    '2.5': '10px',
    '3': '12px',
    '3.5': '14px',
    '4': '16px',
    '4.5': '18px',
    '5': '20px',
    '6': '24px',
    '7.5': '30px',
    '8': '32px',
    '8.75': '35px',
    '11': '44px',
    '12.5': '50px',
    '26': '104px',
    '48.75': '195px',
    '87.5': '350px',
    '97.5': '390px',
    '167.25': '669px',
    '196.25': '785px',
  },
  radii: {
    none: '0px',
    xs: '2px',
    sm: '8px',
    lg: '20px',
    full: '9999px',
  },
  borderWidths: {
    DEFAULT: '1px',
    '0.5': '0.5px',
    '1.5': '1.5px',
    '3': '3px',
  },
  shadows: {
    'task-divider': '0px 0.5px 0px 0px #F89D84',
    'task-scheduled': '0px 0.5px 1px 1px rgba(253, 221, 213, 0.25)',
  },
} as const;

export type DesignTokens = typeof designTokens;
