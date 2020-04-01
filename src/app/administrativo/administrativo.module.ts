import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativoRoutingModule } from './administrativo-routing.module';
import { IndexComponent } from './index/index.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';


@NgModule({
  declarations: [IndexComponent, RodapeComponent, MenuLateralComponent],
  imports: [
    CommonModule,
    AdministrativoRoutingModule
  ]
})
export class AdministrativoModule { }
