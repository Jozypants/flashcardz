$(document).ready(function() {
  $("#javascript").click(function() {
    $("#javaAnswer").fadeToggle(1000);
    $("#javascript").fadeToggle(1000);
  });

  $("#javaAnswer").click(function() {
    $("#javaAnswer").fadeToggle(1000);
    $("#javascript").fadeToggle(1000);
  });

  $("#operators").click(function() {
    $("#operatorAnswer").fadeToggle(200);
    $("#operators").fadeToggle(200);
  });

  $("#operatorAnswer").click(function() {
    $("#operators").fadeToggle(200);
    $("#operatorAnswer").fadeToggle(200);
  });

  $("#variables").click(function() {
    $("#variableAnswer").fadeToggle(200);
    $("#variables").fadeToggle(200);
  });

  $("#variableAnswer").click(function() {
    $("#variables").fadeToggle(200);
    $("#variableAnswer").fadeToggle(200);
  });

  $("#functions").click(function() {
    $("#functionAnswer").fadeToggle(200);
    $("#functions").fadeToggle(200);
  });

  $("#functionAnswer").click(function() {
    $("#functions").fadeToggle(200);
    $("#functionAnswer").fadeToggle(200);
  });

  $("#methods").click(function() {
    $("#methodAnswer").fadeToggle(200);
    $("#methods").fadeToggle(200);
  });

  $("#methodAnswer").click(function() {
    $("#methods").fadeToggle(200);
    $("#methodAnswer").fadeToggle(200);
  });
});
