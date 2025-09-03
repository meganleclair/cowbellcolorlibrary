// Fusion Color Design System
// 3-Tier Token Structure: Primitives → Tokens → Variables

// TIER 1: PRIMITIVES - Raw hex values
export const colorPrimitives = {
  // Grays
  'color/gray/50': '#fafafa',
  'color/gray/100': '#f5f5f5',
  'color/gray/200': '#e5e5e5',
  'color/gray/300': '#d4d4d4',
  'color/gray/400': '#a3a3a3',
  'color/gray/500': '#737373',
  'color/gray/600': '#525252',
  'color/gray/700': '#404040',
  'color/gray/800': '#262626',
  'color/gray/900': '#171717',
  'color/gray/950': '#0a0a0a',

  // Blues
  'color/blue/50': '#eff6ff',
  'color/blue/100': '#dbeafe',
  'color/blue/200': '#bfdbfe',
  'color/blue/300': '#93c5fd',
  'color/blue/400': '#60a5fa',
  'color/blue/500': '#3b82f6',
  'color/blue/600': '#2563eb',
  'color/blue/700': '#1d4ed8',
  'color/blue/800': '#1e40af',
  'color/blue/900': '#1e3a8a',
  'color/blue/950': '#172554',

  // Emerald
  'color/emerald/50': '#ecfdf5',
  'color/emerald/100': '#d1fae5',
  'color/emerald/200': '#a7f3d0',
  'color/emerald/300': '#6ee7b7',
  'color/emerald/400': '#34d399',
  'color/emerald/500': '#10b981',
  'color/emerald/600': '#059669',
  'color/emerald/700': '#047857',
  'color/emerald/800': '#065f46',
  'color/emerald/900': '#064e3b',
  'color/emerald/950': '#022c22',

  // Red
  'color/red/50': '#fef2f2',
  'color/red/100': '#fee2e2',
  'color/red/200': '#fecaca',
  'color/red/300': '#fca5a5',
  'color/red/400': '#f87171',
  'color/red/500': '#ef4444',
  'color/red/600': '#dc2626',
  'color/red/700': '#b91c1c',
  'color/red/800': '#991b1b',
  'color/red/900': '#7f1d1d',
  'color/red/950': '#450a0a',

  // Amber
  'color/amber/50': '#fffbeb',
  'color/amber/100': '#fef3c7',
  'color/amber/200': '#fde68a',
  'color/amber/300': '#fcd34d',
  'color/amber/400': '#fbbf24',
  'color/amber/500': '#f59e0b',
  'color/amber/600': '#d97706',
  'color/amber/700': '#b45309',
  'color/amber/800': '#92400e',
  'color/amber/900': '#78350f',
  'color/amber/950': '#451a03',

  // Purple
  'color/purple/50': '#faf5ff',
  'color/purple/100': '#f3e8ff',
  'color/purple/200': '#e9d5ff',
  'color/purple/300': '#d8b4fe',
  'color/purple/400': '#c084fc',
  'color/purple/500': '#a855f7',
  'color/purple/600': '#9333ea',
  'color/purple/700': '#7c3aed',
  'color/purple/800': '#6b21a8',
  'color/purple/900': '#581c87',
  'color/purple/950': '#3b0764',

  // Special colors
  'color/white': '#ffffff',
  'color/black': '#000000',
} as const;

