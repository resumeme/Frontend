// import { useParams } from 'react-router-dom';
// import { v4 as uuidv4 } from 'uuid';
// import { BorderBox } from '~/components/atoms/BorderBox';
// import { useGetResumeCareer } from '~/queries/resume/details/useGetResumeCareer';
// import Career from '~/types/career';

const CareerDetail = () => {
  /**TODO - api 서버 오류 해결 후 주석 풀 것 */
  // const { id: resumeId } = useParams() as { id: string };
  // const { data } = useGetResumeCareer({ resumeId });
  // if (!data) {
  //   return;
  // }
  // return (
  //   <>
  //     {data?.map((company: Career) => {
  //       return (
  //         <BorderBox key={uuidv4()}>
  //           <div>{company.companyName}</div>
  //         </BorderBox>
  //       );
  //     })}
  //   </>
  // );
  /**TODO - api 서버 오류 해결 후 삭제할 것 */
  return <></>;
};

export default CareerDetail;
