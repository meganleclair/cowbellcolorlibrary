import { useState } from 'react';
import { colorPrimitives, colorTokens, colorVariables, accentColors, resolveTokenColor, resolveVariableColor } from '@/lib/design-system';
import { Copy, Check } from 'lucide-react';

interface ColorSwatchProps {
  label: string;
  value: string;
  showCode?: boolean;
  description?: string;
}

function ColorSwatch({ label, value, showCode = true, description }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200">
      <div 
        className="h-20 w-full relative cursor-pointer" 
        style={{ backgroundColor: value }}
        onClick={handleCopy}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="bg-black/50 text-white p-2 rounded-md backdrop-blur-sm">
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className="font-medium text-gray-900 text-sm">{label}</div>
        {showCode && (
          <div className="font-mono text-xs text-gray-600 mt-1">{value}</div>
        )}
        {description && (
          <div className="text-xs text-gray-500 mt-1">{description}</div>
        )}
      </div>
    </div>
  );
}

interface ColorScaleProps {
  title: string;
  colors: Record<string, string>;
  description?: string;
}

function ColorScale({ title, colors, description }: ColorScaleProps) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {Object.entries(colors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            label={key.split('/').pop() || key}
            value={value}
          />
        ))}
      </div>
    </div>
  );
}

export function PrimitivesSection() {
  const grayColors = Object.fromEntries(
    Object.entries(colorPrimitives).filter(([key]) => key.includes('gray'))
  );

  const blueColors = Object.fromEntries(
    Object.entries(colorPrimitives).filter(([key]) => key.includes('blue'))
  );

  const greenColors = Object.fromEntries(
    Object.entries(colorPrimitives).filter(([key]) => key.includes('green'))
  );

  const redColors = Object.fromEntries(
    Object.entries(colorPrimitives).filter(([key]) => key.includes('red'))
  );

  const yellowColors = Object.fromEntries(
    Object.entries(colorPrimitives).filter(([key]) => key.includes('yellow'))
  );

  return (
    <div className="space-y-8">
      <ColorScale
        title="Gray"
        colors={grayColors}
        description="Neutral colors for text, backgrounds, and borders"
      />
      <ColorScale
        title="Blue"
        colors={blueColors}
        description="Primary brand colors and interactive elements"
      />
      <ColorScale
        title="Green"
        colors={greenColors}
        description="Success states and positive actions"
      />
      <ColorScale
        title="Red"
        colors={redColors}
        description="Error states and destructive actions"
      />
      <ColorScale
        title="Yellow"
        colors={yellowColors}
        description="Warning states and cautionary elements"
      />
    </div>
  );
}

export function TokensSection() {
  const tokenGroups = {
    primary: Object.fromEntries(
      Object.entries(colorTokens).filter(([key]) => key.startsWith('primary-'))
    ),
    neutral: Object.fromEntries(
      Object.entries(colorTokens).filter(([key]) => key.startsWith('neutral-'))
    ),
    error: Object.fromEntries(
      Object.entries(colorTokens).filter(([key]) => key.startsWith('error-'))
    ),
    warning: Object.fromEntries(
      Object.entries(colorTokens).filter(([key]) => key.startsWith('warning-'))
    ),
    success: Object.fromEntries(
      Object.entries(colorTokens).filter(([key]) => key.startsWith('success-'))
    ),
    information: Object.fromEntries(
      Object.entries(colorTokens).filter(([key]) => key.startsWith('information-'))
    ),
  };

  return (
    <div className="space-y-8">
      {Object.entries(tokenGroups).map(([groupName, tokens]) => {
        const resolvedTokens = Object.fromEntries(
          Object.entries(tokens).map(([key, primitiveKey]) => [
            key,
            resolveTokenColor(key as keyof typeof colorTokens)
          ])
        );
        
        return (
          <ColorScale
            key={groupName}
            title={groupName.charAt(0).toUpperCase() + groupName.slice(1)}
            colors={resolvedTokens}
            description={`Semantic ${groupName} color mappings`}
          />
        );
      })}
    </div>
  );
}

export function VariablesSection() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const variableGroups = {
    'Surface Colors': Object.fromEntries(
      Object.entries(colorVariables[mode]).filter(([key]) => key.startsWith('surface-'))
    ),
    'Icon Colors': Object.fromEntries(
      Object.entries(colorVariables[mode]).filter(([key]) => key.startsWith('icon-'))
    ),
    'Text Colors': Object.fromEntries(
      Object.entries(colorVariables[mode]).filter(([key]) => key.startsWith('text-'))
    ),
    'Border Colors': Object.fromEntries(
      Object.entries(colorVariables[mode]).filter(([key]) => key.startsWith('border-'))
    ),
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">Mode:</span>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setMode('light')}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              mode === 'light'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setMode('dark')}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              mode === 'dark'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Dark
          </button>
        </div>
      </div>

      {Object.entries(variableGroups).map(([groupName, variables]) => {
        const resolvedVariables = Object.fromEntries(
          Object.entries(variables).map(([key, tokenKey]) => [
            key,
            resolveVariableColor(key, mode)
          ])
        );

        return (
          <div key={groupName} className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{groupName}</h3>
              <p className="text-sm text-gray-600 mt-1">
                Semantic {groupName.toLowerCase()} for {mode} mode
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.entries(resolvedVariables).map(([key, value]) => (
                <ColorSwatch
                  key={key}
                  label={key.replace(/-/g, ' ')}
                  value={value}
                  description={`${mode} mode`}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Accent Colors Section */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Accent Colors</h3>
          <p className="text-sm text-gray-600 mt-1">
            Decorative colors for charts, badges, and non-semantic elements ({mode} mode)
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.entries(accentColors[mode]).map(([key, value]) => (
            <ColorSwatch
              key={key}
              label={key.replace(/-/g, ' ')}
              value={value}
              description="Unmapped decorative color"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
