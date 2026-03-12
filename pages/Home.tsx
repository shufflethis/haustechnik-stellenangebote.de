// HR-UPDATER: v1.0
import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { JobBoard } from '../components/JobBoard';
import { GEOContent } from '../components/GEOContent';
import { AIAssistant } from '../components/AIAssistant';
import { Button } from '../components/Button';
import { ArrowRight, Check, Star, Zap, ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { SectionType } from '../types';

// Placeholder for Legal Section
const LegalSection = () => (
  <div className="max-w-3xl mx-auto px-4 py-16">
    <h1 className="text-3xl font-bold mb-8">Impressum</h1>
    <div className="prose prose-slate">
      <p>Angaben gemäß § 5 TMG</p>
      <p><strong>Betreiber:</strong><br />Social Media Venture GmbH<br />Schliemannstraße 23<br />10437 Berlin</p>
      <p><strong>Kontakt:</strong><br />Telefon: +49 123 456789<br />E-Mail: info@socialmediaventure.com</p>
      <p><strong>Registereintrag:</strong><br />Eintragung im Handelsregister.<br />Registergericht: Amtsgericht Musterstadt<br />Registernummer: HRB 162557 B</p>
      <p><strong>Umsatzsteuer-ID:</strong><br />Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE298885799</p>
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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-brand-800/50 rounded-full px-4 py-1.5 border border-brand-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            <span className="text-sm font-medium text-brand-100">Über 1.400 neue Jobs diese Woche</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">
            Ihre Karriere in der <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-yellow-400">Haustechnik</span>
          </h1>
          <p className="text-base md:text-xl text-brand-100 mb-6 md:mb-8 leading-relaxed">
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
    
    {/* Mobile-Prominent Job Listings Preview */}
    <div className="py-12 md:py-20 bg-white" id="jobs-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Aktuelle Haustechnik-Stellenangebote</h2>
          <p className="text-base md:text-lg text-slate-600">Die neuesten Jobs -- jetzt bewerben und durchstarten.</p>
        </div>
        <div className="grid gap-3 md:gap-4">
          {[
            { title: 'Mechatroniker (m/w/d) Haustechnik', company: 'WEISS Personalmanagement GmbH', location: 'Rodgau', date: '07.03.2026' },
            { title: 'Leiter/in Haustechnik (m/w/d)', company: 'StrandGut Resort GmbH & Co. KG', location: 'Sankt Peter-Ording', date: '05.03.2026' },
            { title: 'Sachgebietsleiter/-in Haustechnik (m/w/d)', company: 'Hansestadt Wismar', location: 'Wismar', date: '05.03.2026' },
            { title: 'Bauleiter (m/w/d) Haustechnik', company: 'IMPLABAU GmbH', location: 'Neubrandenburg', date: '05.03.2026' },
            { title: 'Teamleiter Haustechnik (m/w/d)', company: 'Recrutis Consulting GmbH', location: 'Eschweiler', date: '04.03.2026' },
            { title: 'Elektroniker (w/m/d) Haustechnik', company: 'Apleona GmbH', location: 'Donauwörth', date: '01.03.2026' },
          ].map((job, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 md:p-6 hover:border-brand-300 hover:shadow-md transition-all cursor-pointer">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-brand-900 truncate">{job.title}</h3>
                  <p className="text-sm md:text-base text-slate-600 font-medium">{job.company}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs md:text-sm text-slate-500">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                    <span>{job.date}</span>
                  </div>
                </div>
                <div className="flex-shrink-0 mt-2 sm:mt-0">
                  <span className="inline-block bg-brand-50 text-brand-700 text-xs font-medium px-3 py-1 rounded-full border border-brand-100">Vollzeit</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 md:mt-8 text-center">
          <Button size="lg" variant="primary" onClick={() => onNavigate(SectionType.JOBS)}>
            Alle Stellenangebote anzeigen
          </Button>
        </div>
      </div>
    </div>

    {/* Geo SEO: Haustechnik Jobs in deutschen Städten */}
    <div className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Haustechnik-Jobs nach Stadt</h2>
          <p className="text-base md:text-lg text-slate-600">Finden Sie Stellenangebote in Ihrer Region -- in ganz Deutschland.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {[
            { city: 'Berlin', count: 87 },
            { city: 'Hamburg', count: 64 },
            { city: 'München', count: 92 },
            { city: 'Köln', count: 53 },
            { city: 'Frankfurt am Main', count: 71 },
            { city: 'Stuttgart', count: 68 },
            { city: 'Düsseldorf', count: 45 },
            { city: 'Leipzig', count: 38 },
            { city: 'Dortmund', count: 34 },
            { city: 'Essen', count: 31 },
            { city: 'Bremen', count: 28 },
            { city: 'Dresden', count: 36 },
            { city: 'Hannover', count: 42 },
            { city: 'Nürnberg', count: 39 },
            { city: 'Duisburg', count: 25 },
            { city: 'Bochum', count: 22 },
            { city: 'Wuppertal', count: 19 },
            { city: 'Bielefeld', count: 21 },
            { city: 'Bonn', count: 27 },
            { city: 'Mannheim', count: 33 },
            { city: 'Karlsruhe', count: 29 },
            { city: 'Augsburg', count: 24 },
            { city: 'Wiesbaden', count: 26 },
            { city: 'Münster', count: 23 },
            { city: 'Freiburg', count: 18 },
            { city: 'Aachen', count: 20 },
            { city: 'Kiel', count: 17 },
            { city: 'Rostock', count: 15 },
            { city: 'Erfurt', count: 16 },
            { city: 'Regensburg', count: 14 },
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => onNavigate(SectionType.JOBS)}
              className="bg-white border border-slate-200 rounded-xl p-3 md:p-4 hover:border-brand-300 hover:shadow-md transition-all text-left"
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                <span className="text-sm md:text-base font-semibold text-slate-900 truncate">{item.city}</span>
              </div>
              <p className="text-xs text-slate-500">{item.count} Stellenangebote</p>
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Preview Content Section */}
    <GEOContent />

    {/* FAQ Section */}
    <div className="py-12 md:py-16 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Häufig gestellte Fragen (FAQ)</h2>
          <p className="text-base md:text-lg text-slate-600">Antworten auf die wichtigsten Fragen rund um Haustechnik-Jobs.</p>
        </div>
        <div className="space-y-4">
          {[
            {
              q: 'Was versteht man unter Haustechnik?',
              a: 'Haustechnik umfasst alle technischen Anlagen und Systeme innerhalb von Gebäuden. Dazu gehören Sanitärtechnik, Heizungstechnik, Klimatechnik (SHK), Elektroinstallation, Gebäudeautomation und Lüftungstechnik. Fachkräfte in der Haustechnik sorgen für den Einbau, die Wartung und die Instandhaltung dieser Systeme.'
            },
            {
              q: 'Welche Berufe gehören zur Haustechnik?',
              a: 'Typische Berufe sind Anlagenmechaniker/in SHK, Elektroniker/in für Energie- und Gebäudetechnik, Mechatroniker/in für Kältetechnik, Technischer Systemplaner, Haustechniker/in, Facility Manager, TGA-Planer und Kundendienstmonteur/in. Auch Meister, Techniker und Ingenieure der Versorgungstechnik zählen dazu.'
            },
            {
              q: 'Was verdient man in der Haustechnik?',
              a: 'Das Gehalt variiert je nach Qualifikation, Region und Berufserfahrung. Junggesellen im SHK-Bereich verdienen durchschnittlich 32.000-40.000 Euro brutto im Jahr. Erfahrene Kundendienstmonteure liegen bei 42.000-55.000 Euro, Meister und Techniker bei 55.000-75.000 Euro oder mehr. In Ballungszentren wie München, Stuttgart oder Frankfurt sind die Gehälter tendenziell höher.'
            },
            {
              q: 'Wie finde ich einen guten Job in der Haustechnik?',
              a: 'Nutzen Sie spezialisierte Jobportale wie haustechnik-stellenangebote.de, die sich ausschließlich auf die Branche konzentrieren. Hier finden Sie täglich neue Stellenangebote von geprüften Arbeitgebern. Pflegen Sie Ihr Bewerberprofil, halten Sie Ihren Lebenslauf aktuell und nutzen Sie unseren KI-Assistenten für individuelle Karrieretipps.'
            },
            {
              q: 'Werden Haustechniker in Zukunft noch gebraucht?',
              a: 'Ja, mehr denn je. Die Energiewende, das Gebäudeenergiegesetz (GEG), der Ausbau erneuerbarer Energien (Wärmepumpen, Photovoltaik), Smart-Home-Technologien und der demografische Wandel sorgen für einen historisch hohen Bedarf an Fachkräften. Experten rechnen mit einem anhaltenden Fachkräftemangel bis weit über 2030 hinaus.'
            },
            {
              q: 'Kann ich als Quereinsteiger in die Haustechnik wechseln?',
              a: 'Ja, der Quereinstieg ist möglich, insbesondere in verwandten handwerklichen Berufen. Viele Betriebe bieten Umschulungen und Weiterbildungen an. Besonders gefragt sind Quereinsteiger mit Erfahrung in Elektrotechnik, Metallbau oder allgemeinem Handwerk. Auch IHK-Zertifikatskurse können den Einstieg erleichtern.'
            },
          ].map((faq, idx) => (
            <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <summary className="flex items-center justify-between cursor-pointer p-4 md:p-6 text-left font-semibold text-slate-900 text-sm md:text-base hover:bg-slate-100 transition-colors list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4 group-open:hidden" />
                <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0 ml-4 hidden group-open:block" />
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-sm md:text-base text-slate-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>

    {/* Karriere-Info Haustechnik */}
    <div className="py-12 md:py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Karriere in der Haustechnik -- Ihr Weg zum Erfolg</h2>
        <div className="prose prose-slate max-w-none text-slate-700">
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Die Haustechnik-Branche bietet hervorragende Karrierechancen mit langfristiger Sicherheit. Ob als Anlagenmechaniker SHK, Elektroniker für Energie- und Gebäudetechnik oder als TGA-Ingenieur -- Fachkräfte der Haustechnik sind auf dem deutschen Arbeitsmarkt so gefragt wie nie zuvor.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Mit der Energiewende und dem Gebäudeenergiegesetz (GEG) steigt der Bedarf an qualifizierten Haustechnikern kontinuierlich. Der Einbau von Wärmepumpen, die Installation von Photovoltaikanlagen, die Planung intelligenter Gebäudesteuerungen und die energetische Sanierung von Bestandsgebäuden schaffen tausende neue Arbeitsplätze pro Jahr.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Die Karriereleiter in der Haustechnik bietet zahlreiche Stufen: Nach der Ausbildung können Sie sich zum Meister oder staatlich geprüften Techniker weiterqualifizieren. Auch ein Studium der Versorgungstechnik oder des Facility Managements steht Ihnen offen. Viele Fachkräfte nutzen die Meisterprüfung als Sprungbrett in die Selbstständigkeit.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Auf haustechnik-stellenangebote.de finden Sie täglich aktualisierte Stellenangebote in allen Bereichen der Haustechnik -- von der Ausbildung bis zur Führungsposition, vom kleinen Familienbetrieb bis zum internationalen Industriekonzern. Starten Sie jetzt Ihre Karriere in einer der zukunftssichersten Branchen Deutschlands.
          </p>
        </div>
      </div>
    </div>

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

function Home() {
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

export default Home;