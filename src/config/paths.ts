export const appPaths = {
  signIn: () => '/sign-in',
  main: () => '/',
  resumeCreate: () => '/resume/create',
  managementResume: () => '/resume/management',
  myPage: (id?: number) => (id ? `/mypage/${id}` : '/'),
  userEditInfo: () => `/user/edit-info`,
  resumeDetail: (resumeId: number) => `/resume/${resumeId}`,
  resumeEdit: (resumeId: number) => `/resume/${resumeId}/edit`,
  viewEvent: () => '/event/view',
  eventDetail: (eventId: number) => `/event/view/${eventId}`,
  eventCreate: () => `/event/create`,
  feedbackComplete: (resumeId: number, eventId: number) =>
    `/resume/${resumeId}/event/${eventId}/feedback`,
};
