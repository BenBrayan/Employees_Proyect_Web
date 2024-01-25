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


  employeeList: Employee[] = [];
  employeesTable: Employee[] = [];

  employeId: number = 0;



  constructor(
    private serviceEmployees: EmployeeService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.serviceEmployees.GetAllEmployees().subscribe((data: Employee[]) => {
      this.employeeList = data;
    });

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
