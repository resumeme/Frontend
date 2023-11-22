type Training = {
  organization: string;
  major: string;
  degree: string;
  admissionDate: string;
  graduationDate?: string;
  gpa?: number;
  maxGpa?: number;
  explanation?: string;
};

type ReadTraining = Training & { componentId: number };

export type { Training, ReadTraining };
