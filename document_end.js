(function(){
  var self, DocumentEnd = function(){
    chrome.storage.sync.get({
      highlightViewedThreads: true,
      replaceAvatars: true
    }, function(opts){
      if(opts.highlightViewedThreads){ self.findViewed(); }
      if(opts.replaceAvatars){ self.regularAvatars(); }
    });

  }

  DocumentEnd.prototype = {
    findViewed: function(){
      $('.discussionListItem .title a:first-child[href$=unread]').closest('.discussionListItem').addClass('enhancement-viewed');
    },
    regularAvatars: function(){
      $('img[src^="data/avatars/m"]').each(function(i){
        console.log('replacing ' + $(this).attr('src'));
        $(this).attr('src', $(this).attr('src').replace('data/avatars/m', 'data/avatars/l'));
      });
    }
  }

  self = new DocumentEnd();
})();
