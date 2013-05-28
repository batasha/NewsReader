News.Models.Feed = Backbone.RelationalModel.extend({
  urlRoot: "/feeds",

  relations: [{
    type: Backbone.HasMany,
    key: "entries",
    relatedModel: "News.Models.Entry",
    collectionType: "News.Collections.FeedEntries",

    collectionOptions: function(feed) {
      return {feedId: feed.id};
    },

    includeInJSON: false,
    reverseRelation: {
      key: "feed_id",
      includeInJSON: "id"
    }
  }]
});
