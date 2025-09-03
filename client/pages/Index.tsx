import { useState } from 'react';
import { PrimitivesSection, TokensSection, VariablesSection } from '@/components/ColorPalette';
import { IntegrationDocs } from '@/components/IntegrationDocs';
import { fusionColorSystem, mantineColorTheme } from '@/lib/design-system';
import { Palette, Download, Code, Layers, Sun, Moon } from 'lucide-react';

type Section = 'primitives' | 'tokens' | 'variables' | 'export';

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>('primitives');
  const [darkMode, setDarkMode] = useState(false);

  const downloadJSON = (data: any, filename: string) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const sections = [
    {
      id: 'primitives' as const,
      title: 'Primitives',
      icon: Palette,
      description: 'Raw hex color values organized by hue',
    },
    {
      id: 'tokens' as const,
      title: 'Tokens',
      icon: Layers,
      description: 'Semantic mappings to primitive colors',
    },
    {
      id: 'variables' as const,
      title: 'Variables',
      icon: Code,
      description: 'Contextual usage mapped to tokens',
    },
    {
      id: 'export' as const,
      title: 'Export',
      icon: Download,
      description: 'Download color system in various formats',
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`border-b transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Palette className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Fusion Color System
                </h1>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  3-Tier Token Structure Design System
                </p>
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 space-y-1">
            <div className={`p-4 rounded-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h2 className={`font-semibold mb-3 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Design System
              </h2>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors duration-200 ${
                        isActive
                          ? darkMode
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                          : darkMode
                            ? 'text-gray-300 hover:bg-gray-700'
                            : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <div className="flex-1">
                        <div className="font-medium">{section.title}</div>
                        <div className={`text-xs ${
                          isActive
                            ? darkMode ? 'text-blue-200' : 'text-blue-600'
                            : darkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {section.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Quick Stats */}
            <div className={`p-4 rounded-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className={`font-medium mb-2 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                System Overview
              </h3>
              <div className="space-y-2 text-sm">
                <div className={`flex justify-between transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span>Primitives</span>
                  <span className="font-mono">66</span>
                </div>
                <div className={`flex justify-between transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span>Tokens</span>
                  <span className="font-mono">66</span>
                </div>
                <div className={`flex justify-between transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span>Variables</span>
                  <span className="font-mono">40</span>
                </div>
                <div className={`flex justify-between transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <span>Light/Dark</span>
                  <span className="text-emerald-500">✓</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className={`rounded-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } border ${darkMode ? 'border-gray-700' : 'border-gray-200'} p-6`}>
              
              {activeSection === 'primitives' && (
                <div className="space-y-6">
                  <div>
                    <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Color Primitives
                    </h2>
                    <p className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Tier 1: Raw hex color values organized by hue and lightness. These are the foundation of our color system.
                    </p>
                  </div>
                  <PrimitivesSection />
                </div>
              )}

              {activeSection === 'tokens' && (
                <div className="space-y-6">
                  <div>
                    <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Semantic Tokens
                    </h2>
                    <p className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Tier 2: Semantic mappings that reference primitive colors. These provide meaning and purpose to colors.
                    </p>
                  </div>
                  <TokensSection />
                </div>
              )}

              {activeSection === 'variables' && (
                <div className="space-y-6">
                  <div>
                    <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Contextual Variables
                    </h2>
                    <p className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Tier 3: Contextual usage mapped to semantic tokens. These define how colors are used in specific UI contexts.
                    </p>
                  </div>
                  <VariablesSection />
                </div>
              )}

              {activeSection === 'export' && (
                <div className="space-y-6">
                  <div>
                    <h2 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Export Color System
                    </h2>
                    <p className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Download the color system in various formats for use in your projects.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className={`p-6 rounded-lg border transition-colors duration-300 ${
                      darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                          <Code className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className={`font-semibold transition-colors duration-300 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            Fusion Schema
                          </h3>
                          <p className={`text-sm transition-colors duration-300 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            Complete system with all tiers
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => downloadJSON(fusionColorSystem, 'fusion-color-system.json')}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                      >
                        Download Fusion JSON
                      </button>
                    </div>

                    <div className={`p-6 rounded-lg border transition-colors duration-300 ${
                      darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                          <Layers className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className={`font-semibold transition-colors duration-300 ${
                            darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            Mantine Theme
                          </h3>
                          <p className={`text-sm transition-colors duration-300 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            Ready for Mantine UI library
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => downloadJSON(mantineColorTheme, 'mantine-color-theme.json')}
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                      >
                        Download Mantine JSON
                      </button>
                    </div>
                  </div>

                  <div className={`p-6 rounded-lg border transition-colors duration-300 ${
                    darkMode ? 'bg-gray-700 border-gray-600' : 'bg-yellow-50 border-yellow-200'
                  }`}>
                    <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Integration Notes
                    </h3>
                    <ul className={`space-y-1 text-sm transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <li>• Fusion schema includes empty spacing and typography arrays as required</li>
                      <li>• Mantine theme is configured for both light and dark mode support</li>
                      <li>• All colors follow the 3-tier structure: Primitives → Tokens → Variables</li>
                      <li>• Variables tier includes contextual mappings for light and dark modes</li>
                    </ul>
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
