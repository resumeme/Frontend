import { createBrowserRouter } from 'react-router-dom';
import App from '~/App';
import AdminPage from '~/pages/AdminPage/AdminPage';
import { ApplyEventPage } from '~/pages/EventPages/ApplyEventPage';
import { CreateEventPage } from '~/pages/EventPages/CreateEventPage';
import { EventDetailPage } from '~/pages/EventPages/EventDetailPage';
import { EventListPage } from '~/pages/EventPages/EventListPage';
import MainPage from '~/pages/MainPage/MainPage';
import { MyPage } from '~/pages/MyPage';
import NotFoundPage from '~/pages/NotFoundPage/NotFoundPage';
import { MenteeEditProfilePage } from '~/pages/ProfilePages/MenteeEditProfilePage';
import { MentorEditProfilePage } from '~/pages/ProfilePages/MentorEditProfilePage';
import { CommentResumePage } from '~/pages/ResumePages/CommentResumePage';
import { CreateResumePage } from '~/pages/ResumePages/CreateResumePage';
import { EditResumePage } from '~/pages/ResumePages/EditResumePage';
import { ResumeDetailPage } from '~/pages/ResumePages/ResumeDetailPage';
import SignInPage from '~/pages/SignInPage/SignInPage';
import { CommonSignUpPage } from '~/pages/SignUpPages/CommonSignUpPage';
import { MenteeSignUpPage } from '~/pages/SignUpPages/MenteeSignUpPage';
import { MentorSignUpPage } from '~/pages/SignUpPages/MentorSignUpPage';
import { WriteReviewPage } from '~/pages/WriteReviewPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: 'mypage/:id', element: <MyPage /> },
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
