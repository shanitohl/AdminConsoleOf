import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { CurriculumComponent } from './components/empleados/curriculum/curriculum.component';
import { ExperienciaComponent } from './components/empleados/experiencia/experiencia.component';
import { ProyectosComponent } from './components/empleados/proyectos/proyectos.component';
import { InfoComponent } from './components/info/info.component';
import { ListaEscritoresComponent } from './components/lista-escritores/lista-escritores.component';
import { ListarLibrosComponent } from './components/listar-libros/listar-libros.component';
import { ModelComponent } from './forms/model/model.component';
import { TemplateComponent } from './forms/template/template.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';
import { ListInvoicesOseComponent } from './pages/list-invoices-ose/list-invoices-ose.component';
import { ListInvoicesComponent } from './pages/list-invoices/list-invoices.component';
import { RandomGuard } from './random.guard';


const routes: Routes = [
  { path: "", pathMatch: "full", component: DashboardComponent },

  { path: "template", component: TemplateComponent },
  { path: "model", component: ModelComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "invoices", component: ListInvoicesComponent },
  { path: "invoices-ose", component: ListInvoicesOseComponent},
  {
    path: "invoices/:documentType", component: CreateInvoiceComponent, children: [
      { path: "create-invoice", component: CreateInvoiceComponent }
    ]
  },


  { path: "informacion", component: InfoComponent, canActivate: [RandomGuard] },
  { path: "sobre", component: AboutComponent },
  { path: "contacto", component: ContactComponent },
  { path: "escritores", component: ListaEscritoresComponent },
  {
    path: "escritores/:escritorId", component: DetalleComponent, children: [
      { path: "libros", component: ListarLibrosComponent }
    ]
  },
  {
    path: "empleado/:empleadoId", component: DetalleEmpleadoComponent,
    children: [
      { path: "proyectos", component: ProyectosComponent },
      { path: "experiencia", component: ExperienciaComponent },
      { path: "curriculum", component: CurriculumComponent }
    ]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
