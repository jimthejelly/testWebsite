var text = ["Hello", "你好", ""];
var elem = $("#welcome-lang");

var count = 0;
setInterval(change, 3000);

function change() {
    elem.fadeOut(function () {
        elem.html(text[counter]);
        counter++;
        if (counter >= text.length) {
          counter = 0;
        }
        elem.fadeIn();
  });
}
