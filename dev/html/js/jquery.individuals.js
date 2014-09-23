// page init
jQuery(function(){
  //initTabs();
  initOpenClose();
  initAccordion();
  initInputs();
  initSmoothScroll();
  initDayOrNight();
  initSlideShow();
  initTeamAccordion();
  initAnchorLinks();
  initCycleCarousel();
  hoverFix();
  jcf.customForms.replaceAll();
});

function initDayOrNight(){
  var date = new Date();
  var season, time;
  var timeIndex = date.getHours();
  var mega = jQuery('.mega-banner');

  //check time
  if(timeIndex >= 21 && timeIndex >=5) time = 'night';
  else time = 'day';
  if (time == 'night') {
    mega.addClass('night');
  } else {
    mega.removeClass('night')
  }
  var holder = jQuery('.people-holder');
  var photo = jQuery('.photo-container');
  var links = holder.find('a');
  var photoImg = photo.find('.holder img');
  if (time =='night') {
    photoImg = photo.find('.holder02 img');
  }
  links.each(function() {
    var link = jQuery(this);
    link.on('mouseenter', function() {
      photoImg.removeClass('active');
      jQuery(photoImg[links.index(this)]).addClass('active');
    });

  });
}

// smooth scroll init
function initSmoothScroll() {
  // var animSpeed = 400;
  // var scrollHolder = jQuery('html, body');
  // var isWP8 = /MSIE 10.*Touch/.test(navigator.userAgent);
  // var win = jQuery(window);
  
  // jQuery('.btn-top').each(function() {
  //   var link = jQuery(this);
  //   var block = jQuery(link.attr('href'));
  //   if (block.length) {
  //     link.click(function(e) {
  //       e.preventDefault();
  //       scrollTo(block.offset().top);
  //     });
  //   }
  // });
  // function scrollTo(offsetTop) {
  //   if (isWP8) {
  //     win.scrollTop(offsetTop);
  //   } else {
  //     scrollHolder.stop().animate({scrollTop: offsetTop}, animSpeed);
  //   }
  // }
}

// function getWindowHeight() {
//   return typeof window.innerHeight === 'number' ? window.innerHeight : document.documentElement.clientHeight;
// }

function getProportion(data) {
  // // calculate element coords to fit in mask
  // var ratio = data.ratio;
  // var slideWidth = data.maskWidth,
  //   slideHeight = slideWidth / ratio;

  // if(slideHeight < data.maskHeight) {
  //   slideHeight = data.maskHeight;
  //   slideWidth = slideHeight * ratio;
  // }
  // return {
  //   width: slideWidth,
  //   height: slideHeight,
  //   marginTop: (data.maskHeight - slideHeight) / 2,
  //   marginLeft: (data.maskWidth - slideWidth) / 2
  // }
}

// hover fix
function hoverFix() {
  // var hoverClass = 'hover';
  // var listItems = jQuery('.thumbnails-list').find('li');
  // var isTouchDevice = /MSIE 10.*Touch/.test(navigator.userAgent) || ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

  // if (isTouchDevice) {
  //   listItems.each(function(e) {
  //     var listItem = jQuery(this);
  //     listItem.bind(navigator.msPointerEnabled ? 'MSPointerDown' : 'touchstart', function(e) {
  //       if(!listItem.hasClass(hoverClass)){
  //         e.preventDefault();
  //         listItems.removeClass(hoverClass);
  //         listItem.addClass(hoverClass);
  //       }
  //     });
  //   });
  //   jQuery(document).bind(navigator.msPointerEnabled ? 'MSPointerDown' : 'touchstart', function(e) {
  //     var target = jQuery(e.target);
  //     if(!target.is(listItems) && target.closest(listItems).length == 0){
  //       listItems.removeClass();
  //     };
  //   });
  // } else {
  //   listItems.each(function() {
  //     var listItem = jQuery(this);
  //     listItem.bind({
  //       'mouseenter': function() {
  //         listItem.addClass(hoverClass);
  //       },
  //       'mouseleave': function() {
  //         listItem.removeClass(hoverClass);
  //       }
  //     });
  //   });
  // }
}

// cycle scroll gallery init
function initCycleCarousel() {
  // var isWP8 = /MSIE 10.*Touch/.test(navigator.userAgent);
  // jQuery('#gallery').scrollAbsoluteGallery({
  //   mask: 'div.mask',
  //   slider: 'div.slideset',
  //   slides: 'div.slide',
  //   btnPrev: 'a.btn-prev',
  //   btnNext: 'a.btn-next',
  //   generatePagination: '.pagination',
  //   stretchSlideToMask: true,
  //   handleTouch: isWP8 ? false: true,
  //   pauseOnHover: true,
  //   maskAutoSize: true,
  //   autoRotation: true,
  //   switchTime: 4000,
  //   animSpeed: 500,
  //   onInit: function(that) {
  //     that.setHeight = function() {
  //       that.holder.height(getWindowHeight());
  //     }
  //     that.resizeImage = function() {
  //       clearTimeout(that.resizeTimer);
  //       that.resizeTimer = setTimeout(function() {
  //         that.slides.each(function() { 
  //           var slide = jQuery(this);
  //           var image = slide.find('img');
  //           image.css(getProportion({'ratio': image.width() / image.height(), 'maskHeight': slide.height(), 'maskWidth': slide.width()}));
  //         });
  //       }, 200);
        
  //     }
  //     that.setHeight();
  //     that.resizeImage();
  //   },
  //   onResize: function(that) {
  //     that.setHeight();
  //     that.resizeImage();
  //   }
  // });
  
  // jQuery('.cycle-gallery-2').scrollAbsoluteGallery({
  //   mask: 'div.mask',
  //   slider: 'div.slideset',
  //   slides: 'div.slide',
  //   btnPrev: 'a.btn-prev',
  //   btnNext: 'a.btn-next',
  //   generatePagination: '.pagination',
  //   stretchSlideToMask: true,
  //   pauseOnHover: true,
  //   maskAutoSize: true,
  //   autoRotation: true,
  //   switchTime: 4000,
  //   animSpeed: 500
  // });
  
  
  // jQuery('.services-quotes').scrollAbsoluteGallery({
  //   mask: 'div.mask',
  //   slider: 'div.slideset',
  //   slides: 'div.slide',
  //   btnPrev: 'a.btn-prev',
  //   btnNext: 'a.btn-next',
  //   generatePagination: '.pagination',
  //   stretchSlideToMask: true,
  //   pauseOnHover: true,
  //   maskAutoSize: true,
  //   autoRotation: false,
  //   switchTime: 4000,
  //   animSpeed: 500
  // });
  
}

// add classes on hover/touch
function initCustomHover() {
  // jQuery('#nav>li').touchHover();
}

// team accordion init
function initTeamAccordion() {
  // // find elements
  // var teamBlock = jQuery('ul.tabset'),
  //   teamLinks = teamBlock.find('a'),
  //   desktopTabHolder = teamBlock.siblings('.tab-content');

  // // handle custom structure
  // var setMobileStructure = function() {
  //   teamLinks.each(function() {
  //     var link = jQuery(this),
  //       parent = link.parent(),
  //       tab = jQuery(link.attr('href')),
  //       tabHolder = parent.find('.tab-content');

  //     if(!tabHolder.length) {
  //       tabHolder = jQuery('<div class="tab-content">').appendTo(parent);
  //     }

  //     tabHolder.append(tab);
  //   });
  // };
  // var setDesktopStructure = function() {
  //   teamLinks.each(function() {
  //     var link = jQuery(this),
  //       tab = jQuery(link.attr('href'));

  //     desktopTabHolder.append(tab);
  //   });
  // };

  // // handle layout resize
  // ResponsiveHelper.addRange({
  //   '..707': {
  //     on: function() {
  //       setMobileStructure();
  //       teamBlock.tabAccordion({
  //         onlyOneActive: false
  //       });
  //     },
  //     off: function() {
  //       teamBlock.data('TabAccordion').destroy();
  //     }
  //   },
  //   '708..': {
  //     on: function() {
  //       setDesktopStructure();
  //       teamBlock.tabAccordion({
  //         onlyOneActive: true
  //       });
  //     },
  //     off: function() {
  //       teamBlock.data('TabAccordion').destroy(); 
  //     }
  //   }
  // });
}

// fade gallery init
function initSlideShow() {
  // jQuery('div.slideshow').fadeGallery({
  //   slides: 'div.slide',
  //   btnPrev: 'a.btn-prev',
  //   btnNext: 'a.btn-next',
  //   pagerLinks: '.pagination li',
  //   event: 'click',
  //   useSwipe: true,
  //   autoRotation: true,
  //   autoHeight: true,
  //   switchTime: 3000,
  //   disableFadeIE: true,
  //   animSpeed: 400
  // });
}

// content tabs init
function initTabs() {
  // jQuery('ul.tabset').contentTabs({
  //   tabLinks: 'a'
  // });
}

// open-close init
function initOpenClose() {
  // jQuery('div.open-close').openClose({
  //   activeClass: 'active',
  //   opener: '.opener',
  //   slider: '.slide',
  //   animSpeed: 400,
  //   effect: 'slide'
  // });
}

/*
 * jQuery Accordion plugin
 */
;(function($){
  // $.fn.slideAccordion = function(opt){
  //   // default options
  //   var options = $.extend({
  //     addClassBeforeAnimation: false,
  //     activeClass:'active',
  //     opener:'.opener',
  //     slider:'.slide',
  //     animSpeed: 300,
  //     collapsible:true,
  //     event:'click'
  //   },opt);

  //   return this.each(function(){
  //     // options
  //     var accordion = $(this);
  //     var items = accordion.find(':has('+options.slider+')');

  //     items.each(function(){
  //       var item = $(this);
  //       var opener = item.find(options.opener);
  //       var slider = item.find(options.slider);
  //       opener.bind(options.event, function(e){
  //         if(!slider.is(':animated')) {
  //           if(item.hasClass(options.activeClass)) {
  //             if(options.collapsible) {
  //               slider.slideUp(options.animSpeed, function(){
  //                 hideSlide(slider);
  //                 item.removeClass(options.activeClass);
  //               });
  //             }
  //           } else {
  //             // show active
  //             var levelItems = item.siblings('.'+options.activeClass);
  //             var sliderElements = levelItems.find(options.slider);
  //             item.addClass(options.activeClass);
  //             showSlide(slider).hide().slideDown(options.animSpeed);
            
  //             // collapse others
  //             sliderElements.slideUp(options.animSpeed, function(){
  //               levelItems.removeClass(options.activeClass);
  //               hideSlide(sliderElements);
  //             });
  //           }
  //         }
  //         e.preventDefault();
  //       });
  //       if(item.hasClass(options.activeClass)) showSlide(slider); else hideSlide(slider);
  //     });
  //   });
  // };

  // // accordion slide visibility
  // var showSlide = function(slide) {
  //   return slide.css({position:'', top: '', left: '', width: '' });
  // };
  // var hideSlide = function(slide) {
  //   return slide.show().css({position:'absolute', top: -9999, left: -9999, width: slide.width() });
  // };
}(jQuery));

// accordion menu init
function initAccordion() {
  // jQuery('ul.accordion').slideAccordion({
  //   opener: 'a.opener',
  //   slider: 'div.slide',
  //   animSpeed: 300
  // });
}

// clear inputs on focus
function initInputs() {
  // PlaceholderInput.replaceByOptions({
  //   // filter options
  //   clearInputs: true,
  //   clearTextareas: true,
  //   clearPasswords: true,
  //   skipClass: 'default',
    
  //   // input options
  //   wrapWithElement: false,
  //   showUntilTyping: false,
  //   getParentByClass: false,
  //   placeholderAttr: 'value'
  // });
}

// smooth anchor links
function initAnchorLinks() {
  // var animSpeed = 1000,
  //   page = jQuery('html,body');

  // // animated scrolling handler
  // function scrollTo(offset) {
  //   page.stop().animate({
  //     scrollTop: offset
  //   }, animSpeed);
  // }

  // // back to top links
  // jQuery('a.go-top-js').click(function(e) {
  //   e.preventDefault();
  //   var targetId = this.getAttribute('href');
  //   var calcOffset = targetId.length > 1 ? jQuery(targetId).offset().top : 0;
  //   scrollTo(calcOffset)
  // });


  // // section scroller
  // var allSections = jQuery('#wrapper > section'),
  //   lastSection = allSections.last(),
  //   btnNextSection = jQuery('a.btn-down'),
  //   win = jQuery(window), currentScrollTop = win.scrollTop();

  // win.on('scroll', function() {
  //   currentScrollTop = win.scrollTop();
  //   if(currentScrollTop >= lastSection.offset().top) {
  //     btnNextSection.hide();
  //   } else {
  //     btnNextSection.show();
  //   }
  // });

  // btnNextSection.click(function(e) {
  //   e.preventDefault();
  //   var currentSectionIndex = 0;

  //   allSections.each(function(index) {
  //     var section = jQuery(this),
  //       sectionHeight = section.innerHeight() - 24,
  //       sectionOffsetTop = Math.round(section.offset().top);
  //     if(currentScrollTop >= sectionOffsetTop && currentScrollTop < sectionOffsetTop + sectionHeight ) {
  //       currentSectionIndex = index;
  //       return false;
  //     }
  //   });

  //   if(currentSectionIndex < allSections.length - 1) {
  //     var nextSection = allSections.eq(currentSectionIndex + 1);
  //     console.log(allSections.eq(currentSectionIndex));
  //     scrollTo(nextSection.offset().top);
  //   }
  // });
};

/*
 * Responsive Layout helper
 */
ResponsiveHelper = (function($){
  // // init variables
  // var handlers = [];
  // var win = $(window), prevWinWidth;
  // var scrollBarWidth = 0;

  // // prepare resize handler
  // function resizeHandler() {
  //   var winWidth = win.width() + scrollBarWidth;
  //   if(winWidth !== prevWinWidth) {
  //     prevWinWidth = winWidth;

  //     // loop through range groups
  //     $.each(handlers, function(index, rangeObject){
  //       // disable current active area if needed
  //       $.each(rangeObject.data, function(property, item) {
  //         if((winWidth < item.range[0] || winWidth > item.range[1]) && item.currentActive) {
  //           item.currentActive = false;
  //           if(typeof item.disableCallback === 'function') {
  //             item.disableCallback();
  //           }
  //         }
  //       });

  //       // enable areas that match current width
  //       $.each(rangeObject.data, function(property, item) {
  //         if(winWidth >= item.range[0] && winWidth <= item.range[1] && !item.currentActive) {
  //           // make callback
  //           item.currentActive = true;
  //           if(typeof item.enableCallback === 'function') {
  //             item.enableCallback();
  //           }
  //         }
  //       });
  //     });
  //   }
  // }
  // win.bind('load', function(){
  //   if((jQuery.browser.mozilla || $.browser.opera || $.browser.msie) && window.addEventListener) {
  //     scrollBarWidth = window.innerWidth - $('body').width();
  //     resizeHandler();
  //   }
  //   win.bind('resize orientationchange', resizeHandler);
  // });

  // // range parser
  // function parseRange(rangeStr) {
  //   var rangeData = rangeStr.split('..');
  //   var x1 = parseInt(rangeData[0], 10) || -Infinity;
  //   var x2 = parseInt(rangeData[1], 10) || Infinity;
  //   return [x1, x2].sort(function(a, b){
  //     return a - b;
  //   });
  // }

  // // export public functions
  // return {
  //   addRange: function(ranges) {
  //     // parse data and add items to collection
  //     var result = {data:{}};
  //     $.each(ranges, function(property, data){
  //       result.data[property] = {
  //         range: parseRange(property),
  //         enableCallback: data.on,
  //         disableCallback: data.off
  //       };
  //     });
  //     handlers.push(result);

  //     // call resizeHandler to recalculate all events
  //     prevWinWidth = null;
  //     resizeHandler();
  //   }
  // };
}(jQuery));

/*
 * jQuery TabAccordion plugin
 */
