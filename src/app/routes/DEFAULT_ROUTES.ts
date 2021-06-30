
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const DEFAULT_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../cms/cms.module').then(m => m.CmsModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
    }
]

@NgModule({
  imports: [RouterModule.forRoot(DEFAULT_ROUTES)],
  exports: [RouterModule]
})
export class DefaultRoutes { }
