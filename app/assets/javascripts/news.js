window.News = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function (rootEl, feedsData) {
    var feeds = new News.Collections.Feeds(feedsData);

    new News.Routers.FeedsRouter(rootEl, feeds);
    Backbone.history.start();
  }
};