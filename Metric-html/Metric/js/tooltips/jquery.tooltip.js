(function(jQuery) {
    "use strict";

    function DarkTooltip(element, options) {
        this.bearer = element;
        this.options = options;
        this.hideEvent;
        this.mouseOverMode = (this.options.trigger == "hover" || this.options.trigger == "mouseover" || this.options.trigger == "onmouseover");
    }

    DarkTooltip.prototype = {

        show: function() {
            var dt = this;
            if (this.options.modal) {
                this.modalLayer.css('display', 'block');
            }
            //Close all other tooltips
            this.tooltip.css('display', 'block');
            //Set event to prevent tooltip from closig when mouse is over the tooltip
            if (dt.mouseOverMode) {
                this.tooltip.mouseover(function() {
                    clearTimeout(dt.hideEvent);
                });
                this.tooltip.mouseout(function() {
                    clearTimeout(dt.hideEvent);
                    dt.hide();
                });
            }
        },

        hide: function() {
            var dt = this;
            this.hideEvent = setTimeout(function() {
                dt.tooltip.hide();
            }, 100);
            if (dt.options.modal) {
                dt.modalLayer.hide();
            }
        },

        toggle: function() {
            if (this.tooltip.is(":visible")) {
                this.hide();
            } else {
                this.show();
            }
        },

        addAnimation: function() {
            switch (this.options.animation) {
                case 'none':
                    break;
                case 'fadeIn':
                    this.tooltip.addClass('animated');
                    this.tooltip.addClass('fadeIn');
                    break;
                case 'flipIn':
                    this.tooltip.addClass('animated');
                    this.tooltip.addClass('flipIn');
                    break;
            }
        },

        setContent: function() {
            jQuery(this.bearer).css('cursor', 'pointer');
            //Get tooltip content
            if (this.options.content) {
                this.content = this.options.content;
            } else if (this.bearer.attr("data-tooltip")) {
                this.content = this.bearer.attr("data-tooltip");
            } else {
                // console.log("No content for tooltip: " + this.bearer.selector);
                return;
            }
            if (this.content.charAt(0) == '#') {
                jQuery(this.content).hide();
                this.content = jQuery(this.content).html();
                this.contentType = 'html';
            } else {
                this.contentType = 'text';
            }
            tooltipId = "";
            if (this.bearer.attr("id") != "") {
                tooltipId = "id='darktooltip-" + this.bearer.attr("id") + "'";
            }
            //Create modal layer
            this.modalLayer = jQuery("<ins class='darktooltip-modal-layer'></ins>");
            //Create tooltip container
            this.tooltip = jQuery("<ins " + tooltipId + " class = 'dark-tooltip " + this.options.theme + " " + this.options.size + " " +
                this.options.gravity + "'><div>" + this.content + "</div><div class = 'tip'></div></ins>");
            this.tip = this.tooltip.find(".tip");

            jQuery("body").append(this.modalLayer);
            jQuery("body").append(this.tooltip);

            //Adjust size for html tooltip
            if (this.contentType == 'html') {
                this.tooltip.css('max-width', 'none');
            }
            this.tooltip.css('opacity', this.options.opacity);
            this.addAnimation();
            if (this.options.confirm) {
                this.addConfirm();
            }
        },

        setPositions: function() {
            var leftPos = this.bearer.offset().left;
            var topPos = this.bearer.offset().top;

            switch (this.options.gravity) {
                case 'south':
                    leftPos += this.bearer.outerWidth() / 2 - this.tooltip.outerWidth() / 2;
                    topPos += -this.tooltip.outerHeight() - this.tip.outerHeight() / 2;
                    break;
                case 'west':
                    leftPos += this.bearer.outerWidth() + this.tip.outerWidth() / 2;
                    topPos += this.bearer.outerHeight() / 2 - (this.tooltip.outerHeight() / 2);
                    break;
                case 'north':
                    leftPos += this.bearer.outerWidth() / 2 - (this.tooltip.outerWidth() / 2);
                    topPos += this.bearer.outerHeight() + this.tip.outerHeight() / 2;
                    break;
                case 'east':
                    leftPos += -this.tooltip.outerWidth() - this.tip.outerWidth() / 2;
                    topPos += this.bearer.outerHeight() / 2 - this.tooltip.outerHeight() / 2;
                    break;
            }
            this.tooltip.css('left', leftPos);
            this.tooltip.css('top', topPos);
        },

        setEvents: function() {
            var dt = this;
            var delay = dt.options.hoverDelay;
            var setTimeoutConst;
            if (dt.mouseOverMode) {
                this.bearer.mouseover(function() {
                    //Timeout for hover mouse delay
                    setTimeoutConst = setTimeout(function() {
                        dt.setPositions();
                        dt.show();
                    }, delay);
                }).mouseout(function() {
                    clearTimeout(setTimeoutConst);
                    dt.hide();
                });
            } else if (this.options.trigger == "click" || this.options.trigger == "onclik") {
                this.tooltip.on("click", function(e) {
                    e.stopPropagation();
                });
                this.bearer.on("click", function(e) {
                    e.preventDefault();
                    dt.setPositions();
                    dt.toggle();
                    e.stopPropagation();
                });
                jQuery('html').on('click', function() {
                    dt.hide();
                })
            }
        },

        activate: function() {
            this.setContent();
            if (this.content) {
                this.setEvents();
            }
        },

        addConfirm: function() {
            this.tooltip.append("<ul class = 'confirm'><li class = 'darktooltip-yes'>" +
                this.options.yes + "</li><li class = 'darktooltip-no'>" + this.options.no + "</li></ul>");
            this.setConfirmEvents();
        },

        setConfirmEvents: function() {
            var dt = this;
            this.tooltip.find('li.darktooltip-yes').on("click", function(e) {
                dt.onYes();
                e.stopPropagation();
            });
            this.tooltip.find('li.darktooltip-no').on("click", function(e) {
                dt.onNo();
                e.stopPropagation();
            });
        },

        finalMessage: function() {
            if (this.options.finalMessage) {
                var dt = this;
                dt.tooltip.find('div:first').html(this.options.finalMessage);
                dt.tooltip.find('ul').remove();
                dt.setPositions();
                setTimeout(function() {
                    dt.hide();
                    dt.setContent();
                }, dt.options.finalMessageDuration);
            } else {
                this.hide();
            }
        },

        onYes: function() {
            this.options.onYes(this.bearer);
            this.finalMessage();
        },

        onNo: function() {
            this.options.onNo(this.bearer);
            this.hide();
        }
    }

    jQuery.fn.darkTooltip = function(options) {
        return this.each(function() {
            options = jQuery.extend({}, jQuery.fn.darkTooltip.defaults, options);
            var tooltip = new DarkTooltip(jQuery(this), options);
            tooltip.activate();
        });
    }

    jQuery.fn.darkTooltip.defaults = {
        animation: 'none',
        confirm: false,
        content: '',
        finalMessage: '',
        finalMessageDuration: 1000,
        gravity: 'south',
        hoverDelay: 0,
        modal: false,
        no: 'No',
        onNo: function() {},
        onYes: function() {},
        opacity: 0.9,
        size: 'medium',
        theme: 'dark',
        trigger: 'hover',
        yes: 'Yes',
    };

})(jQuery);