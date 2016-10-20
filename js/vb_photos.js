(function ($) {
    $(function () {
        jQuery('#a-link').remove();

        jQuery('<img alt="" />').attr('id', 'loader').attr('src', 'ajax-loader.gif').appendTo('#image-container');

        $.getJSON('https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=be7d75745081bfaa0b235f6646de7c8d&photoset_id=72157674075306322&user_id=119052498%40N03&format=json&nojsoncallback=1',
        function(data){
            $.each(data.photoset.photo, function(i, item){
                var photoURL = 'https://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg'
                var imgCont = '<div class="image-container"><img class="materialboxed" width="25%" src="' + photoURL + '"</div>'
                $(imgCont.appendTo('#fluid-grid'));
            })
        });
    });
})(jQuery);