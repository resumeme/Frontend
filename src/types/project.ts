type Project = {
  id?: string;
  projectName: string;
  productionYear: number;
  isTeam?: boolean;
  teamMembers?: string;
  skills?: string[];
  projectContent?: string;
  projectUrl?: string;
};

type ProjectForm = {
  isTeam: boolean | string;
} & Omit<Project, 'isTeam'>;

export type { Project, ProjectForm };
