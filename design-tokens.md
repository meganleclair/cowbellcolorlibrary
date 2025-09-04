# Design Tokens for Mantine Theme Customization

This document contains all design tokens from our design system for use with Mantine component library theming.

## System Overview

Our design system uses a 3-tier token structure:

- **Primitives**: Raw hex color values
- **Tokens**: Semantic mappings to primitives (Tailwind-style naming)
- **Variables**: Contextual usage mapped to tokens (supports light/dark modes)
- **Accents**: Decorative colors with light/dark variants

## Color Primitives

Raw hex values organized by color family:

### Gray (Neutral)

- `color/gray/25`: `#EFF0F2` - Ultra light gray
- `color/gray/50`: `#E4E7EB` - Very light gray
- `color/gray/100`: `#D3D7DD` - Light gray
- `color/gray/200`: `#BDC3CD` - Soft gray
- `color/gray/300`: `#A6AEBC` - Medium light gray
- `color/gray/400`: `#909AAB` - Medium gray
- `color/gray/500`: `#7A869A` - Balanced gray
- `color/gray/600`: `#667080` - Medium dark gray
- `color/gray/700`: `#515967` - Dark gray
- `color/gray/800`: `#3D434D` - Very dark gray
- `color/gray/900`: `#292D33` - Ultra dark gray
- `color/gray/1000`: `#181B1F` - Near black gray

### Blue (Primary)

- `color/blue/25`: `#EEF7FF` - Ultra light blue
- `color/blue/50`: `#DBECFB` - Very light blue
- `color/blue/100`: `#AACEEF` - Light blue
- `color/blue/200`: `#80B6E7` - Soft blue
- `color/blue/300`: `#559EDF` - Medium light blue
- `color/blue/400`: `#2A85D7` - Medium blue
- `color/blue/500`: `#006DCF` - Primary blue
- `color/blue/600`: `#005BAD` - Medium dark blue
- `color/blue/700`: `#00498A` - Dark blue
- `color/blue/800`: `#003768` - Very dark blue
- `color/blue/900`: `#002445` - Ultra dark blue
- `color/blue/1000`: `#001629` - Near black blue

### Yellow (Warning)

- `color/yellow/50`: `#FDEDD2` - Very light yellow
- `color/yellow/100`: `#FCE1B4` - Light yellow
- `color/yellow/200`: `#F8D38F` - Soft yellow
- `color/yellow/300`: `#FAC469` - Medium light yellow
- `color/yellow/400`: `#F8B544` - Medium yellow
- `color/yellow/500`: `#F7A61E` - Primary yellow
- `color/yellow/600`: `#CE8A19` - Medium dark yellow
- `color/yellow/700`: `#A56F14` - Dark yellow
- `color/yellow/800`: `#7C530F` - Very dark yellow
- `color/yellow/900`: `#52370A` - Ultra dark yellow
- `color/yellow/1000`: `#312106` - Near black yellow

### Red (Error)

- `color/red/25`: `#FDEAEB` - Ultra light red
- `color/red/50`: `#F1CFD2` - Very light red
- `color/red/100`: `#E7AFB4` - Light red
- `color/red/200`: `#DB888E` - Soft red
- `color/red/300`: `#CF6068` - Medium light red
- `color/red/400`: `#C33843` - Medium red
- `color/red/500`: `#B7101D` - Primary red
- `color/red/600`: `#990D18` - Medium dark red
- `color/red/700`: `#7A0B13` - Dark red
- `color/red/800`: `#5C080F` - Very dark red
- `color/red/900`: `#3D050A` - Ultra dark red
- `color/red/1000`: `#250306` - Near black red

### Green (Success)

- `color/green/25`: `#E5F8E4` - Ultra light green
- `color/green/50`: `#CDE6CC` - Very light green
- `color/green/100`: `#ABD5AA` - Light green
- `color/green/200`: `#82C080` - Soft green
- `color/green/300`: `#58AA55` - Medium light green
- `color/green/400`: `#2E952A` - Medium green
- `color/green/500`: `#048000` - Primary green
- `color/green/600`: `#036B00` - Medium dark green
- `color/green/700`: `#035500` - Dark green
- `color/green/800`: `#024000` - Very dark green
- `color/green/900`: `#012B00` - Ultra dark green
- `color/green/1000`: `#011A00` - Near black green

