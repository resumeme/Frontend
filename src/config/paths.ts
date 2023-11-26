export const appPaths = {
  signIn: () => '/sign-in',
  signUp: () => '/sign-up',
  main: () => '/',
  managementResume: () => '/resume/management',
  myPage: () => `/mypage`,
  userEditInfo: () => `/user/edit-info`,
  resumeDetail: (resumeId: number) => `/resume/${resumeId}`,
  resumeEdit: (resumeId: number) => `/resume/${resumeId}/edit`,
  viewEvent: () => '/event',
  eventDetail: (eventId: number) => `/event/view/${eventId}`,
  eventCreate: () => `/event/create`,
  feedbackComplete: (resumeId: number, eventId: number) =>
    `/resume/${resumeId}/event/${eventId}/feedback`,
  feedbackResume: ({ resumeId, eventId }: { resumeId: number; eventId: number }) =>
    `/event/${eventId}/resume/${resumeId}`,
  feedbackReflect: (resumeId: number, eventId: number) =>
    `/event/${eventId}/resume/${resumeId}/feedback/reflect`,
};
