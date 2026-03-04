import React, { useState } from 'react';
import { MapPin, Briefcase, Clock, Euro, Search, Filter } from 'lucide-react';
import { Job } from '../types';
import { Button } from './Button';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Mitarbeiter Haustechnik (m/w/d)',
    company: 'Evangelisch-Lutherischer Kirchenkreis Hamburg-Ost Kirchliches Verwaltungszentrum',
    location: 'Hamburg',
    type: 'Vollzeit',
    tags: ['Hauswart/in/Haustechniker/in'],
    postedAt: '2026-03-04'
  },
  {
    id: '2',
    title: 'Mitarbeiter:in Haustechnik',
    company: 'Globus Handelshof St. Wendel GmbH & Co. KG BS Grünstadt',
    location: 'Grünstadt',
    type: 'Vollzeit',
    tags: ['Hauswart/in/Haustechniker/in'],
    postedAt: '2026-03-03'
  },
  {
    id: '3',
    title: 'Mitarbeiter:in Haustechnik',
    company: 'Globus Handelshof St. Wendel GmbH & Co. KG Betriebsstätte Grünstadt',
    location: 'Grünstadt',
    type: 'Vollzeit',
    tags: ['Hauswart/in/Haustechniker/in'],
    postedAt: '2026-03-03'
  },
  {
    id: '4',
    title: 'Mitarbeiter (m/w/d) für die Haustechnik',
    company: 'Roland Klinik gGmbH',
    location: 'Bremen',
    type: 'Vollzeit',
    tags: ['Hauswart/in/Haustechniker/in'],
    postedAt: '2026-03-02'
  },
  {
    id: '5',
    title: 'Leitung Haustechnik (m/w/d)',
    company: 'Roland Klinik gGmbH',
    location: 'Bremen',
    type: 'Vollzeit',
    tags: ['Hauswart/in/Haustechniker/in'],
    postedAt: '2026-03-02'
  },
  {
    id: '6',
    title: 'Haustechnik',
    company: 'Limes Schlossklinik Mecklenburgische Schweiz',
    location: 'Teterow',
    type: 'Vollzeit',
    tags: ['Hauswart/in/Haustechniker/in'],
    postedAt: '2026-03-01'
  },
  {
    id: '7',
    title: 'Mitarbeiter Haustechnik (m/w/d)',
    company: 'Hotel-Restaurant ERBPRINZ GmbH',
    location: 'Ettlingen',
    type: 'Vollzeit',
    tags: ['Hauswart/in/Haustechniker/in'],
    postedAt: '2026-03-01'
  },
  {
    id: '8',
    title: 'Mitarbeiter Haustechnik (m/w/d)',
    company: 'Hotel ZUGBRÜCKE Grenzau GmbH',
    location: 'Höhr-Grenzhausen',
    type: 'Vollzeit',
    tags: ['Hauswart/in/Haustechniker/in'],
    postedAt: '2026-03-01'
  },
  {
    id: '9',
    title: 'Elektroniker (w/m/d) Haustechnik',
    company: 'Apleona GmbH',
    location: 'Donauwörth',
    type: 'Vollzeit',
    tags: ['Elektroniker/in - Energie- und Gebäudetechnik'],
    postedAt: '2026-03-01'
  },
  {
    id: '10',
    title: 'Lagerlogistik / Haustechnik (m/w/d)',
    company: 'Charlottenklinik für Augenheilkunde',
    location: 'Stuttgart',
    type: 'Vollzeit',
    tags: ['Hauswart/in/Haustechniker/in'],
    postedAt: '2026-02-27'
  },
  {
    id: '11',
    title: 'Projektleiter - Haustechnik (m/w/d)',
    company: 'Tempton Personaldienstleistungen GmbH NL Bautzen',
    location: 'Görlitz, Neiße',
    type: 'Vollzeit',
    tags: ['Projektleiter/in'],
    postedAt: '2026-02-27'
  },
  {
    id: '12',
    title: 'Schlosser (m/w/d) Haustechnik',
    company: 'avanti GmbH',
    location: 'München',
    type: 'Vollzeit',
    tags: ['Betriebsschlosser/in'],
    postedAt: '2026-02-26'
  },
  {
    id: '13',
    title: 'Elektroniker Haustechnik (m/w/d)',
    company: 'GeAT mbH',
    location: 'Eisenach, Thüringen',
    type: 'Vollzeit',
    tags: ['Elektroanlagenmonteur/in'],
    postedAt: '2026-02-25'
  },
  {
    id: '14',
    title: 'Mitarbeiter:in Haustechnik',
    company: 'Globus Handelshof GmbH & Co. KG Dutenhofen',
    location: 'Wetzlar',
    type: 'Vollzeit',
    tags: ['Hauswart/in/Haustechniker/in'],
    postedAt: '2026-02-25'
  },
  {
    id: '15',
    title: 'Mitarbeiter der Haustechnik (m/w/d)',
    company: 'Reha-Klinik St. Peter-Ording gGmbH',
    location: 'Sankt Peter-Ording',
    type: 'Vollzeit',
    tags: ['Maler/in und Lackierer/in - Maler/in'],
    postedAt: '2026-02-24'
  },
  {
    id: '16',
    title: 'Haustechnik Minijob (m/w/d)',
    company: 'ZAR Leipzig GmbH',
    location: 'Leipzig',
    type: 'Vollzeit',
    tags: ['Hausmeister/in'],
    postedAt: '2026-02-23'
  },
  {
    id: '17',
    title: 'Mitarbeiter Haustechnik (m/w/d)',
    company: 'Lebenshilfewerk Ilmenau/Rudolstadt e.V.',
    location: 'Rudolstadt',
    type: 'Vollzeit',
    tags: ['Elektroinstallateur/in'],
    postedAt: '2026-02-23'
  },
  {
    id: '18',
    title: 'Vertriebsinnendienst Haustechnik (m/w/d)',
    company: 'persona service AG & Co. KG',
    location: 'Lippstadt',
    type: 'Vollzeit',
    tags: ['Vertriebstechniker/in'],
    postedAt: '2026-02-20'
  },
  {
    id: '19',
    title: 'Leitung Haustechnik (w/m/d)',
    company: 'ATOS Klinik Fleetinsel Hamburg GmbH & Co. KG',
    location: 'Hamburg',
    type: 'Vollzeit',
    tags: ['Bereichsleiter/in'],
    postedAt: '2026-02-19'
  },
  {
    id: '20',
    title: 'Bundesfreiwilligendienst – Haustechnik (m/w/d)',
    company: 'Caritasverb. f.d. Diöz.EI e.V. Caritas-Seniorenheim St. Pius',
    location: 'Ingolstadt, Donau',
    type: 'Vollzeit',
    tags: ['Hauswart/in/Haustechniker/in'],
    postedAt: '2026-02-19'
  },
  {
    id: '21',
    title: 'Außendienstmitarbeiter Haustechnik (m/w/d)',
    company: 'Grünbeck AG',
    location: 'Hamburg',
    type: 'Vollzeit',
    tags: ['Außendienstmitarbeiter/in'],
    postedAt: '2026-02-18'
  },
  {
    id: '22',
    title: 'Außendienstmitarbeiter - Haustechnik (w/m/d)',
    company: 'Bär & Ollenroth KG Brandenburg',
    location: 'Brandenburg an der Havel',
    type: 'Vollzeit',
    tags: ['Außendienstmitarbeiter/in'],
    postedAt: '2026-02-18'
  },
  {
    id: '23',
    title: 'Schlosser (m/w/d) Haustechnik',
    company: 'avanti GmbH',
    location: 'Friedrichshafen',
    type: 'Vollzeit',
    tags: ['Betriebsschlosser/in'],
    postedAt: '2026-02-16'
  },
  {
    id: '24',
    title: 'Außendienstmitarbeiter (m/w/d) Haustechnik',
    company: 'Öngel, Ahmet',
    location: 'München',
    type: 'Vollzeit',
    tags: ['Außendienstmitarbeiter/in'],
    postedAt: '2026-02-15'
  },
  {
    id: '25',
    title: 'Außendienstmitarbeiter (m/w/d) Haustechnik',
    company: 'Öngel, Ahmet',
    location: 'Xanten',
    type: 'Vollzeit',
    tags: ['Außendienstmitarbeiter/in'],
    postedAt: '2026-02-15'
  }
];

