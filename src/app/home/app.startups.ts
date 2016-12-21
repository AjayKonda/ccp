import { Component, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
    selector: 'home-startups',
    templateUrl: './app.startups.html'
})
export class HomeStartupsComponent implements AfterViewInit {
    ngAfterViewInit() {
        jQuery('#startups-slider').flexslider({
            animation: "slide",
            animationLoop: true,
            namespace: "flex-",
            itemWidth: 175,
            controlNav: true,
            directionNav: false,
            smoothHeight: true,
            slideshowSpeed: 3000,
            animationSpeed: 600,
            minItems: 2,
            maxItems: 4
        });
    }
}