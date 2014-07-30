"use strict";

var Toolbelt = {
    megaParse: function(str) {
        var obj = JSON.parse(str);
        $('.main').empty();
        var ob2 = new items(obj);
        ob2.display();
        $('a[data-featherlight]').featherlight();
    },
    addItem : function() {
        var newObj = {};
        $("#addDoge input[type=text]").each(function() {
            var id = $(this).attr('id');
            var val = $(this).val();
            newObj[id] = val;
        });
        var ob2 = new items([newObj]);
        ob2.display();
        $('a[data-featherlight]').featherlight();
        $.post("http://jamesfuthey.com/spreadsheets/index.php", { "data": JSON.stringify(newObj) });
        console.log(JSON.stringify(newObj));
    },
    clearInputs : function() {
        $('#addDoge')[0].reset();
    }
};