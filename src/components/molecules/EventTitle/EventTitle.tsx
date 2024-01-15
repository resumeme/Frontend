import { Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Label } from '~/components/atoms/Label';
import { OptionsButton } from '~/components/molecules/OptionsButton';
import { Option } from '~/components/molecules/OptionsButton/OptionsButton';
import { appPaths } from '~/config/paths';
import CONSTANTS from '~/constants';
import { EventStatus } from '~/types/eventStatus';

type EventTitle = {
  id: number;
  isEditable: boolean;
  title: string;
  eventStatus: EventStatus;
  remainHours: number;
};

const EventTitle = ({ id, isEditable, title, eventStatus, remainHours }: EventTitle) => {
  const isActive = eventStatus === 'OPEN' || eventStatus === 'REOPEN';
  const navigate = useNavigate();

  const options: Option[] = [{ onClick: () => navigate(appPaths.eventEdit(id)), text: '수정하기' }];

  return (
    <Flex
      p={'.5rem'}
      w={'full'}
      direction={'column'}
      justify={'center'}
      gap={1}
    >
      <Flex
        align={'center'}
        gap={'.75rem'}
      >
        <Label
          fontSize={'1rem'}
          bg={isActive ? 'primary.900' : 'gray.800'}
          textAlign={'center'}
        >
          {CONSTANTS.EVENT_STATUS[eventStatus]}
        </Label>
        <Heading
          maxW={isEditable ? '50% ' : 'full'}
          as={'span'}
          overflow={'hidden'}
          fontSize={'1.5rem'}
          color={'gray.800'}
        >
          {title}
        </Heading>
        <Spacer />
        {isEditable && <OptionsButton options={options} />}
      </Flex>
      {eventStatus === 'OPEN' && remainHours > 0 && (
        <Flex justify={'flex-end'}>
          <Text
            fontSize={'sm'}
            color={'gray.600'}
          >
            모집종료까지 약{' '}
            <Text
              as="span"
              fontWeight={'bold'}
              color={'green.600'}
            >
              {remainHours - 1}시간
            </Text>{' '}
            남았어요!
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default EventTitle;
