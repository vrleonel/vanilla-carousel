var carousel = (function() {
  var config = {
    "quantidy" : 4
  };

  function init(){

    // Listen for the event.
    document.addEventListener('completeRecommendation', function (e) {
       console.log("event", e);
       setItemWidth();
     }, false);

  }


  function setItemWidth(){
    var list    = document.querySelector(".carousel .list"),
        item    = list.getElementsByClassName("item"),
        listW   = list.offsetWidth,
        itemW   = listW / config.quantidy,
        totalW  = itemW * item.length;


    console.log("Tamanhos ",item, listW, itemW, totalW);
    //item.style.width = itemW + "px";

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
