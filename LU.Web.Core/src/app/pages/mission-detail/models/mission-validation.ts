import { MissionModel } from '.';

export class MissionValidation {
  public static getPublishValidationErrors(model: MissionModel) {
    const errors: string[] = [];

    if (!model.publicationDate) {
      errors.push('translate need publication date');
    }

    if (!model.expirationDate) {
      errors.push('translate need expiration date');
    }

    if (model.publicationDate &&
    model.expirationDate &&
    model.publicationDate >= model.expirationDate) {
      errors.push('translate expiration should be after publication');
    }

    return errors;
  }

  public static getPrereqValidationFailures(model: MissionModel): string[] {
    const errors: string[] = [];

    return errors;
  }

  public static getCategoryValidationFailures(model: MissionModel): string[] {
    const errors: string[] = [];

    if (!model.categories ||
    model.categories.length < 1) {
      errors.push('translate need 1 category');
    }

    return errors;
  }

  public static getAudienceValidationFailures(model: MissionModel): string[] {
    const errors: string[] = [];

    if ((!model.audienceGroups ||
    model.audienceGroups.length < 1) &&
    (!model.audienceUsers ||
    model.audienceUsers.length < 1)) {
      errors.push('translate need 1 audience group or user');
    }

    return null;
  }

  public static getDetailValidationFailures(model: MissionModel): string[] {
    const errors: string[] = [];

    if (!model.missionName || model.missionName.length < 1) {
      errors.push('translate name error');
    }
    if (!model.description || model.description.length < 1) {
      errors.push('translate desc error');
    }
    if (!model.badgeImagePath || model.badgeImagePath.length < 1) {
      errors.push('translate need badge image');
    }
    return errors;
  }
}
