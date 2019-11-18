import { Component } from '@angular/core';

import { BluetoothConnectPage } from '../bluetooth-connect/bluetooth-connect';
import { HomePage } from '../home/home';
import { HelpPage } from '../help/help';
import { ExerciseListPage } from '../exercise-list/exercise-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BluetoothConnectPage;
  tab3Root = ExerciseListPage;
  tab4Root = HelpPage;
  
  constructor() {

  }
}
