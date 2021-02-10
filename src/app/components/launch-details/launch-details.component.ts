import { Component, OnInit,Input, OnChanges, Output, EventEmitter  } from '@angular/core';
import{ LaunchService } from '../../services/launch.service'

@Component({
  selector: 'launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss']
})
export class LaunchDetailsComponent implements OnInit {
  launchDetails: any
  launchYear: any
  allDetails:any
  constructor(private _launchService: LaunchService) { }
  @Output() showSpinner = new EventEmitter<any>();
  @Input() recieveYear:any

  ngOnInit() {
    this.showSpinner.emit(true)
    this._launchService.currentData.subscribe((data)=>{
      this.recieveYear = data
      if(data && data === 'reset'){
        this.launchDetails = this.allDetails
      } else if(data && (data === 'launchSuccess' || data === 'launchFail')){
        let launchRes = data === 'launchSuccess' ? true : false
        this.launchDetails = this.allDetails.filter((elm: { successLaunch: boolean; }) => elm.successLaunch === launchRes)
      } 
      else if(data && (data === 'landSuccess' || data === 'landFail')){
        let landRes = data === 'landSuccess' ? true : false
        this.launchDetails = this.allDetails.filter((elm: { rocketDetails: { land_success: boolean; }[]; }) => elm.rocketDetails[0].land_success === landRes)
      }else {
        this.launchDetails = this.allDetails && this.allDetails.filter((elm: { launchYear: any; }) => elm.launchYear == this.recieveYear)
      }
      
    })
    this._launchService.getLaunch().subscribe((resp) =>{
      this.showSpinner.emit(false)
      this.allDetails = this.composeData(resp)
      this.launchDetails = JSON.parse(JSON.stringify(this.allDetails))
    })
  }

  composeData(resp: any[]){
    let launchDetailsArr:any  = []
    resp.forEach(elm => {
            let launch = {
                missionName:elm.mission_name,
                flightNum: elm.flight_number,
                missionID: elm.mission_id,
                launchYear: elm.launch_year,
                successLaunch:elm.launch_success ? elm.launch_success : false,
                rocketDetails:elm.rocket.first_stage && elm.rocket.first_stage.cores,
                imgLink:elm.links && elm.links.mission_patch_small
            }
            launchDetailsArr.push(launch)
        });
        return launchDetailsArr
    }
}