;(function($) {
  // function TabAccordion(options) {
  //   this.options = $.extend({
  //     holder: null,
  //     openers: 'a',
  //     animSpeed: 400,
  //     onlyOneActive: true,
  //     activeClass: 'active'
  //   }, options);
  //   this.init();
  // }
  // TabAccordion.prototype = {
  //   init: function() {
  //     if(this.options.holder) {
  //       this.findElements();
  //       this.attachEvents();
  //     }
  //   },
  //   findElements: function() {
  //     // init structure
  //     var self = this;
  //     this.holder = $(this.options.holder);
  //     this.openers = this.holder.find(this.options.openers);
  //     this.tabs = jQuery(null);

  //     // find all tabs
  //     this.openers.each(function() {
  //       var link = jQuery(this),
  //         tab = jQuery(link.attr('href'));

  //       link.data('tab', tab);
  //       self.tabs = self.tabs.add(tab);

  //       // handle active class
  //       var isActiveLink = link.hasClass(self.options.activeClass);
  //       tab.css({
  //         display: isActiveLink ? 'block' : 'none'
  //       });
  //       if(isActiveLink) {
  //         self.prevLink = link;
  //       }
  //     });
  //   },
  //   attachEvents: function() {
  //     // handle tab link click
  //     var self = this;
  //     this.clickHandler = function(e) {
  //       e.preventDefault();
  //       var link = jQuery(this);

  //       if(self.options.onlyOneActive) {
  //         if(link.hasClass(self.options.activeClass)) {
  //           self.hideTab(link);
  //         } else {
  //           self.switchTab(link);
  //         }
  //       } else {
  //         if(link.hasClass(self.options.activeClass)) {
  //           self.hideTab(link);
  //         } else {
  //           self.showTab(link);
  //         }
  //       }
  //     };
  //     this.openers.on('click', this.clickHandler);
  //   },
  //   hideTab: function(link) {
  //     // hide selected tab
  //     var tab = link.data('tab');
  //     tab.slideUp(this.options.animSpeed);
  //     link.removeClass(this.options.activeClass);
  //   },
  //   showTab: function(link) {
  //     // show selected tab
  //     var tab = link.data('tab');
  //     tab.slideDown(this.options.animSpeed);
  //     link.addClass(this.options.activeClass);
  //   },
  //   switchTab: function(link) {
  //     // handle tab switch order
  //     if(this.options.onlyOneActive) {
  //       if(this.prevLink) {
  //         this.hideTab(this.prevLink)
  //       }
  //       this.showTab(link)
  //     } else {
  //       this.showTab(link)
  //     }

  //     // save last active tab and link
  //     this.prevLink = link;
  //   },
  //   destroy: function() {
  //     // reset styles and remove handlers
  //     this.openers.off('click', this.clickHandler);
  //     this.tabs.css({
  //       display: ''
  //     });

  //     // remove all active classes only if multiple selected
  //     if(this.openers.filter('.'+this.options.activeClass).length > 1) {
  //       this.openers.removeClass(this.options.activeClass);
  //     }
  //   }
  // };

  // // jQuery plugin interface
  // $.fn.tabAccordion = function(opt) {
  //   return this.each(function() {
  //     jQuery(this).data('TabAccordion', new TabAccordion($.extend(opt, {holder: this})));
  //   });
  // };
}(jQuery));

/*
 * jQuery SlideShow plugin
 */
;(function($){
  // function FadeGallery(options) {
  //   this.options = $.extend({
  //     slides: 'ul.slideset > li',
  //     activeClass:'active',
  //     disabledClass:'disabled',
  //     btnPrev: 'a.btn-prev',
  //     btnNext: 'a.btn-next',
  //     generatePagination: false,
  //     pagerList: '<ul>',
  //     pagerListItem: '<li><a href="#"></a></li>',
  //     pagerListItemText: 'a',
  //     pagerLinks: '.pagination li',
  //     currentNumber: 'span.current-num',
  //     totalNumber: 'span.total-num',
  //     btnPlay: '.btn-play',
  //     btnPause: '.btn-pause',
  //     btnPlayPause: '.btn-play-pause',
  //     galleryReadyClass: 'gallery-js-ready',
  //     autorotationActiveClass: 'autorotation-active',
  //     autorotationDisabledClass: 'autorotation-disabled',
  //     autorotationStopAfterClick: false,
  //     circularRotation: true,
  //     switchSimultaneously: true,
  //     disableWhileAnimating: false,
  //     disableFadeIE: false,
  //     autoRotation: false,
  //     pauseOnHover: true,
  //     autoHeight: false,
  //     useSwipe: false,
  //     swipeThreshold: 15,
  //     switchTime: 4000,
  //     animSpeed: 600,
  //     event:'click'
  //   }, options);
  //   this.init();
  // }
  // FadeGallery.prototype = {
  //   init: function() {
  //     if(this.options.holder) {
  //       this.findElements();
  //       this.attachEvents();
  //       this.refreshState(true);
  //       this.autoRotate();
  //       this.makeCallback('onInit', this);
  //     }
  //   },
  //   findElements: function() {
  //     // control elements
  //     this.gallery = $(this.options.holder).addClass(this.options.galleryReadyClass);
  //     this.slides = this.gallery.find(this.options.slides);
  //     this.slidesHolder = this.slides.eq(0).parent();
  //     this.stepsCount = this.slides.length;
  //     this.btnPrev = this.gallery.find(this.options.btnPrev);
  //     this.btnNext = this.gallery.find(this.options.btnNext);
  //     this.currentIndex = 0;

  //     // disable fade effect in old IE
  //     if(this.options.disableFadeIE && !$.support.opacity) {
  //       this.options.animSpeed = 0;
  //     }

  //     // create gallery pagination
  //     if(typeof this.options.generatePagination === 'string') {
  //       this.pagerHolder = this.gallery.find(this.options.generatePagination).empty();
  //       this.pagerList = $(this.options.pagerList).appendTo(this.pagerHolder);
  //       for(var i = 0; i < this.stepsCount; i++) {
  //         $(this.options.pagerListItem).appendTo(this.pagerList).find(this.options.pagerListItemText).text(i+1);
  //       }
  //       this.pagerLinks = this.pagerList.children();
  //     } else {
  //       this.pagerLinks = this.gallery.find(this.options.pagerLinks);
  //     }

  //     // get start index
  //     var activeSlide = this.slides.filter('.'+this.options.activeClass);
  //     if(activeSlide.length) {
  //       this.currentIndex = this.slides.index(activeSlide);
  //     }
  //     this.prevIndex = this.currentIndex;

  //     // autorotation control buttons
  //     this.btnPlay = this.gallery.find(this.options.btnPlay);
  //     this.btnPause = this.gallery.find(this.options.btnPause);
  //     this.btnPlayPause = this.gallery.find(this.options.btnPlayPause);

  //     // misc elements
  //     this.curNum = this.gallery.find(this.options.currentNumber);
  //     this.allNum = this.gallery.find(this.options.totalNumber);

  //     // handle flexible layout
  //     this.slides.css({display:'block',opacity:0}).eq(this.currentIndex).css({
  //       opacity:''
  //     });
  //   },
  //   attachEvents: function() {
  //     var self = this;

  //     // flexible layout handler
  //     this.resizeHandler = function() {
  //       self.onWindowResize();
  //     };
  //     $(window).bind('load resize orientationchange', this.resizeHandler);

  //     if(this.btnPrev.length) {
  //       this.btnPrevHandler = function(e){
  //         e.preventDefault();
  //         self.prevSlide();
  //         if(self.options.autorotationStopAfterClick) {
  //           self.stopRotation();
  //         }
  //       };
  //       this.btnPrev.bind(this.options.event, this.btnPrevHandler);
  //     }
  //     if(this.btnNext.length) {
  //       this.btnNextHandler = function(e) {
  //         e.preventDefault();
  //         self.nextSlide();
  //         if(self.options.autorotationStopAfterClick) {
  //           self.stopRotation();
  //         }
  //       };
  //       this.btnNext.bind(this.options.event, this.btnNextHandler);
  //     }
  //     if(this.pagerLinks.length) {
  //       this.pagerLinksHandler = function(e) {
  //         e.preventDefault();
  //         self.numSlide(self.pagerLinks.index(e.currentTarget));
  //         if(self.options.autorotationStopAfterClick) {
  //           self.stopRotation();
  //         }
  //       };
  //       this.pagerLinks.bind(self.options.event, this.pagerLinksHandler);
  //     }

  //     // autorotation buttons handler
  //     if(this.btnPlay.length) {
  //       this.btnPlayHandler = function(e) {
  //         e.preventDefault();
  //         self.startRotation();
  //       };
  //       this.btnPlay.bind(this.options.event, this.btnPlayHandler);
  //     }
  //     if(this.btnPause.length) {
  //       this.btnPauseHandler = function(e) {
  //         e.preventDefault();
  //         self.stopRotation();
  //       };
  //       this.btnPause.bind(this.options.event, this.btnPauseHandler);
  //     }
  //     if(this.btnPlayPause.length) {
  //       this.btnPlayPauseHandler = function(e){
  //         e.preventDefault();
  //         if(!self.gallery.hasClass(self.options.autorotationActiveClass)) {
  //           self.startRotation();
  //         } else {
  //           self.stopRotation();
  //         }
  //       };
  //       this.btnPlayPause.bind(this.options.event, this.btnPlayPauseHandler);
  //     }

  //     // swipe gestures handler
  //     if(this.options.useSwipe && $.fn.hammer && isTouchDevice) {
  //       this.gallery.hammer({
  //         drag_block_horizontal: true,
  //         drag_min_distance: 1
  //       }).on('release dragleft dragright swipeleft swiperight', function(ev){
  //         switch(ev.type) {
  //           case 'dragright':
  //           case 'dragleft':
  //             ev.gesture.preventDefault();
  //             break;
  //           case 'swipeleft':
  //             self.nextSlide();
  //             ev.gesture.stopDetect();
  //             break;
  //           case 'swiperight':
  //             self.prevSlide();
  //             ev.gesture.stopDetect();
  //             break;
  //           case 'release':
  //             if(Math.abs(ev.gesture[self.options.vertical ? 'deltaY' : 'deltaX']) > self.options.swipeThreshold) {
  //               if(ev.gesture.direction == 'right') self.prevSlide(); else if(ev.gesture.direction == 'left') self.nextSlide();
  //             }
  //             break;
  //         }
  //       });
  //     }

  //     // pause on hover handling
  //     if(this.options.pauseOnHover) {
  //       this.hoverHandler = function() {
  //         if(self.options.autoRotation) {
  //           self.galleryHover = true;
  //           self.pauseRotation();
  //         }
  //       };
  //       this.leaveHandler = function() {
  //         if(self.options.autoRotation) {
  //           self.galleryHover = false;
  //           self.resumeRotation();
  //         }
  //       };
  //       this.gallery.bind({mouseenter: this.hoverHandler, mouseleave: this.leaveHandler});
  //     }
  //   },
  //   onWindowResize: function(){
  //     if(this.options.autoHeight) {
  //       this.slidesHolder.css({height: this.slides.eq(this.currentIndex).outerHeight(true) });
  //     }
  //   },
  //   prevSlide: function() {
  //     if(!(this.options.disableWhileAnimating && this.galleryAnimating)) {
  //       this.prevIndex = this.currentIndex;
  //       if(this.currentIndex > 0) {
  //         this.currentIndex--;
  //         this.switchSlide();
  //       } else if(this.options.circularRotation) {
  //         this.currentIndex = this.stepsCount - 1;
  //         this.switchSlide();
  //       }
  //     }
  //   },
  //   nextSlide: function(fromAutoRotation) {
  //     if(!(this.options.disableWhileAnimating && this.galleryAnimating)) {
  //       this.prevIndex = this.currentIndex;
  //       if(this.currentIndex < this.stepsCount - 1) {
  //         this.currentIndex++;
  //         this.switchSlide();
  //       } else if(this.options.circularRotation || fromAutoRotation === true) {
  //         this.currentIndex = 0;
  //         this.switchSlide();
  //       }
  //     }
  //   },
  //   numSlide: function(c) {
  //     if(this.currentIndex != c) {
  //       this.prevIndex = this.currentIndex;
  //       this.currentIndex = c;
  //       this.switchSlide();
  //     }
  //   },
  //   switchSlide: function() {
  //     var self = this;
  //     if(this.slides.length > 1) {
  //       this.galleryAnimating = true;
  //       if(!this.options.animSpeed) {
  //         this.slides.eq(this.prevIndex).css({opacity:0});
  //       } else {
  //         this.slides.eq(this.prevIndex).stop().animate({opacity:0},{duration: this.options.animSpeed});
  //       }

  //       this.switchNext = function() {
  //         if(!self.options.animSpeed) {
  //           self.slides.eq(self.currentIndex).css({opacity:''});
  //         } else {
  //           self.slides.eq(self.currentIndex).stop().animate({opacity:1},{duration: self.options.animSpeed});
  //         }
  //         setTimeout(function() {
  //           self.slides.eq(self.currentIndex).css({opacity:''});
  //           self.galleryAnimating = false;
  //           self.autoRotate();

  //           // onchange callback
  //           self.makeCallback('onChange', self);
  //         }, self.options.animSpeed);
  //       };

  //       if(this.options.switchSimultaneously) {
  //         self.switchNext();
  //       } else {
  //         clearTimeout(this.switchTimer);
  //         this.switchTimer = setTimeout(function(){
  //           self.switchNext();
  //         }, this.options.animSpeed);
  //       }
  //       this.refreshState();

  //       // onchange callback
  //       this.makeCallback('onBeforeChange', this);
  //     }
  //   },
  //   refreshState: function(initial) {
  //     this.slides.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass);
  //     this.pagerLinks.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass);
  //     this.curNum.html(this.currentIndex+1);
  //     this.allNum.html(this.stepsCount);

  //     // initial refresh
  //     if(this.options.autoHeight) {
  //       if(initial) {
  //         this.slidesHolder.css({height: this.slides.eq(this.currentIndex).outerHeight(true) });
  //       } else {
  //         this.slidesHolder.stop().animate({height: this.slides.eq(this.currentIndex).outerHeight(true)}, {duration: this.options.animSpeed});
  //       }
  //     }

  //     // disabled state
  //     if(!this.options.circularRotation) {
  //       this.btnPrev.add(this.btnNext).removeClass(this.options.disabledClass);
  //       if(this.currentIndex === 0) this.btnPrev.addClass(this.options.disabledClass);
  //       if(this.currentIndex === this.stepsCount - 1) this.btnNext.addClass(this.options.disabledClass);
  //     }
  //   },
  //   startRotation: function() {
  //     this.options.autoRotation = true;
  //     this.galleryHover = false;
  //     this.autoRotationStopped = false;
  //     this.resumeRotation();
  //   },
  //   stopRotation: function() {
  //     this.galleryHover = true;
  //     this.autoRotationStopped = true;
  //     this.pauseRotation();
  //   },
  //   pauseRotation: function() {
  //     this.gallery.addClass(this.options.autorotationDisabledClass);
  //     this.gallery.removeClass(this.options.autorotationActiveClass);
  //     clearTimeout(this.timer);
  //   },
  //   resumeRotation: function() {
  //     if(!this.autoRotationStopped) {
  //       this.gallery.addClass(this.options.autorotationActiveClass);
  //       this.gallery.removeClass(this.options.autorotationDisabledClass);
  //       this.autoRotate();
  //     }
  //   },
  //   autoRotate: function() {
  //     var self = this;
  //     clearTimeout(this.timer);
  //     if(this.options.autoRotation && !this.galleryHover && !this.autoRotationStopped) {
  //       this.gallery.addClass(this.options.autorotationActiveClass);
  //       this.timer = setTimeout(function(){
  //         self.nextSlide(true);
  //       }, this.options.switchTime);
  //     } else {
  //       this.pauseRotation();
  //     }
  //   },
  //   makeCallback: function(name) {
  //     if(typeof this.options[name] === 'function') {
  //       var args = Array.prototype.slice.call(arguments);
  //       args.shift();
  //       this.options[name].apply(this, args);
  //     }
  //   },
  //   destroy: function() {
  //     // navigation buttons handler
  //     this.btnPrev.unbind(this.options.event, this.btnPrevHandler);
  //     this.btnNext.unbind(this.options.event, this.btnNextHandler);
  //     this.pagerLinks.unbind(this.options.event, this.pagerLinksHandler);
  //     $(window).unbind('load resize orientationchange', this.resizeHandler);

  //     // remove autorotation handlers
  //     this.stopRotation();
  //     this.btnPlay.unbind(this.options.event, this.btnPlayHandler);
  //     this.btnPause.unbind(this.options.event, this.btnPauseHandler);
  //     this.btnPlayPause.unbind(this.options.event, this.btnPlayPauseHandler);
  //     this.gallery.bind({mouseenter: this.hoverHandler, mouseleave: this.leaveHandler});

  //     // remove swipe handler if used
  //     if(this.options.useSwipe && $.fn.hammer) {
  //       this.gallery.hammer().off('release dragleft dragright swipeleft swiperight');
  //     }
  //     if(typeof this.options.generatePagination === 'string') {
  //       this.pagerHolder.empty();
  //     }

  //     // remove unneeded classes and styles
  //     var unneededClasses = [this.options.galleryReadyClass, this.options.autorotationActiveClass, this.options.autorotationDisabledClass];
  //     this.gallery.removeClass(unneededClasses.join(' '));
  //     this.slidesHolder.add(this.slides).removeAttr('style');
  //   }
  // };

  // // detect device type
  // var isTouchDevice = /MSIE 10.*Touch/.test(navigator.userAgent) || ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

  // // jquery plugin
  // $.fn.fadeGallery = function(opt){
  //   return this.each(function(){
  //     $(this).data('FadeGallery', new FadeGallery($.extend(opt,{holder:this})));
  //   });
  // };
}(jQuery));

