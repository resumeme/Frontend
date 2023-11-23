type Activity = {
  activityName: string;
  startDate: string;
  endDate: string;
  inProgress: boolean;
  link?: string;
  description?: string;
};

type ReadActivity = Activity & {
  componentId: number;
  reflectFeedback: boolean;
  originComponentId: number | null;
};

export type { Activity, ReadActivity };
