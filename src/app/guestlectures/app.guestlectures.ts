import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { GuestLecture } from './GuestLecture';
import { GuestLectureService } from './app.guestlectures.service';
import { Http, Headers } from '@angular/http';
@Component({
    selector: 'guest-lectures',
    templateUrl: './app.guestlectures.html',
})

export class GuestLecturesComponent implements OnInit {
    result: any;
    tresult: any
    error: any;
    isLoading = false;
    searchString = '';
    constructor(private guestLectureService: GuestLectureService, public http: Http) {
    }

    ngOnInit() {
        let isBack = JSON.parse(localStorage.getItem('fromProfile'));
        debugger;
        if (isBack == true) {
            localStorage.setItem('fromProfile', 'false');
            this.result = JSON.parse(localStorage.getItem('GuestLectures'));
        } else {
            this.isLoading = true;
            this.guestLectureService.readGuestLectureReq(51)
                .subscribe(result => {
                    console.log(result);
                    this.result = result.data;
                    this.tresult = result.data;
                    console.log(result.data);
                    localStorage.setItem('GuestLectures', JSON.stringify(this.result));
                    this.isLoading = false;
                },
                error => this.error = <any>error);
        }
    }

    Search() {
        let title = this.searchString.trim();
        debugger;
        this.result = this.tresult.filter(t => t.name.toLowerCase().includes(title.toLowerCase()));

    }
}
