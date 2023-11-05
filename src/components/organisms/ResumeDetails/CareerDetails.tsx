import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useGetResumeCareer } from '~/queries/resume/details/useGetResumeCareer';
import Career from '~/types/career';

const CareerDetail = () => {
  const { id: resumeId } = useParams() as { id: string };

  const { data } = useGetResumeCareer({ resumeId });
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

export default CareerDetail;
