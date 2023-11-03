import { useMutation } from '@tanstack/react-query';
import { resumeMeAxios } from '~/api/axios';

export type CreatePostProps = {
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

const createEvent = async (data: CreatePostProps) => {
  return await resumeMeAxios.post('/api/v1/events', { ...data });
};

export const useCreateEvent = () => {
  return useMutation({ mutationFn: createEvent });
};
