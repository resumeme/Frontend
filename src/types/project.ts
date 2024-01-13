export type Project = {
  projectName: string;
  productionYear: number;
  team?: boolean;
  teamMembers?: string;
  skills?: string[];
  projectContent?: string;
  projectUrl?: string;
};

export type ReadProject = Project & {
  componentId: number;
  reflectFeedback: boolean;
  originComponentId: number | null;
};

export type ProjectForm = {
  isTeam: boolean | string;
} & Omit<Project, 'isTeam'>;
