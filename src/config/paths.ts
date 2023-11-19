export const appPaths = {
  signIn: '/sign-in',
  main: '/',
  resumeCreate: () => '/resume/create',
  managementResume: '/resume/management',
  viewEvent: '/event/view',
  myPage: (id?: number) => (id ? `/mypage/${id}` : '/'),
  userEditInfo: `/user/edit-info`,
  resumeDetail: (resumeId: number) => `/resume/${resumeId}`,
  resumeEdit: (resumeId: number) => `/resume/${resumeId}/edit`,
};