export const JobBoard: React.FC = () => {
  const [filter, setFilter] = useState('');

  const filteredJobs = MOCK_JOBS.filter(job => 
    job.title.toLowerCase().includes(filter.toLowerCase()) ||
    job.location.toLowerCase().includes(filter.toLowerCase()) ||
    job.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <section className="py-16 bg-white" id="job-board">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">Aktuelle Top-Jobs</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Finden Sie die Position, die zu Ihnen passt. Vom Auszubildenden bis zum Ingenieur.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Jobtitel, Firma oder Stichwort (z.B. Wärmepumpe)" 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            <div className="relative md:w-1/3">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Ort oder PLZ" 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <Button size="lg" className="md:w-auto w-full">
              Jobs finden
            </Button>
          </div>
        </div>

        {/* Job List */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-brand-300 hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-brand-900 group-hover:text-brand-600 transition-colors">
                      {job.title}
                    </h3>
                    <span className="bg-brand-50 text-brand-700 text-xs px-2 py-1 rounded-full font-medium border border-brand-100">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-lg text-slate-700 font-medium mb-3">{job.company}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Euro className="w-4 h-4" /> {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {job.postedAt}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center md:self-center">
                  <Button variant="outline" className="w-full md:w-auto">
                    Details ansehen
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              <p>Keine Jobs gefunden, die Ihren Kriterien entsprechen.</p>
            </div>
          )}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="ghost" className="text-brand-700 font-semibold">
            Alle 1.402 Stellenangebote anzeigen &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
};