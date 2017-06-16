import { NameIdModel, UserModel, GroupModel } from '.';

export class MissionModel {

  constructor(
    public missionId = 0,
    public missionName = '',
    public description = '',
    public badgeImagePath = '',
    public allowRating = true,
    public allowPoints = true,
    public allowDoubleXP = true,
    public allowReleaseNotifications = true,
    public allowUpdatedNotifications = true,
    public publicationDate: Date = null,
    public expirationDate: Date = null,
    public audienceGroups: GroupModel[] = [],
    public audienceUsers: UserModel[] = [],
    public categories: NameIdModel[] = [],
    public prereqCategories: NameIdModel[] = [],
    public prereqMissions: NameIdModel[] = []
    ) { }
}