/*
 * jQuery Tabs plugin
 */
;(function($){
  // $.fn.contentTabs = function(o){
  //   // default options
  //   var options = $.extend({
  //     activeClass:'active',
  //     addToParent:false,
  //     autoHeight:false,
  //     autoRotate:false,
  //     checkHash:false,
  //     animSpeed:400,
  //     switchTime:3000,
  //     effect: 'none', // "fade", "slide"
  //     tabLinks:'a',
  //     attrib:'href',
  //     event:'click'
  //   },o);

  //   return this.each(function(){
  //     var tabset = $(this), tabs = $();
  //     var tabLinks = tabset.find(options.tabLinks);
  //     var tabLinksParents = tabLinks.parent();
  //     var prevActiveLink = tabLinks.eq(0), currentTab, animating;
  //     var tabHolder;

  //     // handle location hash
  //     if(options.checkHash && tabLinks.filter('[' + options.attrib + '="' + location.hash + '"]').length) {
  //       (options.addToParent ? tabLinksParents : tabLinks).removeClass(options.activeClass);
  //       setTimeout(function() {
  //         window.scrollTo(0,0);
  //       },1);
  //     }

  //     // init tabLinks
  //     tabLinks.each(function(){
  //       var link = $(this);
  //       var href = link.attr(options.attrib);
  //       var parent = link.parent();
  //       href = href.substr(href.lastIndexOf('#'));

  //       // get elements
  //       var tab = $(href);
  //       tabs = tabs.add(tab);
  //       link.data('cparent', parent);
  //       link.data('ctab', tab);

  //       // find tab holder
  //       if(!tabHolder && tab.length) {
  //         tabHolder = tab.parent();
  //       }

  //       // show only active tab
  //       var classOwner = options.addToParent ? parent : link;
  //       if(classOwner.hasClass(options.activeClass) || (options.checkHash && location.hash === href)) {
  //         classOwner.addClass(options.activeClass);
  //         prevActiveLink = link; currentTab = tab;
  //         tab.removeClass(tabHiddenClass).width('');
  //         contentTabsEffect[options.effect].show({tab:tab, fast:true});
  //       } else {
  //         var tabWidth = tab.width();
  //         if(tabWidth) {
  //           tab.width(tabWidth);
  //         }
  //         tab.addClass(tabHiddenClass);
  //       }

  //       // event handler
  //       link.bind(options.event, function(e){
  //         if(link != prevActiveLink && !animating) {
  //           switchTab(prevActiveLink, link);
  //           prevActiveLink = link;
  //         }
  //       });
  //       if(options.attrib === 'href') {
  //         link.bind('click', function(e){
  //           e.preventDefault();
  //         });
  //       }
  //     });

  //     // tab switch function
  //     function switchTab(oldLink, newLink) {
  //       animating = true;
  //       var oldTab = oldLink.data('ctab');
  //       var newTab = newLink.data('ctab');
  //       prevActiveLink = newLink;
  //       currentTab = newTab;

  //       // refresh pagination links
  //       (options.addToParent ? tabLinksParents : tabLinks).removeClass(options.activeClass);
  //       (options.addToParent ? newLink.data('cparent') : newLink).addClass(options.activeClass);

  //       // hide old tab
  //       resizeHolder(oldTab, true);
  //       contentTabsEffect[options.effect].hide({
  //         speed: options.animSpeed,
  //         tab:oldTab,
  //         complete: function() {
  //           // show current tab
  //           resizeHolder(newTab.removeClass(tabHiddenClass).width(''));
  //           contentTabsEffect[options.effect].show({
  //             speed: options.animSpeed,
  //             tab:newTab,
  //             complete: function() {
  //               if(!oldTab.is(newTab)) {
  //                 oldTab.width(oldTab.width()).addClass(tabHiddenClass);
  //               }
  //               animating = false;
  //               resizeHolder(newTab, false);
  //               autoRotate();
  //             }
  //           });
  //         }
  //       });
  //     }

  //     // holder auto height
  //     function resizeHolder(block, state) {
  //       var curBlock = block && block.length ? block : currentTab;
  //       if(options.autoHeight && curBlock) {
  //         tabHolder.stop();
  //         if(state === false) {
  //           tabHolder.css({height:''});
  //         } else {
  //           var origStyles = curBlock.attr('style');
  //           curBlock.show().css({width:curBlock.width()});
  //           var tabHeight = curBlock.outerHeight(true);
  //           if(!origStyles) curBlock.removeAttr('style'); else curBlock.attr('style', origStyles);
  //           if(state === true) {
  //             tabHolder.css({height: tabHeight});
  //           } else {
  //             tabHolder.animate({height: tabHeight}, {duration: options.animSpeed});
  //           }
  //         }
  //       }
  //     }
  //     if(options.autoHeight) {
  //       $(window).bind('resize orientationchange', function(){
  //         tabs.not(currentTab).removeClass(tabHiddenClass).show().each(function(){
  //           var tab = jQuery(this), tabWidth = tab.css({width:''}).width();
  //           if(tabWidth) {
  //             tab.width(tabWidth);
  //           }
  //         }).hide().addClass(tabHiddenClass);

  //         resizeHolder(currentTab, false);
  //       });
  //     }

  //     // autorotation handling
  //     var rotationTimer;
  //     function nextTab() {
  //       var activeItem = (options.addToParent ? tabLinksParents : tabLinks).filter('.' + options.activeClass);
  //       var activeIndex = (options.addToParent ? tabLinksParents : tabLinks).index(activeItem);
  //       var newLink = tabLinks.eq(activeIndex < tabLinks.length - 1 ? activeIndex + 1 : 0);
  //       prevActiveLink = tabLinks.eq(activeIndex);
  //       switchTab(prevActiveLink, newLink);
  //     }
  //     function autoRotate() {
  //       if(options.autoRotate && tabLinks.length > 1) {
  //         clearTimeout(rotationTimer);
  //         rotationTimer = setTimeout(function() {
  //           if(!animating) {
  //             nextTab();
  //           } else {
  //             autoRotate();
  //           }
  //         }, options.switchTime);
  //       }
  //     }
  //     autoRotate();
  //   });
  // };

  // // add stylesheet for tabs on DOMReady
  // var tabHiddenClass = 'js-tab-hidden';
  // $(function() {
  //   var tabStyleSheet = $('<style type="text/css">')[0];
  //   var tabStyleRule = '.'+tabHiddenClass;
  //   tabStyleRule += '{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important}';
  //   if (tabStyleSheet.styleSheet) {
  //     tabStyleSheet.styleSheet.cssText = tabStyleRule;
  //   } else {
  //     tabStyleSheet.appendChild(document.createTextNode(tabStyleRule));
  //   }
  //   $('head').append(tabStyleSheet);
  // });

  // // tab switch effects
  // var contentTabsEffect = {
  //   none: {
  //     show: function(o) {
  //       o.tab.css({display:'block'});
  //       if(o.complete) o.complete();
  //     },
  //     hide: function(o) {
  //       o.tab.css({display:'none'});
  //       if(o.complete) o.complete();
  //     }
  //   },
  //   fade: {
  //     show: function(o) {
  //       if(o.fast) o.speed = 1;
  //       o.tab.fadeIn(o.speed);
  //       if(o.complete) setTimeout(o.complete, o.speed);
  //     },
  //     hide: function(o) {
  //       if(o.fast) o.speed = 1;
  //       o.tab.fadeOut(o.speed);
  //       if(o.complete) setTimeout(o.complete, o.speed);
  //     }
  //   },
  //   slide: {
  //     show: function(o) {
  //       var tabHeight = o.tab.show().css({width:o.tab.width()}).outerHeight(true);
  //       var tmpWrap = $('<div class="effect-div">').insertBefore(o.tab).append(o.tab);
  //       tmpWrap.css({width:'100%', overflow:'hidden', position:'relative'}); o.tab.css({marginTop:-tabHeight,display:'block'});
  //       if(o.fast) o.speed = 1;
  //       o.tab.animate({marginTop: 0}, {duration: o.speed, complete: function(){
  //         o.tab.css({marginTop: '', width: ''}).insertBefore(tmpWrap);
  //         tmpWrap.remove();
  //         if(o.complete) o.complete();
  //       }});
  //     },
  //     hide: function(o) {
  //       var tabHeight = o.tab.show().css({width:o.tab.width()}).outerHeight(true);
  //       var tmpWrap = $('<div class="effect-div">').insertBefore(o.tab).append(o.tab);
  //       tmpWrap.css({width:'100%', overflow:'hidden', position:'relative'});

  //       if(o.fast) o.speed = 1;
  //       o.tab.animate({marginTop: -tabHeight}, {duration: o.speed, complete: function(){
  //         o.tab.css({display:'none', marginTop:'', width:''}).insertBefore(tmpWrap);
  //         tmpWrap.remove();
  //         if(o.complete) o.complete();
  //       }});
  //     }
  //   }
  // };
}(jQuery));

/*
 * jQuery Open/Close plugin
 */
;(function($) {
  // function OpenClose(options) {
  //   this.options = $.extend({
  //     addClassBeforeAnimation: true,
  //     hideOnClickOutside: false,
  //     activeClass:'active',
  //     opener:'.opener',
  //     slider:'.slide',
  //     animSpeed: 400,
  //     effect:'fade',
  //     event:'click'
  //   }, options);
  //   this.init();
  // }
  // OpenClose.prototype = {
  //   init: function() {
  //     if(this.options.holder) {
  //       this.findElements();
  //       this.attachEvents();
  //       this.makeCallback('onInit');
  //     }
  //   },
  //   findElements: function() {
  //     this.holder = $(this.options.holder);
  //     this.opener = this.holder.find(this.options.opener);
  //     this.slider = this.holder.find(this.options.slider);

  //     if (!this.holder.hasClass(this.options.activeClass)) {
  //       this.slider.addClass(slideHiddenClass);
  //     }
  //   },
  //   attachEvents: function() {
  //     // add handler
  //     var self = this;
  //     this.eventHandler = function(e) {
  //       e.preventDefault();
  //       if (self.slider.hasClass(slideHiddenClass)) {
  //         self.showSlide();
  //       } else {
  //         self.hideSlide();
  //       }
  //     };
  //     self.opener.bind(self.options.event, this.eventHandler);

  //     // hover mode handler
  //     if(self.options.event === 'over') {
  //       self.opener.bind('mouseenter', function() {
  //         self.holder.removeClass(self.options.activeClass);
  //         self.opener.trigger(self.options.event);
  //       });
  //       self.holder.bind('mouseleave', function() {
  //         self.holder.addClass(self.options.activeClass);
  //         self.opener.trigger(self.options.event);
  //       });
  //     }

  //     // outside click handler
  //     self.outsideClickHandler = function(e) {
  //       if(self.options.hideOnClickOutside) {
  //         var target = $(e.target);
  //         if (!target.is(self.holder) && !target.closest(self.holder).length) {
  //           self.hideSlide();
  //         }
  //       }
  //     };
  //   },
  //   showSlide: function() {
  //     var self = this;
  //     if (self.options.addClassBeforeAnimation) {
  //       self.holder.addClass(self.options.activeClass);
  //     }
  //     self.slider.removeClass(slideHiddenClass);
  //     $(document).bind('click', self.outsideClickHandler);

  //     self.makeCallback('animStart', true);
  //     toggleEffects[self.options.effect].show({
  //       box: self.slider,
  //       speed: self.options.animSpeed,
  //       complete: function() {
  //         if (!self.options.addClassBeforeAnimation) {
  //           self.holder.addClass(self.options.activeClass);
  //         }
  //         self.makeCallback('animEnd', true);
  //       }
  //     });
  //   },
  //   hideSlide: function() {
  //     var self = this;
  //     if (self.options.addClassBeforeAnimation) {
  //       self.holder.removeClass(self.options.activeClass);
  //     }
  //     $(document).unbind('click', self.outsideClickHandler);

  //     self.makeCallback('animStart', false);
  //     toggleEffects[self.options.effect].hide({
  //       box: self.slider,
  //       speed: self.options.animSpeed,
  //       complete: function() {
  //         if (!self.options.addClassBeforeAnimation) {
  //           self.holder.removeClass(self.options.activeClass);
  //         }
  //         self.slider.addClass(slideHiddenClass);
  //         self.makeCallback('animEnd', false);
  //       }
  //     });
  //   },
  //   destroy: function() {
  //     this.slider.removeClass(slideHiddenClass).css({display:''});
  //     this.opener.unbind(this.options.event, this.eventHandler);
  //     this.holder.removeClass(this.options.activeClass).removeData('OpenClose');
  //     $(document).unbind('click', this.outsideClickHandler);
  //   },
  //   makeCallback: function(name) {
  //     if(typeof this.options[name] === 'function') {
  //       var args = Array.prototype.slice.call(arguments);
  //       args.shift();
  //       this.options[name].apply(this, args);
  //     }
  //   }
  // };

  // // add stylesheet for slide on DOMReady
  // var slideHiddenClass = 'js-slide-hidden';
  // $(function() {
  //   var tabStyleSheet = $('<style type="text/css">')[0];
  //   var tabStyleRule = '.' + slideHiddenClass;
  //   tabStyleRule += '{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important}';
  //   if (tabStyleSheet.styleSheet) {
  //     tabStyleSheet.styleSheet.cssText = tabStyleRule;
  //   } else {
  //     tabStyleSheet.appendChild(document.createTextNode(tabStyleRule));
  //   }
  //   $('head').append(tabStyleSheet);
  // });

  // // animation effects
  // var toggleEffects = {
  //   slide: {
  //     show: function(o) {
  //       o.box.stop(true).hide().slideDown(o.speed, o.complete);
  //     },
  //     hide: function(o) {
  //       o.box.stop(true).slideUp(o.speed, o.complete);
  //     }
  //   },
  //   fade: {
  //     show: function(o) {
  //       o.box.stop(true).hide().fadeIn(o.speed, o.complete);
  //     },
  //     hide: function(o) {
  //       o.box.stop(true).fadeOut(o.speed, o.complete);
  //     }
  //   },
  //   none: {
  //     show: function(o) {
  //       o.box.hide().show(0, o.complete);
  //     },
  //     hide: function(o) {
  //       o.box.hide(0, o.complete);
  //     }
  //   }
  // };

  // // jQuery plugin interface
  // $.fn.openClose = function(opt) {
  //   return this.each(function() {
  //     jQuery(this).data('OpenClose', new OpenClose($.extend(opt, {holder: this})));
  //   });
  // };
}(jQuery));

