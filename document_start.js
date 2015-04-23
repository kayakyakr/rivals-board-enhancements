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
        hideStickyHeading: true,
        compactStickyHeading: false,
        compactForum: true,
        collapseUserInfo: true,
        leaveBadgeVisible: false,
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
        if(opts.hideStickyHeading){ root.addClass('enhancement-hide-sticky-heading'); }
        if(opts.compactStickyHeading){ root.addClass('enhancement-compact-sticky-heading'); }
        if(opts.compactForum){ root.addClass('enhancement-compact-forum'); }
        if(opts.collapseUserInfo){ root.addClass('enhancement-collapse-user-info'); }
        if(opts.leaveBadgeVisible){ root.addClass('enhancement-leave-badge-visible'); }
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
