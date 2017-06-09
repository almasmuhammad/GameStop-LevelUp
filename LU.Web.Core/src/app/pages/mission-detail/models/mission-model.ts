import { MissionAudienceModel } from './mission-audience-model';

export class MissionModel {

  constructor(
    public id = 0,
    public name = '',
    public description = '',
    public fileName = '',
    public allowRatings = true,
    public allowPoints = true,
    public canDoubleXP = true,
    public showNotificationsOnRelease = true,
    public showNotificationsOnUpdate = true,
    public missionAudiences: MissionAudienceModel[] = []) {

    }
}
