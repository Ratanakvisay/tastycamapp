// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  serverUrl: 'https://tastycam.visay.net/parse',
  appUrl: 'https://tastycam.visay.net',
  appImageUrl: 'https://www.akarac.com/wp-content/uploads/2019/04/tastycam-promo.jpg',
  appId: 'tastycam',
  fbId: '338694573517759',
  googleMapsApiKey: 'AIzaSyB1B7slkiKPQN26DpTltRzNA-05myduHfg',
  androidHeaderColor: '#fd0203',
  defaultUnit: 'km',
  defaultLang: 'en'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error';  // Included with Angular CLI.