// placeholder class
;(function(){
  // var placeholderCollection = [];
  // PlaceholderInput = function() {
  //   this.options = {
  //     element:null,
  //     showUntilTyping:false,
  //     wrapWithElement:false,
  //     getParentByClass:false,
  //     showPasswordBullets:false,
  //     placeholderAttr:'value',
  //     inputFocusClass:'focus',
  //     inputActiveClass:'text-active',
  //     parentFocusClass:'parent-focus',
  //     parentActiveClass:'parent-active',
  //     labelFocusClass:'label-focus',
  //     labelActiveClass:'label-active',
  //     fakeElementClass:'input-placeholder-text'
  //   };
  //   placeholderCollection.push(this);
  //   this.init.apply(this,arguments);
  // };
  // PlaceholderInput.refreshAllInputs = function(except) {
  //   for(var i = 0; i < placeholderCollection.length; i++) {
  //     if(except !== placeholderCollection[i]) {
  //       placeholderCollection[i].refreshState();
  //     }
  //   }
  // };
  // PlaceholderInput.replaceByOptions = function(opt) {
  //   var inputs = [].concat(
  //     convertToArray(document.getElementsByTagName('input')),
  //     convertToArray(document.getElementsByTagName('textarea'))
  //   );
  //   for(var i = 0; i < inputs.length; i++) {
  //     if(inputs[i].className.indexOf(opt.skipClass) < 0) {
  //       var inputType = getInputType(inputs[i]);
  //       var placeholderValue = inputs[i].getAttribute('placeholder');
  //       if(opt.focusOnly || (opt.clearInputs && (inputType === 'text' || inputType === 'email' || placeholderValue)) ||
  //         (opt.clearTextareas && inputType === 'textarea') ||
  //         (opt.clearPasswords && inputType === 'password')
  //       ) {
  //         new PlaceholderInput({
  //           element:inputs[i],
  //           focusOnly: opt.focusOnly,
  //           wrapWithElement:opt.wrapWithElement,
  //           showUntilTyping:opt.showUntilTyping,
  //           getParentByClass:opt.getParentByClass,
  //           showPasswordBullets:opt.showPasswordBullets,
  //           placeholderAttr: placeholderValue ? 'placeholder' : opt.placeholderAttr
  //         });
  //       }
  //     }
  //   }
  // };
  // PlaceholderInput.prototype = {
  //   init: function(opt) {
  //     this.setOptions(opt);
  //     if(this.element && this.element.PlaceholderInst) {
  //       this.element.PlaceholderInst.refreshClasses();
  //     } else {
  //       this.element.PlaceholderInst = this;
  //       if(this.elementType !== 'radio' || this.elementType !== 'checkbox' || this.elementType !== 'file') {
  //         this.initElements();
  //         this.attachEvents();
  //         this.refreshClasses();
  //       }
  //     }
  //   },
  //   setOptions: function(opt) {
  //     for(var p in opt) {
  //       if(opt.hasOwnProperty(p)) {
  //         this.options[p] = opt[p];
  //       }
  //     }
  //     if(this.options.element) {
  //       this.element = this.options.element;
  //       this.elementType = getInputType(this.element);
  //       if(this.options.focusOnly) {
  //         this.wrapWithElement = false;
  //       } else {
  //         if(this.elementType === 'password' && this.options.showPasswordBullets) {
  //           this.wrapWithElement = false;
  //         } else {
  //           this.wrapWithElement = this.elementType === 'password' || this.options.showUntilTyping ? true : this.options.wrapWithElement;
  //         }
  //       }
  //       this.setPlaceholderValue(this.options.placeholderAttr);
  //     }
  //   },
  //   setPlaceholderValue: function(attr) {
  //     this.origValue = (attr === 'value' ? this.element.defaultValue : (this.element.getAttribute(attr) || ''));
  //     if(this.options.placeholderAttr !== 'value') {
  //       this.element.removeAttribute(this.options.placeholderAttr);
  //     }
  //   },
  //   initElements: function() {
  //     // create fake element if needed
  //     if(this.wrapWithElement) {
  //       this.fakeElement = document.createElement('span');
  //       this.fakeElement.className = this.options.fakeElementClass;
  //       this.fakeElement.innerHTML += this.origValue;
  //       this.fakeElement.style.color = getStyle(this.element, 'color');
  //       this.fakeElement.style.position = 'absolute';
  //       this.element.parentNode.insertBefore(this.fakeElement, this.element);
        
  //       if(this.element.value === this.origValue || !this.element.value) {
  //         this.element.value = '';
  //         this.togglePlaceholderText(true);
  //       } else {
  //         this.togglePlaceholderText(false);
  //       }
  //     } else if(!this.element.value && this.origValue.length) {
  //       this.element.value = this.origValue;
  //     }
  //     // get input label
  //     if(this.element.id) {
  //       this.labels = document.getElementsByTagName('label');
  //       for(var i = 0; i < this.labels.length; i++) {
  //         if(this.labels[i].htmlFor === this.element.id) {
  //           this.labelFor = this.labels[i];
  //           break;
  //         }
  //       }
  //     }

  //     // get parent node (or parentNode by className)

  //     this.elementParent = this.element.parentNode;
  //     if(typeof this.options.getParentByClass === 'string') {
  //       var el = this.element;
  //       while(el.parentNode) {
  //         if(hasClass(el.parentNode, this.options.getParentByClass)) {
  //           this.elementParent = el.parentNode;
  //           break;
  //         } else {
  //           el = el.parentNode;
  //         }
  //       }
  //     }
  //   },
  //   attachEvents: function() {
  //     this.element.onfocus = bindScope(this.focusHandler, this);
  //     this.element.onblur = bindScope(this.blurHandler, this);
  //     if(this.options.showUntilTyping) {
  //       this.element.onkeydown = bindScope(this.typingHandler, this);
  //       this.element.onpaste = bindScope(this.typingHandler, this);
  //     }
  //     if(this.wrapWithElement) this.fakeElement.onclick = bindScope(this.focusSetter, this);
  //   },
  //   togglePlaceholderText: function(state) {
  //     if(!this.element.readOnly && !this.options.focusOnly) {
  //       if(this.wrapWithElement) {
  //         this.fakeElement.style.display = state ? '' : 'none';
  //       } else {
  //         this.element.value = state ? this.origValue : '';
  //       }
  //     }
  //   },
  //   focusSetter: function() {
  //     this.element.focus();
  //   },
  //   focusHandler: function() {
  //     clearInterval(this.checkerInterval);
  //     this.checkerInterval = setInterval(bindScope(this.intervalHandler,this), 1);
  //     this.focused = true;
  //     if(!this.element.value.length || this.element.value === this.origValue) {
  //       if(!this.options.showUntilTyping) {
  //         this.togglePlaceholderText(false);
  //       }
  //     }
  //     this.refreshClasses();
  //   },
  //   blurHandler: function() {
  //     clearInterval(this.checkerInterval);
  //     this.focused = false;
  //     if(!this.element.value.length || this.element.value === this.origValue) {
  //       this.togglePlaceholderText(true);
  //     }
  //     this.refreshClasses();
  //     PlaceholderInput.refreshAllInputs(this);
  //   },
  //   typingHandler: function() {
  //     setTimeout(bindScope(function(){
  //       if(this.element.value.length) {
  //         this.togglePlaceholderText(false);
  //         this.refreshClasses();
  //       }
  //     },this), 10);
  //   },
  //   intervalHandler: function() {
  //     if(typeof this.tmpValue === 'undefined') {
  //       this.tmpValue = this.element.value;
  //     }
  //     if(this.tmpValue != this.element.value) {
  //       PlaceholderInput.refreshAllInputs(this);
  //     }
  //   },
  //   refreshState: function() {
  //     if(this.wrapWithElement) {
  //       if(this.element.value.length && this.element.value !== this.origValue) {
  //         this.togglePlaceholderText(false);
  //       } else if(!this.element.value.length) {
  //         this.togglePlaceholderText(true);
  //       }
  //     }
  //     this.refreshClasses();
  //   },
  //   refreshClasses: function() {
  //     this.textActive = this.focused || (this.element.value.length && this.element.value !== this.origValue);
  //     this.setStateClass(this.element, this.options.inputFocusClass,this.focused);
  //     this.setStateClass(this.elementParent, this.options.parentFocusClass,this.focused);
  //     this.setStateClass(this.labelFor, this.options.labelFocusClass,this.focused);
  //     this.setStateClass(this.element, this.options.inputActiveClass, this.textActive);
  //     this.setStateClass(this.elementParent, this.options.parentActiveClass, this.textActive);
  //     this.setStateClass(this.labelFor, this.options.labelActiveClass, this.textActive);
  //   },
  //   setStateClass: function(el,cls,state) {
  //     if(!el) return; else if(state) addClass(el,cls); else removeClass(el,cls);
  //   }
  // };
  
  // // utility functions
  // function convertToArray(collection) {
  //   var arr = [];
  //   for (var i = 0, ref = arr.length = collection.length; i < ref; i++) {
  //     arr[i] = collection[i];
  //   }
  //   return arr;
  // }
  // function getInputType(input) {
  //   return (input.type ? input.type : input.tagName).toLowerCase();
  // }
  // function hasClass(el,cls) {
  //   return el.className ? el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)')) : false;
  // }
  // function addClass(el,cls) {
  //   if (!hasClass(el,cls)) el.className += " "+cls;
  // }
  // function removeClass(el,cls) {
  //   if (hasClass(el,cls)) {el.className=el.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'),' ');}
  // }
  // function bindScope(f, scope) {
  //   return function() {return f.apply(scope, arguments);};
  // }
  // function getStyle(el, prop) {
  //   if (document.defaultView && document.defaultView.getComputedStyle) {
  //     return document.defaultView.getComputedStyle(el, null)[prop];
  //   } else if (el.currentStyle) {
  //     return el.currentStyle[prop];
  //   } else {
  //     return el.style[prop];
  //   }
  // }
}());

/*

/*
 * jQuery Cycle Carousel plugin
 */
;(function($){
  // function ScrollAbsoluteGallery(options) {
  //   this.options = $.extend({
  //     activeClass: 'active',
  //     mask: 'div.slides-mask',
  //     slider: '>ul',
  //     slides: '>li',
  //     btnPrev: '.btn-prev',
  //     btnNext: '.btn-next',
  //     pagerLinks: 'ul.pager > li',
  //     generatePagination: false,
  //     pagerList: '<ul>',
  //     pagerListItem: '<li><a href="#"></a></li>',
  //     pagerListItemText: 'a',
  //     galleryReadyClass: 'gallery-js-ready',
  //     currentNumber: 'span.current-num',
  //     totalNumber: 'span.total-num',
  //     maskAutoSize: false,
  //     autoRotation: false,
  //     pauseOnHover: false,
  //     stretchSlideToMask: false,
  //     switchTime: 3000,
  //     animSpeed: 500,
  //     handleTouch: true,
  //     swipeThreshold: 15,
  //     vertical: false
  //   }, options);
  //   this.init();
  // }
  // ScrollAbsoluteGallery.prototype = {
  //   init: function() {
  //     if(this.options.holder) {
  //       this.findElements();
  //       this.attachEvents();
  //       this.makeCallback('onInit', this);
  //     }
  //   },
  //   findElements: function() {
  //     // find structure elements
  //     this.holder = $(this.options.holder).addClass(this.options.galleryReadyClass);
  //     this.mask = this.holder.find(this.options.mask);
  //     this.slider = this.mask.find(this.options.slider);
  //     this.slides = this.slider.find(this.options.slides);
  //     this.btnPrev = this.holder.find(this.options.btnPrev);
  //     this.btnNext = this.holder.find(this.options.btnNext);

  //     // slide count display
  //     this.currentNumber = this.holder.find(this.options.currentNumber);
  //     this.totalNumber = this.holder.find(this.options.totalNumber);

  //     // create gallery pagination
  //     if(typeof this.options.generatePagination === 'string') {
  //       this.pagerLinks = this.buildPagination();
  //     } else {
  //       this.pagerLinks = this.holder.find(this.options.pagerLinks);
  //     }

  //     // define index variables
  //     this.sizeProperty = this.options.vertical ? 'height' : 'width';
  //     this.positionProperty = this.options.vertical ? 'top' : 'left';
  //     this.animProperty = this.options.vertical ? 'marginTop' : 'marginLeft';

  //     this.slideSize = this.slides[this.sizeProperty]();
  //     this.currentIndex = 0;
  //     this.prevIndex = 0;

  //     // reposition elements
  //     this.options.maskAutoSize = this.options.vertical ? false : this.options.maskAutoSize;
  //     if(this.options.vertical) {
  //       this.mask.css({
  //         height: this.slides.innerHeight()
  //       });
  //     }
  //     if(this.options.maskAutoSize){
  //       this.mask.css({
  //         height: this.slider.height()
  //       });
  //     }
  //     this.slider.css({
  //       position: 'relative',
  //       height: this.options.vertical ? this.slideSize * this.slides.length : '100%'
  //     });
  //     this.slides.css({
  //       position: 'absolute'
  //     }).css(this.positionProperty, -9999).eq(this.currentIndex).css(this.positionProperty, 0);
  //     this.refreshState();
  //   },
  //   buildPagination: function() {
  //     var pagerLinks = $();
  //     if(!this.pagerHolder) {
  //       this.pagerHolder = this.holder.find(this.options.generatePagination);
  //     }
  //     if(this.pagerHolder.length) {
  //       this.pagerHolder.empty();
  //       this.pagerList = $(this.options.pagerList).appendTo(this.pagerHolder);
  //       for(var i = 0; i < this.slides.length; i++) {
  //         $(this.options.pagerListItem).appendTo(this.pagerList).find(this.options.pagerListItemText).text(i+1);
  //       }
  //       pagerLinks = this.pagerList.children();
  //     }
  //     return pagerLinks;
  //   },
  //   attachEvents: function() {
  //     // attach handlers
  //     var self = this;
  //     if(this.btnPrev.length) {
  //       this.btnPrevHandler = function(e) {
  //         e.preventDefault();
  //         self.prevSlide();
  //       };
  //       this.btnPrev.click(this.btnPrevHandler);
  //     }
  //     if(this.btnNext.length) {
  //       this.btnNextHandler = function(e) {
  //         e.preventDefault();
  //         self.nextSlide();
  //       };
  //       this.btnNext.click(this.btnNextHandler);
  //     }
  //     if(this.pagerLinks.length) {
  //       this.pagerLinksHandler = function(e) {
  //         e.preventDefault();
  //         self.numSlide(self.pagerLinks.index(e.currentTarget));
  //       };
  //       this.pagerLinks.click(this.pagerLinksHandler);
  //     }

  //     // handle autorotation pause on hover
  //     if(this.options.pauseOnHover) {
  //       this.hoverHandler = function() {
  //         clearTimeout(self.timer);
  //       };
  //       this.leaveHandler = function() {
  //         self.autoRotate();
  //       };
  //       this.holder.bind({mouseenter: this.hoverHandler, mouseleave: this.leaveHandler});
  //     }

  //     // handle holder and slides dimensions
  //     this.resizeHandler = function() {
  //       if(!self.animating) {
  //         self.makeCallback('onResize', self);
  //         if(self.options.stretchSlideToMask) {
  //           self.resizeSlides();
  //         }
  //         self.resizeHolder();
  //         self.setSlidesPosition(self.currentIndex);
  //       }
  //     };
  //     $(window).bind('load resize orientationchange', this.resizeHandler);
  //     if(self.options.stretchSlideToMask) {
  //       self.resizeSlides();
  //     }

  //     // handle swipe on mobile devices
  //     if(this.options.handleTouch && jQuery.fn.hammer && this.slides.length > 1 && isTouchDevice) {
  //       this.mask.hammer({
  //         drag_block_horizontal: self.options.vertical ? false : true,
  //         drag_block_vertical: self.options.vertical ? true : false,
  //         drag_min_distance: 1
  //       }).on('touch release ' + (this.options.vertical ? 'swipeup swipedown dragup dragdown' : 'swipeleft swiperight dragleft dragright'), function(ev){
  //         switch(ev.type) {
  //           case (self.options.vertical ? 'dragup' : 'dragright'):
  //           case (self.options.vertical ? 'dragdown' : 'dragleft'):
  //             if(!self.animating){
  //               self.swipeOffset = -self.slideSize + ev.gesture[self.options.vertical ? 'deltaY' : 'deltaX'];
  //               self.slider.css(self.animProperty, self.swipeOffset);
  //               clearTimeout(self.timer);
  //             }
  //             ev.gesture.preventDefault();
  //             break;
  //           case (self.options.vertical ? 'swipeup' : 'swipeleft'):
  //             if(!self.animating){
  //               self.nextSlide();
  //               self.swipeOffset = 0;
  //             }
  //             ev.gesture.stopDetect();
  //             break;
  //           case (self.options.vertical ? 'swipedown' : 'swiperight'):
  //             if(!self.animating){
  //               self.prevSlide();
  //               self.swipeOffset = 0;
  //             }
  //             ev.gesture.stopDetect();
  //             break;
  //           case 'release':
  //             if(Math.abs(ev.gesture[self.options.vertical ? 'deltaY' : 'deltaX']) > self.options.swipeThreshold) {
  //               if(self.options.vertical){
  //                 if(ev.gesture.direction == 'down') {
  //                   self.prevSlide();
  //                 } else if(ev.gesture.direction == 'up') {
  //                   self.nextSlide();
  //                 }
  //               }
  //               else {
  //                 if(ev.gesture.direction == 'right') {
  //                   self.prevSlide();
  //                 } else if(ev.gesture.direction == 'left') {
  //                   self.nextSlide();
  //                 }
  //               }
  //             }
  //             else {
  //               var tmpObj = {};
  //               tmpObj[self.animProperty] = -self.slideSize;
  //               self.slider.animate(tmpObj, {duration: self.options.animSpeed});
  //             }
  //             self.swipeOffset = 0;
  //             break;
  //         }
  //       });
  //     }

  //     // start autorotation
  //     this.autoRotate();
  //     this.resizeHolder();
  //     this.setSlidesPosition(this.currentIndex);
  //   },
  //   resizeSlides: function() {
  //     this.slideSize = this.mask[this.options.vertical ? 'height' : 'width']();
  //     this.slides.css(this.sizeProperty, this.slideSize);
  //   },
  //   resizeHolder: function() {
  //     if(this.options.maskAutoSize) {
  //       this.mask.css({
  //         height: this.slides.eq(this.currentIndex).outerHeight(true)
  //       });
  //     }
  //   },
  //   prevSlide: function() {
  //     if(!this.animating && this.slides.length > 1) {
  //       this.direction = -1;
  //       this.prevIndex = this.currentIndex;
  //       if(this.currentIndex > 0) this.currentIndex--;
  //       else this.currentIndex = this.slides.length - 1;
  //       this.switchSlide();
  //     }
  //   },
  //   nextSlide: function(fromAutoRotation) {
  //     if(!this.animating && this.slides.length > 1) {
  //       this.direction = 1;
  //       this.prevIndex = this.currentIndex;
  //       if(this.currentIndex < this.slides.length - 1) this.currentIndex++;
  //       else this.currentIndex = 0;
  //       this.switchSlide();
  //     }
  //   },
  //   numSlide: function(c) {
  //     if(!this.animating && this.currentIndex !== c && this.slides.length > 1) {
  //       this.direction = c > this.currentIndex ? 1 : -1;
  //       this.prevIndex = this.currentIndex;
  //       this.currentIndex = c;
  //       this.switchSlide();
  //     }
  //   },
  //   preparePosition: function() {
  //     // prepare slides position before animation
  //     this.setSlidesPosition(this.prevIndex, this.direction < 0 ? this.currentIndex : null, this.direction > 0 ? this.currentIndex : null, this.direction);
  //   },
  //   setSlidesPosition: function(index, slideLeft, slideRight, direction) {
  //     // reposition holder and nearest slides
  //     if(this.slides.length > 1) {
  //       var prevIndex = (typeof slideLeft === 'number' ? slideLeft : index > 0 ? index - 1 : this.slides.length - 1);
  //       var nextIndex = (typeof slideRight === 'number' ? slideRight : index < this.slides.length - 1 ? index + 1 : 0);

  //       this.slider.css(this.animProperty, this.swipeOffset ? this.swipeOffset : -this.slideSize);
  //       this.slides.css(this.positionProperty, -9999).eq(index).css(this.positionProperty, this.slideSize);
  //       if(prevIndex === nextIndex && typeof direction === 'number') {
  //         var calcOffset = direction > 0 ? this.slideSize*2 : 0;
  //         this.slides.eq(nextIndex).css(this.positionProperty, calcOffset);
  //       } else {
  //         this.slides.eq(prevIndex).css(this.positionProperty, 0);
  //         this.slides.eq(nextIndex).css(this.positionProperty, this.slideSize*2);
  //       }
  //     }
  //   },
  //   switchSlide: function() {
  //     // prepare positions and calculate offset
  //     var self = this;
  //     var oldSlide = this.slides.eq(this.prevIndex);
  //     var newSlide = this.slides.eq(this.currentIndex);
  //     this.animating = true;

  //     // resize mask to fit slide
  //     if(this.options.maskAutoSize) {
  //       this.mask.animate({
  //         height: newSlide.outerHeight(true)
  //       }, {
  //         duration: this.options.animSpeed
  //       });
  //     }

  //     // start animation
  //     var animProps = {};
  //     animProps[this.animProperty] = this.direction > 0 ? -this.slideSize*2 : 0;
  //     this.preparePosition();
  //     this.slider.animate(animProps,{duration:this.options.animSpeed, complete:function() {
  //       self.setSlidesPosition(self.currentIndex);

  //       // start autorotation
  //       self.animating = false;
  //       self.autoRotate();
  //     }});

  //     // refresh classes
  //     this.refreshState();
  //   },
  //   refreshState: function(initial) {
  //     // slide change function
  //     this.slides.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass);
  //     this.pagerLinks.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass);

  //     // display current slide number
  //     this.currentNumber.html(this.currentIndex + 1);
  //     this.totalNumber.html(this.slides.length);
  //   },
  //   autoRotate: function() {
  //     var self = this;
  //     clearTimeout(this.timer);
  //     if(this.options.autoRotation) {
  //       this.timer = setTimeout(function() {
  //         self.nextSlide();
  //       }, this.options.switchTime);
  //     }
  //   },
  //   makeCallback: function(name) {
  //     if(typeof this.options[name] === 'function') {
  //       var args = Array.prototype.slice.call(arguments);
  //       args.shift();
  //       this.options[name].apply(this, args);
  //     }
  //   },
  //   destroy: function() {
  //     // destroy handler
  //     this.btnPrev.unbind('click', this.btnPrevHandler);
  //     this.btnNext.unbind('click', this.btnNextHandler);
  //     this.pagerLinks.unbind('click', this.pagerLinksHandler);
  //     this.holder.unbind({mouseenter: this.hoverHandler, mouseleave: this.leaveHandler});
  //     $(window).unbind('load resize orientationchange', this.resizeHandler);
  //     clearTimeout(this.timer);

  //     // destroy swipe handler
  //     if(this.options.handleTouch && $.fn.hammer) {
  //       this.mask.hammer().off('touch release swipeleft swiperight swipeup swipedown dragup dragdown dragleft dragright');
  //     }

  //     // remove inline styles, classes and pagination
  //     this.holder.removeClass(this.options.galleryReadyClass);
  //     this.slider.add(this.slides).removeAttr('style');
  //     if(typeof this.options.generatePagination === 'string') {
  //       this.pagerHolder.empty();
  //     }
  //   }
  // };

  // // detect device type
  // var isTouchDevice = /MSIE 10.*Touch/.test(navigator.userAgent) || ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

  // // jquery plugin
  // $.fn.scrollAbsoluteGallery = function(opt){
  //   return this.each(function(){
  //     $(this).data('ScrollAbsoluteGallery', new ScrollAbsoluteGallery($.extend(opt,{holder:this})));
  //   });
  // };
}(jQuery));

