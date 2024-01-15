export type Language = {
  language: string;
  examName: string;
  scoreOrGrade: string;
};

export type ReadLanguage = Language & {
  componentId: number;
  reflectFeedback: boolean;
  originComponentId: number | null;
};
