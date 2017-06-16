import { GroupModel, UserModel } from '.';

export class MissionAudienceModel {
    constructor( public groups: GroupModel[], public users: UserModel[]){}
}