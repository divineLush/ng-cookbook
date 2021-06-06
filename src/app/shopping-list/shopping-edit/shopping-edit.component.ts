import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';

import Ingridient from '../../shared/indrigient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingridientAdded = new EventEmitter<Ingridient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newIngridient: Ingridient = { name, amount };
    this.ingridientAdded.emit(newIngridient);
  }
}
