import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  fileName: any;
  showSendButton = false;
  mainCsv: any;
  ngOnInit(): void {
  }
  onFileChange() {
    const inputNode: any = document.querySelector('#file');
    this.fileName = inputNode.files[0].name;
    this.mainCsv = inputNode.files[0];
    this.showSendButton = true;
  }
  sedCsv() {
    let formData = new FormData();
    formData.append("csvFile", this.mainCsv);
    this.http.post("http://localhost:3001/api/v1/csv-process", formData).subscribe(response => {
      console.log(response)
    })
  }
}
