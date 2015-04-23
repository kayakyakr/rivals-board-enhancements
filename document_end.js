(function(){
  var self, DocumentEnd = function(){
    chrome.storage.sync.get({
      showSidebarToggleButton: true,
      highlightViewedThreads: true,
      replaceAvatars: true
    }, function(opts){
      if(opts.highlightViewedThreads){ self.findViewed(); }
      if(opts.replaceAvatars){ self.regularAvatars(); }
      if(opts.showSidebarToggleButton){ self.appendSidebarToggleButton(); }
    });

    $(document).on('click', '.enhancement-toggle-sidebar', this.toggleSidebar);
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
    },
    appendSidebarToggleButton: function(){
      $('.pageNavLinkGroup').first().prepend('<div class="linkGroup"><a href="#" class="enhancement-toggle-sidebar callToAction"><span>Toggle Sidebar</span></a></div>');
    },
    toggleSidebar: function(e){
      e.preventDefault();
      chrome.storage.sync.get({
        hideSidebar: true
      }, function(opts){
        var newVal = !opts.hideSidebar;
        newVal ? $('html').addClass('enhancement-hide-sidebar') : $('html').removeClass('enhancement-hide-sidebar');
        chrome.storage.sync.set({hideSidebar: newVal});
      });
    }
  }

  self = new DocumentEnd();
})();
