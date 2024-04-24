import { HttpResponse, http } from 'msw';
import { environments } from '~/config/environments';
import { ReadMentor } from '~/types/mentor';

const mentorMock: ReadMentor = {
  nickname: '윤지석',
  experiencedPositions: ['BACK', 'FRONT'],
  careerContent: '',
  careerYear: 4,
  introduce: '',
  imageUrl: '',
  role: 'mentor',
};

export const handlers = [
  http.get(`${environments.baseUrlEnv()}/v1/mentors/:id`, () => {
    return HttpResponse.json(mentorMock);
  }),
];
