import { useState } from 'react';
import { SignUpCommonTemplate } from '~/components/templates/SignUpCommonTemplate';
import { SignUpMenteeCompleteTemplate } from '~/components/templates/SignUpMenteeCompleteTemplate';
import { SignUpMenteeTemplate } from '~/components/templates/SignUpMenteeTemplate';
import { SignUpMentorTemplate } from '~/components/templates/SignUpMentorTemplate';
import { SignUpRole, SignUpMentee, SignUpMentor, SignUpCommon } from '~/types/signUp';

export type Step = 'COMMON' | SignUpRole | 'MENTEE_COMPLETE' | 'MENTOR_COMPLETE';

const SignUpPage = () => {
  const [step, setStep] = useState<Step>('COMMON');
  const [commonData, setCommonData] = useState<SignUpCommon<SignUpRole>>();
  const [menteeData, setMenteeData] = useState<Omit<SignUpMentee, 'requiredInfo'>>();
  const [mentorData, setMentorData] = useState<Omit<SignUpMentor, 'requiredInfo'>>();
  /*FIXME - 사용하지 않는 변수 lint에러 방지용 로그 .. 삭제 필요! */
  console.log(commonData, menteeData, setMenteeData, mentorData, setMentorData);
  return (
    <>
      {step === 'COMMON' && (
        <SignUpCommonTemplate
          onNext={(data) => {
            setStep(data.role);
            setCommonData(data);
          }}
        />
      )}
      {/**TODO - onNext에 각각 menteeData, mentorData를 바디로 api 호출 (commonData 삽입해서) */}
      {step === 'ROLE_PENDING' && (
        <SignUpMentorTemplate
          onNext={(data) => {
            setStep('MENTOR_COMPLETE');
            if (data) {
              setMentorData(data);
            }
          }}
        />
      )}
      {step === 'ROLE_MENTEE' && (
        <SignUpMenteeTemplate
          onNext={(data) => {
            setStep('MENTEE_COMPLETE');
            if (data) {
              setMenteeData(data);
            }
          }}
        />
      )}
      {step === 'MENTEE_COMPLETE' && <SignUpMenteeCompleteTemplate />}
    </>
  );
};

export default SignUpPage;
