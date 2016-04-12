var createMarkup = (function() {

  function getData(data) {
    var el = document.getElementById("carousel");
    createReference(data);
    createRecommendation(data);
  }

  function createItem(obj, selector){
    var reference = selector;
    var item      = obj;
    var container = newElement("li", {"class" :"item" });
    var img       = newElement("img", {"src" : "http:" + item.imageName });
    var title     = newElement("span", {"class" : "text"}, item.name );
    var price     = newElement("span", {"class" : "old-price"}, item.price);
    var oldPrice  = newElement("span", {"class" : "price"}, "De: " + item.oldPrice);
    var payment   = newElement("span", {"class" : "payment"}, item.productInfo.paymentConditions);

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(price);
    container.appendChild(oldPrice);
    container.appendChild(payment);
    reference.appendChild(container);
  }

  function createReference(obj){
    var list = newElement("ul", {"class" : "list"}),
        selector = document.querySelector(".reference");

    selector.appendChild(list);
    createItem(obj.reference.item, selector.querySelector(".list") );
  }

  function createRecommendation(obj){
    var recommend = obj.recommendation,
        list = newElement("ul", {"class" : "list"}),
        selector = document.querySelector(".recommendation .carousel"),
        event = new Event("completeRecommendation");

    selector.appendChild(list);
    var i = 1;
    for(var prop in recommend) {
      createItem(recommend[prop], document.querySelector(".recommendation .list")  );
      //showData(recommend[prop]);

      if(recommend.length === i++){
        console.log("Ok", recommend.length);

        // Dispatch the event.
        document.dispatchEvent(event);


      }
    }

  }

  HTMLElement.prototype.text = function(text) {
    this.innerHTML = text;
  }

  function showData(obj){
    console.log(obj);
    for (var prop in obj) {
      console.log("obj." + prop + " = " + obj[prop]);
    }
    console.log("===================\n");
  }

  function newElement(element, attr, text) {
    var el = document.createElement(element);
    for (var prop in attr) {
      el.setAttribute(prop, attr[prop]);
    }

    if(text !== undefined){
      el.text(text);
    }
    return el;
  }

  function documentReady(){
    var script = document.createElement('script');
    script.src = "http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X";
    document.getElementsByTagName('body')[0].appendChild(script);
    // or document.head.appendChild(script) in modern browsers

    // document.addEventListener("DOMContentLoaded", function(event) {
    //
    // });

  }


  function init() {
    documentReady();
  }

  return {
    getData : getData,
    init : init
  };

})();

createMarkup.init();

function X(data){
  createMarkup.getData(data.data);
}
