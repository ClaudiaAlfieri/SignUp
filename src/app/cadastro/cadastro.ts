import { Component, OnInit, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar  } from '@angular/material/snack-bar';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { Cliente } from './cliente';
import { ClienteService } from '../cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxMaskDirective, provideNgxMask} from 'ngx-mask';
import { Brasilapi } from '../brasilapi';
import { Estado, Municipio } from '../brasilapi.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CommonModule,
    MatIconModule,
    NgxMaskDirective
  ], providers: [provideNgxMask()

  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
export class Cadastro implements OnInit {

  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;
  snack: MatSnackBar = inject(MatSnackBar);
  estados: Estado[] = [];
  municipios: Municipio[] = [];

  constructor(
    private clienteService: ClienteService,
    private brasilapi : Brasilapi,
    private route: ActivatedRoute,
    private router: Router
  ) {}

 ngOnInit(): void {
  this.carregarUFs();

  this.route.queryParamMap.subscribe((query: any) => {
    const params = query['params'];
    const id = params['id'];
    if (id) {
      let clienteEncontrado = this.clienteService.buscarClientePorId(id);
      if (clienteEncontrado) {
        this.atualizando = true;
        this.cliente = clienteEncontrado;
        if (this.cliente.uf) {
        const event = { value: this.cliente.uf };
        this.carregarMunicipios(event as MatSelectChange);
      }
      }
    }
  });
}

 carregarUFs(){
    // observable  subscriber
    this.brasilapi.listarUfs().subscribe({
      next: listaEstados => this.estados = listaEstados,
      error: erro => console.log("ocorreu um erro: ", erro)
    })
  }

carregarMunicipios(event: MatSelectChange){
    const ufSelecionada = event.value;
    this.brasilapi.listarMunicipios(ufSelecionada).subscribe({
      next: listaMunicipios => this.municipios = listaMunicipios,
      error: erro => console.log('ocorreu um erro: ', erro)
    })
  }

  salvar(){
    if(!this.atualizando){
      this.clienteService.salvar(this.cliente);
      this.cliente = Cliente.newCliente();
      this.mostrarMensagem("Cliente cadastrado com sucesso!");
    } else{
      this.clienteService.atualizar(this.cliente);
      this.router.navigate(['/consulta']);
      this.mostrarMensagem("Atualizado com sucesso!");
    }
  }

  mostrarMensagem(mensagem: string){
    this.snack.open(mensagem, 'Ok', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
