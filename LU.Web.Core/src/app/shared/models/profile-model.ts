export class ProfileModel {
    public isCreator: boolean;
    public isAuthenticated: boolean;

    constructor() {
        this.isAuthenticated = false;
        this.isCreator = false;
    }
}
