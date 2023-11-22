type Project = {
  projectName: string;
  productionYear: number;
  team?: boolean;
  teamMembers?: string;
  skills?: string[];
  projectContent?: string;
  projectUrl?: string;
};

type ReadProject = Project & { componentId: number };

type ProjectForm = {
  isTeam: boolean | string;
} & Omit<Project, 'isTeam'>;

export type { Project, ReadProject, ProjectForm };
