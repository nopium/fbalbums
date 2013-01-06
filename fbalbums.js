(function($){
  $.fn.fbAlbum = function(options) {
    var $this = this;
    var settings = {
      'albumID' : 10150302289698306,
      'limit' : 100,
	  'ulClass' : 'album',
	  'callback' : '',
	  'title' : true
    };
    
    if(options){$.extend( settings, options );}
  
    var graphAlbum = "https://graph.facebook.com/" + settings.albumID;// + "&callback=?";
    $.getJSON(graphAlbum, function(albumData) {

    var graph = "https://graph.facebook.com/"
        + settings.albumID
        + "/photos?limit=" + settings.limit
        + "&callback=?";  
    $.getJSON(graph, function(data) {
        var albumItem = [];
        for(var key in data){
//	    console.log(data[key]);
            for(var key2 in data[key]){
                val2=data[key][key2];
                if(typeof(val2.source)!="undefined"){
					var title ="";
					if ( settings.title && val2.name ){
						title = val2.name
					}
                    albumItem.push(
                        '<li><a class="imageLink" rel="group" href="' 
                        + val2.source 
                        + '"><img src="' 
                        + val2.picture
                        + '" title="'
						+ title
						+ '"/></a></li>'
                    );
                };
            }; 
        }; 
	$('<div style="clear:both;" /><h2 style="text-align: center;clear:both;">'+albumData.name+'</h2>').appendTo($this);       
        $('<ul />', {
            'class': settings.ulClass,
            html: albumItem.join('')
        }).appendTo($this); 
        if(settings.callback){settings.callback()};
    });
    });
  
    return this;
  };
})(jQuery);
