import { Component, Directive, Injectable, Input } from '@angular/core';

export class RouterLinkStubDirective {
  @Input() linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
