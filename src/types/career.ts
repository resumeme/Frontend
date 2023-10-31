import { DateString } from './dateString';
import { Position } from './position';

export default interface Career {
  companyName: string;
  position: Position;
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
  position: '' | Position;
  duties?: DefaultDuty[];
  careerStartDate: '' | DateString;
}
