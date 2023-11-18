import { Grid, GridItem } from '@chakra-ui/react';
import { EventGridItem } from '~/components/molecules/EventGridItem';

const EventGrid = () => {
  return (
    <Grid
      templateColumns={'repeat(3, 1fr)'}
      gap={'2rem'}
    >
      <GridItem>
        <EventGridItem />
      </GridItem>
      <GridItem>
        <EventGridItem />
      </GridItem>
      <GridItem>
        <EventGridItem />
      </GridItem>
      <GridItem>
        <EventGridItem />
      </GridItem>
    </Grid>
  );
};

export default EventGrid;
