import { Component, OnInit, ViewChild, } from '@angular/core';
import { DataService } from './data.service';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryComponent } from 'ngx-gallery';


@Component({
    selector: 'app-main-component',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.less']
})

export class MainComponent implements OnInit {
    item: any;
    isCollapsed = true;
    isDescriptionOpen = false;
    galleryOptions: NgxGalleryOptions[];
    galleryImages = [];
    @ViewChild(NgxGalleryComponent) preview: NgxGalleryComponent;
    lat: number;
    lng: number;

    constructor(public dataService: DataService) { }

    ngOnInit() {
        this.galleryOptions = [
            {
                width: '100%',
                height: '450px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide,
                previewFullscreen: true
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '450px',
                imagePercent: 80,
                thumbnailsPercent: 10,
                thumbnailsMargin: 5,
                thumbnailMargin: 5
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false,
                thumbnails: false
            }
        ];

        this.dataService.getItem().subscribe(data => {
            this.item = data;
            this.getImages();
            this.lat = this.item.WGS84_Y;
            this.lng = this.item.WGS84_X;
        });

    }

    openPreview(event: Event) {
        event.preventDefault();
        this.preview.openPreview(0);
    }

    showFullDescription(event: Event) {
        event.preventDefault();
        this.isDescriptionOpen = true;
    }

    getImages() {
        this.item.Media.forEach(media => {
            if (media.Categorie === 1) { // this check required since in some cases there is returned .pdf with Category:3
                const item = {
                    small: media.MediaItems[0].Url ? media.MediaItems[0].Url : '',
                    medium: media.MediaItems[2].Url ? media.MediaItems[2].Url : '',
                    big: media.MediaItems[3].Url ? media.MediaItems[3].Url : ''
                };
                this.galleryImages.push(item);
            }
        });
    }
}
