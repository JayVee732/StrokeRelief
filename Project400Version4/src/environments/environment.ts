// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Firebase details
  firebase: {
    apiKey: "AIzaSyB12Xy8cTfZd6dzCD0ZuOdFQRo2fdfCcMQ",
    authDomain: "stroke-relief.firebaseapp.com",
    databaseURL: "https://stroke-relief.firebaseio.com",
    projectId: "stroke-relief",
    storageBucket: "stroke-relief.appspot.com",
    messagingSenderId: "342699847893"
  } 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