/*
 * JavaScript Custom Forms Module
 */
jcf = {
  // global options
  modules: {},
  plugins: {},
  baseOptions: {
    unselectableClass:'jcf-unselectable',
    labelActiveClass:'jcf-label-active',
    labelDisabledClass:'jcf-label-disabled',
    classPrefix: 'jcf-class-',
    hiddenClass:'jcf-hidden',
    focusClass:'jcf-focus',
    wrapperTag: 'div'
  },
  // replacer function
  customForms: {
    setOptions: function(obj) {
      for(var p in obj) {
        if(obj.hasOwnProperty(p) && typeof obj[p] === 'object') {
          jcf.lib.extend(jcf.modules[p].prototype.defaultOptions, obj[p]);
        }
      }
    },
    replaceAll: function(context) {
      for(var k in jcf.modules) {
        var els = jcf.lib.queryBySelector(jcf.modules[k].prototype.selector, context);
        for(var i = 0; i<els.length; i++) {
          if(els[i].jcf) {
            // refresh form element state
            els[i].jcf.refreshState();
          } else {
            // replace form element
            if(!jcf.lib.hasClass(els[i], 'default') && jcf.modules[k].prototype.checkElement(els[i])) {
              new jcf.modules[k]({
                replaces:els[i]
              });
            }
          }
        }
      }
    },
    refreshAll: function(context) {
      for(var k in jcf.modules) {
        var els = jcf.lib.queryBySelector(jcf.modules[k].prototype.selector, context);
        for(var i = 0; i<els.length; i++) {
          if(els[i].jcf) {
            // refresh form element state
            els[i].jcf.refreshState();
          }
        }
      }
    },
    refreshElement: function(obj) {
      if(obj && obj.jcf) {
        obj.jcf.refreshState();
      }
    },
    destroyAll: function() {
      for(var k in jcf.modules) {
        var els = jcf.lib.queryBySelector(jcf.modules[k].prototype.selector);
        for(var i = 0; i<els.length; i++) {
          if(els[i].jcf) {
            els[i].jcf.destroy();
          }
        }
      }
    }
  },
  // detect device type
  isTouchDevice: ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch,
  isWinPhoneDevice: navigator.msPointerEnabled && /MSIE 10.*Touch/.test(navigator.userAgent),
  // define base module
  setBaseModule: function(obj) {
    jcf.customControl = function(opt){
      this.options = jcf.lib.extend({}, jcf.baseOptions, this.defaultOptions, opt);
      this.init();
    };
    for(var p in obj) {
      jcf.customControl.prototype[p] = obj[p];
    }
  },
  // add module to jcf.modules
  addModule: function(obj) {
    if(obj.name){
      // create new module proto class
      jcf.modules[obj.name] = function(){
        jcf.modules[obj.name].superclass.constructor.apply(this, arguments);
      }
      jcf.lib.inherit(jcf.modules[obj.name], jcf.customControl);
      for(var p in obj) {
        jcf.modules[obj.name].prototype[p] = obj[p]
      }
      // on create module
      jcf.modules[obj.name].prototype.onCreateModule();
      // make callback for exciting modules
      for(var mod in jcf.modules) {
        if(jcf.modules[mod] != jcf.modules[obj.name]) {
          jcf.modules[mod].prototype.onModuleAdded(jcf.modules[obj.name]);
        }
      }
    }
  },
  // add plugin to jcf.plugins
  addPlugin: function(obj) {
    if(obj && obj.name) {
      jcf.plugins[obj.name] = function() {
        this.init.apply(this, arguments);
      }
      for(var p in obj) {
        jcf.plugins[obj.name].prototype[p] = obj[p];
      }
    }
  },
  // miscellaneous init
  init: function(){
    if(navigator.msPointerEnabled) {
      this.eventPress = 'MSPointerDown';
      this.eventMove = 'MSPointerMove';
      this.eventRelease = 'MSPointerUp';
    } else {
      this.eventPress = this.isTouchDevice ? 'touchstart' : 'mousedown';
      this.eventMove = this.isTouchDevice ? 'touchmove' : 'mousemove';
      this.eventRelease = this.isTouchDevice ? 'touchend' : 'mouseup';
    }

    setTimeout(function(){
      jcf.lib.domReady(function(){
        jcf.initStyles();
      });
    },1);
    return this;
  },
  initStyles: function() {
    // create <style> element and rules
    var head = document.getElementsByTagName('head')[0],
      style = document.createElement('style'),
      rules = document.createTextNode('.'+jcf.baseOptions.unselectableClass+'{'+
        '-moz-user-select:none;'+
        '-webkit-tap-highlight-color:rgba(255,255,255,0);'+
        '-webkit-user-select:none;'+
        'user-select:none;'+
      '}');

    // append style element
    style.type = 'text/css';
    if(style.styleSheet) {
      style.styleSheet.cssText = rules.nodeValue;
    } else {
      style.appendChild(rules);
    }
    head.appendChild(style);
  }
}.init();

/*
 * Custom Form Control prototype
 */
jcf.setBaseModule({
  init: function(){
    if(this.options.replaces) {
      this.realElement = this.options.replaces;
      this.realElement.jcf = this;
      this.replaceObject();
    }
  },
  defaultOptions: {
    // default module options (will be merged with base options)
  },
  checkElement: function(el){
    return true; // additional check for correct form element
  },
  replaceObject: function(){
    this.createWrapper();
    this.attachEvents();
    this.fixStyles();
    this.setupWrapper();
  },
  createWrapper: function(){
    this.fakeElement = jcf.lib.createElement(this.options.wrapperTag);
    this.labelFor = jcf.lib.getLabelFor(this.realElement);
    jcf.lib.disableTextSelection(this.fakeElement);
    jcf.lib.addClass(this.fakeElement, jcf.lib.getAllClasses(this.realElement.className, this.options.classPrefix));
    jcf.lib.addClass(this.realElement, jcf.baseOptions.hiddenClass);
  },
  attachEvents: function(){
    jcf.lib.event.add(this.realElement, 'focus', this.onFocusHandler, this);
    jcf.lib.event.add(this.realElement, 'blur', this.onBlurHandler, this);
    jcf.lib.event.add(this.fakeElement, 'click', this.onFakeClick, this);
    jcf.lib.event.add(this.fakeElement, jcf.eventPress, this.onFakePressed, this);
    jcf.lib.event.add(this.fakeElement, jcf.eventRelease, this.onFakeReleased, this);

    if(this.labelFor) {
      this.labelFor.jcf = this;
      jcf.lib.event.add(this.labelFor, 'click', this.onFakeClick, this);
      jcf.lib.event.add(this.labelFor, jcf.eventPress, this.onFakePressed, this);
      jcf.lib.event.add(this.labelFor, jcf.eventRelease, this.onFakeReleased, this);
    }
  },
  fixStyles: function() {
    // hide mobile webkit tap effect
    if(jcf.isTouchDevice) {
      var tapStyle = 'rgba(255,255,255,0)';
      this.realElement.style.webkitTapHighlightColor = tapStyle;
      this.fakeElement.style.webkitTapHighlightColor = tapStyle;
      if(this.labelFor) {
        this.labelFor.style.webkitTapHighlightColor = tapStyle;
      }
    }
  },
  setupWrapper: function(){
    // implement in subclass
  },
  refreshState: function(){
    // implement in subclass
  },
  destroy: function() {
    if(this.fakeElement && this.fakeElement.parentNode) {
      this.fakeElement.parentNode.removeChild(this.fakeElement);
    }
    jcf.lib.removeClass(this.realElement, jcf.baseOptions.hiddenClass);
    this.realElement.jcf = null;
  },
  onFocus: function(){
    // emulated focus event
    jcf.lib.addClass(this.fakeElement,this.options.focusClass);
  },
  onBlur: function(cb){
    // emulated blur event
    jcf.lib.removeClass(this.fakeElement,this.options.focusClass);
  },
  onFocusHandler: function() {
    // handle focus loses
    if(this.focused) return;
    this.focused = true;

    // handle touch devices also
    if(jcf.isTouchDevice) {
      if(jcf.focusedInstance && jcf.focusedInstance.realElement != this.realElement) {
        jcf.focusedInstance.onBlur();
        jcf.focusedInstance.realElement.blur();
      }
      jcf.focusedInstance = this;
    }
    this.onFocus.apply(this, arguments);
  },
  onBlurHandler: function() {
    // handle focus loses
    if(!this.pressedFlag) {
      this.focused = false;
      this.onBlur.apply(this, arguments);
    }
  },
  onFakeClick: function(){
    if(jcf.isTouchDevice) {
      this.onFocus();
    } else if(!this.realElement.disabled) {
      this.realElement.focus();
    }
  },
  onFakePressed: function(e){
    this.pressedFlag = true;
  },
  onFakeReleased: function(){
    this.pressedFlag = false;
  },
  onCreateModule: function(){
    // implement in subclass
  },
  onModuleAdded: function(module) {
    // implement in subclass
  },
  onControlReady: function() {
    // implement in subclass
  }
});

/*
 * JCF Utility Library
 */
