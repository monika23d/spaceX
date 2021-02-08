import { Component, OnInit } from '@angular/core';
import{ LaunchService } from '../../services/launch.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  launchYear: any
  launchDetails: any;
  allDetails: any
  showSpinner: any
  constructor(private _launchService: LaunchService) { 
    
  }

  ngOnInit() {
    this.showSpinner = this.showSpinner
  }
  sendLaunch(val:string){
    this.launchYear=val;
    this._launchService.setLaunch(val)
  }

  updateSpinner(spin:any){
    this.showSpinner = spin
  }

}
