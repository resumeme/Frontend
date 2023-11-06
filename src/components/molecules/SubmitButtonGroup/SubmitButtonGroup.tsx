import { HStack } from '@chakra-ui/react';
import { Button } from '~/components/atoms/Button';

const SubmitButtonGroup = () => {
  return (
    <HStack>
      <Button
        size={'sm'}
        type="submit"
      >
        저장
      </Button>
      <Button
        size={'sm'}
        variant={'cancel'}
      >
        취소
      </Button>
    </HStack>
  );
};

export default SubmitButtonGroup;
