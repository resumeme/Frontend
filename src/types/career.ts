export type Career = {
  componentId?: number;
  companyName: string;
  position: string;
  skills?: string[];
  duties?: Duty[];
  currentlyEmployed: boolean;
  careerStartDate: string;
  endDate?: string;
  careerContent: string;
};

type Duty = {
  title?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
};
