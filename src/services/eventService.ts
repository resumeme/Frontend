import { useMutation } from '@tanstack/react-query';
// import { resumeMeAxios } from '~/api/axios';

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

const createEvent = async (data: CreateEvent) => {
  data.time.now = new Date().toISOString().substring(0, 16);
  data.time.endDate = new Date(data.time.endDate).toISOString().substring(0, 16);
  // return await resumeMeAxios.post('/v1/events', { ...data });
};

export const useCreateEvent = () => {
  return useMutation({ mutationFn: createEvent });
};
