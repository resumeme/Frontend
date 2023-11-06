import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Training } from '~/types/training';

const TraningDetails = ({ data }: { data: Training[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map(
        ({
          organization,
          major,
          degree,
          admissionDate,
          graduationDate,
          gpa,
          maxGpa,
          explanation,
        }: Training) => {
          return (
            <BorderBox
              key={uuidv4()}
              w={'100%'}
            >
              <div>{organization}</div>
              <div>{major}</div>
              <div>{degree}</div>
              <div>{admissionDate}</div>
              <div>{graduationDate}</div>
              <div>{`${gpa} / ${maxGpa}`}</div>
              <div>{explanation}</div>
            </BorderBox>
          );
        },
      )}
    </>
  );
};

export default TraningDetails;
