import { createBrowserRouter } from 'react-router-dom';
import FeedbackLayout from './FeedbackLayout';
import FocusLayout from './FocusLayout';
import Layout from './Layout';
import MainLayout from './MainLayout';
import AdminPage from '~/pages/AdminPage/AdminPage';
import { CreateEventPage } from '~/pages/EventPages/CreateEventPage';
import { EventDetailPage } from '~/pages/EventPages/EventDetailPage';
import { EventListPage } from '~/pages/EventPages/EventListPage';
import MainPage from '~/pages/MainPage/MainPage';
import { MyPage } from '~/pages/MyPage';
import NotFoundPage from '~/pages/NotFoundPage/NotFoundPage';
import { EditProfilePage } from '~/pages/ProfilePages/EditProfilePage';
import { CreateResumePage } from '~/pages/ResumePages/CreateResumePage';
import { EditResumePage } from '~/pages/ResumePages/EditResumePage';
import { FeedbackCompletePage } from '~/pages/ResumePages/FeedbackCompletePage';
import { FeedbackReflectPage } from '~/pages/ResumePages/FeedbackReflectPage';
import { FeedbackResumePage } from '~/pages/ResumePages/FeedbackResumePage';
import { ManagementResumePage } from '~/pages/ResumePages/ManagementResumePage';
import { ResumeDetailPage } from '~/pages/ResumePages/ResumeDetailPage';
import OAuthRedirectPage from '~/pages/SignInPage/OAuthRedirectPage';
import SignInPage from '~/pages/SignInPage/SignInPage';
import { SignUpPage } from '~/pages/SignUpPage';
import { WriteReviewPage } from '~/pages/WriteReviewPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ index: true, element: <MainPage /> }],
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'mypage/:id', element: <MyPage /> },
      { path: 'user/edit-info', element: <EditProfilePage /> },

      { path: 'resume/create', element: <CreateResumePage /> },
      { path: 'resume/management', element: <ManagementResumePage /> },
      { path: 'resume/:id/edit', element: <EditResumePage /> },

      { path: 'resume/:resumeId/event/:eventId/feedback', element: <FeedbackCompletePage /> },

      { path: 'resume/:id', element: <ResumeDetailPage /> },
      { path: 'write-review', element: <WriteReviewPage /> },

      { path: 'event/create', element: <CreateEventPage /> },
      { path: 'event/view', element: <EventListPage /> },
      { path: 'event/view/:id', element: <EventDetailPage /> },

      { path: 'admin', element: <AdminPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
  {
    path: '/',
    element: <FocusLayout />,
    children: [
      { path: 'sign-up', element: <SignUpPage /> },
      { path: 'sign-in', element: <SignInPage /> },
      { path: 'sign-in/oauth/kakao', element: <OAuthRedirectPage /> },
    ],
  },
  {
    path: 'event/:eventId/resume/:resumeId/',
    element: <FeedbackLayout />,
    children: [
      { index: true, element: <FeedbackResumePage /> },
      { path: 'feedback/reflect', element: <FeedbackReflectPage /> },
    ],
  },
]);

export default router;
