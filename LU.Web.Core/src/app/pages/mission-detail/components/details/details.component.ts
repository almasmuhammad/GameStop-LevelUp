import { Component, OnInit, Input } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { MissionModel } from '../../models';

@Component({
  selector: 'app-mission-detail-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {
  @Input() model: MissionModel;

  public uploader: FileUploader;
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  public name = 'test';

  constructor() { }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  ngOnInit() {
    this.uploader = new FileUploader({url: this.model.fileName});
  }

  onSubmit() {

  }
}
