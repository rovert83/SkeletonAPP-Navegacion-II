import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CertificadosComponent } from 'src/app/components/certificados/certificados.component';
import { ExperienciaLaboralComponent } from 'src/app/components/experiencia-laboral/experiencia-laboral.component';
import { MisDatosComponent } from 'src/app/components/mis-datos/mis-datos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    CertificadosComponent, 
    ExperienciaLaboralComponent, 
    MisDatosComponent,]
})
export class HomePageModule {}
