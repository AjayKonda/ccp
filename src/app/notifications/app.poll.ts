import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { NotificationService } from './app.notifications.service';
import { Http, Headers } from '@angular/http';
import { Notification } from './notification';
declare var jQuery: any;
@Component({
    selector: 'notification-poll',
    templateUrl: './app.poll.html'
})

export class PollComponent {
    result: any;
    tresult: any
    error: any;
    userData: any;
    isLoading = false;
    model = new Notification()
    constructor(private notificationService: NotificationService, public http: Http) {
    }
    ngAfterViewInit() {

    }

    ngOnInit() {
        this.isLoading = true;
        this.notificationService.getDepartments()
            .subscribe(result => {
                console.log(result);
                this.result = result.data;
                this.isLoading = false;
            },
            error => this.error = <any>error);

        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(this.userData);
            if (this.userData.access_permission_info.can_notify_all_students == 0) {
                this.model.year = -1;
            }
        }
    }

    onSubmit(model) {
        jQuery("#btnSubmit").html("Sending....").prop('disabled', true);
        console.log(model);
        model.account_id = this.userData.user_account_info.account_id;
        model.role_id = this.userData.access_permission_info.role_id;
        model.college_id = this.userData.college_info.id;
        model.file_url = '';
        model.send_option = 1;
        model.action_required = 1;
        model.action_choices = [model.action_choice1, model.action_choice2, model.action_choice3, model.action_choice4];
        debugger;
        this.notificationService.sendNotification(model)
            .subscribe(
            result => {
                this.result = result.data;
                this.resetModel();
                jQuery("#btnSubmit").html("Send").prop('disabled', false);
            },
            error => this.error = <any>error);
    }

    resetModel() {
        this.model.send_option = 1;
        this.model.dept_id = 0;
        this.model.year = 0;
        this.model.title = '';
        this.model.message = '';
        this.model.priority = 0;
        this.model.action_required = 0;
        this.model.action_question = '';
        this.model.action_choice1 = '';
        this.model.action_choice2 = '';
        this.model.action_choice3 = '';
        this.model.action_choice4 = '';
    }
}
