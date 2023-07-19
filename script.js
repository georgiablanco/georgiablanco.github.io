// Generic function for initializing more than one menu in html
function initializeMenu($, window, menuClass) {
  function showContent(region) {
    // First hide all content regions
    $('.' + menuClass + '-region').hide();

    // Remove any active classes on the menu items
    $('.' + menuClass + '-menu a').removeClass('active');

    // Now show the selected region
    $(region).show();

    // Highlight the menu link associated with this region by adding the .active CSS class
    $('.' + menuClass + '-menu a[href="'+ region +'"]').addClass('active'); 
  }

  // Wait for the document to load before running the script
  $(window).on('load hashchange', function() {
    // Get the region specified in the URL hash (or default to the first menu item)
    var region = location.hash.toString() || $('.' + menuClass + '-menu a:first').attr('href');
    showContent(region);
  });

  // Handle click events for the specific menu
  $('.' + menuClass + '-menu a').on('click', function(event) {
    event.preventDefault();
    var region = $(this).attr('href');
    showContent(region);
  });
}

// Usage
(function($) {
  var menuClasses = ['main', 'projects'];

  for (var i = 0; i < menuClasses.length; i++) {
    var menuClass = menuClasses[i];
    initializeMenu($, window, menuClass);
  }
})(jQuery);
