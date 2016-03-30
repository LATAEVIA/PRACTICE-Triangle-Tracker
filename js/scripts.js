$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var aye = parseInt($("input#aye").val());
    var bee = parseInt($("input#bee").val());
    var see = parseInt($("input#see").val());

    if (aye === bee && bee ===see) {
    $("#angle").empty().append("an equilateral triangle");
    $("#quote").show();
    }
    if (aye === bee && bee !== see && aye !== see) {
    $("#angle").empty().append("an isosceles triangle");
    $("#quote").show();
    }
    if (aye === see && bee !== see && aye !== bee) {
    $("#angle").empty().append("an isosceles triangle");
    $("#quote").show();
    }
    if (see === bee && aye !== see && aye !== bee) {
    $("#angle").empty().append("an isosceles triangle");
    $("#quote").show();
    }
    if (aye !== bee && bee !==see) {
    $("#angle").empty().append("a scalene triangle");
    $("#quote").show();
    }
    if (aye + bee <= see) {
    $("#angle").empty().append("something, but it isn't a triangle. Try it again :)");
    $("#quote").show();
    }
    if (aye + see <= bee) {
    $("#angle").empty().append("something, but it isn't a triangle. Try it again :)");
    $("#quote").show();
    }
    if (see + bee <= aye) {
    $("#angle").empty().append("something, but it isn't a triangle. Try it again :)");
    $("#quote").show();
    }
    event.preventDefault();
  });
});
