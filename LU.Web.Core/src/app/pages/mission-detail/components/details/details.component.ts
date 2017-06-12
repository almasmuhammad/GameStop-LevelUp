import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { TabComponent } from '../../models';

import { MissionModel } from 'app/pages/mission-detail/models';

@Component({
  selector: 'app-mission-detail-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent extends TabComponent implements OnInit {
  @Input() model: MissionModel;

  public uploader: FileUploader;
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  constructor() { super(); }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  ngOnInit() {
    this.uploader = new FileUploader({url: this.model.fileName});
  }
}
