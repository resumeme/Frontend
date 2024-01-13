export type Career = {
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

export type ReadCareer = Career & {
  componentId: number;
  reflectFeedback: boolean;
  originComponentId: number | null;
};
