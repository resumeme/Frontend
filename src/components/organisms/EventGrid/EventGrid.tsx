import { Grid, GridItem } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { EventGridItem } from '~/components/molecules/EventGridItem';
import { EventListItem } from '~/types/event/eventList';

type EventIdProps = { row?: number; events: EventListItem[] };

const EventGrid = ({ row = 3, events }: EventIdProps) => {
  return (
    <>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: `repeat(${row}, 1fr)`,
        }}
        gap={'2rem'}
      >
        {events.map((eventItem) => (
          <GridItem key={uuidv4()}>
            <EventGridItem event={eventItem} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default EventGrid;
