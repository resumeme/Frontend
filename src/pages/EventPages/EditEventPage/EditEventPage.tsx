import { useParams } from 'react-router-dom';
import { CreateEventTemplate } from '~/components/templates/CreateEventTemplate';
import { useGetEventDetail } from '~/queries/event/details/useGetEventDetail';
import { CreateEvent } from '~/types/event/event';

const EditEventPage = () => {
  const { eventId = '' } = useParams();

  const {
    data: { content, maximumCount, positions, timeInfo, title },
  } = useGetEventDetail({ eventId });

  const defaultValues = {
    info: { content, maximumAttendee: maximumCount, title },
    positions,
    time: { ...timeInfo, endDate: timeInfo.endDate.slice(0, 10) },
  } as CreateEvent;

  return (
    <CreateEventTemplate
      eventId={eventId}
      isEdit
      defaultValues={defaultValues}
    />
  );
};

export default EditEventPage;