### Special Colors

- `color/white`: `#FFFFFF` - Pure white
- `color/black`: `#000000` - Pure black

## Semantic Tokens

Tokens provide semantic meaning to primitives:

### Primary Colors

- `primary-25` → `color/blue/25` (`#EEF7FF`)
- `primary-50` → `color/blue/50` (`#DBECFB`)
- `primary-100` → `color/blue/100` (`#AACEEF`)
- `primary-200` → `color/blue/200` (`#80B6E7`)
- `primary-300` → `color/blue/300` (`#559EDF`)
- `primary-400` → `color/blue/400` (`#2A85D7`)
- `primary-500` → `color/blue/500` (`#006DCF`)
- `primary-600` → `color/blue/600` (`#005BAD`)
- `primary-700` → `color/blue/700` (`#00498A`)
- `primary-800` → `color/blue/800` (`#003768`)
- `primary-900` → `color/blue/900` (`#002445`)
- `primary-1000` → `color/blue/1000` (`#001629`)

### Neutral Colors

- `neutral-25` → `color/gray/25` (`#EFF0F2`)
- `neutral-50` → `color/gray/50` (`#E4E7EB`)
- `neutral-100` → `color/gray/100` (`#D3D7DD`)
- `neutral-200` → `color/gray/200` (`#BDC3CD`)
- `neutral-300` → `color/gray/300` (`#A6AEBC`)
- `neutral-400` → `color/gray/400` (`#909AAB`)
- `neutral-500` → `color/gray/500` (`#7A869A`)
- `neutral-600` → `color/gray/600` (`#667080`)
- `neutral-700` → `color/gray/700` (`#515967`)
- `neutral-800` → `color/gray/800` (`#3D434D`)
- `neutral-900` → `color/gray/900` (`#292D33`)
- `neutral-1000` → `color/gray/1000` (`#181B1F`)
- `neutral-white` → `color/white` (`#FFFFFF`)
- `neutral-black` → `color/black` (`#000000`)

### Error Colors

- `error-25` → `color/red/25` (`#FDEAEB`)
- `error-50` → `color/red/50` (`#F1CFD2`)
- `error-100` → `color/red/100` (`#E7AFB4`)
- `error-200` → `color/red/200` (`#DB888E`)
- `error-300` → `color/red/300` (`#CF6068`)
- `error-400` → `color/red/400` (`#C33843`)
- `error-500` → `color/red/500` (`#B7101D`)
- `error-600` → `color/red/600` (`#990D18`)
- `error-700` → `color/red/700` (`#7A0B13`)
- `error-800` → `color/red/800` (`#5C080F`)
- `error-900` → `color/red/900` (`#3D050A`)
- `error-1000` → `color/red/1000` (`#250306`)

### Warning Colors

- `warning-50` → `color/yellow/50` (`#FDEDD2`)
- `warning-100` → `color/yellow/100` (`#FCE1B4`)
- `warning-200` → `color/yellow/200` (`#F8D38F`)
- `warning-300` → `color/yellow/300` (`#FAC469`)
- `warning-400` → `color/yellow/400` (`#F8B544`)
- `warning-500` → `color/yellow/500` (`#F7A61E`)
- `warning-600` → `color/yellow/600` (`#CE8A19`)
- `warning-700` → `color/yellow/700` (`#A56F14`)
- `warning-800` → `color/yellow/800` (`#7C530F`)
- `warning-900` → `color/yellow/900` (`#52370A`)
- `warning-1000` → `color/yellow/1000` (`#312106`)

### Success Colors

