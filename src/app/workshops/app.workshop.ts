import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { WorkshopService } from './app.workshop.service';
import { Workshop } from './Workshop';
declare var jQuery: any;
@Component({
    selector: 'workshop-profile',
    templateUrl: './app.workshop.html',
})

export class WorkshopComponent implements OnInit {
    result: any;
    error: any;
    isLoading = false;
    isClicked = false;
    model = new Workshop();
    userData: any;
    workshop_org_id = 0;
    constructor(private route: ActivatedRoute, private location: Location, private wsService: WorkshopService) {

    }

    ngOnInit(): void {
        this.isLoading = true;

        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(this.userData);
        }

        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.workshop_org_id = id;
            this.wsService.readWorkshopReqProfile(this.userData.college_info.id, id)
                .subscribe(result => {
                    this.result = result.data[0];
                    debugger;
                    console.log(this.result)
                    this.isLoading = false;
                },
                error => this.error = <any>error);
        });


    }

    changeDates() {
        this.isClicked = true;
    }

    goBack(): void {
        localStorage.setItem('fromProfile', 'true');
        this.location.back();
    }


    onSubmit() {
        this.model.workshop_org_id = this.workshop_org_id;
        this.model.college_id =   this.userData.college_info.id;
        this.model.date_range = '2016-12-20 to 2016-12-20';
        jQuery("#btnSubmit").html("Requesting....").prop('disabled', true);
        console.log(this.model);
        this.wsService.createWorkshopReq(this.model)
            .subscribe(
            result => {
                //this.result = result.data;
                //$('#myModal').modal('hide');
                jQuery("#btnSubmit").html("Send Request").prop('disabled', false);
                jQuery("#connect").prop('disabled', true);
            },
            error => this.error = <any>error);
    }

}
