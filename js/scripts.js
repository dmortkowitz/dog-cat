$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#user").children("li").first().click(function() {
  $(this).remove();
});
    $("ul#webpage").prepend("<li>Ruff ruff!</li>");
    $("ul#webpage").children("li").first().click(function() {
  $(this).remove();
  });
});

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Me-ow!</li>");
    $("ul#user").children("li").first().click(function() {
  $(this).remove();
});
    $("ul#webpage").prepend("<li>RrrrrrUFF!</li>");
  $("ul#webpage").children("li").first().click(function() {
  $(this).remove();
  });
});

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>But rather, MEOW MEOW MEOW!</li>");
    $("ul#user").children("li").first().click(function() {
  $(this).remove();
});
    $("ul#webpage").prepend("<li>Pardon me. But RUFF RUFF RUFF!~</li>");
  $("ul#webpage").children("li").first().click(function() {
  $(this).remove();
  });
});
});
