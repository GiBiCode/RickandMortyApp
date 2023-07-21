import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-morty',
  templateUrl: './morty.component.html',
  styleUrls: ['./morty.component.scss']
})
export class MortyComponent implements OnInit {
  public characters: any;
  //public allCharacters: any[] = []; 
  public searchQuery: FormControl = new FormControl(); // Inicializar el FormControl

  constructor(private apiService: ApiService, public dialog: MatDialog) { }
  allCharacters = []; 
  ngOnInit(): void {
    this.apiService.getCharacters().subscribe((data) => {
      console.log(data);
       this.allcharacters = data; 
      // Si data es un objeto, convertirlo en un arreglo usando Object.values()
      if (typeof data === 'object') {
        this.characters = Object.values(data);
      } else {
        this.characters = data;
      }

      this.characters = this.allCharacters.slice(); // Copiar los personajes originales para poder restaurarlos 
    /* this.allCharacters = data;
    this.characters = [...this.allCharacters];  */
    });

    // Suscripción a los cambios de valor del FormControl searchQuery
    this.searchQuery.valueChanges.subscribe(value => {
      // value es el nuevo valor cada vez que cambia
      // Aquí filtrar la lista en base al valor actual
      this.filterCharacters(value);
    });
  }

  openDialog(character: any) {
    this.dialog.open(DialogComponent, {
      data: {
        character
      },
    });
  }

  filterCharacters(query: any) {
    // Realizar la búsqueda en los personajes basada en el valor del campo de búsqueda
    
    if (query) {
      this.characters = this.allCharacters.filter((character: any) =>
        character.name.toLowerCase().includes(query)
      );
    } else {
      // Si la búsqueda está vacía, mostrar todos los personajes
      this.characters = this.allCharacters;
    }
  }
}
