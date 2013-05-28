News.Collections.Feeds = Backbone.Collection.extend({
  url: function() {
    return "/feeds";
  },

  model: News.Models.Feed
});