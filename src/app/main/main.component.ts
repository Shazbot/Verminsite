import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";

import { Contract } from "../models/contract";
import { QandC } from "../models/q&c";
import { Quest, SlotType } from "../models/quest";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  quests: Quest[];
  contracts: Contract[];
  QnC: QandC;
  SlotType = SlotType;
  constructor(private http: HttpClient) {
    // fetch("assets/quests2.json")
    //   .then(response => response.json())
    //   .then(quests => (this.quests = quests));
    // this.quests = {};
  }

  ngOnInit(): void {
    this.http.get<QandC>("../assets/q&c.json").subscribe(data => {
      this.QnC = data;
      this.quests = this.QnC.quests;
      this.contracts = this.QnC.contracts;
    });
  }
}
