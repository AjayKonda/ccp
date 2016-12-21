import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { NotificationService } from './app.notifications.service';
declare var jQuery: any;
@Component({
    selector: 'notification-history',
    templateUrl: './app.notificationhistory.html',
    providers: [NotificationService]
})

export class NotificationHistoryComponent implements OnInit {
    isLoading = false;
    isClicked = false;
    result: any;
    tresult: any;
    error: any;
    userData: any;
    searchString = '';
    constructor(private notificationService: NotificationService) {
    }

    ngOnInit() {
        this.isLoading = true;

        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(this.userData);
        }
        let body = JSON.stringify({ "college_id": this.userData.college_info.id });
        this.notificationService.fetchNotifications(body)
            .subscribe(result => {
                console.log(result);
                this.result = result.notification_data;
                this.tresult = result.notification_data;;
                this.isLoading = false;
            },
            error => this.error = <any>error);


    }

    changeDates() {
        if (jQuery("#change").html() == "CANCEL") {
            jQuery("#change").html("CHANGE");
            this.isClicked = false;
        }
        else if (jQuery("#change").html() == "CHANGE") {
            jQuery("#change").html("CANCEL");
            this.isClicked = true;
        }
    }

    getNotifications() {
        jQuery("#btnSubmit").html("Processing....").prop('disabled', true);
        this.isLoading = true;
        let body = JSON.stringify({ "college_id": this.userData.college_info.id });
        this.notificationService.fetchNotifications(body)
            .subscribe(result => {
                console.log(result);
                this.result = result.notification_data;
                this.tresult = result.notification_data;;
                this.isLoading = false;
                this.changeDates();
                jQuery("#btnSubmit").html("Submit").prop('disabled', false);
            },
            error => this.error = <any>error);
    }

    Search() {
        let title = this.searchString.trim();
        debugger;
        this.result = this.tresult.filter(t => t.title.toLowerCase().includes(title.toLowerCase()));

    }
}
