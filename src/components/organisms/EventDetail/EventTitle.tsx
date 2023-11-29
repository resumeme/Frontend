import { Flex, Heading, Spacer } from '@chakra-ui/react';
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
};

const EventTitle = ({ id, isEditable, title, eventStatus }: EventTitle) => {
  const isActive = eventStatus === 'OPEN' || eventStatus === 'REOPEN';
  const navigate = useNavigate();

  const options: Option[] = [{ onClick: () => navigate(appPaths.eventEdit(id)), text: '수정하기' }];

  return (
    <Flex
      p={'1rem'}
      w={'full'}
      align={'center'}
      gap={'1.5rem'}
    >
      <Heading
        maxW={'50%'}
        as={'span'}
        overflow={'hidden'}
        noOfLines={1}
        fontSize={'1.5rem'}
      >
        {title}
      </Heading>
      <Label
        py={'0.1rem'}
        fontSize={'0.875rem'}
        bg={isActive ? 'primary.900' : 'gray.400'}
        textAlign={'center'}
      >
        {CONSTANTS.EVENT_STATUS[eventStatus]}
      </Label>
      <Spacer />
      {isEditable && <OptionsButton options={options} />}
    </Flex>
  );
};

export default EventTitle;
