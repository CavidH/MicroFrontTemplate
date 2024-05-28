import {Routes} from "@angular/router";
import {CustomManifest} from "./config";
import {loadRemoteModule} from "@angular-architects/native-federation";
import {routes} from "../app.routes";

export function buildRoutes(options:CustomManifest ) :Routes{


  const lazyRoutes:Routes=Object.keys(options).map(
    key=>{
      const entry=options  ;
      return {
        path:entry.routePath,
        loadChildren:()=>loadRemoteModule({
          exposedModule:entry.exposedModule,
          remoteName:key
        }).then(m=>m[entry.ngModuleName])

      }
    }

  );

  return[...routes,...lazyRoutes];


}
