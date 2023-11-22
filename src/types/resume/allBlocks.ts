import { ReadActivity } from '~/types/activity';
import { ReadAward } from '~/types/award';
import { ReadCareer } from '~/types/career';
import { ReadLanguage } from '~/types/language';
import { ReadProject } from '~/types/project';
import { Link } from '~/types/resume/link';
import { ReadTraining } from '~/types/training';

export type AllBlocks = {
  links: Link[];
  careers: ReadCareer[];
  certifications: ReadAward[];
  activities: ReadActivity[];
  foreignLanguages: ReadLanguage[];
  projects: ReadProject[];
  trainings: ReadTraining[];
};
