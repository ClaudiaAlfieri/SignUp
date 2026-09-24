import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Cliente } from './cliente';
import { ClienteService } from '../cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
export class Cadastro implements OnInit {

  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((query: any) => {
      const params = query['params'];
      const id = params['id'];
      if(id){
        let clienteEncontrado = this.clienteService.buscarClientePorId(id);
        if(clienteEncontrado){
          this.atualizando = true;
          this.cliente = clienteEncontrado;
        }
        this.atualizando = true;
        this.cliente = this.clienteService.buscarClientePorId(id) || Cliente.newCliente();
      }
    })
  }

  salvar(){
    this.clienteService.salvar(this.cliente);
    this.cliente = Cliente.newCliente();
  }

}
