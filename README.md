Inspired by http://zach.lysobey.com/files/demo2 FBAlbum

Usage
=====
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="fbalbums.js"></script>
    <script src="http://zach.lysobey.com/files/demo2/fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
    <script src="http://zach.lysobey.com/files/demo2/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
    <link rel="stylesheet" type="text/css" href="http://zach.lysobey.com/files/demo2/fancybox/jquery.fancybox-1.3.4.css" media="screen" />

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
