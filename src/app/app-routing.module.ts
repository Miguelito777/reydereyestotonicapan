import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './layouts/website/website.component';


const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    data: {paginas: [33]},
    //canActivate: [AuthGuardService],
    children: [
      {
          path: '',
          loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
          //canActivate: [AuthGuardService],
          //component:HomeComponent
      },
      //{
      //    path: 'INVENTARIO',
      //    loadChildren: () => import('./inventario/inventario.module').then(m => m.InventarioModule),
      //},
      // {
      //     path: 'CATALOGO',
      //     loadChildren: () => import('./catalogo/catalogo.module').then(m => m.CatalogoModule),
      // },
      // {
      //     path: 'reportes',
      //     loadChildren: () => import('./reportes/reportes.module').then(m => m.ReportesModule),
      // },
      // {
      //     path: 'padre',
      //     loadChildren: () => import('./genericopadre/genericopadre.module').then(m => m.Genericopadre),
      //     data: {paginas: [33]},
      //     canActivate:[validarPermisos]
      // }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
