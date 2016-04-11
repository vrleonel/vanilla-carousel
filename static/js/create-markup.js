var createMarkup = (function() {

  function getData(data) {
    console.log(data.widget);
    var el = document.getElementById("carousel");
    //el.innerHTML = data.widget.size;

    //showData(obj.widget);
    createReference(data);
    createRecommendation(data);
    //showData(obj.recommendation);
  }

  function createItem(obj, selector){
    var reference = selector;
    var item      = obj;
    var container = newElement("li", {"class" :"item" });
    var img       = newElement("img", {"src" : "http:" + item.imageName });
    var title     = newElement("span", {"class" : "text"}, item.name );
    var price     = newElement("span", {"class" : "price"}, item.price);
    var oldPrice  = newElement("span", {"class" : "price"}, "De: " + item.oldPrice);
    var payment   = newElement("span", {"class" : "payment"}, item.productInfo.paymentConditions);



    //reference.querySelector(".item") = container;
    //img + title + price + oldPrice + payment
    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(price);
    container.appendChild(oldPrice);
    container.appendChild(payment);


    reference.appendChild(container);
    // reference.appendChild(img);
    // reference.appendChild(title);
    // reference.appendChild(price);
    // reference.appendChild(oldPrice);
    // reference.appendChild(payment);

    //reference.appendChild(newElement("span", {"class" : "text"}).createTextNode = item.name);

  }

  function createReference(obj){
    createItem(obj.reference.item, document.querySelector(".reference") );
  }

  function createRecommendation(obj){
    var recommend = obj.recommendation,
        list = newElement("ul", {"class" : "list"}),
        selector = document.querySelector(".recommendation");


      selector.appendChild(list);
    for(var prop in recommend) {
      createItem(recommend[prop], document.querySelector(".recommendation .list")  );
      showData(recommend[prop]);
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
    document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");
      var script = document.createElement('script');
      script.src = "http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X";
      document.getElementsByTagName('body')[0].appendChild(script);
      // or document.head.appendChild(script) in modern browsers
    });

  }

  documentReady();

  return {
    getData : getData,
    newElement
  };

})();

function X(data){
  createMarkup.getData(data.data);
}
