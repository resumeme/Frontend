import { Text, Box, Flex, Grid, GridItem, Icon, Tooltip } from '@chakra-ui/react';
import { HiPencilAlt } from 'react-icons/hi';
import { Badge } from '~/components/atoms/Badge';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Label } from '~/components/atoms/Label';
import { BasicInfo } from '~/types/basicInfo';

type BasicInfoViewProps = Omit<BasicInfo, 'title' | 'ownerInfo'> & {
  onEditClick: () => void;
};

const NO_DATA_TEXT = {
  position: '희망 직무가 입력되지 않았습니다.',
  skills: '보유 기술이 입력되지 않았습니다.',
  introduce: '자기소개가 입력되지 않았습니다.',
};

const BasicInfoView = ({ position, skills, introduce, onEditClick }: BasicInfoViewProps) => {
  const handleEditClick = () => {
    onEditClick();
  };

  const renderPosition = () => {
    if (position) {
      return <Label>{position}</Label>;
    } else {
      return (
        <Text
          fontSize={'sm'}
          color={'gray.400'}
        >
          {NO_DATA_TEXT.position}
        </Text>
      );
    }
  };

  const renderSkills = () => {
    if (skills.length > 0) {
      const skillLabels = skills.map((skill: string, index: number) => {
        return (
          <Badge
            key={index}
            bg={'gray.300'}
            color={'gray.700'}
          >
            {skill}
          </Badge>
        );
      });

      return skillLabels;
    } else {
      return (
        <Text
          fontSize={'sm'}
          color={'gray.400'}
        >
          {NO_DATA_TEXT.skills}
        </Text>
      );
    }
  };

  const renderIntroduce = () => {
    if (introduce) {
      return (
        <Text
          fontSize={'sm'}
          fontWeight={'medium'}
          lineHeight={'1rem'}
          whiteSpace={'pre-line'}
        >
          {introduce}
        </Text>
      );
    } else {
      return (
        <Text
          fontSize={'sm'}
          color={'gray.400'}
        >
          {NO_DATA_TEXT.introduce}
        </Text>
      );
    }
  };

  return (
    <Box minH={'280px'}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        justifyItems={'stretch'}
        alignItems={'center'}
        rowGap="5"
        pt={6}
        px={2}
      >
        <GridItem>
          <Text
            fontWeight={'bold'}
            fontSize={'sm'}
          >
            희망직무
          </Text>
        </GridItem>
        <GridItem colSpan={2}>{renderPosition()}</GridItem>
        <GridItem>
          <Text
            fontWeight={'bold'}
            fontSize={'sm'}
          >
            보유기술
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Flex
            gap={1}
            flexWrap={'wrap'}
          >
            {renderSkills()}
          </Flex>
        </GridItem>
        <GridItem colSpan={3}>
          <Text
            fontWeight={'bold'}
            fontSize={'sm'}
          >
            자기소개
          </Text>
        </GridItem>
        <GridItem colSpan={3}>
          <BorderBox
            borderRadius={'md'}
            minH={'100px'}
          >
            {renderIntroduce()}
          </BorderBox>
        </GridItem>
      </Grid>
      <Box
        as="button"
        position="absolute"
        top="5"
        right="5"
        role="group"
        onClick={handleEditClick}
      >
        <Tooltip
          label={'수정하기'}
          placement="top"
          bg="primary.900"
          hasArrow
        >
          <span>
            <Icon
              as={HiPencilAlt}
              color={'gray.500'}
              _groupHover={{
                color: 'primary.900',
              }}
            />
          </span>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default BasicInfoView;
