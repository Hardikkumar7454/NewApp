import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  visible: boolean =  true;
  text: string ='';
 
  @Input({transform: trimString}) childMessage: string |undefined ='';

  @Output() messageToParent = new EventEmitter<string>();

  sendToParent(event:any) { 
    this.messageToParent.emit("Hello from Child!");
  }
  
}
function trimString(value: string | undefined) {
  return value?.trim() ?? 'Hell';
}
