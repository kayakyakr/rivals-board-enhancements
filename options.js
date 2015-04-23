// Saves options to chrome.storage.sync.
function save_options() {
  var hideSidebar = document.getElementById('hide-sidebar').checked,
      hideLastPostAvatar = document.getElementById('hide-last-post-avatar').checked,
      striped = document.getElementById('striped').checked,
      compactForum = document.getElementById('compact-forum').checked,
      collapseUserInfo = document.getElementById('collapse-user-info').checked,
      compactThread = document.getElementById('compact-thread').checked,
      whiteBackground = document.getElementById('white-background').checked,
      usernameColors = document.getElementById('username-colors').checked,
      micro = document.getElementById('micro').checked,
      pageButtonsVisible = document.getElementById('page-buttons-visible').checked,
      hideOPAvatar = document.getElementById('hide-op-avatar').checked,
      highlightViewedThreads = document.getElementById('highlight-viewed-threads').checked,
      replaceAvatars = document.getElementById('replace-avatars').checked;
  chrome.storage.sync.set({
    hideSidebar: hideSidebar,
    hideLastPostAvatar: hideLastPostAvatar,
    striped: striped,
    compactForum: compactForum,
    collapseUserInfo: collapseUserInfo,
    compactThread: compactThread,
    whiteBackground: whiteBackground,
    usernameColors: usernameColors,
    micro: micro,
    pageButtonsVisible: pageButtonsVisible,
    hideOPAvatar: hideOPAvatar,
    highlightViewedThreads: highlightViewedThreads,
    replaceAvatars: replaceAvatars
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
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
    highlightViewedThreads: true,
    replaceAvatars: true
  }, function(opts) {
    document.getElementById('hide-sidebar').checked = opts.hideSidebar;
    document.getElementById('hide-last-post-avatar').checked = opts.hideLastPostAvatar;
    document.getElementById('striped').checked = opts.striped;
    document.getElementById('compact-forum').checked = opts.compactForum;
    document.getElementById('collapse-user-info').checked = opts.collapseUserInfo;
    document.getElementById('compact-thread').checked = opts.compactThread;
    document.getElementById('white-background').checked = opts.whiteBackground;
    document.getElementById('username-colors').checked = opts.usernameColors;
    document.getElementById('micro').checked = opts.micro;
    document.getElementById('page-buttons-visible').checked = opts.pageButtonsVisible;
    document.getElementById('hide-op-avatar').checked = opts.hideOPAvatar;
    document.getElementById('highlight-viewed-threads').checked = opts.highlightViewedThreads;
    document.getElementById('replace-avatars').checked = opts.replaceAvatars;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
