import { Experience } from "./experience";

export class Profile {

    name: string;
    professionalTitle: string;
    projectRole: string;
    linkedinUrl: string;
    experiences: Experience[];

    constructor(name: string, professionalTitle: string, projectRole: string, linkedinUrl: string, experiences: Experience[]) {
        this.name = name;
        this.professionalTitle = professionalTitle;
        this.projectRole = projectRole;
        this.linkedinUrl = linkedinUrl;
        this.experiences = experiences;
    }

}