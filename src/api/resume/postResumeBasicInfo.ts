import { resumeMeAxios } from '~/api/axios';
import { BasicInfo } from '~/types/basicInfo';

const postResumeBasicInfo = async (data: BasicInfo) => {
  //Todo: endpoint나오면 변경
  const { data: basicInfo } = await resumeMeAxios.post('/v1/resume/profile', { ...data });

  return basicInfo;
};

export default postResumeBasicInfo;
