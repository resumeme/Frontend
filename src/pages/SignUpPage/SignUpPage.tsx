import { useToast } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUpCommonTemplate } from '~/components/templates/SignUpCommonTemplate';
import { SignUpCompleteTemplate } from '~/components/templates/SignUpCompleteTemplate';
import { SignUpMenteeTemplate } from '~/components/templates/SignUpMenteeTemplate';
import { SignUpMentorTemplate } from '~/components/templates/SignUpMentorTemplate';
import { appPaths } from '~/config/paths';
import useUser from '~/hooks/useUser';
import { usePostOAuthSignUp } from '~/queries/usePostOAuthSignUp';
import { useCacheKeyStore } from '~/stores/useCacheKeyStore';
import { SignUpRole, SignUpCommon } from '~/types/signUp';

export type Step = 'COMMON' | SignUpRole | 'MENTOR_COMPLETE' | 'MENTEE_COMPLETE';

const SignUpPage = () => {
  const [step, setStep] = useState<Step>('COMMON');
  const [commonData, setCommonData] = useState<SignUpCommon>();
  const { mutate: signUpMutate } = usePostOAuthSignUp();
  const cacheKey = useCacheKeyStore((state) => state.cacheKey);
  const resetCacheKey = useCacheKeyStore((state) => state.resetCacheKey);
  const { initialUser } = useUser();

  const signUpSuccessCallback = (accessToken: string, refreshToken: string, role: SignUpRole) => {
    const nextStep = role === 'ROLE_MENTEE' ? 'MENTEE_COMPLETE' : 'MENTOR_COMPLETE';
    resetCacheKey();
    setStep(nextStep);
    if (accessToken && refreshToken) {
      initialUser(accessToken, refreshToken);
    }
  };

  const toast = useToast();
  const navigate = useNavigate();
  useEffect(() => {
    if (!cacheKey) {
      toast({
        description: '소셜 로그인을 먼저 해주세요.',
      });
      navigate(appPaths.signIn);
      return;
    }
  }, [cacheKey, navigate, toast]);

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
            if (!commonData) {
              setStep('COMMON');
              return;
            }
            signUpMutate(
              { body: { ...data, requiredInfo: commonData, cacheKey }, role: 'ROLE_PENDING' },
              {
                onSuccess: ({ accessToken, refreshToken }) =>
                  signUpSuccessCallback(accessToken, refreshToken, 'ROLE_PENDING'),
              },
            );
          }}
        />
      )}
      {step === 'ROLE_MENTEE' && (
        <SignUpMenteeTemplate
          onNext={(data) => {
            if (!commonData) {
              setStep('COMMON');
              return;
            }
            signUpMutate(
              { body: { ...data, requiredInfo: commonData, cacheKey }, role: 'ROLE_MENTEE' },
              {
                onSuccess: ({ accessToken, refreshToken }) =>
                  signUpSuccessCallback(accessToken, refreshToken, 'ROLE_MENTEE'),
              },
            );
          }}
        />
      )}
      {step === 'MENTOR_COMPLETE' && <SignUpCompleteTemplate role="ROLE_PENDING" />}
      {step === 'MENTEE_COMPLETE' && <SignUpCompleteTemplate role="ROLE_MENTEE" />}
    </>
  );
};

export default SignUpPage;
