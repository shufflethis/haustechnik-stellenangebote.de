export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Ausbildung';
  salary: string;
  tags: string[];
  postedAt: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionType {
  HOME = 'home',
  JOBS = 'jobs',
  EMPLOYERS = 'employers',
  ADVICE = 'advice',
  LEGAL = 'legal'
}