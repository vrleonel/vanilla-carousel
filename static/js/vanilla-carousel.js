var carousel = (function() {

  var config = { };

  config.slides       = 4;
  config.speed        = 1000;
  config.effect       = "linear";
  config.delay        = 0;
  config.transition   = 'margin-left ' + config.speed + 'ms' + ' ' + config.effect + ' ' + config.delay + 'ms';
  config.carousel     = ".carousel";
  config.carouselList = ".carousel .list";
  config.nextName     = "btn-next";
  config.prevName     = "btn-prev";
  config.btnList      = createMarkup.newElement("div", {"class" : "btn-list"});
  config.btnNext      = createMarkup.newElement("button", {"id" : config.nextName}, " > ");
  config.btnPrev      = createMarkup.newElement("button", {"id" : config.prevName}, " < ");


  function addTransition(){
    document.querySelector(config.carouselList).style.transition = config.transition;
  }

  function createButtons(){
    config.btnList.appendChild(config.btnNext);
    config.btnList.appendChild(config.btnPrev);

    document.querySelector(config.carousel).appendChild(config.btnList);

    goNext();
    goPrev();
  }

  function goNext() {
    console.log(document.getElementById(config.nextName));
    document.getElementById(config.nextName).addEventListener("click", function(){

      var pxVal = document.querySelector(config.carouselList).style.marginLeft.replace("px","");
      pxVal += config.itemWidth * 2;
      document.querySelector(config.carouselList).style.marginLeft = pxVal + "px";

    });

  }

  function goPrev(){
    document.getElementById(config.prevName).addEventListener("click", function(){
      var pxVal = document.querySelector(config.carouselList).style.marginLeft.replace("px","");
      pxVal -= config.itemWidth * 2;
      document.querySelector(config.carouselList).style.marginLeft = pxVal + "px";
    });
  }



  function init(){
    // Listen for the event.
    document.addEventListener('completeRecommendation', function (e) {
       setItemWidth();
       addTransition();
       createButtons();
     }, false);

  }


  function setItemWidth(){
    var list    = document.querySelector(".carousel .list"),
        item    = list.getElementsByClassName("item"),
        listW   = list.offsetWidth,
        itemW   = listW / config.slides,
        totalW  = itemW * item.length;

    config.listWidth = listW;
    config.itemWidth = itemW;

    for(var i=0; i < item.length; i++) {
      //console.log("item", key, item[key]);
      //item[key].style.width = itemW + "px";
      list.childNodes[i].style.width = itemW + "px";
    }

    list.style.width = totalW+"px";

  }
  return {
    init: init
  };

})();

carousel.init();
