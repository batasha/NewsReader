News.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function(rootEl, feeds){
    this.$rootEl = $(rootEl);
    this.feeds = feeds;
  },

  routes: {
    "": "index",
    "feeds/:id": "show",
    "entries/:id": "showEntry"
  },

  index: function() {
    var that = this;

    var feedsIndexView = new News.Views.FeedsIndexView({
      collection: that.feeds
    });

    that.$rootEl.html(feedsIndexView.render().$el);
  },

  show: function(id) {
    var that = this;

    var feed = that.feeds.get(id);
    that.entries = feed.get("entries");

    var feedView = new News.Views.FeedView({
      model: feed
    });

    that.$rootEl.html(feedView.render().$el);
  },

  showEntry: function(id) {
    var that = this;
    var entry = that.entries.get(id);

    var entryView = new News.Views.EntryView({
      model: entry
    });

    that.$rootEl.html(entryView.render().$el);
  }
});