jcf.lib = {
  bind: function(func, scope){
    return function() {
      return func.apply(scope, arguments);
    };
  },
  browser: (function() {
    var ua = navigator.userAgent.toLowerCase(), res = {},
    match = /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(ua) ||
        /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(ua) || [];
    res[match[1]] = true;
    res.version = match[2] || "0";
    res.safariMac = ua.indexOf('mac') != -1 && ua.indexOf('safari') != -1;
    return res;
  })(),
  getOffset: function (obj) {
    if (obj.getBoundingClientRect && !jcf.isWinPhoneDevice) {
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;
      var clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
      return {
        top:Math.round(obj.getBoundingClientRect().top + scrollTop - clientTop),
        left:Math.round(obj.getBoundingClientRect().left + scrollLeft - clientLeft)
      };
    } else {
      var posLeft = 0, posTop = 0;
      while (obj.offsetParent) {posLeft += obj.offsetLeft; posTop += obj.offsetTop; obj = obj.offsetParent;}
      return {top:posTop,left:posLeft};
    }
  },
  getScrollTop: function() {
    return window.pageYOffset || document.documentElement.scrollTop;
  },
  getScrollLeft: function() {
    return window.pageXOffset || document.documentElement.scrollLeft;
  },
  getWindowWidth: function(){
    return document.compatMode=='CSS1Compat' ? document.documentElement.clientWidth : document.body.clientWidth;
  },
  getWindowHeight: function(){
    return document.compatMode=='CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight;
  },
  getStyle: function(el, prop) {
    if (document.defaultView && document.defaultView.getComputedStyle) {
      return document.defaultView.getComputedStyle(el, null)[prop];
    } else if (el.currentStyle) {
      return el.currentStyle[prop];
    } else {
      return el.style[prop];
    }
  },
  getParent: function(obj, selector) {
    while(obj.parentNode && obj.parentNode != document.body) {
      if(obj.parentNode.tagName.toLowerCase() == selector.toLowerCase()) {
        return obj.parentNode;
      }
      obj = obj.parentNode;
    }
    return false;
  },
  isParent: function(child, parent) {
    while(child.parentNode) {
      if(child.parentNode === parent) {
        return true;
      }
      child = child.parentNode;
    }
    return false;
  },
  getLabelFor: function(object) {
    var parentLabel = jcf.lib.getParent(object,'label');
    if(parentLabel) {
      return parentLabel;
    } else if(object.id) {
      return jcf.lib.queryBySelector('label[for="' + object.id + '"]')[0];
    }
  },
  disableTextSelection: function(el){
    if (typeof el.onselectstart !== 'undefined') {
      el.onselectstart = function() {return false;};
    } else if(window.opera) {
      el.setAttribute('unselectable', 'on');
    } else {
      jcf.lib.addClass(el, jcf.baseOptions.unselectableClass);
    }
  },
  enableTextSelection: function(el) {
    if (typeof el.onselectstart !== 'undefined') {
      el.onselectstart = null;
    } else if(window.opera) {
      el.removeAttribute('unselectable');
    } else {
      jcf.lib.removeClass(el, jcf.baseOptions.unselectableClass);
    }
  },
  queryBySelector: function(selector, scope){
    if(typeof scope === 'string') {
      var result = [];
      var holders = this.getElementsBySelector(scope);
      for (var i = 0, contextNodes; i < holders.length; i++) {
        contextNodes = Array.prototype.slice.call(this.getElementsBySelector(selector, holders[i]));
        result = result.concat(contextNodes);
      }
      return result;
    } else {
      return this.getElementsBySelector(selector, scope);
    }
  },
  prevSibling: function(node) {
    while(node = node.previousSibling) if(node.nodeType == 1) break;
    return node;
  },
  nextSibling: function(node) {
    while(node = node.nextSibling) if(node.nodeType == 1) break;
    return node;
  },
  fireEvent: function(element,event) {
    if(element.dispatchEvent){
      var evt = document.createEvent('HTMLEvents');
      evt.initEvent(event, true, true );
      return !element.dispatchEvent(evt);
    }else if(document.createEventObject){
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt);
    }
  },
  isParent: function(p, c) {
    while(c.parentNode) {
      if(p == c) {
        return true;
      }
      c = c.parentNode;
    }
    return false;
  },
  inherit: function(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
  },
  extend: function(obj) {
    for(var i = 1; i < arguments.length; i++) {
      for(var p in arguments[i]) {
        if(arguments[i].hasOwnProperty(p)) {
          obj[p] = arguments[i][p];
        }
      }
    }
    return obj;
  },
  hasClass: function (obj,cname) {
    return (obj.className ? obj.className.match(new RegExp('(\\s|^)'+cname+'(\\s|$)')) : false);
  },
  addClass: function (obj,cname) {
    if (!this.hasClass(obj,cname)) obj.className += (!obj.className.length || obj.className.charAt(obj.className.length - 1) === ' ' ? '' : ' ') + cname;
  },
  removeClass: function (obj,cname) {
    if (this.hasClass(obj,cname)) obj.className=obj.className.replace(new RegExp('(\\s|^)'+cname+'(\\s|$)'),' ').replace(/\s+$/, '');
  },
  toggleClass: function(obj, cname, condition) {
    if(condition) this.addClass(obj, cname); else this.removeClass(obj, cname);
  },
  createElement: function(tagName, options) {
    var el = document.createElement(tagName);
    for(var p in options) {
      if(options.hasOwnProperty(p)) {
        switch (p) {
          case 'class': el.className = options[p]; break;
          case 'html': el.innerHTML = options[p]; break;
          case 'style': this.setStyles(el, options[p]); break;
          default: el.setAttribute(p, options[p]);
        }
      }
    }
    return el;
  },
  setStyles: function(el, styles) {
    for(var p in styles) {
      if(styles.hasOwnProperty(p)) {
        switch (p) {
          case 'float': el.style.cssFloat = styles[p]; break;
          case 'opacity': el.style.filter = 'progid:DXImageTransform.Microsoft.Alpha(opacity='+styles[p]*100+')'; el.style.opacity = styles[p]; break;
          default: el.style[p] = (typeof styles[p] === 'undefined' ? 0 : styles[p]) + (typeof styles[p] === 'number' ? 'px' : '');
        }
      }
    }
    return el;
  },
  getInnerWidth: function(el) {
    return el.offsetWidth - (parseInt(this.getStyle(el,'paddingLeft')) || 0) - (parseInt(this.getStyle(el,'paddingRight')) || 0);
  },
  getInnerHeight: function(el) {
    return el.offsetHeight - (parseInt(this.getStyle(el,'paddingTop')) || 0) - (parseInt(this.getStyle(el,'paddingBottom')) || 0);
  },
  getAllClasses: function(cname, prefix, skip) {
    if(!skip) skip = '';
    if(!prefix) prefix = '';
    return cname ? cname.replace(new RegExp('(\\s|^)'+skip+'(\\s|$)'),' ').replace(/[\s]*([\S]+)+[\s]*/gi,prefix+"$1 ") : '';
  },
  getElementsBySelector: function(selector, scope) {
    if(typeof document.querySelectorAll === 'function') {
      return (scope || document).querySelectorAll(selector);
    }
    var selectors = selector.split(',');
    var resultList = [];
    for(var s = 0; s < selectors.length; s++) {
      var currentContext = [scope || document];
      var tokens = selectors[s].replace(/^\s+/,'').replace(/\s+$/,'').split(' ');
      for (var i = 0; i < tokens.length; i++) {
        token = tokens[i].replace(/^\s+/,'').replace(/\s+$/,'');
        if (token.indexOf('#') > -1) {
          var bits = token.split('#'), tagName = bits[0], id = bits[1];
          var element = document.getElementById(id);
          if (tagName && element.nodeName.toLowerCase() != tagName) {
            return [];
          }
          currentContext = [element];
          continue;
        }
        if (token.indexOf('.') > -1) {
          var bits = token.split('.'), tagName = bits[0] || '*', className = bits[1], found = [], foundCount = 0;
          for (var h = 0; h < currentContext.length; h++) {
            var elements;
            if (tagName == '*') {
              elements = currentContext[h].getElementsByTagName('*');
            } else {
              elements = currentContext[h].getElementsByTagName(tagName);
            }
            for (var j = 0; j < elements.length; j++) {
              found[foundCount++] = elements[j];
            }
          }
          currentContext = [];
          var currentContextIndex = 0;
          for (var k = 0; k < found.length; k++) {
            if (found[k].className && found[k].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))) {
              currentContext[currentContextIndex++] = found[k];
            }
          }
          continue;
        }
        if (token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
          var tagName = RegExp.$1 || '*', attrName = RegExp.$2, attrOperator = RegExp.$3, attrValue = RegExp.$4;
          if(attrName.toLowerCase() == 'for' && this.browser.msie && this.browser.version < 8) {
            attrName = 'htmlFor';
          }
          var found = [], foundCount = 0;
          for (var h = 0; h < currentContext.length; h++) {
            var elements;
            if (tagName == '*') {
              elements = currentContext[h].getElementsByTagName('*');
            } else {
              elements = currentContext[h].getElementsByTagName(tagName);
            }
            for (var j = 0; elements[j]; j++) {
              found[foundCount++] = elements[j];
            }
          }
          currentContext = [];
          var currentContextIndex = 0, checkFunction;
          switch (attrOperator) {
            case '=': checkFunction = function(e) { return (e.getAttribute(attrName) == attrValue) }; break;
            case '~': checkFunction = function(e) { return (e.getAttribute(attrName).match(new RegExp('(\\s|^)'+attrValue+'(\\s|$)'))) }; break;
            case '|': checkFunction = function(e) { return (e.getAttribute(attrName).match(new RegExp('^'+attrValue+'-?'))) }; break;
            case '^': checkFunction = function(e) { return (e.getAttribute(attrName).indexOf(attrValue) == 0) }; break;
            case '$': checkFunction = function(e) { return (e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length) }; break;
            case '*': checkFunction = function(e) { return (e.getAttribute(attrName).indexOf(attrValue) > -1) }; break;
            default : checkFunction = function(e) { return e.getAttribute(attrName) };
          }
          currentContext = [];
          var currentContextIndex = 0;
          for (var k = 0; k < found.length; k++) {
            if (checkFunction(found[k])) {
              currentContext[currentContextIndex++] = found[k];
            }
          }
          continue;
        }
        tagName = token;
        var found = [], foundCount = 0;
        for (var h = 0; h < currentContext.length; h++) {
          var elements = currentContext[h].getElementsByTagName(tagName);
          for (var j = 0; j < elements.length; j++) {
            found[foundCount++] = elements[j];
          }
        }
        currentContext = found;
      }
      resultList = [].concat(resultList,currentContext);
    }
    return resultList;
  },
  scrollSize: (function(){
    var content, hold, sizeBefore, sizeAfter;
    function buildSizer(){
      if(hold) removeSizer();
      content = document.createElement('div');
      hold = document.createElement('div');
      hold.style.cssText = 'position:absolute;overflow:hidden;width:100px;height:100px';
      hold.appendChild(content);
      document.body.appendChild(hold);
    }
    function removeSizer(){
      document.body.removeChild(hold);
      hold = null;
    }
    function calcSize(vertical) {
      buildSizer();
      content.style.cssText = 'height:'+(vertical ? '100%' : '200px');
      sizeBefore = (vertical ? content.offsetHeight : content.offsetWidth);
      hold.style.overflow = 'scroll'; content.innerHTML = 1;
      sizeAfter = (vertical ? content.offsetHeight : content.offsetWidth);
      if(vertical && hold.clientHeight) sizeAfter = hold.clientHeight;
      removeSizer();
      return sizeBefore - sizeAfter;
    }
    return {
      getWidth:function(){
        return calcSize(false);
      },
      getHeight:function(){
        return calcSize(true)
      }
    }
  }()),
  domReady: function (handler){
    var called = false
    function ready() {
      if (called) return;
      called = true;
      handler();
    }
    if (document.addEventListener) {
      document.addEventListener("DOMContentLoaded", ready, false);
    } else if (document.attachEvent) {
      if (document.documentElement.doScroll && window == window.top) {
        function tryScroll(){
          if (called) return
          if (!document.body) return
          try {
            document.documentElement.doScroll("left")
            ready()
          } catch(e) {
            setTimeout(tryScroll, 0)
          }
        }
        tryScroll()
      }
      document.attachEvent("onreadystatechange", function(){
        if (document.readyState === "complete") {
          ready()
        }
      })
    }
    if (window.addEventListener) window.addEventListener('load', ready, false)
    else if (window.attachEvent) window.attachEvent('onload', ready)
  },
  event: (function(){
    var guid = 0;
    function fixEvent(e) {
      e = e || window.event;
      if (e.isFixed) {
        return e;
      }
      e.isFixed = true; 
      e.preventDefault = e.preventDefault || function(){this.returnValue = false}
      e.stopPropagation = e.stopPropagaton || function(){this.cancelBubble = true}
      if (!e.target) {
        e.target = e.srcElement
      }
      if (!e.relatedTarget && e.fromElement) {
        e.relatedTarget = e.fromElement == e.target ? e.toElement : e.fromElement;
      }
      if (e.pageX == null && e.clientX != null) {
        var html = document.documentElement, body = document.body;
        e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0);
        e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0);
      }
      if (!e.which && e.button) {
        e.which = e.button & 1 ? 1 : (e.button & 2 ? 3 : (e.button & 4 ? 2 : 0));
      }
      if(e.type === "DOMMouseScroll" || e.type === 'mousewheel') {
        e.mWheelDelta = 0;
        if (e.wheelDelta) {
          e.mWheelDelta = e.wheelDelta/120;
        } else if (e.detail) {
          e.mWheelDelta = -e.detail/3;
        }
      }
      return e;
    }
    function commonHandle(event, customScope) {
      event = fixEvent(event);
      var handlers = this.events[event.type];
      for (var g in handlers) {
        var handler = handlers[g];
        var ret = handler.call(customScope || this, event);
        if (ret === false) {
          event.preventDefault()
          event.stopPropagation()
        }
      }
    }
    var publicAPI = {
      add: function(elem, type, handler, forcedScope) {
        if (elem.setInterval && (elem != window && !elem.frameElement)) {
          elem = window;
        }
        if (!handler.guid) {
          handler.guid = ++guid;
        }
        if (!elem.events) {
          elem.events = {};
          elem.handle = function(event) {
            return commonHandle.call(elem, event);
          }
        }
        if (!elem.events[type]) {
          elem.events[type] = {};
          if (elem.addEventListener) elem.addEventListener(type, elem.handle, false);
          else if (elem.attachEvent) elem.attachEvent("on" + type, elem.handle);
          if(type === 'mousewheel') {
            publicAPI.add(elem, 'DOMMouseScroll', handler, forcedScope);
          }
        }
        var fakeHandler = jcf.lib.bind(handler, forcedScope);
        fakeHandler.guid = handler.guid;
        elem.events[type][handler.guid] = forcedScope ? fakeHandler : handler;
      },
      remove: function(elem, type, handler) {
        var handlers = elem.events && elem.events[type];
        if (!handlers) return;
        delete handlers[handler.guid];
        for(var any in handlers) return;
        if (elem.removeEventListener) elem.removeEventListener(type, elem.handle, false);
        else if (elem.detachEvent) elem.detachEvent("on" + type, elem.handle);
        delete elem.events[type];
        for (var any in elem.events) return;
        try {
          delete elem.handle;
          delete elem.events;
        } catch(e) {
          if(elem.removeAttribute) {
            elem.removeAttribute("handle");
            elem.removeAttribute("events");
          }
        }
        if(type === 'mousewheel') {
          publicAPI.remove(elem, 'DOMMouseScroll', handler);
        }
      }
    }
    return publicAPI;
  }())
}

