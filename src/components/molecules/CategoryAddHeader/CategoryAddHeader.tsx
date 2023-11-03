import { AddIcon } from '@chakra-ui/icons';
import { Text, Flex, Button } from '@chakra-ui/react';

type CategoryAddHeaderProps = {
  categoryTitle: string;
  onAddItem: React.MouseEventHandler<HTMLButtonElement>;
};

const CategoryAddHeader = ({ categoryTitle, onAddItem }: CategoryAddHeaderProps) => {
  return (
    <Flex justifyContent={'space-between'}>
      <Text
        fontSize={'2xl'}
        fontWeight={'semibold'}
      >
        {categoryTitle}
      </Text>
      <Button
        w={'2.75rem'}
        h={'1.94rem'}
        border={'1px solid'}
        borderColor={'primary.900'}
        borderRadius={'1.22rem'}
        bg={'none'}
        onClick={onAddItem}
      >
        <AddIcon color={'primary.900'} />
      </Button>
    </Flex>
  );
};
export default CategoryAddHeader;
