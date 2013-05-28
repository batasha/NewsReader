News.Views.FeedView = Backbone.View.extend({
  events:{
    "click button.refresh": "refresh"
  },

  render: function() {
    var that = this;

    var renderedContent = JST["feeds/detail"]({
      entries: that.model.get("entries")
    });

    that.$el.html(renderedContent);
    return that;
  },

  refresh: function(){
    console.log("Fetching");
    var that = this;

    that.model.fetch().done(that.render.bind(that));
  }
});