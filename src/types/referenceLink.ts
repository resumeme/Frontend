type LinkType = 'GITHUB' | 'BLOG' | 'OTHER';

export type ReferenceLink = {
  linkType: LinkType;
  url: string;
};

export type ReadReferenceLink = {
  componentId: number;
  originComponentId?: number;
  reflectFeedback: boolean;
  createdDate: string;
  linkType: LinkType;
  url: string;
};
