var text = ["Hello", "你好", ""];
var elem = $("#welcome-lang");

var count = 0;
setInterval(change, 3000);

function change() {
    elem.fadeOut(function () {
        elem.html(text[count]);
        count++;
        if (count >= text.length) {
          count = 0;
        }
        elem.fadeIn();
  });
}
