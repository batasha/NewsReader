News.Views.FeedView = Backbone.View.extend({
  render: function() {
    var that = this;

    var renderedContent = JST["feeds/detail"]({
      entries: that.model.get("entries")
    });

    that.$el.html(renderedContent);
    return that;
  },
});