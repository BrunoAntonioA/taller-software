import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftAsideComponent } from './left-aside/left-aside.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { PostulacionComponent } from './postulacion/postulacion.component';
import { EventosComponent } from './eventos/eventos.component';
import { FooterComponent } from './footer/footer.component';
import { ConcursosComponent } from './concursos/concursos.component';
import { FinanzasComponent } from './finanzas/finanzas.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { InicioComponent } from './inicio/inicio.component';
import { PreseleccionComponent } from './preseleccion/preseleccion.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { AdmisibilidadComponent } from './admisibilidad/admisibilidad.component';
import { TablaProyectoComponent } from './tabla-proyecto/tabla-proyecto.component';

const appRoutes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'postulacion', component: PostulacionComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'footer', component: FooterComponent},
  { path: 'concursos', component: ConcursosComponent},
  { path: 'finanzas', component: FinanzasComponent},
  { path: 'estadisticas', component: EstadisticasComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'preseleccion', component: PreseleccionComponent},
  { path: 'seleccion', component: SeleccionComponent},
  { path: 'admisibilidad', component: AdmisibilidadComponent},
  { path: 'tabla-proyecto', component: TablaProyectoComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true}// <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftAsideComponent,
    SubHeaderComponent,
    PostulacionComponent,
    EventosComponent,
    FooterComponent,
    ConcursosComponent,
    FinanzasComponent,
    EstadisticasComponent,
    InicioComponent,
    PreseleccionComponent,
    SeleccionComponent,
    AdmisibilidadComponent,
    TablaProyectoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
