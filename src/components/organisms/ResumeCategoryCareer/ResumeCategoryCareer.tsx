import { Text } from '@chakra-ui/react';
import { BorderBox } from '~/components/atoms/BorderBox';

const ResumeCategoryCareer = () => {
  return (
    <div style={{ width: '960px', minHeight: '100px' }}>
      <Text
        fontSize={'2xl'}
        fontWeight={'semibold'}
      >
        업무경험
      </Text>
      <BorderBox>hihi</BorderBox>
    </div>
  );
};

export default ResumeCategoryCareer;
