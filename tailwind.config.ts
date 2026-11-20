import type { Config } from 'tailwindcss';
import { designTokens } from './src/styles/tokens';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: designTokens.colors.primary,
        secondary: {
          DEFAULT: designTokens.colors.secondary,
          light: designTokens.colors.secondaryLight,
          surface: designTokens.colors.secondarySurface,
        },
        accent: {
          DEFAULT: designTokens.colors.accent,
          light: designTokens.colors.accentLight,
          hover: designTokens.colors.accentHover,
          badge: designTokens.colors.accentBadge,
        },
        canvas: designTokens.colors.canvas,
        priority: {
          high: {
            text: designTokens.colors.priority.high.text,
            bg: designTokens.colors.priority.high.bg,
            border: designTokens.colors.priority.high.border,
          },
          medium: {
            text: designTokens.colors.priority.medium.text,
            bg: designTokens.colors.priority.medium.bg,
            border: designTokens.colors.priority.medium.border,
          },
          low: {
            text: designTokens.colors.priority.low.text,
            bg: designTokens.colors.priority.low.bg,
            border: designTokens.colors.priority.low.border,
          },
        },
      },
      fontFamily: {
        sans: [...designTokens.typography.fontFamily],
      },
      fontSize: {
        focus: [
          designTokens.typography.styles.focus.fontSize,
          {
            lineHeight: designTokens.typography.styles.focus.lineHeight,
            letterSpacing: designTokens.typography.styles.focus.letterSpacing,
            fontWeight: designTokens.typography.styles.focus.fontWeight,
          },
        ],
        title: [
          designTokens.typography.styles.title.fontSize,
          {
            lineHeight: designTokens.typography.styles.title.lineHeight,
            letterSpacing: designTokens.typography.styles.title.letterSpacing,
            fontWeight: designTokens.typography.styles.title.fontWeight,
          },
        ],
        bodytitle: [
          designTokens.typography.styles.bodytitle.fontSize,
          {
            lineHeight: designTokens.typography.styles.bodytitle.lineHeight,
            letterSpacing: designTokens.typography.styles.bodytitle.letterSpacing,
            fontWeight: designTokens.typography.styles.bodytitle.fontWeight,
          },
        ],
        text1: [
          designTokens.typography.styles.text1.fontSize,
          {
            lineHeight: designTokens.typography.styles.text1.lineHeight,
            letterSpacing: designTokens.typography.styles.text1.letterSpacing,
            fontWeight: designTokens.typography.styles.text1.fontWeight,
          },
        ],
        caption: [
          designTokens.typography.styles.caption.fontSize,
          {
            lineHeight: designTokens.typography.styles.caption.lineHeight,
            letterSpacing: designTokens.typography.styles.caption.letterSpacing,
            fontWeight: designTokens.typography.styles.caption.fontWeight,
          },
        ],
        input: [
          designTokens.typography.styles.input.fontSize,
          {
            lineHeight: designTokens.typography.styles.input.lineHeight,
            letterSpacing: designTokens.typography.styles.input.letterSpacing,
            fontWeight: designTokens.typography.styles.input.fontWeight,
          },
        ],
        button: [
          designTokens.typography.styles.button.fontSize,
          {
            lineHeight: designTokens.typography.styles.button.lineHeight,
            letterSpacing: designTokens.typography.styles.button.letterSpacing,
            fontWeight: designTokens.typography.styles.button.fontWeight,
          },
        ],
        label: [
          designTokens.typography.styles.label.fontSize,
          {
            lineHeight: designTokens.typography.styles.label.lineHeight,
            letterSpacing: designTokens.typography.styles.label.letterSpacing,
            fontWeight: designTokens.typography.styles.label.fontWeight,
          },
        ],
        label2: [
          designTokens.typography.styles.label2.fontSize,
          {
            lineHeight: designTokens.typography.styles.label2.lineHeight,
            letterSpacing: designTokens.typography.styles.label2.letterSpacing,
            fontWeight: designTokens.typography.styles.label2.fontWeight,
          },
        ],
      },
      spacing: designTokens.spacing,
      borderRadius: designTokens.radii,
      boxShadow: designTokens.shadows,
      borderWidth: designTokens.borderWidths,
    },
  },
  plugins: [],
};

export default config;
