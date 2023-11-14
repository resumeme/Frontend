import { Activity } from '~/types/activity';
import { Award } from '~/types/award';
import Career from '~/types/career';
import { Language } from '~/types/language';
import { Project } from '~/types/project';
import { Training } from '~/types/training';

export type Categories = Career | Project | Award | Language | Training | Activity;
