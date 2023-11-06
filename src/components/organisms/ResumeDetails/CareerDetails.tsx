import { Divider } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import Career from '~/types/career';

const CareerDetails = ({ data }: { data: Career[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map(
        ({
          companyName,
          position,
          skills,
          duties,
          careerStartDate,
          isCurrentlyEmployed,
          endDate,
          careerContent,
        }: Career) => {
          return (
            <BorderBox
              key={uuidv4()}
              w={'100%'}
            >
              <div>{companyName}</div>
              <div>{position}</div>
              <div>{skills}</div>
              <Divider />
              {duties?.map((duty) => (
                <div key={uuidv4()}>
                  <span>{duty.title}</span>
                  <span>{duty.startDate}</span>
                  <span>{duty.endDate}</span>
                  <span>{duty.description}</span>
                </div>
              ))}

              <div>{careerStartDate}</div>
              {isCurrentlyEmployed && <div>{endDate}</div>}
              <div>{careerContent}</div>
            </BorderBox>
          );
        },
      )}
    </>
  );
};

export default CareerDetails;
