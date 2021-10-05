import { Router } from '@angular/router';
import { ResponseCsvService } from './../../services/response-csv/response-csv.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoadingResponse = false;
  constructor(
    private http: HttpClient,
    private _rcs: ResponseCsvService,
    private router: Router
  ) {}
  fileName: any;
  showSendButton = false;
  mainCsv: any;
  ngOnInit(): void {}
  onFileChange() {
    const inputNode: any = document.querySelector('#file');
    this.fileName = inputNode.files[0].name;
    this.mainCsv = inputNode.files[0];
    this.showSendButton = true;
  }
  sedCsv() {
    let formData = new FormData();
    formData.append('csvFile', this.mainCsv);
    this.isLoadingResponse = true;
    this.http
      .post('https://thawing-thicket-32621.herokuapp.com/api/v1/csv-process', formData)
      .subscribe(async (response) => {
        this._rcs.setCsvUrls(response);
        await new Promise((res, rej) => {
          setTimeout(() => {
            res(true);
          }, 7000);
        });
        this.isLoadingResponse = false;
        this.router.navigate(['/home/response']);
      });
  }
}
