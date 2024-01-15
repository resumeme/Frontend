export type Activity = {
  activityName: string;
  startDate: string;
  endDate: string;
  inProgress: boolean;
  link?: string;
  description?: string;
};

export type ReadActivity = Activity & {
  componentId: number;
  reflectFeedback: boolean;
  originComponentId: number | null;
};
