import { Flex, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { MdAccountCircle, MdPostAdd } from 'react-icons/md';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Button } from '~/components/atoms/Button';
import { Step } from '~/pages/ResumePages/ManagementResumePage/ManagementResumePage';
import { usePostCreateResume } from '~/queries/resume/create/usePostCreateResume';

type ResumeNavigatorProps = {
  pageStep: Step;
  onStep: (step: Step) => void;
};

type ButtonInfo = {
  step?: Step;
  text: string;
  icon: IconType;
  onClick: () => void;
};

const ResumeNavigator = ({ pageStep, onStep }: ResumeNavigatorProps) => {
  const { mutate: createResume } = usePostCreateResume();

  const BUTTONS_INFO: ButtonInfo[] = [
    {
      step: 'MY_RESUME',
      text: '내 이력서',
      icon: MdAccountCircle,
      onClick: () => onStep('MY_RESUME'),
    },
    {
      step: 'FEEDBACK',
      text: '첨삭 관리',
      icon: RiQuestionAnswerFill,
      onClick: () => onStep('FEEDBACK'),
    },
    {
      text: '새 이력서',
      icon: MdPostAdd,
      onClick: createResume,
    },
  ];

  return (
    <BorderBox p={'1.5rem 5.5rem'}>
      {BUTTONS_INFO && (
        <Flex
          w={'full'}
          justify={'space-between'}
        >
          {BUTTONS_INFO.map(({ text, icon, step, onClick }) => (
            <Button
              w={'fit-content'}
              bg={'0'}
              key={uuidv4()}
              type="button"
              onClick={onClick}
            >
              <Flex
                direction={'column'}
                justify={'center'}
                align={'center'}
                gap={'0.12rem'}
              >
                <Icon
                  color={step ? (step === pageStep ? 'primary.900' : 'gray.700') : 'gray.700'}
                  w={'2.375rem'}
                  h={'2.375rem'}
                  as={icon}
                />
                <Text
                  letterSpacing={-0.5}
                  fontWeight={400}
                  fontSize={'0.875rem'}
                  color={step ? (step === pageStep ? 'primary.900' : 'gray.700') : 'gray.700'}
                >
                  {text}
                </Text>
              </Flex>
            </Button>
          ))}
        </Flex>
      )}
    </BorderBox>
  );
};

export default ResumeNavigator;
