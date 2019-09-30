import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../core/services/main.service';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(
    private router: Router,
    private mainService: MainService,
  ) { }

  ngOnInit() {
    this.getCmsDetails(1);
  }

  getCmsDetails(id) {
    this.mainService.cmsDetails(id).subscribe(
      res => {
        console.log("Company Details==>",res);
        // this.companyDetails = res['companyDetails'];
        // console.log("Company Details==>",this.companyDetails);
      },
      error => {
        console.log(error);
      }
    )
  }

}
