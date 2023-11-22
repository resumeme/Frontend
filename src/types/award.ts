type Award = {
  certificationTitle: string;
  acquisitionDate?: string;
  issuingAuthority?: string;
  link?: string;
  description?: string;
};

type ReadAward = Award & { componentId: number };

export type { Award, ReadAward };
