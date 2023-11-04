import { CreateEvent } from '~/types/event';

const postCreateEvent = async (data: CreateEvent) => {
  data.time.now = new Date().toISOString().substring(0, 16);
  data.time.endDate = new Date(data.time.endDate).toISOString().substring(0, 16);
  // return await resumeMeAxios.post('/v1/events', { ...data });
};

export default postCreateEvent;
