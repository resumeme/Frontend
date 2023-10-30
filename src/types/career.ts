import { DateString } from './dateString';

export default interface Career {
  companyName: string;
  position: 'BACK' | 'FRONT' | 'MOBILE' | 'DEVOPS';
  skills: string[];
  duties: Duty[];
  isCurrentlyEmployed: boolean;
  careerStartDate: string;
  endDate: DateString;
  careerContent: string;
}

interface Duty {
  title: string;
  description: string;
  startDate: DateString;
  endDate: DateString;
}
