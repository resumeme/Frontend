import { Divider, FormControl, Flex } from '@chakra-ui/react';
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
  isOpenDateDisabled?: boolean;
  isEndDateDisabled?: boolean;
  isRequired?: boolean;
  includeTime?: boolean;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  control: Control<T>;
  future?: boolean;
};

const TermInput = <T extends FieldValues>({
  startDateName,
  endDateName,
  isOpenDateDisabled = false,
  isEndDateDisabled = false,
  isRequired = false,
  includeTime = false,
  register,
  errors,
  control,
  future = false,
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
    <Flex
      align={'center'}
      gap={2}
      flexGrow={1}
    >
      <FormControl isInvalid={!!getNestedError(errors, startDateName)}>
        <FormDateInput
          future={future}
          name={startDateName}
          type={includeTime ? 'datetime-local' : 'date'}
          isDisabled={isOpenDateDisabled}
          register={{
            ...register(startDateName, {
              required: !isOpenDateDisabled && isRequired ? '시작일을 입력해주세요.' : false,
              max: {
                value: getOneYearLater({ includeTime }),
                message: '최대 1년 후까지만 입력이 가능합니다.',
              },
            }),
          }}
          error={getNestedError(errors, startDateName)}
        />
      </FormControl>
      <Divider
        w={'2.5rem'}
        borderColor={'gray.400'}
      />
      <FormControl isInvalid={!!getNestedError(errors, endDateName)}>
        <FormDateInput
          min={startDate}
          name={endDateName}
          type={includeTime ? 'datetime-local' : 'date'}
          isDisabled={isEndDateDisabled}
          register={{
            ...register(endDateName, {
              required: !isEndDateDisabled && isRequired ? '종료일을 입력해주세요.' : false,
              min: { value: startDate, message: '시작일 이후의 날짜를 입력해주세요.' },
            }),
          }}
          error={getNestedError(errors, endDateName)}
        />
      </FormControl>
    </Flex>
  );
};

export default TermInput;
