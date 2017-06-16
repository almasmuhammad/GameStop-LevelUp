import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToasterService } from 'angular2-toaster/angular2-toaster';

import { MissionModel, TabComponent, GroupModel, UserModel, MissionAudienceModel } from '../../models';
import { MissionDetailService, UserGroupService, UserService } from '../../services';

@Component({
  selector: 'app-mission-detail-audience',
  templateUrl: './audience.component.html',
  styleUrls: ['./audience.component.css']
})
export class AudienceComponent extends TabComponent implements OnInit {

  public groupsModel: GroupModel[];
  public usersModel: UserModel[];
  public groupsFilteredModel: GroupModel[];
  public usersFilteredModel: UserModel[];
  public groupQuery: string;
  public userQuery: string;

  public isGroupListLoading = false;
  public isUserListLoading = false;
  public isChosenItemsLoading = false;

  constructor(
    private groupService: UserGroupService,
    private userService: UserService,
    private missionDetailService: MissionDetailService,
    private toasterService: ToasterService
    ) { super(); }

  ngOnInit() { }

  public addUser(user: UserModel): void {

  }

  public addGroup(group: GroupModel): void {
    const itemIndex = this.groupsFilteredModel.indexOf(group);
    const existingIndex = this.model.audienceGroups.indexOf(group);
    if (itemIndex > -1 && existingIndex < 0) {
      // this.groupsFilteredModel.splice(itemIndex, 1);
      this.model.audienceGroups.push(group);
    }
    if ( existingIndex > -1) {
      this.model.audienceGroups.splice(existingIndex, 1);
    }
  }

  public isUserSelected(user: UserModel): boolean {
    return true;
  }

  public isGroupSelected(group: GroupModel): boolean {
    return this.model.audienceGroups.filter(
      function(m){return m.groupId === group.groupId;}).length > 0;
  }

  public removeUser(user: UserModel): void {

  }

  public removeGroup(group: GroupModel): void {
    if (this.isGroupListLoading) {
      return;
    }

    const itemIndex = this.model.audienceGroups.indexOf(group);
    if (itemIndex > -1) {
      this.model.audienceGroups.splice(itemIndex, 1);
    }

  }

  public searchUsers(query: string): void {
    
  }

  public searchGroups(query: string): void {
    this.groupsFilteredModel = this.groupsModel.filter(
      function(m){return m.groupName.toLowerCase().indexOf(query.toLowerCase()) > -1; });
  }

  public onActivated(tab: any): void {
    if (!tab.active) {
      return;
    }
    if (this.busyState.audienceIsBusy ||
    this.busyState.audienceSaveFailed) {
      return;
    }
    if (!this.active) {
      this.active = true;
      this.reset();
      this.loadChosenGroupsAndUsers();
    }
  }

  private reset(): void {
      this.active = true;
      this.groupsModel = [];
      this.groupsFilteredModel = [];
      this.usersModel = [];
      this.usersFilteredModel = [];
      this.groupQuery = '';
      this.userQuery = '';
      this.model.audienceGroups = [];
  }
  private loadGroups(): void {
    this.isGroupListLoading = true;
    this.groupService.getGroups()
    .subscribe(
      (groups: GroupModel[]) => {
        this.isGroupListLoading = false;
        this.groupsModel = groups;
        this.groupsFilteredModel = groups.slice();
      },
      (error) => {
        this.isGroupListLoading = false;
        this.toasterService.popAsync('error', '', 'Groups could not be listed.');
      });
  }

  private loadChosenGroupsAndUsers(): void {
    this.isChosenItemsLoading = true;

    this.missionDetailService.getAudiences(this.model.missionId)
    .subscribe((missionAudience: MissionAudienceModel) => {
      this.isChosenItemsLoading = false;
      this.model.audienceGroups = missionAudience.groups.slice();
      this.model.audienceUsers = missionAudience.users.slice();
      this.loadGroups();
    },
      (error) => {
        this.isGroupListLoading = false;
        this.toasterService.popAsync('error', '', 'Groups could not be listed.');
      });
  }
}
