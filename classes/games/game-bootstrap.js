$(function() {

  // Start our output with the initial information
  $("#output").append("Welcome to game-tron 5000.");
  $("#output").append("<hr />");
  $("#output").append(start());
  
  // Use jQuery to add a response for when someone submits the form
  $("#input-form").submit(function() {

    // Use jQuery to look up the value entered
    var input = $("#input-text").val();

    // Send it to our custom handler
    var result = handleInput(input);
    
    // Append the output
    $("#output").append("<hr />");
    $("#output").append(result);

    // Clear out the old value
    $("#input-text").val("");

    // Scroll our output to the bottom
    $("#output").scrollTop($("#output").height());
    return false;
  });
});