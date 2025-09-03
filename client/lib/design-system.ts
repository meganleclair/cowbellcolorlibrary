// Fusion Color Design System
// 3-Tier Token Structure: Primitives → Tokens → Variables

// TIER 1: PRIMITIVES - Raw hex values
export const colorPrimitives = {
  // Gray - Neutral colors for text, backgrounds, and borders
  'color/gray/25': '#EFF0F2',   // Ultra light gray
  'color/gray/50': '#E4E7EB',   // Very light gray
  'color/gray/100': '#D3D7DD',  // Light gray
  'color/gray/200': '#BDC3CD',  // Soft gray
  'color/gray/300': '#A6AEBC',  // Medium light gray
  'color/gray/400': '#909AAB',  // Medium gray
  'color/gray/500': '#7A869A',  // Balanced gray
  'color/gray/600': '#667080',  // Medium dark gray
  'color/gray/700': '#515967',  // Dark gray
  'color/gray/800': '#3D434D',  // Very dark gray
  'color/gray/900': '#292D33',  // Ultra dark gray
  'color/gray/1000': '#181B1F', // Near black gray

  // Blue - Primary brand colors and interactive elements
  'color/blue/25': '#EEF7FF',   // Ultra light blue
  'color/blue/50': '#DBECFB',   // Very light blue
  'color/blue/100': '#AACEEF',  // Light blue
  'color/blue/200': '#80B6E7',  // Soft blue
  'color/blue/300': '#559EDF',  // Medium light blue
  'color/blue/400': '#2A85D7',  // Medium blue
  'color/blue/500': '#006DCF',  // Primary blue
  'color/blue/600': '#005BAD',  // Medium dark blue
  'color/blue/700': '#00498A',  // Dark blue
  'color/blue/800': '#003768',  // Very dark blue
  'color/blue/900': '#002445',  // Ultra dark blue
  'color/blue/1000': '#001629', // Near black blue

  // Yellow - Warning states and attention elements
  'color/yellow/50': '#FDEDD2',  // Very light yellow
  'color/yellow/100': '#FCE1B4', // Light yellow
  'color/yellow/200': '#F8D38F', // Soft yellow
  'color/yellow/300': '#FAC469', // Medium light yellow
  'color/yellow/400': '#F8B544', // Medium yellow
  'color/yellow/500': '#F7A61E', // Primary yellow
  'color/yellow/600': '#CE8A19', // Medium dark yellow
  'color/yellow/700': '#A56F14', // Dark yellow
  'color/yellow/800': '#7C530F', // Very dark yellow
  'color/yellow/900': '#52370A', // Ultra dark yellow
  'color/yellow/1000': '#312106', // Near black yellow

  // Red - Error states and destructive actions
  'color/red/25': '#FDEAEB',    // Ultra light red
  'color/red/50': '#F1CFD2',    // Very light red
  'color/red/100': '#E7AFB4',   // Light red
  'color/red/200': '#DB888E',   // Soft red
  'color/red/300': '#CF6068',   // Medium light red
  'color/red/400': '#C33843',   // Medium red
  'color/red/500': '#B7101D',   // Primary red
  'color/red/600': '#990D18',   // Medium dark red
  'color/red/700': '#7A0B13',   // Dark red
  'color/red/800': '#5C080F',   // Very dark red
  'color/red/900': '#3D050A',   // Ultra dark red
  'color/red/1000': '#250306',  // Near black red

  // Green - Success states and positive actions
  'color/green/25': '#E5F8E4',  // Ultra light green
  'color/green/50': '#CDE6CC',  // Very light green
  'color/green/100': '#ABD5AA', // Light green
  'color/green/200': '#82C080', // Soft green
  'color/green/300': '#58AA55', // Medium light green
  'color/green/400': '#2E952A', // Medium green
  'color/green/500': '#048000', // Primary green
  'color/green/600': '#036B00', // Medium dark green
  'color/green/700': '#035500', // Dark green
  'color/green/800': '#024000', // Very dark green
  'color/green/900': '#012B00', // Ultra dark green
  'color/green/1000': '#011A00', // Near black green

  // Special colors
  'color/white': '#FFFFFF',     // Pure white
  'color/black': '#000000',     // Pure black
} as const;

