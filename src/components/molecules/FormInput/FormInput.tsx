import { Input, FormControl, FormLabel, FormErrorMessage, Flex, Box } from '@chakra-ui/react';
import { FormInputProps } from '~/types/formInput';

const FormInput = ({
  id,
  label,
  placeholder,
  register,
  errors,
  direction = 'column',
  isRequired = false,
}: FormInputProps) => {
  return (
    <FormControl
      isInvalid={!!errors[id]}
      w={'100%'}
    >
      <Flex direction={direction}>
        <FormLabel
          w={'6rem'}
          htmlFor={id}
          mx={0}
          mt={'0.5rem'}
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
        <Flex
          w={'100%'}
          direction={'column'}
        >
          <Input
            w={'100%'}
            flexGrow={'1'}
            id={id}
            placeholder={placeholder}
            {...register}
          />
          <FormErrorMessage>{errors[id]?.message as string}</FormErrorMessage>
        </Flex>
      </Flex>
    </FormControl>
  );
};

export default FormInput;
