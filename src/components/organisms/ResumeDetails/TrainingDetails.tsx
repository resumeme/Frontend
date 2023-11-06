import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Training } from '~/types/training';

const TraningDetails = ({ data }: { data: Training[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map((training: Training) => {
        return (
          <BorderBox
            key={uuidv4()}
            w={'100%'}
          >
            <div>{training.organization}</div>
          </BorderBox>
        );
      })}
    </>
  );
};

export default TraningDetails;
