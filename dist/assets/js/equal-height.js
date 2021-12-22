$(document).ready(function(){
    $(window).on('resize load', function(){

        var heights = {
            'full' : {}
        };

        $("[data-equal]").css('height', 'auto');
        $("[class*='data-equal-']").css('height', 'auto');

        $("[data-equal], [class*='data-equal-']").each(function(){

            var data_type = $(this).is("[class*='data-equal-']") ? 'class' : 'data';

            if( data_type == 'data' ){
                var $elem = $(this).attr('data-equal');
                var size = $(this).attr('data-equal-width');
            } else{
                var classes = this.className.split(/\s+/);

                for( var i = 0; i < classes.length; i++ ){
                    
                    var class_name = classes[ i ];

                    if( class_name.indexOf( 'data-equal-') > -1 ){
                        $elem = class_name.replace('data-equal-', '');
                    }
                    if( class_name.indexOf( 'data-equal-width-') > -1 ){
                        size = class_name.replace('data-equal-width-', '');
                    }
                }
            }

            if( size == undefined )
                size = 'full';

            if( heights[ size ] == undefined ){
                heights[ size ] = {}
            }

            if( heights[ size ][ $elem ] == undefined ){
                heights[ size ][ $elem ] = 0;
            }

            var this_height = jQuery(this).outerHeight();

            if( this_height > heights[ size ][ $elem ] ){
                heights[ size ][ $elem ] = this_height;
            }
        });

        var $window_width = $(window).outerWidth();

        for( var breakpoint in heights){
            var element_data_value = heights[ breakpoint ];

            for( var element in element_data_value ){

                if( $window_width > parseInt(breakpoint) || breakpoint == 'full' ){
                    $("[data-equal='"+element+"'], [class*='data-equal-"+element+"']").css('height', element_data_value[ element ]);
                }
            }
        }
    });
});