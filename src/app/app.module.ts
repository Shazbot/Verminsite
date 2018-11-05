import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { QuestToDescriptionPipe } from "./quest-to-description.pipe";
import { RarityToColorPipe } from "./rarity-to-color.pipe";
import { DifficultyToSkullsPipe } from './difficulty-to-skulls.pipe';
import { BoonToColorPipe } from './boon-to-color.pipe';
import { KeysToKeyIconsPipe } from './keys-to-key-icons.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    RarityToColorPipe,
    QuestToDescriptionPipe,
    DifficultyToSkullsPipe,
    BoonToColorPipe,
    KeysToKeyIconsPipe
  ],
  imports: [BrowserModule, HttpClientModule, CommonModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
