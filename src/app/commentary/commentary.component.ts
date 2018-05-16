import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss']
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

  getEmojiSrc() {
    if (this.score >= 9) {
      return 'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_large.png?v=1480481056';
    } else if (this.score >= 7 && this.score <= 8) {
      return 'https://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_large.png?v=1480481019';
    } else {
      return 'https://cdn.shopify.com/s/files/1/1061/1924/files/Crying_Face_Emoji.png?9898922749706957214';
    }
  }

}
