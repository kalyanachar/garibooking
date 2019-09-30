import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { OwlCarousel } from 'ngx-owl-carousel';
import * as Globals from '../../core/globals';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../../core/services/main.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;
  categoryList = [];
  carTypeList :any=[];
  companyDetails:any ={};
  carList:any=[];
  carTypeDetails:any;
  carbookForm: FormGroup;
  carListname:any=[];
  status:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private mainService: MainService,
    private toastr: ToastrService,
  ) {
this.status =0;
    this.carbookForm = this.formBuilder.group({
      pickup_location: ["",Validators.required],
      drop_location: ["",Validators.required],
      car_type: ["",Validators.required],
      car_id: ["",Validators.required],
      pickup_date: ["",Validators.required],
      pickup_time: ["",Validators.required],
      drop_date: ["",Validators.required],
      drop_time: ["",Validators.required],
      name: ["",Validators.required],
      email: ["",[
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ]],
      phone: ["", [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
    //  password: ["", Validators.required]
    });

   }

  ngOnInit() {
    this.categoryList = [
      {
        'image': 'assets/img/car/mercedes-on-rent.jpg',
        'desc': 'Mercedes Car on rent'
      },
      {
        'image': 'assets/img/car/bus-on-rent.jpg',
        'desc': 'Bus on rent'
      },
      {
        'image': 'assets/img/car/bmw-on-rent.jpg',
        'desc': 'Mercedes Car on rent'
      },
      {
        'image': 'assets/img/car/bmw-on-rent.jpg',
        'desc': 'Mercedes Car on rent'
      },
      {
        'image': 'assets/img/car/bmw-on-rent.jpg',
        'desc': 'Mercedes Car on rent'
      },
      {
        'image': 'assets/img/car/bmw-on-rent.jpg',
        'desc': 'Mercedes Car on rent'
      }

    ];
    this.getCarType();
    this.getCarList(0);
    this.getCarTypeListDetails();

   
   
  }
  getCarType() {
    this.mainService.carTypeList().subscribe(
      res => {
        console.log("List Car Type==>",res);
        this.carTypeList = res['cartype'];
      },
      error => {
        console.log(error);
      }
    )
  }

  getCarList(id) {
    var data = {
      id:id
    }
    this.mainService.carList(data).subscribe(
      res => {
        console.log("List Car==>",res);
        this.carList = res['carList'];
      },
      error => {
        console.log(error);
      }
    )
  }
  typeCar(event) {
    console.log(event);
    const newVal = event.target.value;
    console.log(newVal);
   // alert(id);
  }
  getCarListbyType(event) {
    var data = {
      id:event.target.value
    }
    this.mainService.carListbyType(data).subscribe(
      res => {
        console.log("List Car Name==>",res);
        this.carListname = res['carname'];
      },
      error => {
        console.log(error);
      }
    )
  }

  getCarTypeListDetails() {
    this.mainService.getCarTypeListDetails().subscribe(
      res => {
        console.log("List Car Type Details 123==>",res);
        this.carTypeDetails = res['carTypeDetails'];
      },
      error => {
        console.log(error);
      }
    )
  }

  carBook() {
    console.log(this.carbookForm.value);
    console.log("Car Book Form==>",this.carbookForm);
   // if(this.carbookForm.valid) {
     this.carbookForm.value.address =  '1';
      this.mainService.carBook(this.carbookForm.value).subscribe(
        res => {
       //   alert(123);
         // this.router.navigate(['login']);
         this.carbookForm.reset();
         this.toastr.success('Car Booked successfully', '', {
           timeOut: 3000,
         });
        },
        error => {
          // console.log(error)
         this.toastr.error('Sorry Something is going wrong!!', '', {
           timeOut: 3000,
         });
        }
      )
    // } else {
    //   this.markFormGroupTouched(this.carbookForm)
    // }
  }


  gotoCarBook() {
    this.router.navigate(['bookcar']);
  }


  // gotoTop() {
  //   window.scrollTo(0,0);
  // }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && (form.get(field).dirty || form.get(field).touched);
  }

  displayFieldCss(form: FormGroup, field: string) {
    return {
      'is-invalid': form.get(field).invalid && (form.get(field).dirty || form.get(field).touched),
      'is-valid': form.get(field).valid && (form.get(field).dirty || form.get(field).touched)
    };
  }

 

}