// custom select module
jcf.addModule({
  name:'select',
  selector:'select',
  defaultOptions: {
    useNativeDropOnMobileDevices: true,
    hideDropOnScroll: true,
    showNativeDrop: false,
    handleDropPosition: false,
    selectDropPosition: 'bottom', // or 'top'
    wrapperClass:'select-area',
    focusClass:'select-focus',
    dropActiveClass:'select-active',
    selectedClass:'item-selected',
    currentSelectedClass:'current-selected',
    disabledClass:'select-disabled',
    valueSelector:'span.center', 
    optGroupClass:'optgroup',
    openerSelector:'a.select-opener',   
    selectStructure:'<span class="left"></span><span class="center"></span><a class="select-opener"></a>',
    wrapperTag: 'span',
    classPrefix:'select-',
    dropMaxHeight: 200,
    dropFlippedClass: 'select-options-flipped',
    dropHiddenClass:'options-hidden',
    dropScrollableClass:'options-overflow',
    dropClass:'select-options',
    dropClassPrefix:'drop-',
    dropStructure:'<div class="drop-holder"><div class="drop-list"></div></div>',
    dropSelector:'div.drop-list'
  },
  checkElement: function(el){
    return (!el.size && !el.multiple);
  },
  setupWrapper: function(){
    jcf.lib.addClass(this.fakeElement, this.options.wrapperClass);
    this.realElement.parentNode.insertBefore(this.fakeElement, this.realElement);
    this.fakeElement.innerHTML = this.options.selectStructure;
    this.fakeElement.style.width = (this.realElement.offsetWidth > 0 ? this.realElement.offsetWidth + 'px' : 'auto');

    // show native drop if specified in options
    if(this.options.useNativeDropOnMobileDevices && (jcf.isTouchDevice || jcf.isWinPhoneDevice)) {
      this.options.showNativeDrop = true;
    }
    if(this.options.showNativeDrop) {
      this.fakeElement.appendChild(this.realElement);
      jcf.lib.removeClass(this.realElement, this.options.hiddenClass);
      jcf.lib.setStyles(this.realElement, {
        top:0,
        left:0,
        margin:0,
        padding:0,
        opacity:0,
        border:'none',
        position:'absolute',
        width: jcf.lib.getInnerWidth(this.fakeElement) - 1,
        height: jcf.lib.getInnerHeight(this.fakeElement) - 1
      });
      jcf.lib.event.add(this.realElement, jcf.eventPress, function(){
        this.realElement.title = '';
      }, this)
    }
    
    // create select body
    this.opener = jcf.lib.queryBySelector(this.options.openerSelector, this.fakeElement)[0];
    this.valueText = jcf.lib.queryBySelector(this.options.valueSelector, this.fakeElement)[0];
    jcf.lib.disableTextSelection(this.valueText);
    this.opener.jcf = this;

    if(!this.options.showNativeDrop) {
      this.createDropdown();
      this.refreshState();
      this.onControlReady(this);
      this.hideDropdown(true);
    } else {
      this.refreshState();
    }
    this.addEvents();
  },
  addEvents: function(){
    if(this.options.showNativeDrop) {
      jcf.lib.event.add(this.realElement, 'click', this.onChange, this);
    } else {
      jcf.lib.event.add(this.fakeElement, 'click', this.toggleDropdown, this);
    }
    jcf.lib.event.add(this.realElement, 'change', this.onChange, this);
  },
  onFakeClick: function() {
    // do nothing (drop toggles by toggleDropdown method)
  },
  onFocus: function(){
    jcf.modules[this.name].superclass.onFocus.apply(this, arguments);
    if(!this.options.showNativeDrop) {
      // Mac Safari Fix
      if(jcf.lib.browser.safariMac) {
        this.realElement.setAttribute('size','2');
      }
      jcf.lib.event.add(this.realElement, 'keydown', this.onKeyDown, this);
      if(jcf.activeControl && jcf.activeControl != this) {
        jcf.activeControl.hideDropdown();
        jcf.activeControl = this;
      }
    }
  },
  onBlur: function(){
    if(!this.options.showNativeDrop) {
      // Mac Safari Fix
      if(jcf.lib.browser.safariMac) {
        this.realElement.removeAttribute('size');
      }
      if(!this.isActiveDrop() || !this.isOverDrop()) {
        jcf.modules[this.name].superclass.onBlur.apply(this);
        if(jcf.activeControl === this) jcf.activeControl = null;
        if(!jcf.isTouchDevice) {
          this.hideDropdown();
        }
      }
      jcf.lib.event.remove(this.realElement, 'keydown', this.onKeyDown);
    } else {
      jcf.modules[this.name].superclass.onBlur.apply(this);
    }
  },
  onChange: function() {
    this.refreshState();
  },
  onKeyDown: function(e){
    this.dropOpened = true;
    jcf.tmpFlag = true;
    setTimeout(function(){jcf.tmpFlag = false},100);
    var context = this;
    context.keyboardFix = true;
    setTimeout(function(){
      context.refreshState();
    },10);
    if(e.keyCode == 13) {
      context.toggleDropdown.apply(context);
      return false;
    }
  },
  onResizeWindow: function(e){
    if(this.isActiveDrop()) {
      this.hideDropdown();
    }
  },
  onScrollWindow: function(e){
    if(this.options.hideDropOnScroll) {
      this.hideDropdown();
    } else if(this.isActiveDrop()) {
      this.positionDropdown();
    }
  },
  onOptionClick: function(e){
    var opener = e.target && e.target.tagName && e.target.tagName.toLowerCase() == 'li' ? e.target : jcf.lib.getParent(e.target, 'li');
    if(opener) {
      this.dropOpened = true;
      this.realElement.selectedIndex = parseInt(opener.getAttribute('rel'));
      if(jcf.isTouchDevice) {
        this.onFocus();
      } else {
        this.realElement.focus();
      }
      this.refreshState();
      this.hideDropdown();
      jcf.lib.fireEvent(this.realElement, 'change');
    }
    return false;
  },
  onClickOutside: function(e){
    if(jcf.tmpFlag) {
      jcf.tmpFlag = false;
      return;
    }
    if(!jcf.lib.isParent(this.fakeElement, e.target) && !jcf.lib.isParent(this.selectDrop, e.target)) {
      this.hideDropdown();
    }
  },
  onDropHover: function(e){
    if(!this.keyboardFix) {
      this.hoverFlag = true;
      var opener = e.target && e.target.tagName && e.target.tagName.toLowerCase() == 'li' ? e.target : jcf.lib.getParent(e.target, 'li');
      if(opener) {
        this.realElement.selectedIndex = parseInt(opener.getAttribute('rel'));
        this.refreshSelectedClass(parseInt(opener.getAttribute('rel')));
      }
    } else {
      this.keyboardFix = false;
    }
  },
  onDropLeave: function(){
    this.hoverFlag = false;
  },
  isActiveDrop: function(){
    return !jcf.lib.hasClass(this.selectDrop, this.options.dropHiddenClass);
  },
  isOverDrop: function(){
    return this.hoverFlag;
  },
  createDropdown: function(){
    // remove old dropdown if exists
    if(this.selectDrop) {
      this.selectDrop.parentNode.removeChild(this.selectDrop);
    }

    // create dropdown holder
    this.selectDrop = document.createElement('div');
    this.selectDrop.className = this.options.dropClass;
    this.selectDrop.innerHTML = this.options.dropStructure;
    jcf.lib.setStyles(this.selectDrop, {position:'absolute'});
    this.selectList = jcf.lib.queryBySelector(this.options.dropSelector,this.selectDrop)[0];
    jcf.lib.addClass(this.selectDrop, this.options.dropHiddenClass);
    document.body.appendChild(this.selectDrop);
    this.selectDrop.jcf = this;
    jcf.lib.event.add(this.selectDrop, 'click', this.onOptionClick, this);
    jcf.lib.event.add(this.selectDrop, 'mouseover', this.onDropHover, this);
    jcf.lib.event.add(this.selectDrop, 'mouseout', this.onDropLeave, this);
    this.buildDropdown();
  },
  buildDropdown: function() {
    // build select options / optgroups
    this.buildDropdownOptions();

    // position and resize dropdown
    this.positionDropdown();

    // cut dropdown if height exceedes
    this.buildDropdownScroll();
  },
  buildDropdownOptions: function() {
    this.resStructure = '';
    this.optNum = 0;
    for(var i = 0; i < this.realElement.children.length; i++) {
      this.resStructure += this.buildElement(this.realElement.children[i], i) +'\n';
    }
    this.selectList.innerHTML = this.resStructure;
  },
  buildDropdownScroll: function() {
    jcf.lib.addClass(this.selectDrop, jcf.lib.getAllClasses(this.realElement.className, this.options.dropClassPrefix, jcf.baseOptions.hiddenClass));
    if(this.options.dropMaxHeight) {
      if(this.selectDrop.offsetHeight > this.options.dropMaxHeight) {
        this.selectList.style.height = this.options.dropMaxHeight+'px';
        this.selectList.style.overflow = 'auto';
        this.selectList.style.overflowX = 'hidden';
        jcf.lib.addClass(this.selectDrop, this.options.dropScrollableClass);
      }
    }
  },
  parseOptionTitle: function(optTitle) {
    return (typeof optTitle === 'string' && /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i.test(optTitle)) ? optTitle : '';
  },
  buildElement: function(obj, index){
    // build option
    var res = '', optImage;
    if(obj.tagName.toLowerCase() == 'option') {
      if(!jcf.lib.prevSibling(obj) || jcf.lib.prevSibling(obj).tagName.toLowerCase() != 'option') {
        res += '<ul>';
      }
      
      optImage = this.parseOptionTitle(obj.title);
      res += '<li rel="'+(this.optNum++)+'" class="'+(obj.className? obj.className + ' ' : '')+(index % 2 ? 'option-even ' : '')+'jcfcalc"><a href="#">'+(optImage ? '<img src="'+optImage+'" alt="" />' : '')+'<span>' + obj.innerHTML + '</span></a></li>';
      if(!jcf.lib.nextSibling(obj) || jcf.lib.nextSibling(obj).tagName.toLowerCase() != 'option') {
        res += '</ul>';
      }
      return res;
    }
    // build option group with options
    else if(obj.tagName.toLowerCase() == 'optgroup' && obj.label) {
      res += '<div class="'+this.options.optGroupClass+'">';
      res += '<strong class="jcfcalc"><em>'+(obj.label)+'</em></strong>';
      for(var i = 0; i < obj.children.length; i++) {
        res += this.buildElement(obj.children[i], i);
      }
      res += '</div>';
      return res;
    }
  },
  positionDropdown: function(){
    var ofs = jcf.lib.getOffset(this.fakeElement), selectAreaHeight = this.fakeElement.offsetHeight, selectDropHeight = this.selectDrop.offsetHeight;
    var fitInTop = ofs.top - selectDropHeight >= jcf.lib.getScrollTop() && jcf.lib.getScrollTop() + jcf.lib.getWindowHeight() < ofs.top + selectAreaHeight + selectDropHeight;
    
    
    if((this.options.handleDropPosition && fitInTop) || this.options.selectDropPosition === 'top') {
      this.selectDrop.style.top = (ofs.top - selectDropHeight)+'px';
      jcf.lib.addClass(this.selectDrop, this.options.dropFlippedClass);
      jcf.lib.addClass(this.fakeElement, this.options.dropFlippedClass);
    } else {
      this.selectDrop.style.top = (ofs.top + selectAreaHeight)+'px';
      jcf.lib.removeClass(this.selectDrop, this.options.dropFlippedClass);
      jcf.lib.removeClass(this.fakeElement, this.options.dropFlippedClass);
    }
    this.selectDrop.style.left = ofs.left+'px';
    this.selectDrop.style.width = this.fakeElement.offsetWidth+'px';
  },
  showDropdown: function(){
    document.body.appendChild(this.selectDrop);
    jcf.lib.removeClass(this.selectDrop, this.options.dropHiddenClass);
    jcf.lib.addClass(this.fakeElement,this.options.dropActiveClass);
    this.positionDropdown();

    // highlight current active item
    var activeItem = this.getFakeActiveOption();
    this.removeClassFromItems(this.options.currentSelectedClass);
    jcf.lib.addClass(activeItem, this.options.currentSelectedClass);
    
    // show current dropdown
    jcf.lib.event.add(window, 'resize', this.onResizeWindow, this);
    jcf.lib.event.add(window, 'scroll', this.onScrollWindow, this);
    jcf.lib.event.add(document, jcf.eventPress, this.onClickOutside, this);
    this.positionDropdown();
  },
  hideDropdown: function(partial){
    if(this.selectDrop.parentNode) {
      if(this.selectDrop.offsetWidth) {
        this.selectDrop.parentNode.removeChild(this.selectDrop);
      }
      if(partial) {
        return;
      }
    }
    if(typeof this.origSelectedIndex === 'number') {
      this.realElement.selectedIndex = this.origSelectedIndex;
    }
    jcf.lib.removeClass(this.fakeElement,this.options.dropActiveClass);
    jcf.lib.addClass(this.selectDrop, this.options.dropHiddenClass);
    jcf.lib.event.remove(window, 'resize', this.onResizeWindow);
    jcf.lib.event.remove(window, 'scroll', this.onScrollWindow);
    jcf.lib.event.remove(document.documentElement, jcf.eventPress, this.onClickOutside);
    if(jcf.isTouchDevice) {
      this.onBlur();
    }
  },
  toggleDropdown: function(){
    if(!this.realElement.disabled) {
      if(jcf.isTouchDevice) {
        this.onFocus();
      } else {
        this.realElement.focus();
      }
      if(this.isActiveDrop()) {
        this.hideDropdown();
      } else {
        this.showDropdown();
      }
      this.refreshState();
    }
  },
  scrollToItem: function(){
    if(this.isActiveDrop()) {
      var dropHeight = this.selectList.offsetHeight;
      var offsetTop = this.calcOptionOffset(this.getFakeActiveOption());
      var sTop = this.selectList.scrollTop;
      var oHeight = this.getFakeActiveOption().offsetHeight;
      //offsetTop+=sTop;

      if(offsetTop >= sTop + dropHeight) {
        this.selectList.scrollTop = offsetTop - dropHeight + oHeight;
      } else if(offsetTop < sTop) {
        this.selectList.scrollTop = offsetTop;
      }
    }
  },
  getFakeActiveOption: function(c) {
    return jcf.lib.queryBySelector('li[rel="'+(typeof c === 'number' ? c : this.realElement.selectedIndex) +'"]',this.selectList)[0];
  },
  calcOptionOffset: function(fake) {
    var h = 0;
    var els = jcf.lib.queryBySelector('.jcfcalc',this.selectList);
    for(var i = 0; i < els.length; i++) {
      if(els[i] == fake) break;
      h+=els[i].offsetHeight;
    }
    return h;
  },
  childrenHasItem: function(hold,item) {
    var items = hold.getElementsByTagName('*');
    for(i = 0; i < items.length; i++) {
      if(items[i] == item) return true;
    }
    return false;
  },
  removeClassFromItems: function(className){
    var children = jcf.lib.queryBySelector('li',this.selectList);
    for(var i = children.length - 1; i >= 0; i--) {
      jcf.lib.removeClass(children[i], className);
    }
  },
  setSelectedClass: function(c){
    jcf.lib.addClass(this.getFakeActiveOption(c), this.options.selectedClass);
  },
  refreshSelectedClass: function(c){
    if(!this.options.showNativeDrop) {
      this.removeClassFromItems(this.options.selectedClass);
      this.setSelectedClass(c);
    }
    if(this.realElement.disabled) {
      jcf.lib.addClass(this.fakeElement, this.options.disabledClass);
      if(this.labelFor) {
        jcf.lib.addClass(this.labelFor, this.options.labelDisabledClass);
      }
    } else {
      jcf.lib.removeClass(this.fakeElement, this.options.disabledClass);
      if(this.labelFor) {
        jcf.lib.removeClass(this.labelFor, this.options.labelDisabledClass);
      }
    }
  },
  refreshSelectedText: function() {
    if(!this.dropOpened && this.realElement.title) {
      this.valueText.innerHTML = this.realElement.title;
    } else {
      if(this.realElement.options[this.realElement.selectedIndex].title) {
        var optImage = this.parseOptionTitle(this.realElement.options[this.realElement.selectedIndex].title);
        this.valueText.innerHTML = (optImage ? '<img src="'+optImage+'" alt="" />' : '') + this.realElement.options[this.realElement.selectedIndex].innerHTML;
      } else {
        this.valueText.innerHTML = this.realElement.options[this.realElement.selectedIndex].innerHTML;
      }
    }
  },
  refreshState: function(){
    this.origSelectedIndex = this.realElement.selectedIndex;
    this.refreshSelectedClass();
    this.refreshSelectedText();
    if(!this.options.showNativeDrop) {
      this.positionDropdown();
      if(this.selectDrop.offsetWidth) {
        this.scrollToItem();
      }
    }
  }
});

/*
 * Browser platform detection
 */
PlatformDetect = (function(){
  var detectModules = {};

  // try to detect css folder path
  var detectedPath, links = document.getElementsByTagName('link');
  for(var i = 0; i < links.length; i++) {
    if(links[i].getAttribute('media') === 'all') {
      detectedPath = links[i].getAttribute('href');
      if(detectedPath) {
        detectedPath = detectedPath.replace(/[^\/]*$/, '');
        break;
      }
    }
  }

  return {
    options: {
      cssPath: 'css/'
    },
    addModule: function(obj) {
      detectModules[obj.type] = obj;
    },
    addRule: function(rule) {
      if(this.matchRule(rule)) {
        this.applyRule(rule);
        return true;
      }
    },
    matchRule: function(rule) {
      return detectModules[rule.type].matchRule(rule);
    },
    applyRule: function(rule) {
      var head = document.getElementsByTagName('head')[0], fragment, cssText;
      if(rule.css) {
        cssText = '<link rel="stylesheet" href="' + (detectedPath || this.options.cssPath) + rule.css + '" />';
        if(head) {
          fragment = document.createElement('div');
          fragment.innerHTML = cssText;
          head.appendChild(fragment.childNodes[0]);
        } else {
          document.write(cssText);
        }
      }
      
      if(rule.meta) {
        if(head) {
          fragment = document.createElement('div');
          fragment.innerHTML = rule.meta;
          head.appendChild(fragment.childNodes[0]);
        } else {
          document.write(rule.meta);
        }
      }
    },
    matchVersions: function(host, target) {
      target = target.toString();
      host = host.toString();

      var majorVersionMatch = parseInt(target, 10) === parseInt(host, 10);
      var minorVersionMatch = (host.length > target.length ? host.indexOf(target) : target.indexOf(host)) === 0;

      return majorVersionMatch && minorVersionMatch;
    }
  };
}());

// All Mobile detection
PlatformDetect.addModule({
  type: 'allmobile',
  uaMatch: function(str) {
    if(!this.ua) {
      this.ua = navigator.userAgent.toLowerCase();
    }
    return this.ua.indexOf(str.toLowerCase()) != -1;
  },
  matchRule: function(rule) {
    return this.uaMatch('mobi') || this.uaMatch('midp') || this.uaMatch('ppc') || this.uaMatch('webos') || this.uaMatch('android') || this.uaMatch('phone os') || this.uaMatch('touch');
  }
});

