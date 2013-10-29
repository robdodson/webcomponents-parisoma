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

  demos.doAuthorStyles = true;
  demos.applyAuthorStyles = function applyAuthorStyles() {
    var section = document.querySelector('#demo-applyAuthorStyles');
    var output = section.querySelector('#isAuthorStyles');
    var el = section.querySelector('apply-styles');
    this.doAuthorStyles = !this.doAuthorStyles;
    output.textContent = this.doAuthorStyles;
    el.setAttribute('apply', this.doAuthorStyles);
  };
  demos.applyAuthorStyles();

  demos.doResetStyles = true;
  demos.resetStyleInheritance = function resetStyleInheritance() {
    var section = document.querySelector('#demo-resetStyleInheritance');
    var output = section.querySelector('#isStyleInheritance');
    var el = section.querySelector('reset-inheritance');
    this.doResetStyles = !this.doResetStyles;
    output.textContent = this.doResetStyles;
    el.setAttribute('reset', this.doResetStyles);
  };
  demos.resetStyleInheritance();

  // demos.customProps = function customProps() {
  //   var section = document.querySelector('#demo-custom-props');
  //   var template = section.querySelector('template');
  //   var host = section.querySelector('.widget');
  //   var root = host.createShadowRoot();
  //   root.appendChild(template.content.cloneNode(true));
  // };
  // demos.customProps();

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