export const categoryKeys = {
  all: ['category'] as const,
  activity: (resumeId: string) => [...categoryKeys.all, 'getActivities', resumeId] as const,
  award: (resumeId: string) => [...categoryKeys.all, 'getAward', resumeId] as const,
  career: (resumeId: string) => [...categoryKeys.all, 'getCareer', resumeId] as const,
  language: (resumeId: string) => [...categoryKeys.all, 'getLanguage', resumeId] as const,
  project: (resumeId: string) => [...categoryKeys.all, 'getProject', resumeId] as const,
  training: (resumeId: string) => [...categoryKeys.all, 'getTraining', resumeId] as const,
};
