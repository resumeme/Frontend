import { v4 as uuidv4 } from 'uuid';
import { BorderBox } from '~/components/atoms/BorderBox';
import { Activity } from '~/types/activity';

const ActivityDetails = ({ data }: { data: Activity[] }) => {
  if (!data) {
    return;
  }
  return (
    <>
      {data?.map((company: Activity) => {
        return (
          <BorderBox
            key={uuidv4()}
            w={'100%'}
          >
            <div>{company.activityName}</div>
            <div>{company.startDate}</div>
            {!company.inProgress && <div>{company.endDate}</div>}
            <a>{company.link}</a>
            <div>{company.description}</div>
          </BorderBox>
        );
      })}
    </>
  );
};

export default ActivityDetails;
