"use strict";

function items(props) {
  for(var key in props) {
     this[key] = props[key];
  }
  this.display = function() {
    for(var key in this) {
        if(this[key].image && this[key].name) {
            var buildCard = Handlebars.compile($('#template').html());
            $('.main').append(buildCard(this[key]));
        }
    }
  };
}