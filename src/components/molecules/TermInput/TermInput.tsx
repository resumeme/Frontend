import { Divider, HStack, FormControl } from '@chakra-ui/react';
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  Control,
  useWatch,
  Path,
  FieldError,
} from 'react-hook-form';
import { FormDateInput } from '~/components/molecules/FormDateInput';
import { getOneYearLater } from '~/utils/getOneYearLater';

type TermInputProps<T extends FieldValues> = {
  startDateName: Path<T>;
  endDateName: Path<T>;
  isEndDateDisabled?: boolean;
  isRequired?: boolean;
  includeTime?: boolean;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  control: Control<T>;
};

const TermInput = <T extends FieldValues>({
  startDateName,
  endDateName,
  isEndDateDisabled = false,
  isRequired = false,
  includeTime = false,
  register,
  errors,
  control,
}: TermInputProps<T>) => {
  /*TODO - isEndDateDisabled 상태 변화 시 리렌더링되도록 수정하기 */
  const startDate = useWatch({ name: startDateName, control });

  const getNestedError = (errors: FieldErrors<T>, path: string): FieldError | undefined => {
    return path.split('.').reduce((nestedError, path) => {
      if (typeof nestedError === 'object' && nestedError !== null && path in nestedError) {
        return (nestedError = (nestedError as FieldValues)[path]);
      }
    }, errors) as FieldError | undefined;
  };

  return (
    <HStack flexGrow={1}>
      <FormControl isInvalid={!!getNestedError(errors, startDateName)}>
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
          errors={getNestedError(errors, startDateName)}
        />
      </FormControl>
      <Divider
        w={'2.5rem'}
        borderColor={'gray.400'}
      />
      <FormControl isInvalid={!!getNestedError(errors, endDateName)}>
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
          errors={getNestedError(errors, endDateName)}
        />
      </FormControl>
    </HStack>
  );
};

export default TermInput;
