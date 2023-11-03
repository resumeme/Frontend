import { DateString } from './dateString';

export default interface Career {
  companyName: string;
  position: string;
  skills?: string[];
  duties?: Duty[];
  isCurrentlyEmployed: boolean;
  careerStartDate: DateString;
  endDate?: DateString;
  careerContent: string;
}

export interface Duty {
  title?: string;
  description?: string;
  startDate?: DateString;
  endDate?: DateString;
}

export interface DefaultDuty extends Omit<Duty, 'startDate' | 'endDate'> {
  startDate?: '' | DateString;
  endDate?: '' | DateString;
}

export interface DefaultCareer extends Omit<Career, 'position' | 'duties' | 'careerStartDate'> {
  position: '';
  duties?: DefaultDuty[];
  careerStartDate: '' | DateString;
}
