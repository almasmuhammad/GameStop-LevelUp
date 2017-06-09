

export class NameIdModel {
  constructor( public id = 0, public name = ''){}
}
export class MissionAudienceModel {
  constructor(public groups: NameIdModel[], public users: NameIdModel[]) {

  }
}