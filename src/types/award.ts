type Award = {
  certificationTitle: string;
  acquisitionDate?: string;
  issuingAuthority?: string;
  link?: string;
  description?: string;
};

type ReadAward = Award & {
  componentId: number;
  reflectFeedback: boolean;
  originComponentId: number | null;
};

export type { Award, ReadAward };
