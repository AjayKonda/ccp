import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { GuestLectureService } from './app.guestlectures.service';
import { GuestLecture } from './GuestLecture';
declare var jQuery: any;
@Component({
    selector: 'tutor-profile',
    templateUrl: './app.tutorprofile.html',
})

export class TutorProfileComponent implements OnInit {
    result: any;
    error: any;
    isLoading = false;
    isClicked = false;
    model = new GuestLecture();
    userData: any;
    guest_lecture_org_id = 0;
    constructor(private route: ActivatedRoute, private location: Location, private guestLectureService: GuestLectureService) {

    }

    ngOnInit(): void {
        this.isLoading = true;
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.guest_lecture_org_id = id;
            this.guestLectureService.readGuestLectureReqProfile(51, id)
                .subscribe(result => {
                    this.result = result.data[0];
                    debugger;
                    console.log(this.result.name)
                    this.isLoading = false;
                },
                error => this.error = <any>error);
        });

        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(this.userData);
        }
    }

    changeDates() {
        this.isClicked = true;
    }

    goBack(): void {
        localStorage.setItem('fromProfile', 'true');
        this.location.back();
    }


    onSubmit() {
        this.model.guest_lecture_org_id = this.guest_lecture_org_id;
        this.model.college_id =   this.userData.college_info.id;
        this.model.date_range = '2016-12-20 to 2016-12-20';
        jQuery("#btnSubmit").html("Requesting....").prop('disabled', true);
        console.log(this.model);
        this.guestLectureService.createGuestLectureReq(this.model)
            .subscribe(
            result => {
                this.result = result.data;
                //$('#myModal').modal('hide');
                jQuery("#btnSubmit").html("Send Request").prop('disabled', false);
                jQuery("#connect").prop('disabled', true);
            },
            error => this.error = <any>error);
    }

}
