import { ReadActivity } from '~/types/activity';
import { ReadAward } from '~/types/award';
import { ReadCareer } from '~/types/career';
import { ReadLanguage } from '~/types/language';
import { ReadProject } from '~/types/project';
import { ReadReferenceLink } from '~/types/referenceLink';
import { ReadTraining } from '~/types/training';

export type AllBlocks = {
  links: ReadReferenceLink[];
  careers: ReadCareer[];
  certifications: ReadAward[];
  activities: ReadActivity[];
  foreignLanguages: ReadLanguage[];
  projects: ReadProject[];
  trainings: ReadTraining[];
};
