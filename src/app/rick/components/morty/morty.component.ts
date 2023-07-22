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
/*   public searchQuery: FormControl = new FormControl(); // Inicializar el FormControl */

  constructor(private apiService: ApiService, public dialog: MatDialog) { }
   
  ngOnInit(): void {
    this.apiService.getCharacters().subscribe((data) => {
      console.log(data);
      this.characters = data;
    });

    
  }

  openDialog(character: any) {
    this.dialog.open(DialogComponent, {
      data: {
        character
      },
    });
  }
 
}
