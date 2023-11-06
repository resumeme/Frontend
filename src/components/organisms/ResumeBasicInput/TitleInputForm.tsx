import { Box, Flex, Spinner } from '@chakra-ui/react';
import { HiCheck, HiXCircle } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import TitleInput from '~/components/atoms/TitleInput/TitleInput';
import { renderIcon } from '~/components/molecules/ReferenceLinkBox';
import { usePatchResumeTitle } from '~/queries/resume/create/usePatchResumeTitle';

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
    }, 500);
  };

  const renderMutationState = () => {
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
      const errorIcon = renderIcon(HiXCircle, 'xl', {
        color: 'red.600',
      });
      return errorIcon;
    }
    if (isSuccess) {
      const successIcon = renderIcon(HiCheck, 'xl', {
        color: 'primary.900',
      });
      return successIcon;
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