- `success-25` → `color/green/25` (`#E5F8E4`)
- `success-50` → `color/green/50` (`#CDE6CC`)
- `success-100` → `color/green/100` (`#ABD5AA`)
- `success-200` → `color/green/200` (`#82C080`)
- `success-300` → `color/green/300` (`#58AA55`)
- `success-400` → `color/green/400` (`#2E952A`)
- `success-500` → `color/green/500` (`#048000`)
- `success-600` → `color/green/600` (`#036B00`)
- `success-700` → `color/green/700` (`#035500`)
- `success-800` → `color/green/800` (`#024000`)
- `success-900` → `color/green/900` (`#012B00`)
- `success-1000` → `color/green/1000` (`#011A00`)

### Information Colors

- `information-50` → `color/blue/50` (`#DBECFB`)
- `information-100` → `color/blue/100` (`#AACEEF`)
- `information-200` → `color/blue/200` (`#80B6E7`)
- `information-300` → `color/blue/300` (`#559EDF`)
- `information-400` → `color/blue/400` (`#2A85D7`)
- `information-500` → `color/blue/500` (`#006DCF`)
- `information-600` → `color/blue/600` (`#005BAD`)
- `information-700` → `color/blue/700` (`#00498A`)
- `information-800` → `color/blue/800` (`#003768`)
- `information-900` → `color/blue/900` (`#002445`)
- `information-1000` → `color/blue/1000` (`#001629`)

## Semantic Variables

Contextual usage tokens that map to semantic tokens, supporting light and dark modes:

### Light Mode Variables

#### Surface Colors

- `surface-page` → `neutral-25` (`#EFF0F2`)
- `surface-primary` → `neutral-white` (`#FFFFFF`)
- `surface-accent-primary-1` → `primary-25` (`#EEF7FF`)
- `surface-accent-primary-2` → `primary-400` (`#2A85D7`)
- `surface-accent-primary-3` → `primary-600` (`#005BAD`)
- `surface-accent-neutral-1` → `neutral-25` (`#EFF0F2`)
- `surface-accent-neutral-2` → `neutral-400` (`#909AAB`)
- `surface-accent-neutral-3` → `neutral-600` (`#667080`)
- `surface-success` → `success-25` (`#E5F8E4`)
- `surface-disabled` → `neutral-50` (`#E4E7EB`)
- `surface-error` → `error-25` (`#FDEAEB`)
- `surface-warning` → `warning-50` (`#FDEDD2`)
- `surface-information` → `information-50` (`#DBECFB`)
- `surface-action` → `primary-500` (`#006DCF`)
- `surface-action-hover-1` → `primary-600` (`#005BAD`)
- `surface-action-hover-2` → `primary-25` (`#EEF7FF`)
- `surface-disabled-selected` → `neutral-400` (`#909AAB`)

#### Icon Colors

- `icon-primary` → `neutral-500` (`#7A869A`)
- `icon-information` → `information-500` (`#006DCF`)
- `icon-success` → `success-500` (`#048000`)
- `icon-warning` → `warning-500` (`#F7A61E`)
- `icon-error` → `error-500` (`#B7101D`)
- `icon-disabled` → `neutral-400` (`#909AAB`)
- `icon-action-hover` → `primary-600` (`#005BAD`)
- `icon-on-action` → `neutral-white` (`#FFFFFF`)
- `icon-action` → `primary-500` (`#006DCF`)

#### Text Colors

- `text-heading` → `neutral-900` (`#292D33`)
- `text-body` → `neutral-700` (`#515967`)
- `text-action` → `primary-500` (`#006DCF`)
- `text-action-hover` → `primary-600` (`#005BAD`)
- `text-disabled` → `neutral-400` (`#909AAB`)
- `text-information` → `information-500` (`#006DCF`)
- `text-success` → `success-500` (`#048000`)
- `text-warning` → `warning-500` (`#F7A61E`)
- `text-error` → `error-500` (`#B7101D`)
- `text-on-action` → `neutral-white` (`#FFFFFF`)
- `text-on-disabled` → `neutral-700` (`#515967`)

#### Border Colors

