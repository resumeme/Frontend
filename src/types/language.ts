type Language = {
  language: string;
  examName: string;
  scoreOrGrade: string;
};

type ReadLanguage = Language & {
  componentId: number;
  reflectFeedback: boolean;
  originComponentId: number | null;
};

export type { Language, ReadLanguage };
