Inspired by http://zach.lysobey.com/files/demo2 FBAlbum

Usage
=====

    var albumsIDS = ['XXX', 'YYY'];
    
    // Where XXX and YYY are album IDS from facebook album URLs, for example:
    // http://www.facebook.com/media/set/?set=a.XXX.9014.100000166387389&type=3
    
    $(document).ready(function() { 

        for (var i in albumsIDS) {
            if ( !isNaN(albumsIDS[i]) ) {

             var last = $('#FBalbums').fbAlbum({
  			'albumID':albumsIDS[i],
                                'callback':	function(){	
					$(".album a").fancybox(); 
				}
			});
        }
       } 
    });
