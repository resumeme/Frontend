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
      {data?.map((company: Career) => {
        return (
          <BorderBox
            key={uuidv4()}
            w={'100%'}
          >
            <div>{company.companyName}</div>
            <div>{company.position}</div>
            <div>{company.skills}</div>
            <Divider />
            {company.duties?.map(({ title, startDate, endDate, description }) => (
              <div key={uuidv4()}>
                <span>{title}</span>
                <span>{startDate}</span>
                <span>{endDate}</span>
                <span>{description}</span>
              </div>
            ))}

            <div>{company.careerStartDate}</div>
            {company.isCurrentlyEmployed && <div>{company.endDate}</div>}
            <div>{company.careerContent}</div>
          </BorderBox>
        );
      })}
    </>
  );
};

export default CareerDetails;
