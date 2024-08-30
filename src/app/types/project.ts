import { Technology } from "./technology";

export interface Project{
    id: string;
    imageUrl: string;
    title: string;
    description?: Map<string,string>;
    technologies: Technology[];
    githubUrl: string;
    liveUrl: string;
}