- `border-primary` → `neutral-200` (`#BDC3CD`)
- `border-secondary` → `primary-500` (`#006DCF`)
- `border-information` → `information-500` (`#006DCF`)
- `border-success` → `success-500` (`#048000`)
- `border-warning` → `warning-500` (`#F7A61E`)
- `border-error` → `error-500` (`#B7101D`)
- `border-disabled` → `neutral-100` (`#D3D7DD`)
- `border-action` → `primary-500` (`#006DCF`)
- `border-focus` → `primary-600` (`#005BAD`)
- `border-hover` → `primary-600` (`#005BAD`)

### Dark Mode Variables

#### Surface Colors

- `surface-page` → `neutral-1000` (`#181B1F`)
- `surface-primary` → `neutral-900` (`#292D33`)
- `surface-accent-primary-1` → `primary-700` (`#00498A`)
- `surface-accent-primary-2` → `primary-600` (`#005BAD`)
- `surface-accent-primary-3` → `primary-300` (`#559EDF`)
- `surface-accent-neutral-1` → `neutral-700` (`#515967`)
- `surface-accent-neutral-2` → `neutral-500` (`#7A869A`)
- `surface-accent-neutral-3` → `neutral-300` (`#A6AEBC`)
- `surface-success` → `success-600` (`#036B00`)
- `surface-disabled` → `neutral-700` (`#515967`)
- `surface-error` → `error-600` (`#990D18`)
- `surface-warning` → `warning-600` (`#CE8A19`)
- `surface-information` → `information-600` (`#005BAD`)
- `surface-action` → `primary-500` (`#006DCF`)
- `surface-action-hover-1` → `primary-400` (`#2A85D7`)
- `surface-action-hover-2` → `primary-700` (`#00498A`)
- `surface-disabled-selected` → `neutral-500` (`#7A869A`)

#### Icon Colors

- `icon-primary` → `neutral-200` (`#BDC3CD`)
- `icon-information` → `information-300` (`#559EDF`)
- `icon-success` → `success-300` (`#58AA55`)
- `icon-warning` → `warning-300` (`#FAC469`)
- `icon-error` → `error-300` (`#CF6068`)
- `icon-disabled` → `neutral-200` (`#BDC3CD`)
- `icon-action-hover` → `primary-200` (`#80B6E7`)
- `icon-on-action` → `neutral-100` (`#D3D7DD`)
- `icon-action` → `primary-300` (`#559EDF`)

#### Text Colors

- `text-heading` → `neutral-25` (`#EFF0F2`)
- `text-body` → `neutral-50` (`#E4E7EB`)
- `text-action` → `neutral-200` (`#BDC3CD`)
- `text-action-hover` → `neutral-200` (`#BDC3CD`)
- `text-disabled` → `neutral-300` (`#A6AEBC`)
- `text-information` → `information-200` (`#80B6E7`)
- `text-success` → `success-200` (`#82C080`)
- `text-warning` → `warning-200` (`#F8D38F`)
- `text-error` → `error-200` (`#DB888E`)
- `text-on-action` → `neutral-25` (`#EFF0F2`)
- `text-on-disabled` → `neutral-300` (`#A6AEBC`)

#### Border Colors

- `border-primary` → `neutral-600` (`#667080`)
- `border-secondary` → `primary-600` (`#005BAD`)
- `border-information` → `information-600` (`#005BAD`)
- `border-success` → `success-300` (`#58AA55`)
- `border-warning` → `warning-300` (`#FAC469`)
- `border-error` → `error-300` (`#CF6068`)
- `border-disabled` → `neutral-800` (`#3D434D`)
- `border-action` → `primary-400` (`#2A85D7`)
- `border-focus` → `primary-300` (`#559EDF`)
- `border-hover` → `primary-300` (`#559EDF`)

## Accent Colors

Decorative colors with light and dark mode variants:

### Light Mode Accents

