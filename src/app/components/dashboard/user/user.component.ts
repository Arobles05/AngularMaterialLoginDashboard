import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { IUser } from 'src/app/interfaces/IUser';



const listUsers: IUser[] = [
  { usuario:'usuario', nombre: 'Hydrogen',apellido: 'ape',sexo:'M'},
  {usuario: 'usuario',nombre: 'Helium', apellido: 'apell',sexo:'F'},
  {usuario: 'usuario',nombre: 'Lithium',apellido: 'apell',sexo:'M'},
  {usuario: 'usuario',nombre: 'Beryllium',apellido:'apel',sexo:'F'},
  { usuario: 'usuario', nombre: 'Boron', apellido: 'apel', sexo: 'M' },
  { usuario: 'usuario', nombre: 'Carbon', apellido: 'pelli', sexo: 'M' },
  { usuario: 'usuario', nombre: 'Nitrogen', apellido: 'pell', sexo: 'M' },
  { usuario: 'usuario', nombre: 'Oxygen', apellido: 'pellid', sexo: 'F' },
  { usuario: 'usuario', nombre: 'Fluorine', apellido: 'pell', sexo: 'F' },
  { usuario: 'usuario', nombre: 'Neon', apellido: 'pellido', sexo: 'F' }
]

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  dataSource = new MatTableDataSource<IUser>(listUsers);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
   // MatPaginator Output
  pageEvent: PageEvent;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];


  constructor() {

   }

  ngOnInit(): void {
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
