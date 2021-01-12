jQuery( document ).ready(function($) {

    /*
    *    Handle WCB Image Uploading
    */
    jQuery('.wcb_upload_file_button').on('click', function( event ){
    
        event.preventDefault();

        // If the media frame already exists, reopen it.
        if ( file_frame ) {
            file_frame.open();
            return;
        }
        
        // Create the media frame.
        file_frame = wp.media.frames.file_frame = wp.media({
            title: jQuery( this ).data( 'uploader_title' ),
            button: {
                text: jQuery( this ).data( 'uploader_button_text' ),
            },
            multiple: false
        });
        
        // When an file is selected, run a callback.
        file_frame.on( 'select', function() {
        
            attachment = file_frame.state().get('selection').first().toJSON();

            // Update front end
            jQuery('.banner_url_label').text( attachment.filename );
            jQuery('.wcb_image').attr( 'value', attachment.id );
            jQuery('.cat_banner_img_admin').attr('src', attachment.url );
        });
        
        // Open the Modal
        file_frame.open();
    });

    /*
    *   Remove file when selected
    */
    jQuery('.wcb_remove_file').live('click', function( event ){
    console.log( "Remove File");
        jQuery('.banner_url_label').text( '' );
        jQuery('.wcb_image').attr( 'value', '' );
        jQuery('.cat_banner_img_admin').attr('src', '' );
    });
    
});
