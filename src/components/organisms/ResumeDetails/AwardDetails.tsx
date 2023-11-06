import { Flex, Text } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Award } from '~/types/award';

const AwardDetails = ({ data }: { data: Award[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map((Award: Award) => {
        return (
          <BorderBox
            key={uuidv4()}
            w={'100%'}
          >
            <Flex direction={'column'}>
              <Text as={'span'}>{Award.certificationTitle}</Text>
              <Text as={'span'}>{Award.acquisitionDate}</Text>
              <Text as={'span'}>{Award.description}</Text>
              <Text as={'span'}>{Award.issuingAuthority}</Text>
              <Text as={'span'}>{Award.link}</Text>
            </Flex>
          </BorderBox>
        );
      })}
    </>
  );
};

export default AwardDetails;
