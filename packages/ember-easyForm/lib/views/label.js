Ember.EasyForm.Label = Ember.EasyForm.BaseView.extend({
  tagName: 'label',
  attributeBindings: ['for'],
  classNameBindings: ['wrapperConfig.labelClass'],
  //HACK Translation
  labelText: function () {
    if (typeof this.get('translation') !== "undefined") {
      return Ember.I18n.t(this.get('translation'));
    } else {
      return this.get('text') || Ember.EasyForm.humanize(this.get('property'));
    }
  }.property('text', 'property', 'translation'),
  //HACK Translation
  templateName: Ember.computed.oneWay('wrapperConfig.labelTemplate')
});
