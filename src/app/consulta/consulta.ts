import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar  } from '@angular/material/snack-bar';
import { ClienteService } from '../cliente';
import { Cliente } from '../cadastro/cliente';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consulta',
  imports: [
    MatInputModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    CommonModule
  ],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss',
})
export class Consulta implements OnInit {

  nomeBusca: string = "";
  listaClientes: Cliente[] = [];
  colunasTable: string[] = ['id', 'nome', 'cpf','dataNascimento', 'email', 'acoes'];
  snack: MatSnackBar = inject(MatSnackBar);

  constructor(
    private router: Router,
    private clienteService: ClienteService
  ){

  }

  ngOnInit() {
    this.listaClientes = this.clienteService.pesquisarClientes(" ");
  }

  pesquisar(){
    this.listaClientes = this.clienteService.pesquisarClientes(this.nomeBusca);
  }

  preparaEditar(idCliente: string){
    this.router.navigate(['/cadastro'], { queryParams: { "id": idCliente } });
  }

  preparaDeletar(cliente: Cliente){
    cliente.deletando = true;
  }

  deletar(cliente: Cliente){
    this.clienteService.deletar(cliente);
    this.listaClientes = this.clienteService.pesquisarClientes('');
    this.snack.open("Cliente deletado com sucesso!", 'Ok', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
