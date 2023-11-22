import { Activity } from '~/types/activity';
import { Award } from '~/types/award';
import { Career } from '~/types/career';
import { Language } from '~/types/language';
import { Project } from '~/types/project';
import { Link } from '~/types/resume/link';
import { Training } from '~/types/training';

export type AllBlocks = {
  links: Link[];
  careers: Career[];
  certifications: Award[];
  activities: Activity[];
  foreignLanguages: Language[];
  projects: Project[];
  trainings: Training[];
};
