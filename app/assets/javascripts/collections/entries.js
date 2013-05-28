News.Collections.FeedEntries = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.feedId = options.feedId;
  },

  url: function() {
    return "/feeds/" + this.feedId + "/entries";
  }
});