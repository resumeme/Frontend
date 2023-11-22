type LinkType = 'GITHUB' | 'BLOG' | 'OTHER';

type ReferenceLink = {
  linkType: LinkType;
  url: string;
};

type ReadReferenceLink = {
  componentId: number;
  originComponentId?: number;
  reflectFeedback: boolean;
  createdDate: string;
  linkType: LinkType;
  url: string;
};

export type { ReferenceLink, ReadReferenceLink };
