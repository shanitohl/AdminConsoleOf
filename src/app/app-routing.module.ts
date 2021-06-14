import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
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
import { AuthGuard } from './helpers/aut.guard';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';
import { HomeComponent } from './pages/home/home.component';
import { ListInvoicesOseComponent } from './pages/list-invoices-ose/list-invoices-ose.component';
import { ListInvoicesComponent } from './pages/list-invoices/list-invoices.component';
import { RandomGuard } from './random.guard';


const routes: Routes = [
  { path: "", pathMatch: "full", component: HomeComponent },

  {
    path: "home", component: HomeComponent, canActivate: [AuthGuard], children: [

    ]
  },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent /*, canActivate: [AuthGuard]*/ },
  { path: "invoices", component: ListInvoicesComponent /*, canActivate: [AuthGuard]*/ },
  { path: "invoices-ose", component: ListInvoicesOseComponent/*, canActivate: [AuthGuard]*/ },
  {
    path: "invoices/:documentType", component: CreateInvoiceComponent, children: [
      { path: "create-invoice", component: CreateInvoiceComponent, canActivate: [AuthGuard] }
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
