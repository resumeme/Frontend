import { useState } from 'react';
import { SignUpCommonTemplate } from '~/components/templates/SignUpCommonTemplate';
import { SignUpCompleteTemplate } from '~/components/templates/SignUpCompleteTemplate';
import { SignUpMenteeTemplate } from '~/components/templates/SignUpMenteeTemplate';
import { SignUpMentorTemplate } from '~/components/templates/SignUpMentorTemplate';
import { usePostOAuthMenteeSignUp } from '~/queries/usePostOAuthMenteeSignUp';
import { usePostOAuthMentorSignUp } from '~/queries/usePostOAuthMentorSignUp';
import { useCacheKeyStore } from '~/stores/useCacheKeyStore';
import { SignUpRole, SignUpCommon } from '~/types/signUp';

export type Step = 'COMMON' | SignUpRole | 'MENTOR_COMPLETE' | 'MENTEE_COMPLETE';

const SignUpPage = () => {
  const [step, setStep] = useState<Step>('COMMON');
  const [commonData, setCommonData] = useState<SignUpCommon>();
  const { mutate: signUpMenteeMutate, isSuccess: isSignUpMenteeSuccess } =
    usePostOAuthMenteeSignUp();
  const { mutate: signUpMentorMutate, isSuccess: isSignUpMentorSuccess } =
    usePostOAuthMentorSignUp();
  const cacheKey = useCacheKeyStore((state) => state.cacheKey);
  const resetCacheKey = useCacheKeyStore((state) => state.resetCacheKey);
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
      {step === 'ROLE_PENDING' && (
        <SignUpMentorTemplate
          onNext={(data) => {
            if (commonData && data) {
              signUpMentorMutate({ ...data, requiredInfo: commonData, cacheKey });
            }
            if (isSignUpMentorSuccess) {
              resetCacheKey();
              setStep('MENTOR_COMPLETE');
            }
            return;
          }}
        />
      )}
      {step === 'ROLE_MENTEE' && (
        <SignUpMenteeTemplate
          onNext={(data) => {
            if (commonData && data) {
              signUpMenteeMutate({ ...data, requiredInfo: commonData, cacheKey });
            }
            if (isSignUpMenteeSuccess) {
              resetCacheKey();
              setStep('MENTEE_COMPLETE');
            }
          }}
        />
      )}
      {step === 'MENTOR_COMPLETE' && <SignUpCompleteTemplate role="ROLE_PENDING" />}
      {step === 'MENTEE_COMPLETE' && <SignUpCompleteTemplate role="ROLE_MENTEE" />}
    </>
  );
};

export default SignUpPage;
