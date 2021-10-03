import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}
    loggedIn = false;
    isAuthenticated() {
        return this.loggedIn;
    }
    login(email: String, password: String) {
        let loginData = {email, password}
        this.http.post("http://localhost:3001/api/v1/login", loginData).subscribe(response => {
            console.log(response);
        })
    }
    logout() {
        this.loggedIn = false;
    }
}