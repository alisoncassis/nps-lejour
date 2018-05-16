import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.css']
})
export class CommentaryComponent {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onComment = new EventEmitter<string>();
  @Input() score: number;
  comment = '';
  disabled = false;

  emitComment() {
    this.disabled = true;
    // this.onComment.emit(this.comment);
  }

}
