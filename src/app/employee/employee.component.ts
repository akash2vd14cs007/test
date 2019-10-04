import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeedataserviceService } from '../employeedataservice.service';
import { Employee } from './employee';
import * as _ from "lodash";
import { ConfirmationService } from 'primeng/api';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [ConfirmationService]
})
export class EmployeeComponent implements OnInit {

  selectedEmployeeOption: string;
  arr: Employee[] = [];
  id:number;
  name:string;
  description:string;
  isactive:boolean;
  updatedItem:string;
  config: any;
  searchstr:string;
  constructor(
    private modalService: NgbModal,
    private _data:EmployeedataserviceService,
    private confirmationService: ConfirmationService,


  ) {
    this.config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: this.arr.length
  };
}


  ngOnInit() {
    this.getallemployees();
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  getallemployees(){
    this._data.getAllEmployees().subscribe(
      (data:Employee[])=>{
        this.arr=data;
      }
    );
  }
 // Add modal
 openAdd(content, passedTitle) {
  this.selectedEmployeeOption = passedTitle;
  this.name = "";
  this.description = "";
  this.isactive=null;
  var req= {
    backdrop:false,
  }
  this.modalService.open(content,req);
}
onFormSubmit(f) {
  console.log(f);
  if (this.selectedEmployeeOption == "Add") {
      console.log(this.id);
      this._data.addEmployees(f.value).subscribe((data: any) => {
          console.log(f.value);
          this.getallemployees();
          alert('successfully added');

      });
  } else {
      console.log(f.value);
      console.log(f.value.Name);
      console.log(f.value.Isactive);
      var req = {
          id: this.id,
          description: f.value.Description,
          name: f.value.Name,
          isactive:f.value.Isactive
      };
      console.log(req);

    this._data.editEmployees(req).subscribe( (data:any)=>{
        alert('updated');
        this.getallemployees();
       }
    );

  }

  this.modalService.dismissAll();
}


// Edit modal popup
openEdit(content, passedTitle,i, arr) {

  this.selectedEmployeeOption = passedTitle;
  console.log(arr.id);
  this.id = arr.id;
  this.name = arr.name;
  this.description = arr.description;
  this.isactive= arr.isactive;

  this.updatedItem = i;
  var req= {
    backdrop:false,
  }
  this.modalService.open(content,req);
}

onEmployeeDelete(id: number) {
  console.log(id);
  this._data.deleteEmployee(id).subscribe(
    (data:any)=>{
      // this.arr.splice(this.arr.indexOf(id),1);
      // alert('successfully deleted');
      this.getallemployees();
    }
  );
}
confirmDelete(id: number) {
  console.log(id);
  this.confirmationService.confirm({
      message: "Are you sure that you want to proceed?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
          this.onEmployeeDelete(id);
          // this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
      },
      reject: () => {
          // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
      }
  });
}
// onSearch(value) {
//   if (value != "") {
//     this.arr = this.arr.filter(x => x.name.indexOf(value) != -1);
//   } else {
//     this._data.getAllEmployees().subscribe(
//       (data: Employee[]) => {
//         this.arr = data;
//       },
//       function(error) {
//         alert(error);
//       },
//       function() {}
//     );
//   }
// }



// onSearch(value) {
//   console.log(value);
//   if (!_.isEmpty(value)) {
//       var arry = this.arr.filter(
//           x => x.name.indexOf(value) != -1
//       );
//       this.arr = _.forEach(this.arr, f => {

//           var m = _.some(f.name, el => _.includes(value, el));
//           if (m == false) {
//               return f;
//           }
//       });
//   } else {
//       this._data.getAllEmployees().subscribe(
//           (data:  Employee[]) => {
//               this.arr = data;
//           },
//           function(error) {
//               this.getallemployees();
//           }
//       );
//   }
// }
}
