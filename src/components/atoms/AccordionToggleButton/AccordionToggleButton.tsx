import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Box,
} from '@chakra-ui/react';

type AccordionToggleButtonProps = {
  text: string;
  pannelPx?: string;
  pannelPy?: string;
  iconSize?: string;
  children: React.ReactNode;
};

const AccordionToggleButton = ({
  text,
  pannelPx = '0',
  pannelPy = '1rem',
  iconSize = '1.2rem',
  children,
  ...props
}: AccordionToggleButtonProps) => {
  return (
    <Flex>
      <Accordion
        allowToggle
        {...props}
      >
        <AccordionItem
          border={'none'}
          px={0}
        >
          <AccordionButton
            _hover={{ bg: 'none' }}
            p={0}
          >
            <Box
              as="span"
              flex={1}
              textAlign={'left'}
              fontSize={'sm'}
            >
              {text}
            </Box>
            <AccordionIcon
              marginLeft={'0.37rem'}
              boxSize={iconSize}
            />
          </AccordionButton>
          <AccordionPanel
            px={pannelPx}
            py={pannelPy}
          >
            {children}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default AccordionToggleButton;
