export type BasicInfo = {
  position: string;
  skills: string[];
  introduce: string;
};

export type BasicInfoForm = {
  skillset: string[] | string;
} & Omit<BasicInfo, 'skillset'>;
