import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cep!:number
  address:{bairro:string, cidade:string, estado:string}={bairro:'', cidade:'', estado:''}
  handlePress(){
    fetch('http://viacep.com.br/ws/'+this.cep+'/json/')
    .then(res=>res.json())
    .then(data=>{
      this.address.bairro = data.bairro
      this.address.cidade = data.localidade
      this.address.estado = data.uf
      console.log(this.address)
    })


  }
}