// TIER 2: TOKENS - Semantic mappings to primitives
export const colorTokens = {
  // Primary brand colors
  'primary-25': 'color/blue/25',
  'primary-50': 'color/blue/50',
  'primary-100': 'color/blue/100',
  'primary-200': 'color/blue/200',
  'primary-300': 'color/blue/300',
  'primary-400': 'color/blue/400',
  'primary-500': 'color/blue/500',
  'primary-600': 'color/blue/600',
  'primary-700': 'color/blue/700',
  'primary-800': 'color/blue/800',
  'primary-900': 'color/blue/900',
  'primary-1000': 'color/blue/1000',

  // Neutral colors
  'neutral-25': 'color/gray/25',
  'neutral-50': 'color/gray/50',
  'neutral-100': 'color/gray/100',
  'neutral-200': 'color/gray/200',
  'neutral-300': 'color/gray/300',
  'neutral-400': 'color/gray/400',
  'neutral-500': 'color/gray/500',
  'neutral-600': 'color/gray/600',
  'neutral-700': 'color/gray/700',
  'neutral-800': 'color/gray/800',
  'neutral-900': 'color/gray/900',
  'neutral-1000': 'color/gray/1000',
  'neutral-black': 'color/black',
  'neutral-white': 'color/white',

  // Error colors
  'error-25': 'color/red/25',
  'error-50': 'color/red/50',
  'error-100': 'color/red/100',
  'error-200': 'color/red/200',
  'error-300': 'color/red/300',
  'error-400': 'color/red/400',
  'error-500': 'color/red/500',
  'error-600': 'color/red/600',
  'error-700': 'color/red/700',
  'error-800': 'color/red/800',
  'error-900': 'color/red/900',
  'error-1000': 'color/red/1000',

  // Warning colors
  'warning-50': 'color/yellow/50',
  'warning-100': 'color/yellow/100',
  'warning-200': 'color/yellow/200',
  'warning-300': 'color/yellow/300',
  'warning-400': 'color/yellow/400',
  'warning-500': 'color/yellow/500',
  'warning-600': 'color/yellow/600',
  'warning-700': 'color/yellow/700',
  'warning-800': 'color/yellow/800',
  'warning-900': 'color/yellow/900',
  'warning-1000': 'color/yellow/1000',

  // Success colors
  'success-25': 'color/green/25',
  'success-50': 'color/green/50',
  'success-100': 'color/green/100',
  'success-200': 'color/green/200',
  'success-300': 'color/green/300',
  'success-400': 'color/green/400',
  'success-500': 'color/green/500',
  'success-600': 'color/green/600',
  'success-700': 'color/green/700',
  'success-800': 'color/green/800',
  'success-900': 'color/green/900',
  'success-1000': 'color/green/1000',

  // Information colors
  'information-50': 'color/blue/50',
  'information-100': 'color/blue/100',
  'information-200': 'color/blue/200',
  'information-300': 'color/blue/300',
  'information-400': 'color/blue/400',
  'information-500': 'color/blue/500',
  'information-600': 'color/blue/600',
  'information-700': 'color/blue/700',
  'information-800': 'color/blue/800',
  'information-900': 'color/blue/900',
  'information-1000': 'color/blue/1000',
} as const;

