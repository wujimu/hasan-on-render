import { Component, inject, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import axios from 'axios'
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink, RouterLinkActive],

})
export class FolderPage implements OnInit {

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  jobs: any;
  articles: any[] = [];
  private hasChanges = false;

  saveChanges() {
    // Save changes here
    this.hasChanges = false;
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    //$event.preventDefault();
    // window.location.pathname=
   this.location.go('/');
  //  window.location.reload();


    $event.returnValue = false;
    // setTimeout(() => {
    // this.router.navigate(['folder/travel']);
    // console.log('hit')
    // },10000)

    if (this.hasChanges) {

    }
  


  }

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {

    this.location.go('/');
    // window.location.reload();


    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    axios.get('assets/data/jobs.json').then(data => {
      this.jobs = data.data;
    }).catch(err => {});


  }


  ionViewWillEnter() {
    this.loadArticles();
  }

  loadArticles() {
    if (this.folder === 'blog' || this.folder === 'travel') {
      axios.get<any[]>(`/assets/data/${this.folder}.json`).then(data => {
        const d: any = data.data
        this.articles = d.articles
      });
    }
  }

  loadMoreArticles(event: any) {
    // Do something to load more articles
    event.target.complete();
  }
}
