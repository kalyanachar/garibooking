import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import * as Globals from '../../core/globals';
import { MainService } from '../../core/services/main.service';
@Component({
  selector: 'app-hirecar',
  templateUrl: './hirecar.component.html',
  styleUrls: ['./hirecar.component.scss']
})
export class HirecarComponent implements OnInit {
  allCarlist : any=[];
  imageBaseUrl;
  sid:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mainService: MainService,
  ) { }

  ngOnInit() {
    this.imageBaseUrl = environment.imageBaseUrl;
    this.sid =0;
    this.getCarList(this.sid);
  }
  getCarList(id) {
    this.sid =id;
    var data = {
      id:id
    }
    console.log(data);
    this.mainService.carList(data).subscribe(
      res => {
        console.log(res);
     this.allCarlist = res['carList'];
     console.log("All Car List==>",this.allCarlist);
    // console.log("All Car List==>",this.allCarlist.other_features[0]);
      },
      error => {

        // console.log(error)
      }
    )
  }

  gotoHomePage() {
    this.router.navigate(['/home']);
  }

  // getCarResult(id) {
  //   this.mainService.carListFilter(id).subscribe(
  //     res => {
  //       console.log(res);
  //    this.allCarlist = res['carList'];
  //    console.log("All Car List==>",this.allCarlist);
  //   // console.log("All Car List==>",this.allCarlist.other_features[0]);
  //     },
  //     error => {
  //       // console.log(error)
  //     }
  //   )
  // }


}
