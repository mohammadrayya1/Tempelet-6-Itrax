

let myslider=$('.bxslider');
let myheader=$('.header');
let mylink=$('.links li a');

$(function()
{
    'use strict';
// adjast Header Height

myheader.height($(window).height());


$(window).resize(function()
{
    myheader.height($(window).height()); 
    myslider.each(function()
{

    $(this).css('paddingTop',($(window).height() - $('.bxslider li ').height())/2);
});  
})



//Link Add Active1
mylink.click(function()
{
    $(this).parent().addClass('active').siblings().removeClass('active');
});



// adjust Bxslider list center

myslider.each(function()
{

    $(this).css('paddingTop',($(window).height() - $('.bxslider li ').height())/2);
});

//Trigger the box slider

myslider.bxSlider(
{
pager:false

});

//smooth top Div




$('.links li a').click(function()
{
   
    $('html, body').animate({

     scrollTop: $('#'+ $(this).data('value')).offset().top -18

    },1000);
    
    console.log($(this).data('value'));
});


// our auto slider code

(function autoSlider()
{

  
    $('.slider .active').each(function()
    {

        if(!$(this).is(':last-child'))
        {
            $(this).delay(3000).fadeOut(1000,function()
            {
  
              $(this).removeClass('active').next().addClass('active').fadeIn();
              autoSlider();
            });
        }
        else
        {
            $(this).delay(3000).fadeOut(1000,function()
            {
                $(this).removeClass('active');

             $('.slider div').eq(0).addClass('active').fadeIn();
             autoSlider();
            });
        }
    });
}());


$('.ourproject ul li').click(function()
{

    $(this).addClass('selected').siblings().removeClass('selected');
});
//Triger 



});
