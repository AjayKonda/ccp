import { Component } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { Http, Headers } from '@angular/http';
declare var jQuery: any;
@Component({
    selector: 'login',
    templateUrl: './app.login.html'
})

export class LoginComponent {
    isError = false;
    userdata: any;
    constructor(public router: Router, public http: Http) {
        this.isError = false;
    }

    login(event, username, password) {
        this.isError = false;
        jQuery("#loginBtn").html("Signing in....").prop('disabled', true);
        //        jQuery("#loginBtn").prop('disabled', true);
        event.preventDefault();
        var role_id = 1;
        let body = JSON.stringify({ username, password, role_id });
        this.http.post('https://api.frndzzy.com/webservices_cubix/college_portal_api.php?action=login', body)
            .subscribe(
            response => {
                debugger;
                if (response.json() != undefined && response.json() != "undefined") {
                    debugger;
                    if (response.json().success == "1") {
                        this.userdata = JSON.stringify(response.json().data);
                        localStorage.setItem('userInfo', this.userdata);
                        //jQuery.magnificPopup.close();
                        this.router.navigate(['/dashboard/landing']);
                    }
                    else {
                        this.isError = true;
                        jQuery("#loginBtn").html("Sign in").prop('disabled', false);
                        event.preventDefault();
                    }
                } else {
                    this.isError = true;
                    jQuery("#loginBtn").html("Sign in").prop('disabled', false);
                    event.preventDefault();
                }
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }

}