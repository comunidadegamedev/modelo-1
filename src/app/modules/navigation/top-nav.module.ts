import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "src/app/app-routing.module";
import { TopNavComponent } from "./components/top-nav/top-nav.component";

@NgModule({
    declarations: [
        TopNavComponent
    ],
    imports:[
        RouterModule
    ],
    exports: [
        TopNavComponent
    ]
})
export class TopNavModule{}