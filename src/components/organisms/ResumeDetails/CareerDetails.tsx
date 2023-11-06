import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import Career from '~/types/career';

const CareerDetails = ({ data }: { data: Career[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map((company: Career) => {
        return (
          <BorderBox
            key={uuidv4()}
            w={'100%'}
          >
            <div>{company.companyName}</div>
          </BorderBox>
        );
      })}
    </>
  );
};

export default CareerDetails;
