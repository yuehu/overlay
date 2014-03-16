var events = require('event');

function Overlay() {
  this.bg = create('div', 'overlay-bg');
  this.el = create('div', 'overlay');

  var me = this;
  events.bind(this.bg, 'click', function() {
    me.hide();
  });
}
Overlay.prototype.show = function() {
  if (this._inserted) {
    this.bg.style.display = 'block';
    this.el.style.display = 'block';
  } else {
    document.body.appendChild(this.el);
    document.body.appendChild(this.bg);
    this._inserted = true;
  }
};
Overlay.prototype.hide = function() {
  this.bg.style.display = 'none';
  this.el.style.display = 'none';
};

module.exports = Overlay;


function create(tag, className) {
  var el = document.createElement(tag);
  el.className = className;
}
