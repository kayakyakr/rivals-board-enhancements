(function(){
  var self, ForumEnhancements = function(){
    this.findViewed();
    this.regularAvatars();
    $('body').addClass('hide-sidebar').addClass('hide-last-post-avatar');
  }

  ForumEnhancements.prototype = {
    findViewed: function(){
      $('.discussionListItem .title a:first-child[href$=unread]').closest('.discussionListItem').addClass('enhancement-viewed');
    },
    regularAvatars: function(){
      $('img[src^="data/avatars/m"]').each(function(i){
        $(this).attr('src', $(this).attr('src').replace('data/avatars/m', 'data/avatars/l'));
      });
    }
  }

  self = new ForumEnhancements();
})();
