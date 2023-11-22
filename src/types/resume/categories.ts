import { Activity, ReadActivity } from '~/types/activity';
import { Award, ReadAward } from '~/types/award';
import { Career, ReadCareer } from '~/types/career';
import { Language, ReadLanguage } from '~/types/language';
import { Project, ReadProject } from '~/types/project';
import { Training, ReadTraining } from '~/types/training';

type Categories = Career | Project | Award | Language | Training | Activity;

type ReadCategories =
  | ReadCareer
  | ReadProject
  | ReadAward
  | ReadLanguage
  | ReadTraining
  | ReadActivity;

export type { Categories, ReadCategories };
