import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SMService } from './sm.service';
import { Student } from './student'
declare var jQuery: any;
@Component({
    selector: 'student-management',
    templateUrl: './students.html',
})

export class StudentsComponent implements OnInit {
    result: any;
    error: any;
    isLoading = false;
    isClicked = false;
    userData: any;
    searchString = '';
    tresult: any;
    modelStudent = new Student(0, "", "", "", 0);
    saved: any;
    constructor(private service: SMService) {
    }



    ngOnInit() {

        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(this.userData);
        }


        this.isLoading = true;
        this.service.readStudents(this.userData.user_account_info.id, this.userData.college_info.id, "94")
            .subscribe(result => {
                debugger;
                console.log(result);
                this.result = result.data;
                this.tresult = result.data;;
                this.isLoading = false;
            },
            error => this.error = <any>error);
    }

    Search() {
        let title = this.searchString.trim();
        this.result = this.tresult.filter(t => t.user_name.toLowerCase().includes(title.toLowerCase()));
    }

    updateModel(student) {
        debugger;
        this.modelStudent = student;
    }

    submitStudent() {
        jQuery("#btnSubmit1").html("Processing....").prop('disabled', true);
        this.service.submitStudent(this.userData.user_account_info.id, this.userData.college_info.id, "94", this.modelStudent.user_id, this.modelStudent.mobile_number, this.modelStudent.email, this.modelStudent.user_name)
            .subscribe(result => {
                debugger;
                console.log(result);
                this.saved = result.data;
                jQuery("#btnSubmit1").html("Submit").prop('disabled', false);
            },
            error => this.error = <any>error);
    }

}
