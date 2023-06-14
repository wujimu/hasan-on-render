import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { IonImg, ModalController, ScrollDetail } from "@ionic/angular";
import axios from "axios";
import { ApiService } from "src/app/api-service.service";
import { PictureZoomComponent } from "src/app/modal/picture-zoom/picture-zoom.component";
import { Location } from "@angular/common";
import { ImagesService } from "../../preload/images.service";
@Component({
  selector: "app-album",
  templateUrl: "./album.page.html",
  styleUrls: ["./album.page.scss"],
})
export class AlbumPage implements OnInit {
  @ViewChild("grid", { static: true }) grid!: ElementRef;
  private readonly itemsPerSlide = 30;
  private itemsPerColumn = 1;
  apiKey: string = "042sbtq1iJEYJyFFeJc0U5AXIYwhjq0tCEZldD9ozc1zDv8M5NEXsRPp";
  photos: any = [];
  perPage = 100;
  currentPage = 1;

  constructor(
    private apiService: ApiService,
    private modalController: ModalController,
    private imagesService: ImagesService,
    private location: Location
  ) {}
  @ViewChild(IonImg)
  ionImg!: IonImg;
  async openModal(photo: string) {
    const modal = await this.modalController.create({
      component: PictureZoomComponent,
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.9,
      componentProps: { photo },
    });
    modal.present();
  }
  dismiss() {
    this.modalController.dismiss();
  }

  async getImages() {
    const searchQuery = "team";

    try {
      const pexels = await this.apiService.getData(
        `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${
          this.perPage
        }&page=${this.currentPage++}`,
        {
          headers: { Authorization: this.apiKey },
        }
      );

      const photos = pexels.photos.map(
        (photo: {
          alt: string;
          photographer_id: number;
          height: number;
          width: number;
          photographer: string;
          src: {
            original: string;
            large2x: string;
            large: string;
            medium: string;
            small: string;
            portrait: string;
            landscape: string;
            tiny: string;
          };
        }) => {
          return {
            original: photo.src.original,
            medium: photo.src.medium,
            large: photo.src.large2x,
            landscape: photo.src.landscape,
            tiny: photo.src.tiny,
            photographer: photo.photographer,
            photographer_id: photo.photographer_id,
            alt: photo.alt,
          };
        }
      );

      while (photos.length) this.photos.push(photos.shift());
    } catch (error) {
      // Handle the error here
      console.error(error);
    }

    this.updateGrid();
  }

  async ngOnInit() {
    this.location.go("/");
    await this.getImages();
  }

  async onScroll(event: any) {
    const clientWindow = await event.target.getScrollElement();

    if (
      clientWindow.scrollHeight <=
      clientWindow.clientHeight + clientWindow.scrollTop + 50
    ) {
      this.loadMorePhotos();
    }
  }
  handleScrollEnd() {
    //console.log('scrolled to end')
  }

  handleScrollStart() {}
  async loadMorePhotos() {
    await this.getImages();
  }

  private updateGrid() {
    this.itemsPerColumn = Math.ceil(this.photos.length / this.itemsPerSlide);
    const grid = this.grid.nativeElement;
    grid.style.gridTemplateRows = `repeat(auto-fill, minmax(${
      300 / this.itemsPerColumn
    }%, 1fr)`;
  }
  ngOnDestroy() {}
}
