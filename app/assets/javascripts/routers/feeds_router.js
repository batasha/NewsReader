News.Routers.FeedsRouter = Backbone.Router.extend({
  initialize: function($feedSidebar, $entrySidebar, $entryContent, feeds){
    this.$feedSidebar = $feedSidebar;
    this.$entrySidebar = $entrySidebar;
    this.$entryContent = $entryContent;
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

    that.$feedSidebar.html(feedsIndexView.render().$el);
  },

  show: function(id) {
    var that = this;

    var feed = that.feeds.get(id);
    that.entries = feed.get("entries");

    var feedView = new News.Views.FeedView({
      model: feed
    });

    that.$entrySidebar.html(feedView.render().$el);
  },

  showEntry: function(id) {
    var that = this;
    var entry = that.entries.get(id);

    var entryView = new News.Views.EntryView({
      model: entry
    });

    that.$entryContent.html(entryView.render().$el);
  }
});