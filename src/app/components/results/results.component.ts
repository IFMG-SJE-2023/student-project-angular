import { Component } from '@angular/core';
import {Input} from '@angular/core';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  @Input() endereco:{bairro:string, cidade:string, estado:string}={bairro:'', cidade:'', estado:''}
}
