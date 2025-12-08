import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { JobBoard } from './components/JobBoard';
import { GEOContent } from './components/GEOContent';
import { AIAssistant } from './components/AIAssistant';
import { Button } from './components/Button';
import { ArrowRight, Check, Star, Zap } from 'lucide-react';
import { SectionType } from './types';

// Placeholder for Legal Section
const LegalSection = () => (
  <div className="max-w-3xl mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold mb-8">Impressum</h1>
    <div className="prose prose-slate">
      <p>Angaben gemäß § 5 TMG</p>
      <p><strong>Betreiber:</strong><br />Musterfirma GmbH<br />Handwerkerstraße 1<br />12345 Musterstadt</p>
      <p><strong>Kontakt:</strong><br />Telefon: +49 123 456789<br />E-Mail: info@haustechnik-stellenangebote.de</p>
      <p><strong>Registereintrag:</strong><br />Eintragung im Handelsregister.<br />Registergericht: Amtsgericht Musterstadt<br />Registernummer: HRB 12345</p>
      <p><strong>Umsatzsteuer-ID:</strong><br />Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE123456789</p>
      <h2 className="text-xl font-bold mt-8 mb-4">Haftungsausschluss (Disclaimer)</h2>
      <p>Dies ist eine Demo-Anwendung für Portfolio-Zwecke. Keine echten Stellenangebote.</p>
    </div>
  </div>
);

// Homepage Component
const HomeSection = ({ onNavigate }: { onNavigate: (s: SectionType) => void }) => (
  <>
    {/* Hero Section */}
    <div className="relative bg-brand-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Background Haustechnik" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/90 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-800/50 rounded-full px-4 py-1.5 border border-brand-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            <span className="text-sm font-medium text-brand-100">Über 1.400 neue Jobs diese Woche</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Ihre Karriere in der <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-yellow-400">Haustechnik</span>
          </h1>
          <p className="text-xl text-brand-100 mb-8 leading-relaxed">
            Verbinden Sie handwerkliches Können mit modernster Technologie. Finden Sie Top-Arbeitgeber in SHK, Kältetechnik und Gebäudeautomation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" onClick={() => onNavigate(SectionType.JOBS)}>
              Stellenangebote finden
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white" onClick={() => onNavigate(SectionType.EMPLOYERS)}>
              Für Arbeitgeber
            </Button>
          </div>
        </div>
      </div>
    </div>

    {/* Features Grid */}
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Warum haustechnik-stellenangebote.de?</h2>
          <p className="mt-4 text-lg text-slate-600">Wir sind spezialisiert. Wir verstehen den Unterschied zwischen TGA-Planer und Kundendienstmonteur.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              icon: <Zap className="w-10 h-10 text-accent-500" />, 
              title: "Schnelle Vermittlung", 
              text: "Unser Algorithmus matcht Qualifikationen sofort. Keine langen Wartezeiten auf Rückmeldungen." 
            },
            { 
              icon: <Star className="w-10 h-10 text-accent-500" />, 
              title: "Top Arbeitgeber", 
              text: "Vom lokalen Familienbetrieb bis zum Industriekonzern. Geprüfte Unternehmen mit fairen Konditionen." 
            },
            { 
              icon: <Check className="w-10 h-10 text-accent-500" />, 
              title: "KI-Unterstützung", 
              text: "Nutzen Sie unseren KI-Assistenten Tim für Lebenslauf-Checks und Karriereberatung in Echtzeit." 
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Preview Content Section */}
    <GEOContent />

    {/* Employer CTA */}
    <div className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Fachkräftemangel? Wir haben die Lösung.</h2>
          <p className="text-brand-100 text-lg mb-8">
            Erreichen Sie gezielt qualifizierte Handwerker und Techniker, die aktiv oder passiv auf Jobsuche sind.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3"><div className="bg-brand-700 p-1 rounded-full"><Check className="w-4 h-4"/></div> Hohe Sichtbarkeit bei Google & Co.</li>
            <li className="flex items-center gap-3"><div className="bg-brand-700 p-1 rounded-full"><Check className="w-4 h-4"/></div> KI-optimierte Stellenanzeigen</li>
            <li className="flex items-center gap-3"><div className="bg-brand-700 p-1 rounded-full"><Check className="w-4 h-4"/></div> Zugriff auf Bewerberdatenbank</li>
          </ul>
          <Button variant="secondary" onClick={() => onNavigate(SectionType.EMPLOYERS)}>
            Preise & Pakete ansehen
          </Button>
        </div>
        <div className="md:w-1/2">
            <img src="https://picsum.photos/600/400?grayscale" alt="Team Meeting" className="rounded-2xl shadow-2xl border border-slate-700 opacity-80" />
        </div>
      </div>
    </div>
  </>
);

const EmployersSection = () => (
    <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Arbeitgeber-Bereich</h1>
            <p className="text-xl text-slate-600 mb-12">Schalten Sie Ihre Anzeige in weniger als 5 Minuten.</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {['Basis', 'Pro', 'Enterprise'].map((plan, i) => (
                    <div key={plan} className={`border rounded-2xl p-8 ${i === 1 ? 'border-brand-500 shadow-xl ring-2 ring-brand-500/20' : 'border-slate-200'}`}>
                        <h3 className="text-2xl font-bold mb-4">{plan}</h3>
                        <p className="text-3xl font-bold mb-6">{i === 0 ? '99 €' : i === 1 ? '249 €' : 'Auf Anfrage'}</p>
                        <Button variant={i === 1 ? 'primary' : 'outline'} className="w-full">Wählen</Button>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>(SectionType.HOME);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case SectionType.HOME:
        return <HomeSection onNavigate={setActiveSection} />;
      case SectionType.JOBS:
        return <JobBoard />;
      case SectionType.ADVICE:
        return <GEOContent />;
      case SectionType.EMPLOYERS:
        return <EmployersSection />;
      case SectionType.LEGAL:
        return <LegalSection />;
      default:
        return <HomeSection onNavigate={setActiveSection} />;
    }
  };

  return (
    <HashRouter>
      <Layout onNavigate={setActiveSection} activeSection={activeSection}>
        {renderContent()}
        <AIAssistant />
      </Layout>
    </HashRouter>
  );
}

export default App;