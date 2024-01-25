import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ContenidoRoutingModule } from '../Contenido/Contenido-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { MatChipsModule } from '@angular/material/chips';






const COMPONENTS: any[] = [
  EmployeesComponent
]
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, ContenidoRoutingModule, MatCheckboxModule, FormsModule, MatFormFieldModule, MatChipsModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC]
})
export class ContenidoModule {}




