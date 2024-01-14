import { Flex } from '@chakra-ui/react';
import { Button } from '~/components/atoms/Button';
import { ButtonProps } from '~/components/atoms/Button/Button';

type SubmitButtonGroupProps = {
  onCancel: () => void;
} & Pick<ButtonProps, 'size'>;

const SubmitButtonGroup = ({ size = 'sm', onCancel }: SubmitButtonGroupProps) => {
  return (
    <>
      <Flex
        align={'center'}
        gap={2}
      >
        <Button
          size={size}
          variant={'cancel'}
          onClick={onCancel}
        >
          취소
        </Button>
        <Button
          size={size}
          type="submit"
        >
          저장
        </Button>
      </Flex>
    </>
  );
};

export default SubmitButtonGroup;
