import { Box, Flex, Spinner, Tooltip } from '@chakra-ui/react';
import { useState } from 'react';
import { HiCheck, HiXCircle } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import TitleInput from '~/components/atoms/TitleInput/TitleInput';
import { renderIcon } from '~/components/molecules/ReferenceLinkBox';
import { usePatchResumeTitle } from '~/queries/resume/create/usePatchResumeTitle';

const StateTooltip = (state: 'success' | 'error' | 'empty') => {
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
    empty: {
      icon: HiXCircle,
      color: 'red.600',
      message: '제목을 입력해 주세요',
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

type TitleInputFormProps = {
  defaultValue: string | undefined;
};

const TitleInputForm = ({ defaultValue }: TitleInputFormProps) => {
  const { resumeId } = useParams();
  const { mutate: patchResumeTitleMutate, isPending, isSuccess, isError } = usePatchResumeTitle();
  const navigate = useNavigate();
  const [empty, setEmpty] = useState(false);

  let debounceTimeout: NodeJS.Timeout | null = null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!resumeId) {
      alert('존재하지 않는 이력서입니다.');
      navigate(-1);
      return;
    }

    const resumeTitle = e.target.value.trim();

    if (!resumeTitle) {
      e.target.value = '';
      return;
    }

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    debounceTimeout = setTimeout(() => {
      if (resumeTitle.length < 1) {
        setEmpty(true);
        return;
      } else {
        setEmpty(false);
      }
      patchResumeTitleMutate({ resumeId, resumeTitle });
    }, 1000);
  };

  const renderMutationState = () => {
    if (empty) {
      return StateTooltip('empty');
    }
    if (isPending) {
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
        defaultValue={defaultValue ?? ''}
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
