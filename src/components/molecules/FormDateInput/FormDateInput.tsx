import { Input, Select, InputProps, HStack } from '@chakra-ui/react';
import { Control, Controller, UseFormRegisterReturn } from 'react-hook-form';

type FormDateInputProps = {
  dateRegister: UseFormRegisterReturn;
  timeRegister?: UseFormRegisterReturn;
  type?: 'date' | 'datetime-local';
  control: Control;
} & Omit<InputProps, 'type'>;

const FormDateInput = ({
  control,
  id,
  type = 'date',
  dateRegister,
  timeRegister,
  ...props
}: FormDateInputProps) => {
  return (
    <HStack>
      <Input
        {...props}
        type="date"
        flexGrow={'1'}
        {...dateRegister}
      />
      {type === 'datetime-local' && (
        <Controller
          name={`${id}Time`}
          control={control}
          render={({ field }) => (
            <Select
              flexShrink={0}
              {...timeRegister}
              border="1px solid"
              borderColor="gray.300"
              w={'fit-content'}
              placeholder="시간"
              _placeholder={{ color: 'gray.400' }}
              color={'gray.900'}
              h={'3.125rem'}
              {...field}
            >
              {[...Array(24).keys()].map((hour) => (
                <option
                  key={hour + 1}
                  value={`${hour + 1}시`}
                >
                  {hour + 1}시
                </option>
              ))}
            </Select>
          )}
        />
      )}
    </HStack>
  );
};

export default FormDateInput;
