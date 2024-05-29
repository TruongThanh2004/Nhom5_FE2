import { Component, ViewChild, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('container', { static: false }) 'container': ElementRef;

  constructor(private renderer: Renderer2) {}

  activate() {
    this.renderer.addClass(this.container.nativeElement, 'active');
  }

  deactivate() {
    this.renderer.removeClass(this.container.nativeElement, 'active');
  }
}
