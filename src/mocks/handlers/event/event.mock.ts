import { ReadEvent } from '~/types/event/event';
import { EventList } from '~/types/event/eventList';
import { PageData } from '~/types/pageData';

const pageDataMock: PageData = {
  first: true,
  last: false,
  number: 0,
  size: 20,
  sort: {
    empty: true,
    sorted: false,
    unsorted: true,
  },
  totalPages: 5,
  totalElements: 100,
};

export const readEventMock0: ReadEvent = {
  id: 0,
  mentorId: 0,
  title: '웹 개발자 이력서 5일 간 첨삭',
  content: '프론트, 백 관계 없이 웹 개발을 희망하시는 분들 이력서 피드백 드릴게요',
  maximumCount: 3,
  currentApplicantCount: 1,
  status: 'OPEN',
  positions: ['FRONT', 'BACK'],
  timeInfo: {
    openDateTime: '2024-04-24T08:00:00.000Z',
    closeDateTime: '2024-04-30T23:59:59.999Z',
    endDate: '2024-05-01T23:59:59.999Z',
  },
};

export const readEventMock1: ReadEvent = {
  id: 1,
  mentorId: 0,
  title: 'AI 이력서 첨삭',
  content: 'AI 개발을 희망하시는 분들 이력서 피드백 드릴게요',
  maximumCount: 2,
  currentApplicantCount: 0,
  status: 'OPEN',
  positions: ['ML_AI'],
  timeInfo: {
    openDateTime: '2024-04-24T08:00:00.000Z',
    closeDateTime: '2024-04-30T23:59:59.999Z',
    endDate: '2024-05-01T23:59:59.999Z',
  },
};

export const readEventMock2: ReadEvent = {
  id: 2,
  mentorId: 0,
  title: '데브옵스 이력서 첨삭',
  content: '데브옵스 개발을 희망하시는 분들 이력서 피드백 드릴게요',
  maximumCount: 1,
  currentApplicantCount: 0,
  status: 'OPEN',
  positions: ['DEVOPS'],
  timeInfo: {
    openDateTime: '2024-04-24T08:00:00.000Z',
    closeDateTime: '2024-04-30T23:59:59.999Z',
    endDate: '2024-05-01T23:59:59.999Z',
  },
};

export const readEventMock3: ReadEvent = {
  id: 3,
  mentorId: 0,
  title: '모바일 개발자 이력서 첨삭',
  content: '모바일 개발을 희망하시는 분들 이력서 피드백 드릴게요',
  maximumCount: 1,
  currentApplicantCount: 0,
  status: 'OPEN',
  positions: ['MOBILE'],
  timeInfo: {
    openDateTime: '2024-04-24T08:00:00.000Z',
    closeDateTime: '2024-04-30T23:59:59.999Z',
    endDate: '2024-05-01T23:59:59.999Z',
  },
};

export const eventListMock: EventList = {
  events: [
    {
      info: readEventMock0,
      mentorInfo: {
        mentorId: 0,
        nickname: '윤지석',
        imageUrl: '',
      },
    },
    {
      info: readEventMock1,
      mentorInfo: {
        mentorId: 0,
        nickname: '윤지석',
        imageUrl: '',
      },
    },
    {
      info: readEventMock2,
      mentorInfo: {
        mentorId: 0,
        nickname: '윤지석',
        imageUrl: '',
      },
    },
    {
      info: readEventMock3,
      mentorInfo: {
        mentorId: 0,
        nickname: '윤지석',
        imageUrl: '',
      },
    },
  ],
  pageData: pageDataMock,
};
