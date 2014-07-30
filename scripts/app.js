"use strict";
var key = '1TOq_rOneGzxGXdFEEbu7_n9P9-7Q-ZZbBQIqsvl3Bpk';
var url = 'https://spreadsheets.google.com/feeds/list/'+key+'/od6/public/values?alt=json-in-script';

function parseGoogleData(data) {
  var Array = [];
  $.each(data, function() {
    var temp = {};
    $.each(this, function(key, val) {
      if(key.match(/gsx\$/)) {
        var prop = key.slice(4);
        var value = val.$t;
        temp[prop] = value;
      }
    });
    
    Array.push(temp);
  });
  return Array;
}

/* We need a distraction while the ajax is loading */
new WOW().init();

$.ajax({
  url : url,
  type : 'GET',
  dataType : 'jsonp',
  success : function(data) {
    var dataArray = parseGoogleData(data.feed.entry);
    var string = JSON.stringify(dataArray);
    Toolbelt.megaParse(string);
  },
  error : function(err) {
    console.log(err);
  }
});

$('#addBtn').click(function() {
    $('.overlay').show();
});

$('#cancel').click(function() {
    Toolbelt.clearInputs();
    $('.overlay').fadeOut();
    return false;
});

$('#submit').click(function() {
    Toolbelt.addItem();
    Toolbelt.clearInputs();
    $('.overlay').hide();
    return false;
});

$(document).ready(function() {
    new WOW().init();
});
