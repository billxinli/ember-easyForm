Ember.EasyForm.Label = Ember.EasyForm.BaseView.extend({
  tagName: 'label',
  attributeBindings: ['for'],
  //HACK Translation
  labelText: function () {
    if (typeof this.get('translation') != "undefined") {
      return Ember.I18n.t(this.get('translation'));
    } else {
      return this.get('text') || Ember.EasyForm.humanize(this.get('property'));
    }
  }.property('text', 'property', 'translation'),
  //HACK Translation
  init: function() {
    this._super();
    this.classNames.push(this.getWrapperConfig('labelClass'));
  },
  render: function(buffer) {
    buffer.push(Handlebars.Utils.escapeExpression(this.get('labelText')));
  },
  labelTextChanged: function() {
    this.rerender();
  }.observes('labelText')
});
