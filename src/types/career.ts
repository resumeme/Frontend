type Career = {
  componentId?: string;
  companyName: string;
  position: string;
  skills?: string[];
  duties?: Duty[];
  currentlyEmployed: boolean;
  careerStartDate: string;
  endDate?: string;
  careerContent: string;
};

export default Career;

type Duty = {
  title?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
};