- `accent1-25`: `#E8FAFD` - Cyan/Teal Ultra Light
- `accent1-500`: `#4BCFDA` - Cyan/Teal Medium
- `accent1-900`: `#04475F` - Cyan/Teal Dark
- `accent2-25`: `#F1EEFF` - Purple Ultra Light
- `accent2-500`: `#9C88FF` - Purple Medium
- `accent2-900`: `#1D1B75` - Purple Dark
- `accent3-25`: `#F4E6F7` - Magenta/Pink Ultra Light
- `accent3-500`: `#A23BB3` - Magenta/Pink Medium
- `accent3-900`: `#5E1768` - Magenta/Pink Dark
- `accent4-25`: `#FFF3EB` - Orange Ultra Light
- `accent4-500`: `#FFB370` - Orange Medium
- `accent4-900`: `#A64A1A` - Orange Dark
- `accent5-25`: `#FFEDE9` - Red/Coral Ultra Light
- `accent5-500`: `#FF5E3A` - Red/Coral Medium
- `accent5-900`: `#8C2A13` - Red/Coral Dark
- `accent6-25`: `#F0FBE5` - Lime/Green Ultra Light
- `accent6-500`: `#B2E94B` - Lime/Green Medium
- `accent6-900`: `#3F5C1B` - Lime/Green Dark

### Dark Mode Accents

- `accent1-25`: `#0E2F34` - Cyan/Teal Ultra Dark
- `accent1-500`: `#0094A8` - Cyan/Teal Medium
- `accent1-900`: `#BFEFF6` - Cyan/Teal Light
- `accent2-25`: `#211B4C` - Purple Ultra Dark
- `accent2-500`: `#6A4FFB` - Purple Medium
- `accent2-900`: `#D9D2FF` - Purple Light
- `accent3-25`: `#341B3A` - Magenta/Pink Ultra Dark
- `accent3-500`: `#9D2698` - Magenta/Pink Medium
- `accent3-900`: `#E4B3EC` - Magenta/Pink Light
- `accent4-25`: `#3B2415` - Orange Ultra Dark
- `accent4-500`: `#E9853F` - Orange Medium
- `accent4-900`: `#FFE0C8` - Orange Light
- `accent5-25`: `#37160F` - Red/Coral Ultra Dark
- `accent5-500`: `#E0461F` - Red/Coral Medium
- `accent5-900`: `#FFB8A8` - Red/Coral Light
- `accent6-25`: `#1F2B17` - Lime/Green Ultra Dark
- `accent6-500`: `#9CD63F` - Lime/Green Medium
- `accent6-900`: `#D5F69B` - Lime/Green Light

## Mantine Theme Integration

For Mantine theme customization, use these recommendations:

### Primary Colors

Set the primary color using our blue scale:

```javascript
primaryColor: 'blue',
colors: {
  blue: [
    '#EEF7FF', // blue.0 (primary-25)
    '#DBECFB', // blue.1 (primary-50)
    '#AACEEF', // blue.2 (primary-100)
    '#80B6E7', // blue.3 (primary-200)
    '#559EDF', // blue.4 (primary-300)
    '#2A85D7', // blue.5 (primary-400)
    '#006DCF', // blue.6 (primary-500) - Main brand color
    '#005BAD', // blue.7 (primary-600)
    '#00498A', // blue.8 (primary-700)
    '#003768', // blue.9 (primary-800)
  ]
}
```

### Color Scheme Support

Use our semantic variables for light/dark mode:

- Light mode: Use values from "Light Mode Variables" section
- Dark mode: Use values from "Dark Mode Variables" section

### Semantic Colors

Map our semantic tokens to Mantine's color system:

- Error states: Use `error-*` tokens
- Success states: Use `success-*` tokens
- Warning states: Use `warning-*` tokens
- Information states: Use `information-*` tokens

### Surface and Text Colors

For backgrounds and text, use our variable tokens:

- Page backgrounds: `surface-page`
- Card backgrounds: `surface-primary`
- Primary text: `text-heading`, `text-body`
- Interactive text: `text-action`

This design system provides comprehensive color coverage for all Mantine components while maintaining consistency and accessibility across light and dark themes.
