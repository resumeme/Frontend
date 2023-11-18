import { Grid, GridItem } from '@chakra-ui/react';
import { EventGridItem } from '~/components/molecules/EventGridItem';

//FIXME - 데이터 타입 정의하기
const EventGrid = ({ events }: { events: any[] }) => {
  return (
    <>
      <Grid
        templateColumns={'repeat(3, 1fr)'}
        gap={'2rem'}
      >
        {events.map((eventItem) => (
          <GridItem key={eventItem.info.id}>
            <EventGridItem
              eventInfo={eventItem.info}
              mentorInfo={eventItem.mentorInfo}
            />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default EventGrid;
