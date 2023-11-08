import { Box, Flex, Spinner, Tooltip } from '@chakra-ui/react';
import { HiCheck, HiXCircle } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import TitleInput from '~/components/atoms/TitleInput/TitleInput';
import { renderIcon } from '~/components/molecules/ReferenceLinkBox';
import { usePatchResumeTitle } from '~/queries/resume/create/usePatchResumeTitle';

const StateTooltip = (state: 'success' | 'error') => {
  const STATE_STYLE = {
    success: {
      icon: HiCheck,
      color: 'primary.900',
      message: '저장되었어요 :)',
    },
    error: {
      icon: HiXCircle,
      color: 'red.600',
      message: '저장에 실패했어요 :(',
    },
  };

  const stateIcon = renderIcon(STATE_STYLE[state].icon, 'xl', {
    color: STATE_STYLE[state].color,
  });

  return (
    <Tooltip
      shouldWrapChildren
      hasArrow
      placement="top-end"
      label={STATE_STYLE[state].message}
      aria-label="tooltip"
      borderRadius={'xl'}
      fontSize={'sm'}
      px={3}
      bg={STATE_STYLE[state].color}
      color={'gray.100'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {stateIcon}
    </Tooltip>
  );
};

const TitleInputForm = () => {
  const { id: resumeId } = useParams();
  const { mutate, isPending, isSuccess, isError } = usePatchResumeTitle();
  const navigate = useNavigate();

  let debounceTimeout: NodeJS.Timeout | null = null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!resumeId) {
      alert('존재하지 않는 이력서입니다.');
      navigate(-1);
      return;
    }

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
      const resumeTitle = e.target.value;
      mutate({ resumeId, resumeTitle });
    }, 1000);
  };

  const renderMutationState = () => {
    if (isPending) {
      /* TODO pending 상태일 때, Spinner가 돌아가는 최소 시간을 보장하는 로직을 추가해보자 */
      return (
        <Spinner
          thickness="2px"
          speed="0.7s"
          emptyColor="gray.300"
          color="primary.700"
          size="sm"
        />
      );
    }
    if (isError) {
      return StateTooltip('error');
    }
    if (isSuccess) {
      return StateTooltip('success');
    }
    return null;
  };

  return (
    <Flex
      w={'full'}
      justify={'center'}
      align={'center'}
      position={'relative'}
      mb={10}
    >
      <TitleInput
        id="resumeTitle"
        position={'relative'}
        fontWeight={'semibold'}
        fontSize={'3xl'}
        autoComplete="off"
        spellCheck="false"
        onChange={handleInputChange}
        _focusVisible={{
          borderBottomColor: `${isError ? 'red' : 'primary.900'}`,
        }}
      />
      <Box
        className="box"
        position={'absolute'}
        right={'0px'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        {renderMutationState()}
      </Box>
    </Flex>
  );
};

export default TitleInputForm;
