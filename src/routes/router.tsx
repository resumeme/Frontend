import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import FeedbackLayout from './FeedbackLayout';
import FocusLayout from './FocusLayout';
import GuestLoader from './GuestLoader';
import Layout from './Layout';
import MainLayout from './MainLayout';
import { MenteeLoader, MentorLoader, UserLoader } from './UserLoader';
import { CreateEventPage } from '~/pages/EventPages/CreateEventPage';
import { EditEventPage } from '~/pages/EventPages/EditEventPage';
import { EventDetailPage } from '~/pages/EventPages/EventDetailPage';
import { EventListPage } from '~/pages/EventPages/EventListPage';
import { MainPage } from '~/pages/MainPage';
import { MyPage } from '~/pages/MyPage';
import { NotFoundPage } from '~/pages/NotFoundPage';
import { EditProfilePage } from '~/pages/ProfilePages/EditProfilePage';
import { EditResumePage } from '~/pages/ResumePages/EditResumePage';
import { FeedbackCompletePage } from '~/pages/ResumePages/FeedbackCompletePage';
import { FeedbackReflectPage } from '~/pages/ResumePages/FeedbackReflectPage';
import { FeedbackResumePage } from '~/pages/ResumePages/FeedbackResumePage';
import { ManagementResumePage } from '~/pages/ResumePages/ManagementResumePage';
import { ResumeDetailPage } from '~/pages/ResumePages/ResumeDetailPage';
import { OAuthRedirectPage, SignInPage } from '~/pages/SignInPage';
import { SignUpPage } from '~/pages/SignUpPage';
import { WriteReviewPage } from '~/pages/WriteReviewPage';

const router = createBrowserRouter([
  {
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [{ index: true, element: <MainPage /> }],
      },
      {
        element: <Layout />,
        children: [
          { path: 'mypage', element: <MyPage />, loader: UserLoader },
          { path: 'user/edit-info', element: <EditProfilePage />, loader: UserLoader },

          { path: 'resume/management', element: <ManagementResumePage />, loader: MenteeLoader },
          { path: 'resume/:resumeId/edit', element: <EditResumePage />, loader: MenteeLoader },

          {
            path: 'resume/:resumeId/event/:eventId/feedback',
            element: <FeedbackCompletePage />,
            loader: UserLoader,
          },

          { path: 'resume/:resumeId', element: <ResumeDetailPage />, loader: MenteeLoader },
          { path: 'write-review', element: <WriteReviewPage />, loader: MentorLoader },

          { path: 'event/create', element: <CreateEventPage />, loader: MentorLoader },
          { path: 'event/edit/:eventId', element: <EditEventPage />, loader: MentorLoader },
          { path: 'event/', element: <EventListPage /> },
          { path: 'event/:eventId', element: <EventDetailPage /> },

          { path: '*', element: <NotFoundPage /> },
        ],
      },
      {
        element: <FocusLayout />,
        children: [
          { path: 'sign-up', element: <SignUpPage />, loader: GuestLoader },
          { path: 'sign-in', element: <SignInPage />, loader: GuestLoader },
          { path: 'sign-in/oauth/kakao', element: <OAuthRedirectPage />, loader: GuestLoader },
        ],
      },
      {
        path: 'event/:eventId/resume/:resumeId/',
        element: <FeedbackLayout />,
        children: [
          { index: true, element: <FeedbackResumePage />, loader: MentorLoader },
          { path: 'feedback/reflect', element: <FeedbackReflectPage />, loader: MenteeLoader },
        ],
      },
    ],
  },
]);

export default router;
