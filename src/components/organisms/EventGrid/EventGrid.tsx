import { Grid, GridItem } from '@chakra-ui/react';
import { EventGridItem } from '~/components/molecules/EventGridItem';
import { EventListItem } from '~/types/event/eventList';

const EventGrid = ({ events }: { events: EventListItem[] }) => {
  return (
    <>
      <Grid
        templateColumns={'repeat(3, 1fr)'}
        gap={'2rem'}
      >
        {events.map((eventItem) => (
          <GridItem key={eventItem.info.id}>
            <EventGridItem event={eventItem} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default EventGrid;
