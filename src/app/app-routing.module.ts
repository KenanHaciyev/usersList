import { MainComponent } from './components/main/main.component'
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

const routes: Routes = [
	{
		path: '',
		component: MainComponent,
	},
	{
		path: 'addForm',
		loadChildren: () => import('./modules/form/form.module').then((m) => m.FormModule),
	},
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
