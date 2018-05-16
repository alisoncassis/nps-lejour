import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClose = new EventEmitter<boolean>();

  emitClose() {
    this.onClose.emit(true);
  }

}
