import { Component, AfterViewInit, OnInit, NgZone } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { NotificationService } from './app.notifications.service';
import { Http, Headers } from '@angular/http';
import { Notification } from './notification';
declare var jQuery: any;
@Component({
    selector: 'notification',
    templateUrl: './app.notifications.html',
})
export class NotificationComponent implements AfterViewInit, OnInit {
    result: any;
    tresult: any
    error: any;
    userData: any;
    isLoading = false;
    model = new Notification()
    private zone: NgZone;
    private basicOptions: Object;
    private response: any = {};
    apiurl = '';
    apiurl1 = '';


    constructor(private notificationService: NotificationService, public http: Http) {
    }

    ngAfterViewInit() {
        jQuery('#characterLeft').text('300 characters left');
        jQuery('#message').keyup(function () {
            var max = 300;
            var len = jQuery(this).val().length;
            if (len >= max) {
                jQuery('#characterLeft').text('You have reached the limit');
                jQuery('#characterLeft').addClass('red');
                jQuery('#btnSubmit').addClass('disabled');
            }
            else {
                var ch = max - len;
                jQuery('#characterLeft').text(ch + ' characters left');
                jQuery('#btnSubmit').removeClass('disabled');
                jQuery('#characterLeft').removeClass('red');
            }
        });
    }

    ngOnInit() {

        this.zone = new NgZone({ enableLongStackTrace: false });
        this.basicOptions = {
            url: 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php?action=upload_my_file',
            fieldReset: true,
            allowedExtensions: ['xls', 'xlsx']
        };



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

    handleUpload(data: any): void {
        jQuery("#uploader").hide();
        debugger;
        this.zone.run(() => {
            if (data && data.response) {
                data = JSON.parse(data.response);
                this.response = data;
                debugger;
                this.apiurl = this.response.api_url
                this.apiurl1 = this.response.file_full_url;
            }
        });

    }

    onSubmit(model) {
        jQuery("#btnSubmit").html("Sending....").prop('disabled', true);
        console.log(model);
        model.account_id = this.userData.user_account_info.account_id;
        model.role_id = this.userData.access_permission_info.role_id;
        model.college_id = this.userData.college_info.id;
        model.file_url = this.apiurl1;
        model.send_option = 1;
        model.action_required = 0;
        model.action_question = '';
        model.section_id = 0;
        debugger;
        this.notificationService.sendNotification(model)
            .subscribe(
            result => {
                this.result = result.data;
                debugger;
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
    }
}
