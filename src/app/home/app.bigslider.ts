import { Component, AfterViewInit } from '@angular/core';
declare var jQuery: any;
@Component({
    selector: 'big-slider',
    templateUrl: './app.bigslider.html'
})
export class BigSliderComponent implements AfterViewInit {
    ngAfterViewInit() {
        jQuery('#hero-slider').flexslider({
            namespace: "flex-",
            controlsContainer: ".hero-container",
            animation: 'fade',
            controlNav: true,
            directionNav: false,
            smoothHeight: true,
            slideshowSpeed: 4000,
            animationSpeed: 600,
            randomize: false,
            before: function (slider) {
                jQuery(slider).find(".animated").each(function () {
                    jQuery(this).removeAttr("class");
                });
            },
            start: function (slider) {
                jQuery(slider).find(".flex-active-slide")
                    .find("h1").addClass("animated fadeInDown show")
                    .next().addClass("animated fadeInUp show");

                jQuery(window).trigger('resize');
            },
            after: function (slider) {
                jQuery(slider).find(".flex-active-slide")
                    .find("h1").addClass("animated fadeInDown show")
                    .next().addClass("animated fadeInUp show");
            }
        });

        




        // jQuery('.smoothscroll').on('click', function (e) {

        //     e.preventDefault();

        //     var target = this.hash,
        //         $target = jQuery(target);

        //     jQuery('html, body').stop().animate({
        //         'scrollTop': $target.offset().top
        //     }, 800, 'swing', function () {
        //         window.location.hash = target;
        //     });

        // });

        // var sections = jQuery("section"),
        //     navigation_links = jQuery("#nav-wrap a");

        // sections.waypoint({

        //     handler: function (direction) {

        //         var active_section;

        //         active_section = jQuery('section#' + this.element.id);

        //         if (direction === "up") active_section = active_section.prev();

        //         var active_link = jQuery('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

        //         navigation_links.parent().removeClass("current");
        //         active_link.parent().addClass("current");

        //     },

        //     offset: '25%'

        // });

        // jQuery(window).on('scroll', function () {

        //     var h = jQuery('header').height();
        //     var y = jQuery(window).scrollTop();
        //     var header = jQuery('#main-header');

        //     if ((y > h + 30) && (jQuery(window).outerWidth() > 768)) {
        //         header.addClass('opaque');
        //     }
        //     else {
        //         if (y < h + 30) {
        //             header.removeClass('opaque');
        //         }
        //         else {
        //             header.addClass('opaque');
        //         }
        //     }

        // });

    }
}