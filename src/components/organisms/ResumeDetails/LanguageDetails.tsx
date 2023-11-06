import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Language } from '~/types/language';

const LanguageDetails = ({ data }: { data: Language[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map((language: Language) => {
        return (
          <BorderBox
            key={uuidv4()}
            w={'100%'}
          >
            <div>{language.language}</div>
          </BorderBox>
        );
      })}
    </>
  );
};

export default LanguageDetails;
