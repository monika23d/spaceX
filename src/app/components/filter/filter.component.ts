import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { HelperService } from '../../utility/helper'

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  launchYear:any;

  @Output() sendLaunch = new EventEmitter<any>();
  constructor( private _helperService : HelperService) { }

  ngOnInit(){
    this.launchYear = this._helperService.helper.YEAR
  }

  onYearFiler(year:string){
    this.sendLaunch.emit(year)
  }

  onReset(){
    this.sendLaunch.emit('reset')
  }

  onLaunchSuccess(val:boolean){
    val === true ? this.sendLaunch.emit('launchSuccess') : this.sendLaunch.emit('launchFail')
  }

  onLandSuccess (val:boolean){
    val === true ? this.sendLaunch.emit('landSuccess') : this.sendLaunch.emit('landFail')
  }

}
