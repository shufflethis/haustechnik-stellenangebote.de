import React, { useState } from 'react';
import { MapPin, Briefcase, Clock, Euro, Search, Filter } from 'lucide-react';
import { Job } from '../types';
import { Button } from './Button';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Anlagenmechaniker SHK (m/w/d)',
    company: 'WärmeTech GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    salary: '45.000 - 55.000 €',
    tags: ['Wärmepumpe', 'Sanitär', 'Kundendienst'],
    postedAt: 'Vor 2 Tagen'
  },
  {
    id: '2',
    title: 'Elektroniker für Energie- und Gebäudetechnik',
    company: 'SmartHome Solutions',
    location: 'München',
    type: 'Vollzeit',
    salary: '52.000 - 65.000 €',
    tags: ['KNX', 'Loxone', 'Installation'],
    postedAt: 'Heute'
  },
  {
    id: '3',
    title: 'Meister SHK als Projektleiter',
    company: 'Baudienstleistungen Müller',
    location: 'Hamburg',
    type: 'Vollzeit',
    salary: '60.000 € + Firmenwagen',
    tags: ['Führung', 'Planung', 'Büro'],
    postedAt: 'Vor 1 Woche'
  },
  {
    id: '4',
    title: 'Ausbildung 2024: Mechatroniker Kältetechnik',
    company: 'CoolClimate AG',
    location: 'Frankfurt',
    type: 'Ausbildung',
    salary: 'Tariflich',
    tags: ['Karrierestart', 'Klimatechnik'],
    postedAt: 'Gestern'
  },
  {
    id: '5',
    title: 'Servicetechniker Lüftung',
    company: 'AirClean Systems',
    location: 'Stuttgart',
    type: 'Vollzeit',
    salary: 'bis 58.000 €',
    tags: ['RLT-Anlagen', 'Wartung'],
    postedAt: 'Vor 3 Tagen'
  },
  {
    id: '6',
    title: 'Technischer Systemplaner Versorgungs- und Ausrüstungstechnik',
    company: 'Planungsbüro Weber',
    location: 'Remote / Köln',
    type: 'Teilzeit',
    salary: '25 € / Std.',
    tags: ['CAD', 'Revit', 'Planung'],
    postedAt: 'Neu'
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