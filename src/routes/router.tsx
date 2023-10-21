import { createBrowserRouter } from 'react-router-dom';
import App from '~/App';
import { AdminPage } from '~/pages/AdminPage';
import { ApplyEventPage, CreateEventPage, EventDetailPage, EventListPage } from '~/pages/EventPage';
import { MainPage } from '~/pages/MainPage';
import { MenteeMyPage, MentorMyPage, WriteReviewPage } from '~/pages/MyPage';
import { MenteeEditProfilePage, MentorEditProfilePage } from '~/pages/ProfilePage';
import {
  CreateResumePage,
  EditResumePage,
  ResumeDetailPage,
  ReviewResumePage,
} from '~/pages/ResumePage';
import { SignInPage } from '~/pages/SignInPage';
import { CommonSignUpPage, MenteeSignUpPage, MentorSignUpPage } from '~/pages/SignUpPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'mypage/mentee', element: <MenteeMyPage /> },
      { path: 'mypage/mentor', element: <MentorMyPage /> },
      { path: 'user/edit-info/mentee', element: <MenteeEditProfilePage /> },
      { path: 'user/edit-info/mentor', element: <MentorEditProfilePage /> },

      { path: 'resume/create', element: <CreateResumePage /> },
      { path: 'resume/edit/:id', element: <EditResumePage /> },
      { path: 'resume/review/:id', element: <ReviewResumePage /> },
      { path: 'resume/detail/:id', element: <ResumeDetailPage /> },
      { path: 'write-review', element: <WriteReviewPage /> },

      { path: 'event/create', element: <CreateEventPage /> },
      { path: 'event/view', element: <EventListPage /> },
      { path: 'event/view/:eventId', element: <EventDetailPage /> },
      { path: 'event/apply', element: <ApplyEventPage /> },

      { path: 'sign-up/common', element: <CommonSignUpPage /> },
      { path: 'sign-up/mentee', element: <MenteeSignUpPage /> },
      { path: 'sign-up/mentor', element: <MentorSignUpPage /> },
      { path: 'sign-in', element: <SignInPage /> },

      { path: 'admin', element: <AdminPage /> },
    ],
  },
]);

export default router;
