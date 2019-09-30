import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;
  userName:string;
  totalCart: any;
  productList:any =[];
  visibleKey: boolean;
  companyDetails:any ={};
  constructor(
    private router: Router,
    private userService: UserService,
    private mainService: MainService,
  ) {
    this.loadUserInfo();
   }

  ngOnInit() { 
    this.getCompanyDetails();
  }
  
  loadUserInfo() {
    if (localStorage.getItem('isLoggedin')) {
      this.loggedIn = true;
      this.userName = localStorage.getItem('userName');
      console.log(this.userName);
      console.log("Logged In ==>",this.loggedIn);
    }
    else {
      this.loggedIn = false;
      console.log("Logged In ==>",this.loggedIn);
    }
  }

  getCompanyDetails() {
    this.mainService.companyDetails().subscribe(
      res => {
        console.log("Company Details==>",res);
        this.companyDetails = res['companyDetails'];
        console.log("Company Details==>",this.companyDetails);
      },
      error => {
        console.log(error);
      }
    )
  }
 


  logout() {
    localStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['/']);
  }

}
