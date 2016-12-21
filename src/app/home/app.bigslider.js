"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BigSliderComponent = (function () {
    function BigSliderComponent() {
    }
    BigSliderComponent.prototype.ngAfterViewInit = function () {
        $('#hero-slider').flexslider({
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
                $(slider).find(".animated").each(function () {
                    $(this).removeAttr("class");
                });
            },
            start: function (slider) {
                $(slider).find(".flex-active-slide")
                    .find("h1").addClass("animated fadeInDown show")
                    .next().addClass("animated fadeInUp show");
                $(window).trigger('resize');
            },
            after: function (slider) {
                $(slider).find(".flex-active-slide")
                    .find("h1").addClass("animated fadeInDown show")
                    .next().addClass("animated fadeInUp show");
            }
        });
        $('#testimonial-slider').flexslider({
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
        $('#startups-slider').flexslider({
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
        $('.smoothscroll').on('click', function (e) {
            e.preventDefault();
            var target = this.hash, $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 800, 'swing', function () {
                window.location.hash = target;
            });
        });
        var sections = $("section"), navigation_links = $("#nav-wrap a");
        sections.waypoint({
            handler: function (direction) {
                var active_section;
                active_section = $('section#' + this.element.id);
                if (direction === "up")
                    active_section = active_section.prev();
                var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
                navigation_links.parent().removeClass("current");
                active_link.parent().addClass("current");
            },
            offset: '25%'
        });
        $(window).on('scroll', function () {
            var h = $('header').height();
            var y = $(window).scrollTop();
            var header = $('#main-header');
            if ((y > h + 30) && ($(window).outerWidth() > 768)) {
                header.addClass('opaque');
            }
            else {
                if (y < h + 30) {
                    header.removeClass('opaque');
                }
                else {
                    header.addClass('opaque');
                }
            }
        });
    };
    BigSliderComponent = __decorate([
        core_1.Component({
            selector: 'big-slider',
            templateUrl: '../app/home/app.bigslider.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BigSliderComponent);
    return BigSliderComponent;
}());
exports.BigSliderComponent = BigSliderComponent;
//# sourceMappingURL=app.bigslider.js.map