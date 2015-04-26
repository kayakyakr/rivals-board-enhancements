// Saves options to chrome.storage.sync.
function save_options() {
  var hideSidebar = document.getElementById('hide-sidebar').checked,
      showSidebarToggleButton = document.getElementById('show-sidebar-toggle-button').checked,
      hideLastPostAvatar = document.getElementById('hide-last-post-avatar').checked,
      striped = document.getElementById('striped').checked,
      hideStickyHeading = document.getElementById('hide-sticky-heading').checked,
      compactStickyHeading = document.getElementById('compact-sticky-heading').checked,
      compactForum = document.getElementById('compact-forum').checked,
      moderatorMode = document.getElementById('moderator-mode').checked,
      collapseUserInfo = document.getElementById('collapse-user-info').checked,
      leaveBadgeVisible = document.getElementById('leave-badge-visible').checked,
      compactThread = document.getElementById('compact-thread').checked,
      whiteBackground = document.getElementById('white-background').checked,
      usernameColors = document.getElementById('username-colors').checked,
      micro = document.getElementById('micro').checked,
      liveUpdates = document.getElementById('live-updates').checked,
      liveUpdatePollingInterval = document.getElementById('live-update-polling-interval').checked,
      pageButtonsVisible = document.getElementById('page-buttons-visible').checked,
      hideOPAvatar = document.getElementById('hide-op-avatar').checked,
      highlightViewedThreads = document.getElementById('highlight-viewed-threads').checked,
      replaceAvatars = document.getElementById('replace-avatars').checked;
  chrome.storage.sync.set({
    hideSidebar: hideSidebar,
    showSidebarToggleButton: showSidebarToggleButton,
    hideLastPostAvatar: hideLastPostAvatar,
    striped: striped,
    hideStickyHeading: hideStickyHeading,
    compactStickyHeading: compactStickyHeading,
    compactForum: compactForum,
    moderatorMode: moderatorMode,
    collapseUserInfo: collapseUserInfo,
    leaveBadgeVisible: leaveBadgeVisible,
    compactThread: compactThread,
    whiteBackground: whiteBackground,
    usernameColors: usernameColors,
    micro: micro,
    liveUpdates: liveUpdates,
    liveUpdatePollingInterval: liveUpdatePollingInterval,
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
    }, 1500);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    hideSidebar: true,
    showSidebarToggleButton: true,
    hideLastPostAvatar: true,
    striped: true,
    hideStickyHeading: true,
    compactStickyHeading: false,
    compactForum: true,
    moderatorMode: false,
    collapseUserInfo: true,
    leaveBadgeVisible: false,
    compactThread: true,
    whiteBackground: true,
    usernameColors: true,
    micro: true,
    liveUpdates: true,
    liveUpdatePollingInterval: 60,
    pageButtonsVisible: true,
    hideOPAvatar: false,
    highlightViewedThreads: true,
    replaceAvatars: true
  }, function(opts) {
    document.getElementById('hide-sidebar').checked = opts.hideSidebar;
    document.getElementById('show-sidebar-toggle-button').checked = opts.showSidebarToggleButton;
    document.getElementById('hide-last-post-avatar').checked = opts.hideLastPostAvatar;
    document.getElementById('striped').checked = opts.striped;
    document.getElementById('hide-sticky-heading').checked = opts.hideStickyHeading;
    document.getElementById('compact-sticky-heading').checked = opts.compactStickyHeading;
    document.getElementById('compact-forum').checked = opts.compactForum;
    document.getElementById('moderator-mode').checked = opts.moderatorMode;
    document.getElementById('collapse-user-info').checked = opts.collapseUserInfo;
    document.getElementById('leave-badge-visible').checked = opts.leaveBadgeVisible;
    document.getElementById('compact-thread').checked = opts.compactThread;
    document.getElementById('white-background').checked = opts.whiteBackground;
    document.getElementById('username-colors').checked = opts.usernameColors;
    document.getElementById('micro').checked = opts.micro;
    document.getElementById('live-updates').checked = opts.liveUpdates;
    document.getElementById('live-update-polling-interval').value = opts.liveUpdatePollingInterval;
    document.getElementById('page-buttons-visible').checked = opts.pageButtonsVisible;
    document.getElementById('hide-op-avatar').checked = opts.hideOPAvatar;
    document.getElementById('highlight-viewed-threads').checked = opts.highlightViewedThreads;
    document.getElementById('replace-avatars').checked = opts.replaceAvatars;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
