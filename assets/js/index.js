function mbMenu() {
    var x = document.getElementById("mb-links");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}
function contMenu(){
    var y = document.getElementById("mb-cont-menu");
    if (y.style.display === "flex") {
      y.style.display = "none";
    } else {
      y.style.display = "flex";
    }
}
$('.nav-container-navigation a').click(function () {
    $(this).siblings('a').removeClass('active-nav');
    $(this).addClass('active-nav');
}); 
$('.nav-display div.s').hide();
/*$('.nav-display div.s:first').show(); */
$('.nav-container-navigation a:first').addClass('active-nav');

$('.nav-container-navigation a').on('click', function(event){
    event.preventDefault();
    $('.nav-display div.s').hide();
    $($(this).attr('href')).show();
})