import { Component, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
    selector: 'home-testimonials',
    templateUrl: './app.testimonials.html'
})
export class HomeTestimonialsComponent implements AfterViewInit  {
    ngAfterViewInit() {
        jQuery('#testimonial-slider').flexslider({
            namespace: "flex-",
            controlsContainer: "",
            animation: 'slide',
            controlNav: true,
            directionNav: false,
            smoothHeight: true,
            slideshowSpeed: 7000,
            animationSpeed: 600,
            randomize: false,
        });
    }

}