// TIER 3: VARIABLES - Contextual usage mapped to tokens
export const colorVariables = {
  light: {
    // Surface colors
    'surface-page': 'neutral-25',
    'surface-primary': 'neutral-white',
    'surface-accent-primary-1': 'primary-25',
    'surface-accent-primary-2': 'primary-400',
    'surface-accent-primary-3': 'primary-600',
    'surface-accent-neutral-1': 'neutral-25',
    'surface-accent-neutral-2': 'neutral-400',
    'surface-accent-neutral-3': 'neutral-600',
    'surface-success': 'success-25',
    'surface-disabled': 'neutral-50',
    'surface-error': 'error-25',
    'surface-warning': 'warning-50',
    'surface-information': 'information-50',
    'surface-action': 'primary-500',
    'surface-action-hover-1': 'primary-600',
    'surface-action-hover-2': 'primary-25',
    'surface-disabled-selected': 'neutral-400',

    // Icon colors
    'icon-primary': 'neutral-500',
    'icon-information': 'information-500',
    'icon-success': 'success-500',
    'icon-warning': 'warning-500',
    'icon-error': 'error-500',
    'icon-disabled': 'neutral-400',
    'icon-action-hover': 'primary-600',
    'icon-on-action': 'neutral-white',
    'icon-action': 'primary-500',

    // Text colors
    'text-heading': 'neutral-900',
    'text-body': 'neutral-700',
    'text-action': 'primary-500',
    'text-action-hover': 'primary-600',
    'text-disabled': 'neutral-400',
    'text-information': 'information-500',
    'text-success': 'success-500',
    'text-warning': 'warning-500',
    'text-error': 'error-500',
    'text-on-action': 'neutral-white',
    'text-on-disabled': 'neutral-700',

    // Border colors
    'border-primary': 'neutral-200',
    'border-secondary': 'primary-500',
    'border-information': 'information-500',
    'border-success': 'success-500',
    'border-warning': 'warning-500',
    'border-error': 'error-500',
    'border-disabled': 'neutral-100',
    'border-action': 'primary-500',
    'border-focus': 'primary-600',
    'border-hover': 'primary-600',
  },
  dark: {
    // Surface colors
    'surface-page': 'neutral-1000',
    'surface-primary': 'neutral-900',
    'surface-accent-primary-1': 'primary-700',
    'surface-accent-primary-2': 'primary-600',
    'surface-accent-primary-3': 'primary-300',
    'surface-accent-neutral-1': 'neutral-700',
    'surface-accent-neutral-2': 'neutral-500',
    'surface-accent-neutral-3': 'neutral-300',
    'surface-success': 'success-600',
    'surface-disabled': 'neutral-700',
    'surface-error': 'error-600',
    'surface-warning': 'warning-600',
    'surface-information': 'information-600',
    'surface-action': 'primary-500',
    'surface-action-hover-1': 'primary-400',
    'surface-action-hover-2': 'primary-700',
    'surface-disabled-selected': 'neutral-500',

    // Icon colors
    'icon-primary': 'neutral-200',
    'icon-information': 'information-300',
    'icon-success': 'success-300',
    'icon-warning': 'warning-300',
    'icon-error': 'error-300',
    'icon-disabled': 'neutral-200',
    'icon-action-hover': 'primary-200',
    'icon-on-action': 'neutral-100',
    'icon-action': 'primary-300',

    // Text colors
    'text-heading': 'neutral-25',
    'text-body': 'neutral-50',
    'text-action': 'neutral-200',
    'text-action-hover': 'neutral-200',
    'text-disabled': 'neutral-300',
    'text-information': 'information-200',
    'text-success': 'success-200',
    'text-warning': 'warning-200',
    'text-error': 'error-200',
    'text-on-action': 'neutral-25',
    'text-on-disabled': 'neutral-300',

    // Border colors
    'border-primary': 'neutral-600',
    'border-secondary': 'primary-600',
    'border-information': 'information-600',
    'border-success': 'success-300',
    'border-warning': 'warning-300',
    'border-error': 'error-300',
    'border-disabled': 'neutral-800',
    'border-action': 'primary-400',
    'border-focus': 'primary-300',
    'border-hover': 'primary-300',
  },
} as const;

// ACCENT COLORS - Intentionally unmapped decorative colors
export const accentColors = {
  light: {
    'accent2-25': '#F1EEFF',
    'accent2-500': '#9C88FF',
    'accent2-900': '#1D1B75',
  },
  dark: {
    'accent2-25': '#211B4C',
    'accent2-500': '#6A4FFB',
    'accent2-900': '#D9D2FF',
  },
} as const;

// Utility functions to resolve color values
export function resolvePrimitiveColor(primitiveKey: keyof typeof colorPrimitives): string {
  return colorPrimitives[primitiveKey];
}

export function resolveTokenColor(tokenKey: keyof typeof colorTokens): string {
  const primitiveKey = colorTokens[tokenKey] as keyof typeof colorPrimitives;
  return colorPrimitives[primitiveKey];
}

export function resolveVariableColor(
  variableKey: string,
  mode: 'light' | 'dark' = 'light'
): string {
  const variables = colorVariables[mode] as Record<string, string>;
  const tokenKey = variables[variableKey] as keyof typeof colorTokens;
  if (!tokenKey) return '#000000'; // fallback
  return resolveTokenColor(tokenKey);
}

// Fusion Schema Compatible Export (with empty spacing and typography)
export const fusionColorSystem = {
  colors: {
    primitives: colorPrimitives,
    tokens: colorTokens,
    variables: colorVariables,
    accents: accentColors,
  },
  spacing: [], // Empty as required by Fusion schema
  typography: [], // Empty as required by Fusion schema
};

// Mantine-compatible theme export
export const mantineColorTheme = {
  colors: Object.fromEntries(
    Object.entries(colorTokens).map(([key, value]) => [
      key.replace('/', '-'),
      resolveTokenColor(key as keyof typeof colorTokens)
    ])
  ),
  primaryColor: 'primary-500',
  primaryShade: { light: 5, dark: 4 },
  colorScheme: 'light',
};
