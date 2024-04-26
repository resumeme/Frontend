export type BasicInfo = {
  title?: string;
  position: string;
  skills: string[];
  introduce: string;
  ownerInfo?: {
    id: number;
    name: string;
    phoneNumber: string;
  };
};
