News.Views.EntryView = Backbone.View.extend({
  render: function() {
    var that = this;

    var renderedContent = JST["entries/detail"]({
      entry: that.model
    });

    that.$el.html(renderedContent);
    return that;
  },
});