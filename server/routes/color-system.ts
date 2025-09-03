import { RequestHandler } from "express";
import { colorPrimitives, colorTokens, colorVariables, fusionColorSystem, mantineColorTheme } from "../../client/lib/design-system";

export interface ColorSystemResponse {
  primitives: typeof colorPrimitives;
  tokens: typeof colorTokens;
  variables: typeof colorVariables;
  meta: {
    version: string;
    totalPrimitives: number;
    totalTokens: number;
    totalVariables: number;
    supportedModes: string[];
  };
}

export interface FusionSchemaResponse {
  system: typeof fusionColorSystem;
  meta: {
    version: string;
    schemaVersion: string;
    generatedAt: string;
  };
}

export interface MantineThemeResponse {
  theme: typeof mantineColorTheme;
  meta: {
    version: string;
    mantineVersion: string;
    generatedAt: string;
  };
}

// Get complete color system
export const handleColorSystem: RequestHandler = (req, res) => {
  const response: ColorSystemResponse = {
    primitives: colorPrimitives,
    tokens: colorTokens,
    variables: colorVariables,
    meta: {
      version: "1.0.0",
      totalPrimitives: Object.keys(colorPrimitives).length,
      totalTokens: Object.keys(colorTokens).length,
      totalVariables: Object.keys(colorVariables.light).length,
      supportedModes: ['light', 'dark'],
    },
  };
  
  res.json(response);
};

// Get Fusion-compatible schema
export const handleFusionSchema: RequestHandler = (req, res) => {
  const response: FusionSchemaResponse = {
    system: fusionColorSystem,
    meta: {
      version: "1.0.0",
      schemaVersion: "1.0",
      generatedAt: new Date().toISOString(),
    },
  };
  
  res.json(response);
};

// Get Mantine-compatible theme
export const handleMantineTheme: RequestHandler = (req, res) => {
  const response: MantineThemeResponse = {
    theme: mantineColorTheme,
    meta: {
      version: "1.0.0",
      mantineVersion: "7.x",
      generatedAt: new Date().toISOString(),
    },
  };
  
  res.json(response);
};

// Get only primitives
export const handlePrimitives: RequestHandler = (req, res) => {
  res.json({
    primitives: colorPrimitives,
    meta: {
      total: Object.keys(colorPrimitives).length,
      version: "1.0.0",
    },
  });
};

// Get only tokens
export const handleTokens: RequestHandler = (req, res) => {
  res.json({
    tokens: colorTokens,
    meta: {
      total: Object.keys(colorTokens).length,
      version: "1.0.0",
    },
  });
};

// Get variables for specific mode
export const handleVariables: RequestHandler = (req, res) => {
  const mode = req.query.mode as 'light' | 'dark' || 'light';
  
  if (!['light', 'dark'].includes(mode)) {
    res.status(400).json({ error: 'Invalid mode. Must be "light" or "dark".' });
    return;
  }
  
  res.json({
    variables: colorVariables[mode],
    mode,
    meta: {
      total: Object.keys(colorVariables[mode]).length,
      version: "1.0.0",
    },
  });
};
