import { v4 as uuidv4 } from 'uuid';
import Career from '~/types/career';

const CareerDetails = ({ data }: { data: Career[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map((company: Career) => {
        return (
          <div key={uuidv4()}>
            <div>{company.companyName}</div>
          </div>
        );
      })}
    </>
  );
};

export default CareerDetails;
