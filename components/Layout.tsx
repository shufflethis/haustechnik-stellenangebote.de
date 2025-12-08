import React, { useState } from 'react';
import { Menu, X, Wrench, Phone, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { SectionType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  onNavigate: (section: SectionType) => void;
  activeSection: SectionType;
}

export const Layout: React.FC<LayoutProps> = ({ children, onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Startseite', id: SectionType.HOME },
    { label: 'Stellenangebote', id: SectionType.JOBS },
    { label: 'Für Arbeitgeber', id: SectionType.EMPLOYERS },
    { label: 'Karriere-Ratgeber', id: SectionType.ADVICE },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => onNavigate(SectionType.HOME)}>
              <div className="bg-brand-600 p-2 rounded-lg mr-2">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="block text-xl font-bold text-slate-900 leading-none">haustechnik</span>
                <span className="block text-sm font-medium text-brand-600 leading-none">stellenangebote.de</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? 'text-brand-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button variant="secondary" size="sm">Job inserieren</Button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-500 hover:text-slate-700 p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id 
                      ? 'bg-brand-50 text-brand-700' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button className="w-full">Job inserieren</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Wrench className="h-6 w-6 text-brand-400 mr-2" />
                <span className="text-xl font-bold text-white">haustechnik-stellenangebote.de</span>
              </div>
              <p className="max-w-md text-slate-400 mb-6">
                Deutschlands spezialisierte Jobbörse für die SHK- und Elektrobranche. 
                Wir verbinden Handwerk mit Zukunft.
              </p>
              <div className="flex space-x-4">
                {/* Social Placeholders */}
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">IG</div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">LI</div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors cursor-pointer">FB</div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Für Bewerber</h3>
              <ul className="space-y-2">
                <li><button onClick={() => onNavigate(SectionType.JOBS)} className="hover:text-white transition-colors">Jobs suchen</button></li>
                <li><button onClick={() => onNavigate(SectionType.ADVICE)} className="hover:text-white transition-colors">Karriere-Ratgeber</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Gehaltsvergleich</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
              <ul className="space-y-2">
                <li><button onClick={() => onNavigate(SectionType.LEGAL)} className="hover:text-white transition-colors">Impressum</button></li>
                <li><button onClick={() => onNavigate(SectionType.LEGAL)} className="hover:text-white transition-colors">Datenschutz</button></li>
                <li><button onClick={() => onNavigate(SectionType.LEGAL)} className="hover:text-white transition-colors">AGB</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; 2024 haustechnik-stellenangebote.de. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
               <ShieldCheck className="w-4 h-4" />
               <span>SSL-verschlüsselt & DSGVO-konform</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};