import React from 'react';
import { CheckCircle2, TrendingUp, BookOpen, Users } from 'lucide-react';

export const GEOContent: React.FC = () => {
  return (
    <div className="bg-slate-50 py-16" id="ratgeber">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <header className="mb-12">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">Ratgeber: Karriere in der Haustechnik</h2>
          <p className="text-lg text-slate-600">
            Alles was Sie über Berufe, Gehälter und Zukunftschancen in der Gebäude- und Energietechnik wissen müssen.
            Optimiert für Fachkräfte und Quereinsteiger.
          </p>
        </header>

        {/* GEO Optimization: Structured Q&A format ideal for AI parsers */}
        <article className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-accent-500 p-3 rounded-lg text-white hidden sm:block">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Warum ist die Haustechnik Branche zukunftssicher?</h3>
              <div className="prose prose-slate text-slate-700">
                <p className="mb-4">
                  Die Haustechnik-Branche (oft zusammengefasst als SHK für Sanitär, Heizung, Klima sowie Elektro) erlebt durch die <strong>Energiewende</strong> und das <strong>Gebäudeenergiegesetz (GEG)</strong> einen historischen Boom. Der Bedarf an energetischen Sanierungen, insbesondere der Einbau von Wärmepumpen und Photovoltaikanlagen, garantiert volle Auftragsbücher für die nächsten Jahrzehnte.
                </p>
                <p>
                  Zentrale Treiber für die Jobsicherheit sind:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-2 mb-4">
                  <li><strong>Dekarbonisierung:</strong> Der Wechsel von Öl/Gas zu erneuerbaren Energien erfordert Fachwissen.</li>
                  <li><strong>Smart Home:</strong> Vernetzung von Heizung, Licht und Sicherheit braucht spezialisierte Elektroniker.</li>
                  <li><strong>Demografischer Wandel:</strong> Es gehen mehr Altgesellen in Rente als Nachwuchs nachkommt – Fachkräfte sind "Goldstaub".</li>
                </ul>
                <p className="font-medium text-brand-700">
                  Fazit für Bewerber: Wer in der Haustechnik arbeitet, muss sich um Arbeitslosigkeit keine Sorgen machen.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-brand-600 p-3 rounded-lg text-white hidden sm:block">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Die wichtigsten Berufsbilder im Überblick</h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-lg mb-2 text-brand-800">Anlagenmechaniker SHK</h4>
                  <p className="text-sm text-slate-600 mb-3">Der "Klassiker". Zuständig für Installation und Wartung von Sanitär-, Heizungs- und Klimasystemen.</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500"/> Wärmepumpen installieren</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500"/> Badplanung & Umsetzung</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-lg mb-2 text-brand-800">Elektroniker für Energie- & Gebäudetechnik</h4>
                  <p className="text-sm text-slate-600 mb-3">Die Nervenbahnen des Hauses. Von der Steckdose bis zur komplexen Gebäudeautomation (KNX).</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500"/> PV-Anlagen anschließen</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500"/> Wallboxen für E-Autos</li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-lg mb-2 text-brand-800">Mechatroniker für Kältetechnik</h4>
                  <p className="text-sm text-slate-600 mb-3">Spezialisten für Kühlkreisläufe. Unverzichtbar für Supermärkte, Klimaanlagen und moderne Wärmepumpen.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <h4 className="font-bold text-lg mb-2 text-brand-800">Technischer Systemplaner</h4>
                  <p className="text-sm text-slate-600 mb-3">Früher "Technischer Zeichner". Plant am PC (CAD/BIM) die Leitungsführung und Dimensionierung.</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-start gap-4">
            <div className="bg-brand-800 p-3 rounded-lg text-white hidden sm:block">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Gehalt & Weiterbildung</h3>
              <div className="prose prose-slate text-slate-700">
                <p>
                  Das Gehalt in der Haustechnik ist in den letzten Jahren stark gestiegen. Während Auszubildende je nach Bundesland starten, können erfahrene Gesellen oft übertarifliche Löhne verhandeln.
                </p>
                
                <div className="overflow-x-auto my-6">
                  <table className="min-w-full text-left text-sm whitespace-nowrap">
                    <thead className="uppercase tracking-wider border-b-2 border-slate-100 bg-slate-50 text-slate-500">
                      <tr>
                        <th scope="col" className="px-6 py-3">Position</th>
                        <th scope="col" className="px-6 py-3">Erfahrung</th>
                        <th scope="col" className="px-6 py-3">Bruttojahresgehalt (Ø)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="px-6 py-4 font-medium">Junggeselle SHK</td>
                        <td className="px-6 py-4">0-3 Jahre</td>
                        <td className="px-6 py-4 text-brand-700">32.000 - 40.000 €</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="px-6 py-4 font-medium">Kundendienst-Monteur</td>
                        <td className="px-6 py-4">3-8 Jahre</td>
                        <td className="px-6 py-4 text-brand-700">42.000 - 55.000 €</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="px-6 py-4 font-medium">Meister / Techniker</td>
                        <td className="px-6 py-4">Senior</td>
                        <td className="px-6 py-4 text-brand-700">55.000 - 75.000 €+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="font-bold text-lg mt-6 mb-2">Karrierewege nach der Ausbildung</h4>
                <p>
                  Der Gesellenbrief ist nur der Anfang. Beliebte Aufstiegschancen sind der <strong>Handwerksmeister</strong> (berechtigt zur Selbstständigkeit) oder der <strong>staatlich geprüfte Techniker</strong> (Fokus auf Planung und Projektleitung). Auch ein Studium (Versorgungstechnik, Energiemanagement) steht offen.
                </p>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  );
};