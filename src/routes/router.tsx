import { createBrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import { EventCreateLoader } from './EventCreateLoader';
import FeedbackLayout from './FeedbackLayout';
import { FeedbackResumeLoader } from './FeedbackResumeLoader';
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
          {
            element: <UserLoader />,
            children: [
              { path: 'mypage', element: <MyPage /> },
              { path: 'user/edit-info', element: <EditProfilePage /> },
              {
                path: 'resume/:resumeId/event/:eventId/feedback',
                element: <FeedbackCompletePage />,
              },
            ],
          },
          {
            element: <MenteeLoader />,
            children: [
              {
                path: 'resume/management',
                element: <ManagementResumePage />,
              },
              { path: 'resume/:resumeId/edit', element: <EditResumePage /> },
              { path: 'resume/:resumeId', element: <ResumeDetailPage /> },
            ],
          },
          {
            element: <MentorLoader />,
            children: [
              { path: 'write-review', element: <WriteReviewPage /> },

              {
                element: <EventCreateLoader />,
                children: [{ path: 'event/create', element: <CreateEventPage /> }],
              },
              { path: 'event/edit/:eventId', element: <EditEventPage /> },
            ],
          },
          { path: 'event/', element: <EventListPage /> },
          { path: 'event/:eventId', element: <EventDetailPage /> },

          { path: '*', element: <NotFoundPage /> },
        ],
      },
      {
        element: <FocusLayout />,
        children: [
          {
            element: <GuestLoader />,
            children: [
              { path: 'sign-up', element: <SignUpPage /> },
              { path: 'sign-in', element: <SignInPage /> },
              { path: 'sign-in/oauth/kakao', element: <OAuthRedirectPage /> },
            ],
          },
        ],
      },
      {
        path: 'event/:eventId/resume/:resumeId/',
        element: <FeedbackLayout />,
        children: [
          {
            // element: <MentorLoader />,
            element: <FeedbackResumeLoader />,
            children: [{ index: true, element: <FeedbackResumePage /> }],
          },
          {
            element: <MenteeLoader />,
            children: [{ path: 'feedback/reflect', element: <FeedbackReflectPage /> }],
          },
        ],
      },
    ],
  },
]);

export default router;
