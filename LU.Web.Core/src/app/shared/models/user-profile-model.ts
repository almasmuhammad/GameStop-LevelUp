import { ApplicationProfileViewModel } from './application-profile-view-model';
import { ApplicationRoles } from './application-roles';

export class UserProfileModel extends ApplicationProfileViewModel {
    get isCreator(): boolean {
        return (
            this.roles.findIndex((x) => x === ApplicationRoles.CreatorRead) > -1 ||
            this.roles.findIndex((x) => x === ApplicationRoles.CreatorUpdate) > -1 ||
            this.roles.findIndex((x) => x === ApplicationRoles.CreatorDelete) > -1 );
    }
}
