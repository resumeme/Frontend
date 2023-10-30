import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionProps,
  Flex,
  Box,
} from '@chakra-ui/react';

type AccordionToggleProps = AccordionProps & {
  text: string;
  panelPx?: string;
  panelPy?: string;
  fontSize?: string;
  children: React.ReactNode;
};

const AccordionToggle = ({
  text,
  panelPx = '0',
  panelPy = '1rem',
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
            px={panelPx}
            py={panelPy}
          >
            {children}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default AccordionToggle;
