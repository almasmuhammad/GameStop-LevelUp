import { NameIdModel } from '.';

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
    public audienceGroups: NameIdModel[] = [],
    public audienceUsers: NameIdModel[] = [],
    public categories: NameIdModel[] = [],
    public prereqCategories: NameIdModel[] = [],
    public prereqMissions: NameIdModel[] = []
    ) { }
}
