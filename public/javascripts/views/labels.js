var LabelPopup = Backbone.View.extend({
  template: App.templates.labels,
  events: {
    "click i.icon-cancel": "closeModal",    
    "click span.card_label": "toggleLabel",
    "click .card_labels_popup": "preventClose"
  },
  el: "div",
  closeModal: function() {
    this.undelegateEvents();  
    $('.pop-over').attr('class', 'pop-over');
  },
  preventClose: function() {
    return false;
  },
  render: function() {
    $('.pop-over').attr('class', 'pop-over is-shown menu-popover label-popover');
    $('.pop-over').html(this.template(this.model.toJSON()));
  },
  toggleLabel: function(e) {
    e.preventDefault();
    e.stopPropagation();
    debugger;
    var labelColor = $(e.target).data("color");
    this.model.toggleLabel(labelColor);
    return false;
  },
  initialize: function(options) {
    this.render();
  },  
});