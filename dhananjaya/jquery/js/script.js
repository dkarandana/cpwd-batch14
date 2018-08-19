
/***
 * @see https://api.jquery.com/ready/
 */

jQuery( document ).ready( function(){

    var $seoH1 = jQuery('h1');
    $seoH1.css('color','red');

    $seoH1.click(function(){
        $seoH1.text("SEO h1 Updated")
    });

    var $box = $('#box');

        /* $box
            .css('height', 200 )
            .css('width', 200 )
            .css('backgroundColor','gold'); */

        $box.css({
            height:200,
            width:250,
            backgroundColor:'pink'
        }).text('Hello World!!');







});