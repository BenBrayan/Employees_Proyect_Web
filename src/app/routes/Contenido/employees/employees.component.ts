import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from './employes.service';
import { Employee } from './employes.model';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  /////TABLA
  displayedColumns: string[] = ['ID', 'NOMBRES', 'SALARIO', 'SALARIO ANUAL', 'EDAD'];
  dataSource: MatTableDataSource<Employee>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  employeeList: {id: number, name: string}[] = [
    {id: 1, name: 'Tiger Nixon'},
    {id: 2, name: 'Garrett Winters'},
    {id: 3, name: 'Ashton Cox'},
    {id: 4, name: 'Cedric Kelly'},
    {id: 5, name: 'Airi Satou'},
    {id: 6, name: 'Brielle Williamson'},
    {id: 7, name: 'Herrod Chandler'},
    {id: 8, name: 'Rhona Davidson'},
    {id: 9, name: 'Colleen Hurst'},
    {id: 10, name: 'Sonya Frost'},
    {id: 11, name: 'Jena Gaines'},
    {id: 12, name: 'Quinn Flynn'},
    {id: 13, name: 'Charde Marshall'},
    {id: 14, name: 'Haley Kennedy'},
    {id: 15, name: 'Tatyana Fitzpatrick'},
    {id: 16, name: 'Michael Silva'},
    {id: 17, name: 'Paul Byrd'},
    {id: 18, name: 'Gloria Little'},
    {id: 19, name: 'Bradley Greer'},
    {id: 20, name: 'Dai Rios'},
    {id: 21, name: 'Jenette Caldwell'},
    {id: 22, name: 'Yuri Berry'},
    {id: 23, name: 'Caesar Vance'},
    {id: 24, name: 'Doris Wilder'}
    ];

  employeesTable: Employee[] = [];

  employeId: number = 0;



  constructor(
    private serviceEmployees: EmployeeService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // this.serviceEmployees.GetAllEmployees().subscribe((data: Employee[]) => {
    //   this.employeeList = data;
    // });
    this.GetAllEmployees();
  }

  TableConfiguration(){
    this.dataSource = new MatTableDataSource(this.employeesTable);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.snackBar.open('Se actualiza correctamente', 'Cerrar', {duration: 1000});

  }

  GetAllEmployees(){
   if(this.employeId === 0){
    //Consumo de servicio Api de todos los empleados
    this.serviceEmployees.GetAllEmployees().subscribe((data: Employee[]) => {
      this.employeesTable = data;

      //Metodo de configuracion vista de tabla con paginador
      this.TableConfiguration();
    });
   }
  }

  GetEmployeeById(){
    //Limpiar array en memoria
    this.employeesTable = [];

    //Consumo de servicio Api de empleado por Id
    this.serviceEmployees.GetEmployeeById(this.employeId).subscribe((data: Employee) => {
      this.employeesTable.push(data);

      //Metodo de configuracion vista de tabla con paginador
      this.TableConfiguration();
    });
  }



}
