import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cN = (...classNames) => twMerge(clsx(classNames));
