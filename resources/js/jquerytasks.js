// let element = $('#jqueryTask1');
// let element = document.getElementById('jqueryTask1');
// let element = document.querySelector('#jqueryTask1');

// $(this).hide();
/*$(function () {
    let element = $('#jqueryTask1');
    element.hide();

    let b1 = $('body > button:first-of-type');
    let b2 = $('body > button:last-of-type');

    b1.click(function () {
        element.slideToggle(1000);
    });*/


/*    b1.click(function () {
        element.show();
    });*/
/*    b2.click(function () {
        element.hide();
    });
});*/

/*

Vanilla method

elements = document.querySelector('#jqueryTask1')
element = document.querySelector('body > button:last-of-type')
element.addEventListener('click', function(){

    elements.style.display = 'none'
})

*/


$(function () {
    let tabs = $('.tabai > a');
    let sheets = $('.sheets > div');

    tabs.on('click', function(e){
        e.preventDefault();
        changeClass('active', this);
        changeTabs($(this).attr('href'));
    });

    function changeClass(className, el){
        tabs.removeClass(className);
        $(el).addClass(className);
    }

    function changeTabs(id){
        sheets.toggle(false);
        $(id).toggle(true);
    }

});





