var events = require('event');
var classes = require('classes');

var body = document.body;
if (!body._class) {
  body._class = classes(body);
}

function Overlay() {
  var el = create('div', 'overlay');
  el._class = classes(el);

  var close = create('button', 'overlay-close');
  close.innerHTML = '×';
  el.appendChild(close);

  var container = create('div', 'overlay-container');
  el.appendChild(container);

  this.el = el;
  this.container = container;

  var me = this;
  events.bind(close, 'click', function() {
    me.hide();
  });
}
Overlay.prototype.show = function() {
  body._class.add('overlay-active');
  if (!this._inserted) {
    body.appendChild(this.el);
    this._inserted = true;
  }
};
Overlay.prototype.hide = function() {
  body._class.remove('overlay-active');
};
Overlay.prototype.remove = function() {
  if (this.el.parentNode) {
    this.el.parentNode.removeChild(this.el);
    this._inserted = false;
  }
};
Overlay.prototype.fill = function(el) {
  this.container.appendChild(el);
};

module.exports = Overlay;


function create(tag, className) {
  var el = document.createElement(tag);
  el.className = className;
  return el;
}