// TIER 2: TOKENS - Semantic mappings to primitives
export const colorTokens = {
  // Primary brand colors
  'primary/50': 'color/blue/50',
  'primary/100': 'color/blue/100',
  'primary/200': 'color/blue/200',
  'primary/300': 'color/blue/300',
  'primary/400': 'color/blue/400',
  'primary/500': 'color/blue/500',
  'primary/600': 'color/blue/600',
  'primary/700': 'color/blue/700',
  'primary/800': 'color/blue/800',
  'primary/900': 'color/blue/900',
  'primary/950': 'color/blue/950',

  // Secondary brand colors
  'secondary/50': 'color/gray/50',
  'secondary/100': 'color/gray/100',
  'secondary/200': 'color/gray/200',
  'secondary/300': 'color/gray/300',
  'secondary/400': 'color/gray/400',
  'secondary/500': 'color/gray/500',
  'secondary/600': 'color/gray/600',
  'secondary/700': 'color/gray/700',
  'secondary/800': 'color/gray/800',
  'secondary/900': 'color/gray/900',
  'secondary/950': 'color/gray/950',

  // Success colors
  'success/50': 'color/emerald/50',
  'success/100': 'color/emerald/100',
  'success/200': 'color/emerald/200',
  'success/300': 'color/emerald/300',
  'success/400': 'color/emerald/400',
  'success/500': 'color/emerald/500',
  'success/600': 'color/emerald/600',
  'success/700': 'color/emerald/700',
  'success/800': 'color/emerald/800',
  'success/900': 'color/emerald/900',
  'success/950': 'color/emerald/950',

  // Error colors
  'error/50': 'color/red/50',
  'error/100': 'color/red/100',
  'error/200': 'color/red/200',
  'error/300': 'color/red/300',
  'error/400': 'color/red/400',
  'error/500': 'color/red/500',
  'error/600': 'color/red/600',
  'error/700': 'color/red/700',
  'error/800': 'color/red/800',
  'error/900': 'color/red/900',
  'error/950': 'color/red/950',

  // Warning colors
  'warning/50': 'color/amber/50',
  'warning/100': 'color/amber/100',
  'warning/200': 'color/amber/200',
  'warning/300': 'color/amber/300',
  'warning/400': 'color/amber/400',
  'warning/500': 'color/amber/500',
  'warning/600': 'color/amber/600',
  'warning/700': 'color/amber/700',
  'warning/800': 'color/amber/800',
  'warning/900': 'color/amber/900',
  'warning/950': 'color/amber/950',

  // Info colors
  'info/50': 'color/purple/50',
  'info/100': 'color/purple/100',
  'info/200': 'color/purple/200',
  'info/300': 'color/purple/300',
  'info/400': 'color/purple/400',
  'info/500': 'color/purple/500',
  'info/600': 'color/purple/600',
  'info/700': 'color/purple/700',
  'info/800': 'color/purple/800',
  'info/900': 'color/purple/900',
  'info/950': 'color/purple/950',

  // Neutral colors
  'neutral/50': 'color/gray/50',
  'neutral/100': 'color/gray/100',
  'neutral/200': 'color/gray/200',
  'neutral/300': 'color/gray/300',
  'neutral/400': 'color/gray/400',
  'neutral/500': 'color/gray/500',
  'neutral/600': 'color/gray/600',
  'neutral/700': 'color/gray/700',
  'neutral/800': 'color/gray/800',
  'neutral/900': 'color/gray/900',
  'neutral/950': 'color/gray/950',

  // Special tokens
  'pure-white': 'color/white',
  'pure-black': 'color/black',
} as const;

// TIER 3: VARIABLES - Contextual usage mapped to tokens
export const colorVariables = {
  light: {
    // Text colors
    'text-color/primary': 'neutral/900',
    'text-color/secondary': 'neutral/600',
    'text-color/tertiary': 'neutral/500',
    'text-color/inverse': 'pure-white',
    'text-color/disabled': 'neutral/400',
    'text-color/success': 'success/700',
    'text-color/error': 'error/700',
    'text-color/warning': 'warning/700',
    'text-color/info': 'info/700',
    'text-color/brand': 'primary/600',

    // Background colors
    'bg-color/primary': 'pure-white',
    'bg-color/secondary': 'neutral/50',
    'bg-color/tertiary': 'neutral/100',
    'bg-color/overlay': 'neutral/900',
    'bg-color/surface': 'pure-white',
    'bg-color/brand': 'primary/500',
    'bg-color/success': 'success/50',
    'bg-color/error': 'error/50',
    'bg-color/warning': 'warning/50',
    'bg-color/info': 'info/50',

    // Border colors
    'border-color/primary': 'neutral/200',
    'border-color/secondary': 'neutral/300',
    'border-color/focus': 'primary/500',
    'border-color/success': 'success/300',
    'border-color/error': 'error/300',
    'border-color/warning': 'warning/300',
    'border-color/info': 'info/300',

    // Interactive colors
    'interactive/primary': 'primary/500',
    'interactive/primary-hover': 'primary/600',
    'interactive/primary-active': 'primary/700',
    'interactive/secondary': 'neutral/200',
    'interactive/secondary-hover': 'neutral/300',
    'interactive/secondary-active': 'neutral/400',
  },
  dark: {
    // Text colors
    'text-color/primary': 'pure-white',
    'text-color/secondary': 'neutral/300',
    'text-color/tertiary': 'neutral/400',
    'text-color/inverse': 'neutral/900',
    'text-color/disabled': 'neutral/600',
    'text-color/success': 'success/400',
    'text-color/error': 'error/400',
    'text-color/warning': 'warning/400',
    'text-color/info': 'info/400',
    'text-color/brand': 'primary/400',

    // Background colors
    'bg-color/primary': 'neutral/900',
    'bg-color/secondary': 'neutral/800',
    'bg-color/tertiary': 'neutral/700',
    'bg-color/overlay': 'pure-black',
    'bg-color/surface': 'neutral/800',
    'bg-color/brand': 'primary/600',
    'bg-color/success': 'success/950',
    'bg-color/error': 'error/950',
    'bg-color/warning': 'warning/950',
    'bg-color/info': 'info/950',

    // Border colors
    'border-color/primary': 'neutral/700',
    'border-color/secondary': 'neutral/600',
    'border-color/focus': 'primary/400',
    'border-color/success': 'success/700',
    'border-color/error': 'error/700',
    'border-color/warning': 'warning/700',
    'border-color/info': 'info/700',

    // Interactive colors
    'interactive/primary': 'primary/500',
    'interactive/primary-hover': 'primary/400',
    'interactive/primary-active': 'primary/300',
    'interactive/secondary': 'neutral/700',
    'interactive/secondary-hover': 'neutral/600',
    'interactive/secondary-active': 'neutral/500',
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
