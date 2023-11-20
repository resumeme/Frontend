type LinkType = 'GITHUB' | 'BLOG' | 'OTHER';

type ReferenceLink = {
  linkType: LinkType;
  url: string;
  componentId?: number;
  originComponentId?: number | null;
  createdDate?: string;
  reflectFeedback?: boolean;
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
