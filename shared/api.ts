/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Color System API response types
 */
export interface ColorSystemResponse {
  primitives: Record<string, string>;
  tokens: Record<string, string>;
  variables: Record<string, string>;
  meta: {
    version: string;
    totalPrimitives: number;
    totalTokens: number;
    totalVariables: number;
    supportedModes: string[];
  };
}

export interface FusionSchemaResponse {
  system: {
    colors: {
      primitives: Record<string, string>;
      tokens: Record<string, string>;
      variables: {
        light: Record<string, string>;
        dark: Record<string, string>;
      };
    };
    spacing: [];
    typography: [];
  };
  meta: {
    version: string;
    schemaVersion: string;
    generatedAt: string;
  };
}

export interface MantineThemeResponse {
  theme: {
    colors: Record<string, string>;
    primaryColor: string;
    primaryShade: { light: number; dark: number };
    colorScheme: string;
  };
  meta: {
    version: string;
    mantineVersion: string;
    generatedAt: string;
  };
}

export interface PrimitivesResponse {
  primitives: Record<string, string>;
  meta: {
    total: number;
    version: string;
  };
}

export interface TokensResponse {
  tokens: Record<string, string>;
  meta: {
    total: number;
    version: string;
  };
}

export interface VariablesResponse {
  variables: Record<string, string>;
  mode: "light" | "dark";
  meta: {
    total: number;
    version: string;
  };
}
