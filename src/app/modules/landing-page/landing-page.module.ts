import { NgModule } from "@angular/core";
import { YouTubePlayerModule } from "@angular/youtube-player";
import { PagenotfoundComponent } from "../app-common/components/pagenotfound/pagenotfound.component";
import { BuynowComponent } from "./components/buynow/buynow.component";
import { DetailsComponent } from "./components/details/details.component";
import { WelcomeNoMarginComponent } from "./components/examples/welcome-no-margin/welcome-no-margin.component";
import { WelcomeWithMarginCardComponent } from "./components/examples/welcome-with-margin-card/welcome-with-margin-card.component";
import { MainComponent } from "./components/main/main.component";
import { TrailerComponent } from "./components/trailer/trailer.component";
import { NewsComponent } from './components/news/news.component';
import { ProducerInfoComponent } from './components/producer-info/producer-info.component';
import { RequirementsComponent } from './components/requirements/requirements.component';

@NgModule({
    declarations: [
        MainComponent,
        PagenotfoundComponent,
        DetailsComponent,
        WelcomeWithMarginCardComponent,
        WelcomeNoMarginComponent,
        BuynowComponent,
        TrailerComponent,
        NewsComponent,
        ProducerInfoComponent,
        RequirementsComponent
    ],
    imports: [
        YouTubePlayerModule
    ],
})
export class LandingPageModule{}