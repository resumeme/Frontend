import { Divider, HStack, FormControl } from '@chakra-ui/react';
import { UseFormRegister, FieldValues, FieldErrors, Control, useWatch } from 'react-hook-form';
import { FormDateInput } from '~/components/molecules/FormDateInput';
import { getOneYearLater } from '~/utils/getOneYearLater';

type TermInputProps = {
  startDateName: string;
  endDateName: string;
  isEndDateDisabled?: boolean;
  isRequired?: boolean;
  includeTime?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  control: Control;
};

const TermInput = ({
  startDateName,
  endDateName,
  isEndDateDisabled = false,
  isRequired = false,
  includeTime = false,
  register,
  errors,
  control,
}: TermInputProps) => {
  /*TODO - isEndDateDisabled 상태 변화 시 리렌더링되도록 수정하기 */
  const startDate = useWatch({ name: startDateName, control });
  return (
    <HStack flexGrow={1}>
      <FormControl isInvalid={!!errors[startDateName]}>
        <FormDateInput
          name={startDateName}
          type={includeTime ? 'datetime-local' : 'date'}
          register={{
            ...register(startDateName, {
              required: isRequired ? '시작일을 입력하세요.' : false,
              max: {
                value: getOneYearLater({ includeTime }),
                message: '최대 1년 후까지만 입력이 가능합니다.',
              },
            }),
          }}
          errors={errors}
        />
      </FormControl>
      <Divider
        w={'1rem'}
        borderColor={'gray.400'}
      />
      <FormControl isInvalid={!!errors[endDateName]}>
        <FormDateInput
          name={endDateName}
          type={includeTime ? 'datetime-local' : 'date'}
          isDisabled={isEndDateDisabled}
          register={{
            ...register(endDateName, {
              required: !isEndDateDisabled && isRequired ? '종료일을 입력하세요.' : false,
              min: { value: startDate, message: '시작일 이후의 날짜를 입력해주세요.' },
            }),
          }}
          errors={errors}
        />
      </FormControl>
    </HStack>
  );
};

export default TermInput;
