import { FormLabel } from '~/components/atoms/FormLabel';
import { FormLabelProps } from '~/components/atoms/FormLabel/FormLabel';

const AwardsFormLabel = ({ ...props }: FormLabelProps) => {
  return (
    <FormLabel
      w="8.625rem"
      flexShrink={0}
      {...props}
    />
  );
};

export default AwardsFormLabel;
