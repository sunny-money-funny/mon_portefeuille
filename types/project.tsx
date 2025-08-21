// types/project.ts

export interface HeadlineBlock {
  type: "headline";
  data: string;
}

export interface ListBlock {
  type: "list";
  data: string[];
}

export interface ImageBlock {
  type: "image";
  data: {
    src: string;
    alt: string;
    width: number;
  };
}

export interface DividerBlock {
  type: "divider";
  data?: null;
}

export interface AboutBlock {
  type: "about";
  data: {
    duration: string;
    goal: string;
    stack: string;
    contribution: string;
  };
}

export interface WhatIDidBlock {
  type: "whatIDid";
  data: string[];
}

export interface WhatILearnedBlock {
  type: "whatILearned";
  data: string;
}

export type ProjectContent =
  | HeadlineBlock
  | ListBlock
  | ImageBlock
  | DividerBlock
  | AboutBlock
  | WhatIDidBlock
  | WhatILearnedBlock;

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  githubUrl: string;
  content: ProjectContent[];
}
