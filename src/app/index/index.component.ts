import { Component } from '@angular/core';
import { HTTPService } from '../services/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  score = 0;
  id = '';
  comment = '';
  npsFinhed = false;
  modalClosed = false;

  constructor(private httpService: HTTPService) { }

  onVoted(score: number): void {
    this.score = score;
    this.httpService.post({ score }, 'saveScore')
      .subscribe(response => {
        if (response.data) {
          this.id = response.data.id;
        }
      });
  }

  onComment(comment: string): void {
    const body = {
      id: this.id,
      comment
    };
    this.httpService.post(body, 'saveComment')
      .subscribe(response => {
        if (response.data) {
            this.comment = comment;
            this.npsFinhed = true;
          }
        });
  }

}
