import { createBrowserRouter } from 'react-router-dom';
import App from '~/App';
import AdminPage from '~/pages/AdminPage/AdminPage';
import ApplyEventPage from '~/pages/ApplyEventPage/ApplyEventPage';
import CreateEventPage from '~/pages/EventPage/CreateEventPage';
import EventDetailPage from '~/pages/EventPage/EventDetailPage';
import EventListPage from '~/pages/EventPage/EventListPage';
import MainPage from '~/pages/MainPage/MainPage';
import MenteeMyPage from '~/pages/MyPage/MenteeMyPage';
import MentorMyPage from '~/pages/MyPage/MentorMyPage';
import WriteReviewPage from '~/pages/MyPage/WriteReviewPage';
import MenteeEditProfilePage from '~/pages/ProfilePage/MenteeEditProfilePage';
import MentorEditProfilePage from '~/pages/ProfilePage/MentorEditProfilePage';
import CommentResumePage from '~/pages/ResumePage/CommentResumePage';
import CreateResumePage from '~/pages/ResumePage/CreateResumePage';
import EditResumePage from '~/pages/ResumePage/EditResumePage';
import ResumeDetailPage from '~/pages/ResumePage/ResumeDetailPage';
import SignInPage from '~/pages/SignInPage/SignInPage';
import CommonSignUpPage from '~/pages/SignUpPage/CommonSignUpPage';
import MenteeSignUpPage from '~/pages/SignUpPage/MenteeSignUpPage';
import MentorSignUpPage from '~/pages/SignUpPage/MentorSignUpPage';

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
      { path: 'resume/:id/edit', element: <EditResumePage /> },
      { path: 'resume/:id/comment', element: <CommentResumePage /> },
      { path: 'resume/:id', element: <ResumeDetailPage /> },
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
