import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
  Box,
} from '@chakra-ui/react';

type AccordionToggleProps = {
  text: string;
  pannelPx?: string;
  pannelPy?: string;
  fontSize?: string;
  children: React.ReactNode;
};

const AccordionToggle = ({
  text,
  pannelPx = '0',
  pannelPy = '1rem',
  fontSize = 'sm',
  children,
  ...props
}: AccordionToggleProps) => {
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
              fontSize={fontSize}
            >
              {text}
            </Box>
            <AccordionIcon
              marginLeft={'0.37rem'}
              fontSize={fontSize}
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

export default AccordionToggle;
