window.News = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function ($feedSidebar, $entrySidebar, $entryContent, feedsData) {
    var feeds = new News.Collections.Feeds(feedsData);

    new News.Routers.FeedsRouter($feedSidebar, $entrySidebar, $entryContent, feeds);
    Backbone.history.start();
  }
};