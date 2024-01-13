export type Training = {
  organization: string;
  major: string;
  degree: string;
  admissionDate: string;
  graduationDate?: string;
  gpa?: number;
  maxGpa?: number;
  explanation?: string;
};

export type ReadTraining = Training & {
  componentId: number;
  reflectFeedback: boolean;
  originComponentId: number | null;
};
