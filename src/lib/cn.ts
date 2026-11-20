import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'focus',
            'title',
            'bodytitle',
            'text1',
            'caption',
            'input',
            'button',
            'label',
            'label2',
          ],
        },
      ],
      'border-w': [
        {
          border: ['0.5', '1.5', '3'],
          'border-b': ['0.5', '1.5', '3'],
        },
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return customTwMerge(clsx(inputs));
}
