import { ApplicationRoles } from './application-roles';

export class ApplicationProfileViewModel {

    // ROLES
    public roles: string[] = [];
    // LANGUAGES
    public languages: string[] = [];

    get isCreator() {
        return (
            this.roles.findIndex((x) => x === ApplicationRoles.CreatorRead) > -1 ||
            this.roles.findIndex((x) => x === ApplicationRoles.CreatorUpdate) > -1 ||
            this.roles.findIndex((x) => x === ApplicationRoles.CreatorDelete) > -1);
    }
}
