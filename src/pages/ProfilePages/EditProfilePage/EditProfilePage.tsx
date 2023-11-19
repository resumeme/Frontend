import {
  EditMenteeProfileTemplate,
  EditMentorProfileTemplate,
} from '~/components/templates/EditProfileTemplate';
import useUser from '~/hooks/useUser';

const EditProfilePage = () => {
  const { user } = useUser();

  return (
    <>{user?.role === 'mentee' ? <EditMenteeProfileTemplate /> : <EditMentorProfileTemplate />}</>
  );
};

export default EditProfilePage;
