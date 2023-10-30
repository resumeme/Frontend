import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Select,
  HStack,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from '~/types/formInput';

const FormInput = ({
  id,
  label,
  placeholder,
  register,
  errors,
  direction = 'column',
  isRequired = false,
  type = 'text',
  control,
}: FormInputProps) => {
  return (
    <FormControl
      isInvalid={!!errors[id]}
      w={'100%'}
    >
      <Stack
        direction={direction}
        spacing={0}
      >
        {label && (
          <FormLabel
            fontWeight={600}
            lineHeight={'normal'}
            fontSize={'1.125rem'}
            w={'6.9375rem'}
            minW={'6.9375rem'}
            htmlFor={id}
            mx={0}
            mt={'0.5rem'}
            color={'gray.700'}
            p={0}
          >
            {label}
            {isRequired && (
              <Box
                as="span"
                color="primary.900"
              >
                {' '}
                *
              </Box>
            )}
          </FormLabel>
        )}

        <VStack
          w={'100%'}
          alignItems={'flex-start'}
        >
          <HStack
            w={'100%'}
            spacing={'0.81rem'}
          >
            <Input
              type={type === 'datetime-local' ? 'date' : type}
              h={'3.125rem'}
              maxW={type === 'date' || type === 'datetime-local' ? '10rem' : '100%'}
              flexGrow={'1'}
              id={id}
              placeholder={placeholder}
              {...register}
            />
            {type === 'datetime-local' && (
              <Controller
                name={`${id}Time`}
                control={control}
                render={({ field }) => (
                  <Select
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
          <FormErrorMessage>{errors[id]?.message as string}</FormErrorMessage>
        </VStack>
      </Stack>
    </FormControl>
  );
};

export default FormInput;
