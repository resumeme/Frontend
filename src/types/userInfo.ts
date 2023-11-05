export type BasicInfo = {
  position: string;
  skillset: string[];
  introduce: string;
};

export type BasicInfoForm = {
  skillset: string[] | string;
} & Omit<BasicInfo, 'skillset'>;
