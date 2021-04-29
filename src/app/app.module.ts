import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {NgbPaginationModule, NgbAlertModule,NgbDropdownModule,NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './components/info/info.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { ProyectosComponent } from './components/empleados/proyectos/proyectos.component';
import { CurriculumComponent } from './components/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './components/empleados/experiencia/experiencia.component';
import { ListaEscritoresComponent } from './components/lista-escritores/lista-escritores.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';
import { TemplateComponent } from './forms/template/template.component';
import { ModelComponent } from './forms/model/model.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListInvoicesComponent } from './pages/list-invoices/list-invoices.component';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { ListInvoicesOseComponent } from './pages/list-invoices-ose/list-invoices-ose.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    AboutComponent,
    ContactComponent,
    DetalleEmpleadoComponent,
    ProyectosComponent,
    CurriculumComponent,
    ExperienciaComponent,
    ListaEscritoresComponent,
    DetalleComponent,
    ListarLibrosComponent,
    TemplateComponent,
    ModelComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    ListInvoicesComponent,
    CreateInvoiceComponent,
    PageNotFoundComponent,
    ListInvoicesOseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NgbDatepickerModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
