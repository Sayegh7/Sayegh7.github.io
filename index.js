
$(function() {

    // Start ScrollMagic code
function is_touch_device() {
  return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
};

if (!is_touch_device()) {
//First create the controller
var scrollMagicController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .30} });

//then the animation
var portLinks = $('.portfolio-link')
var aboutDivs = $('#about .row')
var contact = $('form div')
var profilePic = $('#profile')
var name = $('#name')
var skills = $('#skill')
var tween = TweenMax.staggerFrom(portLinks, 1, {x:'-=100px', autoAlpha: 0, ease: SlowMo.easeInOut}, 0.5);
var aboutTween = TweenMax.staggerFrom(aboutDivs, 1, {y:'-=100', autoAlpha: 0, ease: SlowMo.easeInOut}, 0.5);
var contactTween = TweenMax.staggerFrom(contact, 1, {y:'-=100', autoAlpha: 0, ease: SlowMo.easeInOut}, 0.5);
profilePic.click(function(){
	TweenMax.to('#propic', 1, {rotation: '+=360'});
})
TweenMax.from(name, 1, {autoAlpha: 0,x:'-=500px', ease: Quad.easeInOut});
TweenMax.from(skills, 1, {autoAlpha: 0,x:'-=500px', ease: Quad.easeInOut});

//then the scene which triggers the animation
var scene = new ScrollMagic.Scene({
	triggerElement: "#portfolio",
	duration: 400,
	offset: 100
}).setTween(tween)
.setPin('#portfolio')
.addTo(scrollMagicController)



var scene2 = new ScrollMagic.Scene({
	triggerElement: "#about",
	duration: 400,
	offset: 100
}).setTween(aboutTween)
.setPin('#about')
.addTo(scrollMagicController)

var scene3 = new ScrollMagic.Scene({
	triggerElement: "#contact",
	duration: 300,
	offset: 100
}).setTween(contactTween)
.setPin('#contact')
.addTo(scrollMagicController)

}
});
