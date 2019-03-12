import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'home',
          children: [
            {
              path: '',
              loadChildren: '../home/home.module#HomePageModule'
            }
          ]
        },
        {
          path: 'bluetooth-connect',
          children: [
            {
              path: '',
              loadChildren: '../bluetooth-connect/bluetooth-connect.module#BluetoothConnectPageModule'
            }
          ]
        },
        {
          path: 'exercise',
          children: [
            {
              path: '',
              loadChildren: '../exercise-list/exercise-list.module#ExerciseListPageModule'
            }
          ]
        },
        {
          path: 'help',
          children: [
            {
              path: '',
              loadChildren: '../help/help.module#HelpPageModule'
            }
          ]
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/home',
      pathMatch: 'full'
    }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule { }
