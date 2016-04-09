var createMarkup = (function() {

  function getData(data) {
    console.log(data.widget);
    var el = document.getElementById("carousel");
    //el.innerHTML = data.widget.size;

    var obj = data;

    //showData(obj.widget);
    showData(obj.reference);
    createReference(obj.reference);
    //showData(obj.recommendation);
  }

  function createReference(obj){
    var reference = document.querySelector(".reference");
    var item      = obj.item;
    var img       = newElement("img", {"src" : "http:" + item.imageName });
    var title     = newElement("span", {"class" : "text"}, item.name );
    var price     = newElement("span", {"class" : "price"}, item.price);
    var oldPrice  = newElement("span", {"class" : "price"}, item.oldPrice)

    title.text(item.name);

    reference.appendChild(img);
    reference.appendChild(title);

    //console.log("NAME",title,  item.name);

    reference.appendChild(price);
    reference.appendChild(oldPrice);

    //reference.appendChild(newElement("span", {"class" : "text"}).createTextNode = item.name);

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
    el.text(text);
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
