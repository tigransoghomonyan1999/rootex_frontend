import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable()
export class ResponseCsvService {
  csvUrls: any;
  csvUrlsWasChanged = new Subject();
  setCsvUrls(urls: any) {
    this.csvUrls = urls.slice();
    this.csvUrlsWasChanged.next();
  }
  getCsvUrls() {
    return this.csvUrls;
  }
}
