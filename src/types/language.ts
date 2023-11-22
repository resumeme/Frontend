type Language = {
  language: string;
  examName: string;
  scoreOrGrade: string;
};

type ReadLanguage = Language & { componentId: number };

export type { Language, ReadLanguage };
