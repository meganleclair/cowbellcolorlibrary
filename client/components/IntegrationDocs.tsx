import { useState } from "react";
import { Copy, Check } from "lucide-react";

const codeExamples = {
  tailwind: `// tailwind.config.ts
import { colorPrimitives } from './lib/design-system';

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: colorPrimitives['color/blue/50'],
          500: colorPrimitives['color/blue/500'],
          900: colorPrimitives['color/blue/900'],
        },
        // Add more colors as needed
      }
    }
  }
}`,

  mantine: `// mantine theme
import { MantineProvider } from '@mantine/core';
import { mantineColorTheme } from './lib/design-system';

function App() {
  return (
    <MantineProvider theme={mantineColorTheme}>
      <YourAppComponents />
    </MantineProvider>
  );
}

// Usage in components
import { Button } from '@mantine/core';

function MyComponent() {
  return (
    <Button color="primary-500">
      Primary Button
    </Button>
  );
}`,

  css: `/* CSS Custom Properties */
:root {
  /* Primary Colors */
  --color-primary-50: #eff6ff;
  --color-primary-500: #3b82f6;
  --color-primary-900: #1e3a8a;
  
  /* Semantic Variables */
  --text-color-primary: var(--color-gray-900);
  --bg-color-primary: var(--color-white);
  --border-color-primary: var(--color-gray-200);
}

.dark {
  --text-color-primary: var(--color-white);
  --bg-color-primary: var(--color-gray-900);
  --border-color-primary: var(--color-gray-700);
}`,

  scss: `// SCSS Variables
$color-primitives: (
  'blue-50': #eff6ff,
  'blue-500': #3b82f6,
  'blue-900': #1e3a8a,
  // ... more colors
);

$semantic-tokens: (
  'primary-500': map-get($color-primitives, 'blue-500'),
  // ... more tokens
);

// Usage
.button-primary {
  background-color: map-get($semantic-tokens, 'primary-500');
}`,

  typescript: `// TypeScript usage
import { 
  colorPrimitives, 
  colorTokens, 
  resolveVariableColor 
} from './lib/design-system';

// Use primitives directly
const primaryBlue = colorPrimitives['color/blue/500'];

// Use semantic tokens
const primaryColor = resolveTokenColor('primary/500');

// Use contextual variables
const textColor = resolveVariableColor('text-color/primary', 'light');

// Type-safe color usage
type ColorToken = keyof typeof colorTokens;
const getColor = (token: ColorToken) => resolveTokenColor(token);`,

  react: `// React component usage
import { resolveVariableColor } from './lib/design-system';

function Button({ variant = 'primary', children }) {
  const getButtonStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: resolveVariableColor('interactive/primary'),
          color: resolveVariableColor('text-color/inverse'),
        };
      case 'secondary':
        return {
          backgroundColor: resolveVariableColor('interactive/secondary'),
          color: resolveVariableColor('text-color/primary'),
        };
      default:
        return {};
    }
  };

  return (
    <button style={getButtonStyles()}>
      {children}
    </button>
  );
}`,
};

interface CodeBlockProps {
  code: string;
  language: string;
}

function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between bg-gray-800 text-gray-200 px-4 py-2 text-sm rounded-t-lg">
        <span className="font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-b-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function IntegrationDocs() {
  const [activeTab, setActiveTab] = useState("tailwind");

  const tabs = [
    {
      id: "tailwind",
      label: "Tailwind CSS",
      description: "Integration with Tailwind CSS",
    },
    {
      id: "mantine",
      label: "Mantine",
      description: "Mantine UI library setup",
    },
    {
      id: "css",
      label: "CSS Variables",
      description: "Plain CSS custom properties",
    },
    { id: "scss", label: "SCSS", description: "SCSS variables and functions" },
    {
      id: "typescript",
      label: "TypeScript",
      description: "Type-safe color usage",
    },
    { id: "react", label: "React", description: "React component examples" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Integration Examples
        </h3>
        <p className="text-gray-600">
          Code examples showing how to integrate the Fusion Color System into
          different frameworks and tools.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="space-y-4">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">{tab.label}</h4>
                  <p className="text-sm text-gray-600">{tab.description}</p>
                </div>
                <CodeBlock
                  code={codeExamples[tab.id as keyof typeof codeExamples]}
                  language={tab.label}
                />
              </div>
            ),
        )}
      </div>

      {/* Best Practices */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Best Practices</h4>
        <ul className="space-y-1 text-sm text-blue-800">
          <li>
            • Always use variables (Tier 3) in your components, not primitives
            directly
          </li>
          <li>
            • Define semantic tokens (Tier 2) for your specific brand colors
          </li>
          <li>• Use the resolver functions for dynamic color access</li>
          <li>
            • Implement proper light/dark mode switching at the variable level
          </li>
          <li>
            • Keep primitives (Tier 1) as your single source of truth for color
            values
          </li>
        </ul>
      </div>
    </div>
  );
}
