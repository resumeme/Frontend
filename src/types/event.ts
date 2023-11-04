export type CreateEvent = {
  info: {
    title: string;
    content: string;
    maximumAttendee: number;
  };
  time: {
    now: string;
    openDateTime: string;
    closeDateTime: string;
    endDate: string;
  };
  positions: string[];
};
