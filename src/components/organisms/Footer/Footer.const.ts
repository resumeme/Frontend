const FOOTER_CONTENT = {
  main: {
    title: 'resume.me',
  },
  links: {
    almondPepero: {
      text: '아몬드빼빼로',
      url: 'https://www.notion.so/prgrms/11-0-2a36f4b93e324e3390ed43b831f9f557',
    },
    termsOfService: {
      text: '이용 약관',
      url: '', // 이용약관 페이지 링크 추가 필요
    },
    blog: {
      text: '블로그',
      url: '', // 블로그 페이지 링크 추가 필요
    },
    privacyPolicy: {
      text: '개인정보 처리방침',
      url: '', // 개인정보 처리방침 페이지 링크 추가 필요
    },
  },
  team: {
    name: '팀 아몬드빼빼로',
    mentors: '멘토 (BE) 조규현, (FE) 윤지석',
    backend: '백엔드',
    backendMembers: ['김범우', '주홍석', '최지연'],
    frontend: '프론트엔드',
    frontendMembers: ['신동호', '우지호', '이민희'],
    address: '서울특별시 프롱구 백둥대로 4기',
    phoneNumber: '전화번호: 000-0000-0000',
  },
  pages: {
    resume: {
      text: '이력서',
      link: {
        resumeManagement: {
          text: '이력서 관리',
          url: '/', // 이력서 관리 페이지 링크 추가 필요
        },
      },
    },
    event: {
      text: '피드백',
      link: {
        ongoingEvent: {
          text: '진행중인 피드백',
          url: '/event',
        },
      },
    },
    community: {
      text: '커뮤니티',
      link: {
        mentorCoffeeChat: {
          text: '멘토 커피챗',
          url: '/coffee-chat',
        },
        freeBoard: {
          text: '자유게시판',
          url: '/general',
        },
        successfulResumes: {
          text: '합격 이력서',
          url: '/resume/references',
        },
      },
    },
  },
  copyright: 'ⓒ 2023 이력, 써',
};

export { FOOTER_CONTENT };
