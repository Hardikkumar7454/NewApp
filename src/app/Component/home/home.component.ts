import { Component, inject, ViewChild } from '@angular/core';
import { AppserviceService } from '../../service/appservice.service';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../Directive/highlight.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent,CommonModule, FormsModule,HighlightDirective ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  firstName = '';
  color = 'yellow';
  @ViewChild(RegisterComponent) header!: RegisterComponent;

  ngAfterViewInit() {
    console.log(this.header.text);
  }
  parentMessage = "Hello from Parent!";
 
  messageFromChild = "";

  private appserviceService = inject(AppserviceService);
  totalCost =  this.appserviceService.add(20,10);


  receiveFromChild(message: string) {debugger
    this.messageFromChild = message;
  }
}
