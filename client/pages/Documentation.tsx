import { useState } from 'react';
import { IntegrationDocs } from '@/components/IntegrationDocs';
import { colorPrimitives, colorTokens, colorVariables } from '@/lib/design-system';
import { ArrowLeft, BookOpen, Palette, Code2, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: BookOpen },
    { id: 'architecture', title: 'Architecture', icon: Layers3 },
    { id: 'implementation', title: 'Implementation', icon: Code2 },
    { id: 'guidelines', title: 'Guidelines', icon: Palette },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Color System
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Documentation
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-8">
              <h2 className="font-semibold text-gray-900 mb-3">Sections</h2>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {section.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              
              {activeSection === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      Fusion Color System
                    </h1>
                    <p className="text-lg text-gray-600">
                      A comprehensive 3-tier color token structure designed for scalability and consistency across design systems.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Palette className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Primitives</h3>
                      <p className="text-sm text-gray-600 mb-3">Raw hex color values organized by hue and lightness.</p>
                      <div className="text-xs font-mono text-gray-500">
                        {Object.keys(colorPrimitives).length} colors
                      </div>
                    </div>

                    <div className="p-6 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                        <Layers3 className="w-6 h-6 text-emerald-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tokens</h3>
                      <p className="text-sm text-gray-600 mb-3">Semantic mappings that reference primitive colors.</p>
                      <div className="text-xs font-mono text-gray-500">
                        {Object.keys(colorTokens).length} tokens
                      </div>
                    </div>

                    <div className="p-6 border border-gray-200 rounded-lg">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <Code2 className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Variables</h3>
                      <p className="text-sm text-gray-600 mb-3">Contextual usage mapped to semantic tokens.</p>
                      <div className="text-xs font-mono text-gray-500">
                        {Object.keys(colorVariables.light).length} variables per mode
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="font-semibold text-blue-900 mb-2">Key Benefits</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li>• <strong>Scalable:</strong> Easy to add new colors without breaking existing implementations</li>
                      <li>• <strong>Consistent:</strong> Single source of truth for all color values</li>
                      <li>• <strong>Flexible:</strong> Support for light/dark modes and contextual usage</li>
                      <li>• <strong>Framework Agnostic:</strong> Works with any CSS framework or UI library</li>
                      <li>• <strong>Type Safe:</strong> Full TypeScript support with proper type definitions</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeSection === 'architecture' && (
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      System Architecture
                    </h1>
                    <p className="text-lg text-gray-600">
                      Understanding the 3-tier token structure and how each tier builds upon the previous one.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">1</div>
                        <h3 className="text-xl font-semibold text-gray-900">Tier 1: Primitives</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Raw hex color values that serve as the foundation. These are organized by hue (blue, gray, red, etc.) and lightness (50-950).
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <pre className="text-sm"><code>{`'color/blue/500': '#3b82f6'
'color/gray/100': '#f5f5f5'
'color/red/600': '#dc2626'`}</code></pre>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">2</div>
                        <h3 className="text-xl font-semibold text-gray-900">Tier 2: Tokens</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Semantic mappings that reference primitive colors. These provide meaning and intent to color usage.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <pre className="text-sm"><code>{`'primary/500': 'color/blue/500'
'success/600': 'color/emerald/600'
'error/500': 'color/red/500'`}</code></pre>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-purple-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">3</div>
                        <h3 className="text-xl font-semibold text-gray-900">Tier 3: Variables</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Contextual usage mapped to semantic tokens. These define how colors are used in specific UI contexts and support theming.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <pre className="text-sm"><code>{`'text-color/primary': 'neutral/900'    // Light mode
'text-color/primary': 'pure-white'     // Dark mode
'bg-color/surface': 'pure-white'       // Light mode
'bg-color/surface': 'neutral/800'      // Dark mode`}</code></pre>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <h3 className="font-semibold text-amber-900 mb-2">Design Principle</h3>
                    <p className="text-amber-800">
                      <strong>Always use the highest tier possible</strong> - components should use variables, not tokens or primitives directly. 
                      This ensures maximum flexibility for theming and future changes.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === 'implementation' && (
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      Implementation Guide
                    </h1>
                    <p className="text-lg text-gray-600">
                      Code examples and integration patterns for different frameworks and tools.
                    </p>
                  </div>

                  <IntegrationDocs />
                </div>
              )}

              {activeSection === 'guidelines' && (
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      Usage Guidelines
                    </h1>
                    <p className="text-lg text-gray-600">
                      Best practices for using the color system effectively in your projects.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Do's and Don'ts</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-6">
                          <h4 className="font-semibold text-emerald-900 mb-3">✅ Do</h4>
                          <ul className="space-y-2 text-emerald-800 text-sm">
                            <li>• Use variables (Tier 3) in components</li>
                            <li>• Follow the semantic naming conventions</li>
                            <li>• Define new tokens when adding brand colors</li>
                            <li>• Use resolver functions for dynamic access</li>
                            <li>• Implement proper dark mode support</li>
                            <li>• Document custom color additions</li>
                          </ul>
                        </div>

                        <div className="border border-red-200 bg-red-50 rounded-lg p-6">
                          <h4 className="font-semibold text-red-900 mb-3">❌ Don't</h4>
                          <ul className="space-y-2 text-red-800 text-sm">
                            <li>• Use primitives directly in components</li>
                            <li>• Hard-code hex values in your CSS</li>
                            <li>• Skip the token layer for brand colors</li>
                            <li>• Mix different color systems</li>
                            <li>• Override variables without consideration</li>
                            <li>• Ignore accessibility guidelines</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Adding New Colors</h3>
                      
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-2">1. Add Primitive</h4>
                          <pre className="bg-gray-50 rounded p-3 text-sm"><code>{`// Add to colorPrimitives
'color/brand/500': '#your-hex-value'`}</code></pre>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-2">2. Create Token</h4>
                          <pre className="bg-gray-50 rounded p-3 text-sm"><code>{`// Add to colorTokens
'brand/500': 'color/brand/500'`}</code></pre>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-900 mb-2">3. Define Variable</h4>
                          <pre className="bg-gray-50 rounded p-3 text-sm"><code>{`// Add to colorVariables
light: {
  'interactive/brand': 'brand/500'
}`}</code></pre>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Accessibility Considerations</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Ensure sufficient contrast ratios (4.5:1 for normal text, 3:1 for large text)</li>
                        <li>• Test color combinations in both light and dark modes</li>
                        <li>• Provide alternative indicators for color-coded information</li>
                        <li>• Consider color blindness when choosing color combinations</li>
                        <li>• Use the <code className="bg-gray-200 px-1 rounded">getContrastColor</code> utility for dynamic text colors</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
