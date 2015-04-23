(function(){
  var self, DocumentStart = function(){
    this.loadOptions();
  }

  DocumentStart.prototype = {
    loadOptions: function(){
      chrome.storage.sync.get({
        hideSidebar: true,
        hideLastPostAvatar: true,
        striped: true,
        compactForum: true,
        collapseUserInfo: true,
        compactThread: true,
        whiteBackground: true,
        usernameColors: true,
        micro: true,
        pageButtonsVisible: true,
        hideOPAvatar: false,
        replaceAvatars: true
      }, function(opts){
        var root = $('html');
        if(opts.hideSidebar){ root.addClass('enhancement-hide-sidebar'); }
        if(opts.hideLastPostAvatar){ root.addClass('enhancement-hide-last-post-avatar'); }
        if(opts.striped){ root.addClass('enhancement-striped'); }
        if(opts.compactForum){ root.addClass('enhancement-compact-forum'); }
        if(opts.collapseUserInfo){ root.addClass('enhancement-collapse-user-info'); }
        if(opts.compactThread){ root.addClass('enhancement-compact-thread'); }
        if(opts.whiteBackground){ root.addClass('enhancement-white-background'); }
        if(opts.usernameColors){ root.addClass('enhancement-username-colors'); }
        if(opts.micro){ root.addClass('enhancement-micro'); }
        if(opts.pageButtonsVisible){ root.addClass('enhancement-page-buttons-visible'); }
        if(opts.hideOPAvatar){ root.addClass('enhancement-hide-op-avatar'); }
        if(opts.replaceAvatars){ root.addClass('enhancement-replace-avatars'); }
      });
    }
  }

  self = new DocumentStart();
})();
