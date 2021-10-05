import { ResponseCsvService } from './../../services/response-csv/response-csv.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response-csv',
  templateUrl: './response-csv.component.html',
  styleUrls: ['./response-csv.component.scss'],
})
export class ResponseCsvComponent implements OnInit {
  csvUrls: any;
  constructor(private _rcs: ResponseCsvService) {}

  ngOnInit(): void {
    this.csvUrls = this._rcs.getCsvUrls();
  }
}
