(function (window, document, undefined) {

  util = {};

  util.emptyNode = function emptyNode(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  };

  window.util = util;

}(window, document));


(function (util) {

  // <chart-pie> demo
  var showPie = function showPie(e) {
    if (Boolean(e.fragment.getAttribute('data-pie'))) {
      var slide = Reveal.getCurrentSlide();
      var el = '<chart-pie values="[30, 50, 100]"></chart-pie>';
      slide.querySelector('div[data-pie]').innerHTML = el;
      Reveal.removeEventListener('fragmentshown', showPie);
    }
  };

  Reveal.addEventListener('fragmentshown', showPie);


  var demos = {};

  demos.template = function template() {
    var section = Reveal.getCurrentSlide();
    var template = section.querySelector('#my-widget');
    template.content.querySelector('img').src = './img/corgi.gif';
    section.appendChild(template.content.cloneNode(true));
  };

  window.demos = demos;

}(window.util));


(function () {

  document.addEventListener('keydown', function(e) {
    // Kill keyboard events on slides with text input
    if (e.target.getAttribute('data-disable-events')) {
      e.stopImmediatePropagation();
      return;
    }

    // Make all fragments visible
    if (e.keyCode === 74) { // j key
      var fragments = Reveal.getCurrentSlide().querySelectorAll('.fragment');
      Array.prototype.forEach.call(fragments, function(fragment) {
        fragment.classList.toggle('force-focus');
      });
    }

  }, true);

}());