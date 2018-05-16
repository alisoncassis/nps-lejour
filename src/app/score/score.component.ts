import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {
  score = 0;
  disabled = false;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onVoted = new EventEmitter<number>();

  emitScore(score: number): void {
    this.score = score;
    this.disabled = true;
    // this.onVoted.emit(score);
  }

}
