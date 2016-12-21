import { Component, OnInit, NgZone } from '@angular/core';
import { Account } from './Account';
import { AccountsService } from './app.accounts.service';
import { UPLOAD_DIRECTIVES } from 'ng2-uploader/ng2-uploader';
import { Http, Headers } from '@angular/http';
declare var jQuery: any;

@Component({
    selector: 'createaccounts',
    templateUrl: './app.createaccounts.html'
})
export class CreateAccountsComponent {

    roles: any;
    departments: any;
    result: any;
    error: any;
    private zone: NgZone;
    private basicOptions: Object;
    private response: any = {};
    apiurl = 'assets/images/avatars/default.png';
    apiurl1 = 'assets/images/avatars/default.png';
    userData: any;
    constructor(private accountsService: AccountsService, public http: Http) { }
    model = new Account();
    isLoading = false;
    ngOnInit() {
        this.zone = new NgZone({ enableLongStackTrace: false });
        this.basicOptions = {
            url: 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php?action=upload_my_file',
            fieldReset: true,
            allowedExtensions: ['xls', 'xlsx']
        };
        this.model.dept = 0;
        this.model.role_id = -1;
        this.isLoading = true;
        this.accountsService.getRoles()
            .subscribe(result => {
                console.log(result);
                this.roles = result.data;
            },
            error => this.error = <any>error);

        this.accountsService.getDepartments()
            .subscribe(result => {
                console.log(result);
                this.departments = result.data;
                this.isLoading = false;
            },
            error => this.error = <any>error);

        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(this.userData);
        }
    }

    handleUpload(data: any): void {
        jQuery("#uploader").hide();
        debugger;
        this.zone.run(() => {
            if (data && data.response) {
                data = JSON.parse(data.response);
                this.response = data;
                this.apiurl = this.response.api_url
                this.apiurl1 = this.response.file_full_url;
            }
        });

    }

    onSubmit(model) {
        jQuery("#btnSubmit").html("Processing....").prop('disabled', true);
        console.log(model);
        model.college_id = this.userData.college_info.id;
        model.profile_pic = this.apiurl;
        //var body = JSON.stringify(model);
        this.accountsService.createAccount(model)
            .subscribe(
            result => {
                this.result = result;
                this.resetModel()
                jQuery("#btnSubmit").html("Register").prop('disabled', false);
            },
            error => this.error = <any>error);

        console.log(this.result);
    }

    resetModel() {
        this.model.role_id = -1;
        this.model.dept = -1;
        this.model.username = '';
        this.model.password = '';
        this.model.firstname = '';
        this.model.lastname = '';
        this.model.gender = '';
    }

}