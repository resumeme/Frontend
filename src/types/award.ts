export type Award = {
  certificationTitle: string;
  acquisitionDate?: string;
  issuingAuthority?: string;
  link?: string;
  description?: string;
};

export type ReadAward = Award & {
  componentId: number;
  reflectFeedback: boolean;
  originComponentId: number | null;
};
