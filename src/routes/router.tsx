import { createBrowserRouter } from 'react-router-dom';
import App from '~/App';
import {
  AdminPage,
  ApplyEventPage,
  CreateEventPage,
  CreateResumePage,
  EditProfilePage,
  EventListPage,
  InputBasicInfoPage,
  MainPage,
  MenteeMyPage,
  MenteeResumeDetailPage,
  MenteeSignupPage,
  MenteeViewEventPage,
  MentorMyPage,
  MentorResumeDetailPage,
  MentorSignupPage,
  MentorViewEventPage,
  RequestedResumePage,
  ReviewResumePage,
  WriteReviewPage,
} from '~/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'mypage/mentee', element: <MenteeMyPage /> },
      { path: 'mypage/mentor', element: <MentorMyPage /> },
      { path: 'user/edit-info', element: <EditProfilePage /> },

      { path: 'resume/create', element: <CreateResumePage /> },
      { path: 'resume/edit/:id', element: <EditProfilePage /> },
      { path: 'resume/review/:id', element: <ReviewResumePage /> },
      { path: 'resume/detail/mentee/:id', element: <MenteeResumeDetailPage /> },
      { path: 'resume/detail/mentor/:id', element: <MentorResumeDetailPage /> },
      { path: 'requested-resume', element: <RequestedResumePage /> },
      { path: 'write-review', element: <WriteReviewPage /> },

      { path: 'event/create', element: <CreateEventPage /> },
      { path: 'event/view', element: <EventListPage /> },
      { path: 'event/view/mentee/:eventId', element: <MenteeViewEventPage /> },
      { path: 'event/view/mentor/:eventId', element: <MentorViewEventPage /> },
      { path: 'event/apply', element: <ApplyEventPage /> },

      { path: 'input-basic-info', element: <InputBasicInfoPage /> },
      { path: 'signup/mentee', element: <MenteeSignupPage /> },
      { path: 'signup/mentor', element: <MentorSignupPage /> },

      { path: 'admin', element: <AdminPage /> },
    ],
  },
]);

export default router;
