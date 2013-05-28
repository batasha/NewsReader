News.Views.FeedsIndexView = Backbone.View.extend({
  render: function () {
    var that = this;

    var renderedContent = JST["feeds/index"]({
      feeds: that.collection
    });

    that.$el.html(renderedContent);
    return that;
  }
});