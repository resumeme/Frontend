import { BorderBox } from '~/components/atoms/BorderBox';
import { BorderBoxProps } from '~/components/atoms/BorderBox/BorderBox';

type RemoteControlProps = {
  top?: string;
  left?: string;
  w?: string;
  children: React.ReactNode;
} & BorderBoxProps;

const RemoteControl = ({
  children,
  top = '10%',
  left = '2rem',
  w = '17rem',
  ...props
}: RemoteControlProps) => {
  return (
    <BorderBox
      position="sticky"
      top={top}
      left={left}
      w={w}
      p={4}
      minH={'5rem'}
      zIndex={'sticky'}
      hasShadow
      {...props}
    >
      {children}
    </BorderBox>
  );
};

export default RemoteControl;
