import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente';
import { Cliente } from '../cadastro/cliente';


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

  listaClientes: Cliente[] = [];
  colunasTable: string[] = ['id', 'nome', 'cpf','dataNascimento', 'email'];

  constructor(private clienteService: ClienteService){

  }

  ngOnInit() {
    this.listaClientes = this.clienteService.pesquisarClientes(" ");
  }
}
