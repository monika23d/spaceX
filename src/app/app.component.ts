import { Component, OnInit } from '@angular/core';
import{ LaunchService } from './services/launch.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  launchDetails: any
constructor(private _launchService: LaunchService){}


  ngOnInit() {
    this._launchService.getLaunch().subscribe((resp) =>{
      this.launchDetails = resp
    },
    (err) => {
      console.log("ERROR MONIKA")
    })
  }
}
