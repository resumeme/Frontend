import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { CheckIcon } from '@chakra-ui/icons';
import { Box, Container } from '@chakra-ui/layout';
import { Card, CardBody, Image, Stack, HStack, Button } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Step, StepIndicator, Stepper, useSteps } from '@chakra-ui/stepper';
import { useForm } from 'react-hook-form';
import { FormInput } from '~/components/molecules/FormInput';
import { FormInputSchema } from '~/types/formInput';

const CommonSignUpPage = () => {
  const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
  ];

  const { activeStep, setActiveStep } = useSteps({ index: 1, count: steps.length });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values: { [key: string]: string }) => {
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
      }, 3000);
    });
  };

  const formInputSchema: FormInputSchema = {
    name: {
      errorTypes: {
        required: { message: '이름을 입력해 주세요.', value: true },
        maxLength: { message: '10자리 이하로 입력해 주세요.', value: 10 },
      },
      label: '이름',
      placeholder: '본명을 입력해주세요.',
    },
    nickName: {
      label: '닉네임',
      placeholder: '닉네임을 입력해주세요',
      errorTypes: {
        required: { message: '닉네임을 입력해 주세요.', value: true },
        maxLength: { message: '10자리 이하로 입력해 주세요.', value: 10 },
        minLength: { message: '2자리 이상 입력해 주세요.', value: 2 },
      },
    },
    phoneNumber: {
      label: '연락처',
      placeholder: '"-"기호 없이 작성해주세요.',
      errorTypes: {
        required: { message: '연락처를 입력해주세요.', value: true },
        maxLength: { message: '9자리 이상 입력해주세요.', value: 11 },
        minLength: { message: '11자리 이하로 입력해주세요.', value: 9 },
      },
    },
    date: {
      type: 'datetime-local',
      label: '시작날짜',
      placeholder: '연도-월-일',
      errorTypes: { required: true },
    },
  };

  return (
    <Container
      p="0"
      w="31.25rem"
      borderRadius="1.0625rem"
      bgColor="#FFF"
      h="53.12rem"
      boxShadow="0px 0px 4px 0px rgba(0, 0, 0, 0.25)"
    >
      <Box
        boxSizing="border-box"
        w="100%"
        pt="1.56rem"
        px="1.37rem"
      >
        <Stepper
          w={'3.25rem'}
          index={activeStep}
          ml={'auto'}
          gap="0"
        >
          {steps.map((_, index) => (
            <Step
              key={index}
              onClick={() => setActiveStep(index)}
            >
              <StepIndicator
                m={0}
                w="0.75rem"
                h="0.75rem"
                p="0"
              />
            </Step>
          ))}
        </Stepper>
      </Box>
      <Stack>
        <form onSubmit={handleSubmit(onSubmit)}>
          {Object.keys(formInputSchema).map((key) => (
            <FormInput
              isRequired={'required' in formInputSchema[key].errorTypes}
              direction="column"
              key={key}
              id={key}
              placeholder={formInputSchema[key].placeholder}
              label={formInputSchema[key].label}
              register={{ ...register(key, { ...formInputSchema[key].errorTypes }) }}
              errors={errors}
              type={formInputSchema[key].type}
            />
          ))}
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>역할 선택 *</FormLabel>
            <HStack mx={'auto'}>
              <Card
                maxW="10.625rem"
                my={0}
              >
                <CardBody>
                  <Stack spacing="3">
                    <HStack>
                      <CheckIcon />
                      <Heading size="md">멘티</Heading>
                    </HStack>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Text>이력서를 관리하고, 자유롭게 피드백을 나눌 수 있습니다.</Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
              <Card maxW="10.625rem">
                <CardBody>
                  <Stack spacing="3">
                    <HStack>
                      <CheckIcon />
                      <Heading size="md">멘티</Heading>
                    </HStack>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Text>이력서를 관리하고, 자유롭게 피드백을 나눌 수 있습니다.</Text>
                  </Stack>
                </CardBody>
                <Divider />
              </Card>
            </HStack>
          </FormControl>

          <Button
            mt={4}
            bgColor="primary.900"
            isLoading={isSubmitting}
            type="submit"
          >
            다음으로
          </Button>
        </form>
      </Stack>
    </Container>
  );
};

export default CommonSignUpPage;
