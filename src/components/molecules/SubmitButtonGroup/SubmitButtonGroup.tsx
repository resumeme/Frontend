import { HStack } from '@chakra-ui/react';
import { Button } from '~/components/atoms/Button';

type SubmitButtonGroupProps = {
  onCancel: () => void;
};

const SubmitButtonGroup = ({ onCancel }: SubmitButtonGroupProps) => {
  return (
    <>
      <HStack>
        <Button
          size={'sm'}
          variant={'cancel'}
          onClick={onCancel}
        >
          취소
        </Button>
        <Button
          size={'sm'}
          type="submit"
        >
          저장
        </Button>
      </HStack>
    </>
  );
};

export default SubmitButtonGroup;
