import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-stories",
  templateUrl: "./stories.page.html",
  styleUrls: ["./stories.page.scss"],
})
export class StoriesPage implements OnInit {
  articles: Array<any> = [];
  constructor() {}

  async ngOnInit() {
    try {
      const response = await axios.get("./assets/articles.json");
      this.articles = response.data;
    } catch (err) {}
  }
}

