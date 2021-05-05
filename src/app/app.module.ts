import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgbPaginationModule, NgbAlertModule, NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';


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
import { LoginComponent } from './auth/login/login.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { HomeComponent } from './pages/home/home.component';
import { GoogleLoginProvider, FacebookLoginProvider, AuthServiceConfig } from 'angularx-social-login';
import { SocialLoginModule } from 'angularx-social-login';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("916665709175701")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("981626015364-s0otofiv4r6sf55dqker27o4cfeqs8ij.apps.googleusercontent.com")
      },
    ]
  );
  return config;
}

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
    ListInvoicesOseComponent,
    LoginComponent,
    HomeComponent
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
    NgbDropdownModule,
    SocialLoginModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
    // {
    //   provide: 'SocialAuthServiceConfig',
    //   useValue: {
    //     autoLogin: false,
    //     providers: [
    //       {
    //         id: GoogleLoginProvider.PROVIDER_ID,
    //         provider: new GoogleLoginProvider(
    //           'clientId'
    //         )
    //       },
    //       {
    //         id: FacebookLoginProvider.PROVIDER_ID,
    //         provider: new FacebookLoginProvider('916665709175701')
    //       }
    //     ]
    //   } as SocialAuthServiceConfig,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
