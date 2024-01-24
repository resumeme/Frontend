import { lazy } from 'react';
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

const MyPage = lazy(() => import('~/pages/MyPage'));
const MainPage = lazy(() => import('~/pages/MainPage'));
const EditProfilePage = lazy(() => import('~/pages/ProfilePages/EditProfilePage'));
const FeedbackCompletePage = lazy(() => import('~/pages/ResumePages/FeedbackCompletePage'));
const FeedbackReflectPage = lazy(() => import('~/pages/ResumePages/FeedbackReflectPage'));
const FeedbackResumePage = lazy(() => import('~/pages/ResumePages/FeedbackResumePage'));
const ManagementResumePage = lazy(() => import('~/pages/ResumePages/ManagementResumePage'));
const ResumeDetailPage = lazy(() => import('~/pages/ResumePages/ResumeDetailPage'));
const OAuthRedirectPage = lazy(() => import('~/pages/OAuthRedirectPage'));
const SignInPage = lazy(() => import('~/pages/SignInPage'));
const SignUpPage = lazy(() => import('~/pages/SignUpPage'));
const WriteReviewPage = lazy(() => import('~/pages/WriteReviewPage'));
const EditResumePage = lazy(() => import('~/pages/ResumePages/EditResumePage'));
const CreateEventPage = lazy(() => import('~/pages/EventPages/CreateEventPage'));
const EditEventPage = lazy(() => import('~/pages/EventPages/EditEventPage'));
const EventDetailPage = lazy(() => import('~/pages/EventPages/EventDetailPage'));
const EventListPage = lazy(() => import('~/pages/EventPages/EventListPage'));
const NotFoundPage = lazy(() => import('~/pages/NotFoundPage'));

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
          { path: 'sign-up', element: <SignUpPage /> },
          {
            element: <GuestLoader />,
            children: [
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
