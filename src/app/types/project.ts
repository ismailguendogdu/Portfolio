import { Technology } from "./technology";

export interface Project{
    id: string;
    imageUrl: string;
    title: string;
    technologiesLabel: string;
    description?: string;
    technologies: Technology[];
    githubUrl: string;
    liveUrl: string;
}