// Android detection
PlatformDetect.addModule({
  type: 'android',
  parseUserAgent: function() {
    var match = /(Android) ([0-9.]*).*/.exec(navigator.userAgent);
    if(match) {
      return {
        deviceType: navigator.userAgent.indexOf('Mobile') > 0 ? 'mobile' : 'tablet',
        version: match[2]
      };
    }
  },
  matchRule: function(rule) {
    this.matchData = this.matchData || this.parseUserAgent();
    if(this.matchData) {
      var matchVersion = rule.version ? PlatformDetect.matchVersions(this.matchData.version, rule.version) : true;
      var matchDevice = rule.deviceType ? rule.deviceType === this.matchData.deviceType : true;
      return matchVersion && matchDevice;
    }
  }
});

// Windows Phone detection
PlatformDetect.addModule({
  type: 'winphone',
  parseUserAgent: function() {
    var match = /(Windows Phone OS) ([0-9.]*).*/.exec(navigator.userAgent);
    if(match) {
      return {
        version: match[2]
      };
    }
    if(/MSIE 10.*Touch/.test(navigator.userAgent)) {
      return {
        version: 8
      };
    }
  },
  matchRule: function(rule) {
    this.matchData = this.matchData || this.parseUserAgent();
    if(this.matchData) {
      return rule.version ? PlatformDetect.matchVersions(this.matchData.version, rule.version) : true;
    }
  }
});

// Detect rules
PlatformDetect.addRule({type: 'allmobile', css: 'allmobile.css'});
PlatformDetect.addRule({type: 'android', version: 4, css: 'android.css'});
PlatformDetect.addRule({type: 'winphone', css: 'winphone.css'});

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
;window.matchMedia=window.matchMedia||(function(e,f){var c,a=e.documentElement,b=a.firstElementChild||a.firstChild,d=e.createElement("body"),g=e.createElement("div");g.id="mq-test-1";g.style.cssText="position:absolute;top:-100em";d.appendChild(g);return function(h){g.innerHTML='&shy;<style media="'+h+'"> #mq-test-1 { width: 42px; }</style>';a.insertBefore(d,b);c=g.offsetWidth==42;a.removeChild(d);return{matches:c,media:h}}})(document);

/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with divs). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */
;(function(a){"use strict";a.picturefill=function(){for(var b=a.document.getElementsByTagName("div"),c=0,d=b.length;d>c;c++)if(null!==b[c].getAttribute("data-picture")){for(var e=b[c].getElementsByTagName("div"),f=[],g=0,h=e.length;h>g;g++){var i=e[g].getAttribute("data-media");(!i||a.matchMedia&&a.matchMedia(i).matches)&&f.push(e[g])}var j=b[c].getElementsByTagName("img")[0];if(f.length){j||(j=a.document.createElement("img"),j.alt=b[c].getAttribute("data-alt"),b[c].appendChild(j));var k=f.pop(),l=k.getAttribute("data-width"),m=k.getAttribute("data-height");j.src=k.getAttribute("data-src"),l?j.setAttribute("width",l):j.removeAttribute("width"),m?j.setAttribute("height",m):j.removeAttribute("height")}else j&&b[c].removeChild(j)}},a.addEventListener?(a.addEventListener("resize",a.picturefill,!1),a.addEventListener("DOMContentLoaded",function(){a.picturefill(),a.removeEventListener("load",a.picturefill,!1)},!1),a.addEventListener("load",a.picturefill,!1)):a.attachEvent&&a.attachEvent("onload",a.picturefill)})(this);


/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */
;(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){(u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which)&&(o=!0),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this),function(t,e){"use strict";t!==e&&(Hammer.event.bindDom=function(n,i,r){t(n).on(i,function(t){var n=t.originalEvent||t;n.pageX===e&&(n.pageX=t.pageX,n.pageY=t.pageY),n.target||(n.target=t.target),n.which===e&&(n.which=n.button),n.preventDefault||(n.preventDefault=t.preventDefault),n.stopPropagation||(n.stopPropagation=t.stopPropagation),r.call(this,n)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){var i=t(this.element);return i.has(n.target).length&&(i=t(n.target)),i.trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),i=n.data("hammer");i?i&&e&&Hammer.utils.extend(i.options,e):n.data("hammer",new Hammer(this,e||{}))})})}(window.jQuery||window.Zepto);
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);

/*! jQuery Validation Plugin - Additional Methods v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */(function(){function t(t){return t.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'"_+=\/\-]*/g,"")}jQuery.validator.addMethod("maxWords",function(e,i,a){return this.optional(i)||a>=t(e).match(/\b\w+\b/g).length},jQuery.validator.format("Please enter {0} words or less.")),jQuery.validator.addMethod("minWords",function(e,i,a){return this.optional(i)||t(e).match(/\b\w+\b/g).length>=a},jQuery.validator.format("Please enter at least {0} words.")),jQuery.validator.addMethod("rangeWords",function(e,i,a){var r=t(e),n=/\b\w+\b/g;return this.optional(i)||r.match(n).length>=a[0]&&r.match(n).length<=a[1]},jQuery.validator.format("Please enter between {0} and {1} words."))})(),jQuery.validator.addMethod("letterswithbasicpunc",function(t,e){return this.optional(e)||/^[a-z\-.,()'"\s]+$/i.test(t)},"Letters or punctuation only please"),jQuery.validator.addMethod("alphanumeric",function(t,e){return this.optional(e)||/^\w+$/i.test(t)},"Letters, numbers, and underscores only please"),jQuery.validator.addMethod("lettersonly",function(t,e){return this.optional(e)||/^[a-z]+$/i.test(t)},"Letters only please"),jQuery.validator.addMethod("nowhitespace",function(t,e){return this.optional(e)||/^\S+$/i.test(t)},"No white space please"),jQuery.validator.addMethod("ziprange",function(t,e){return this.optional(e)||/^90[2-5]\d\{2\}-\d{4}$/.test(t)},"Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx"),jQuery.validator.addMethod("zipcodeUS",function(t,e){return this.optional(e)||/\d{5}-\d{4}$|^\d{5}$/.test(t)},"The specified US ZIP Code is invalid"),jQuery.validator.addMethod("integer",function(t,e){return this.optional(e)||/^-?\d+$/.test(t)},"A positive or negative non-decimal number please"),jQuery.validator.addMethod("vinUS",function(t){if(17!==t.length)return!1;var e,i,a,r,n,s,u=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],d=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],o=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],l=0;for(e=0;17>e;e++){if(r=o[e],a=t.slice(e,e+1),8===e&&(s=a),isNaN(a)){for(i=0;u.length>i;i++)if(a.toUpperCase()===u[i]){a=d[i],a*=r,isNaN(s)&&8===i&&(s=u[i]);break}}else a*=r;l+=a}return n=l%11,10===n&&(n="X"),n===s?!0:!1},"The specified vehicle identification number (VIN) is invalid."),jQuery.validator.addMethod("dateITA",function(t,e){var i=!1,a=/^\d{1,2}\/\d{1,2}\/\d{4}$/;if(a.test(t)){var r=t.split("/"),n=parseInt(r[0],10),s=parseInt(r[1],10),u=parseInt(r[2],10),d=new Date(u,s-1,n);i=d.getFullYear()===u&&d.getMonth()===s-1&&d.getDate()===n?!0:!1}else i=!1;return this.optional(e)||i},"Please enter a correct date"),jQuery.validator.addMethod("iban",function(t,e){if(this.optional(e))return!0;if(!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(t))return!1;var i=t.replace(/ /g,"").toUpperCase(),a=i.substring(0,2),r={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"},n=r[a];if(n!==void 0){var s=RegExp("^[A-Z]{2}\\d{2}"+n+"$","");if(!s.test(i))return!1}for(var u,d=i.substring(4,i.length)+i.substring(0,4),o="",l=!0,h=0;d.length>h;h++)u=d.charAt(h),"0"!==u&&(l=!1),l||(o+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(u));for(var F="",c="",m=0;o.length>m;m++){var f=o.charAt(m);c=""+F+f,F=c%97}return 1===F},"Please specify a valid IBAN"),jQuery.validator.addMethod("dateNL",function(t,e){return this.optional(e)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(t)},"Please enter a correct date"),jQuery.validator.addMethod("phoneNL",function(t,e){return this.optional(e)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(t)},"Please specify a valid phone number."),jQuery.validator.addMethod("mobileNL",function(t,e){return this.optional(e)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(t)},"Please specify a valid mobile number"),jQuery.validator.addMethod("postalcodeNL",function(t,e){return this.optional(e)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(t)},"Please specify a valid postal code"),jQuery.validator.addMethod("bankaccountNL",function(t,e){if(this.optional(e))return!0;if(!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(t))return!1;for(var i=t.replace(/ /g,""),a=0,r=i.length,n=0;r>n;n++){var s=r-n,u=i.substring(n,n+1);a+=s*u}return 0===a%11},"Please specify a valid bank account number"),jQuery.validator.addMethod("giroaccountNL",function(t,e){return this.optional(e)||/^[0-9]{1,7}$/.test(t)},"Please specify a valid giro account number"),jQuery.validator.addMethod("bankorgiroaccountNL",function(t,e){return this.optional(e)||$.validator.methods.bankaccountNL.call(this,t,e)||$.validator.methods.giroaccountNL.call(this,t,e)},"Please specify a valid bank or giro account number"),jQuery.validator.addMethod("time",function(t,e){return this.optional(e)||/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(t)},"Please enter a valid time, between 00:00 and 23:59"),jQuery.validator.addMethod("time12h",function(t,e){return this.optional(e)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(t)},"Please enter a valid time in 12-hour am/pm format"),jQuery.validator.addMethod("phoneUS",function(t,e){return t=t.replace(/\s+/g,""),this.optional(e)||t.length>9&&t.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)},"Please specify a valid phone number"),jQuery.validator.addMethod("phoneUK",function(t,e){return t=t.replace(/\(|\)|\s+|-/g,""),this.optional(e)||t.length>9&&t.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)},"Please specify a valid phone number"),jQuery.validator.addMethod("mobileUK",function(t,e){return t=t.replace(/\(|\)|\s+|-/g,""),this.optional(e)||t.length>9&&t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number"),jQuery.validator.addMethod("phonesUK",function(t,e){return t=t.replace(/\(|\)|\s+|-/g,""),this.optional(e)||t.length>9&&t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number"),jQuery.validator.addMethod("postcodeUK",function(t,e){return this.optional(e)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(t)},"Please specify a valid UK postcode"),jQuery.validator.addMethod("strippedminlength",function(t,e,i){return jQuery(t).text().length>=i},jQuery.validator.format("Please enter at least {0} characters")),jQuery.validator.addMethod("email2",function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(t)},jQuery.validator.messages.email),jQuery.validator.addMethod("url2",function(t,e){return this.optional(e)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},jQuery.validator.messages.url),jQuery.validator.addMethod("creditcardtypes",function(t,e,i){if(/[^0-9\-]+/.test(t))return!1;t=t.replace(/\D/g,"");var a=0;return i.mastercard&&(a|=1),i.visa&&(a|=2),i.amex&&(a|=4),i.dinersclub&&(a|=8),i.enroute&&(a|=16),i.discover&&(a|=32),i.jcb&&(a|=64),i.unknown&&(a|=128),i.all&&(a=255),1&a&&/^(5[12345])/.test(t)?16===t.length:2&a&&/^(4)/.test(t)?16===t.length:4&a&&/^(3[47])/.test(t)?15===t.length:8&a&&/^(3(0[012345]|[68]))/.test(t)?14===t.length:16&a&&/^(2(014|149))/.test(t)?15===t.length:32&a&&/^(6011)/.test(t)?16===t.length:64&a&&/^(3)/.test(t)?16===t.length:64&a&&/^(2131|1800)/.test(t)?15===t.length:128&a?!0:!1},"Please enter a valid credit card number."),jQuery.validator.addMethod("ipv4",function(t,e){return this.optional(e)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(t)},"Please enter a valid IP v4 address."),jQuery.validator.addMethod("ipv6",function(t,e){return this.optional(e)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(t)},"Please enter a valid IP v6 address."),jQuery.validator.addMethod("pattern",function(t,e,i){return this.optional(e)?!0:("string"==typeof i&&(i=RegExp("^(?:"+i+")$")),i.test(t))},"Invalid format."),jQuery.validator.addMethod("require_from_group",function(t,e,i){var a=this,r=i[1],n=$(r,e.form).filter(function(){return a.elementValue(this)}).length>=i[0];if(!$(e).data("being_validated")){var s=$(r,e.form);s.data("being_validated",!0),s.valid(),s.data("being_validated",!1)}return n},jQuery.format("Please fill at least {0} of these fields.")),jQuery.validator.addMethod("skip_or_fill_minimum",function(t,e,i){var a=this,r=i[0],n=i[1],s=$(n,e.form).filter(function(){return a.elementValue(this)}).length,u=s>=r||0===s;if(!$(e).data("being_validated")){var d=$(n,e.form);d.data("being_validated",!0),d.valid(),d.data("being_validated",!1)}return u},jQuery.format("Please either skip these fields or fill at least {0} of them.")),jQuery.validator.addMethod("accept",function(t,e,i){var a,r,n="string"==typeof i?i.replace(/\s/g,"").replace(/,/g,"|"):"image/*",s=this.optional(e);if(s)return s;if("file"===$(e).attr("type")&&(n=n.replace(/\*/g,".*"),e.files&&e.files.length))for(a=0;e.files.length>a;a++)if(r=e.files[a],!r.type.match(RegExp(".?("+n+")$","i")))return!1;return!0},jQuery.format("Please enter a value with a valid mimetype.")),jQuery.validator.addMethod("extension",function(t,e,i){return i="string"==typeof i?i.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(e)||t.match(RegExp(".("+i+")$","i"))},jQuery.format("Please enter a value with a valid extension."));

/*!
* jQuery Form Plugin; v20131121
* http://jquery.malsup.com/form/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
* https://github.com/malsup/form#copyright-and-license
*/
;(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)})(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;a.length>i;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;o.length>i;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(100*(a/n))),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action");w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var o=[];try{if(m.extraData)for(var c in m.extraData)m.extraData.hasOwnProperty(c)&&(e.isPlainObject(m.extraData[c])&&m.extraData[c].hasOwnProperty("name")&&m.extraData[c].hasOwnProperty("value")?o.push(e('<input type="hidden" name="'+m.extraData[c].name+'">').val(m.extraData[c].value).appendTo(w)[0]):o.push(e('<input type="hidden" name="'+c+'">').val(m.extraData[c]).appendTo(w)[0]));m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(l){var d=document.createElement("form").submit;d.apply(w)}}finally{w.setAttribute("action",i),r?w.setAttribute("target",r):f.removeAttr("target"),e(o).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),S.reject(x,"timeout"),void 0;if(t==k&&x)return x.abort("server abort"),S.reject(x,"error","server abort"),void 0;if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),setTimeout(s,250),void 0;var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(b){i="parsererror",x.error=r=b||i}}catch(b){a("error caught: ",b),i="error",x.error=r=b||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&300>x.status||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,b,y,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;h.length>l;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),y=v.attr2("name"),y?p=y:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;b=w.clk,b&&(y=b.name,y&&!b.disabled&&(m.extraData=m.extraData||{},m.extraData[y]=b.value,"image"==b.type&&(m.extraData[y+".x"]=w.clk_x,m.extraData[y+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var b=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(b,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var y=t.error;t.error=function(e,r,a){var n=t.context||this;y.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;h.length>E;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i=this[0],o=t?i.getElementsByTagName("*"):i.elements;if(!o)return a;var s,u,c,l,f,m,d;for(s=0,m=o.length;m>s;s++)if(f=o[s],c=f.name,c&&!f.disabled)if(t&&i.clk&&"image"==f.type)i.clk==f&&(a.push({name:c,value:e(f).val(),type:f.type}),a.push({name:c+".x",value:i.clk_x},{name:c+".y",value:i.clk_y}));else if(l=e.fieldValue(f,!0),l&&l.constructor==Array)for(r&&r.push(f),u=0,d=l.length;d>u;u++)a.push({name:c,value:l[u]});else if(n.fileapi&&"file"==f.type){r&&r.push(f);var p=f.files;if(p.length)for(u=0;p.length>u;u++)a.push({name:c,value:p[u],type:f.type});else a.push({name:c,value:"",type:f.type})}else null!==l&&l!==void 0&&(r&&r.push(f),a.push({name:c,value:l,type:f.type,required:f.required}));if(!t&&i.clk){var h=e(i.clk),v=h[0];c=v.name,c&&!v.disabled&&"image"==v.type&&(a.push({name:c,value:h.val()}),a.push({name:c+".x",value:i.clk_x},{name:c+".y",value:i.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&n!==void 0&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
