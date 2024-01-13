import { Activity, ReadActivity } from '~/types/activity';
import { Award, ReadAward } from '~/types/award';
import { Career, ReadCareer } from '~/types/career';
import { Language, ReadLanguage } from '~/types/language';
import { Project, ReadProject } from '~/types/project';
import { Training, ReadTraining } from '~/types/training';

export type Categories = Career | Project | Award | Language | Training | Activity;

export type ReadCategories =
  | ReadCareer
  | ReadProject
  | ReadAward
  | ReadLanguage
  | ReadTraining
  | ReadActivity;
