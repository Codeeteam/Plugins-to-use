(function ($, window, document) {
    "use strict";

    window.SCRIPT = window.SCRIPT || {
        init: function () {
            this.maps();
        },

        maps: function () {
            var $maps = $('.js__map');

            var defaults = {
                div: '.js__map',
                lat: -12.043333,
                lng: -77.028333,
                scrollwheel: false,
                scaleControl: false,
            };

            $maps.each(function () {
                var $this = $(this),
                    metaData = $this.data('options'),
                    optionsMap = $.extend({}, defaults, metaData),
                    options = $.extend({}, defaults, metaData),
                    map, marker;

                optionsMap.div = $this[0];

                map = new GMaps(optionsMap);

                map.addMarker({
                    lat: options.lat,
                    lng: options.lng
                });
            });
        }
    };

}(jQuery, window, document));