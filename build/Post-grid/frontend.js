/******/ (() => { // webpackBootstrap
/*!***********************************!*\
  !*** ./src/Post-grid/frontend.js ***!
  \***********************************/
let currentPage = 1; // Initialize the page number

jQuery(document).on('click', '.your-pagination-selector', function (e) {
  e.preventDefault();
  currentPage = jQuery(this).data('page'); // Get the page number from the clicked pagination link

  // Perform the AJAX request to load more posts
  jQuery.ajax({
    type: 'POST',
    url: PageCrafterAjax.ajax_url,
    data: {
      action: 'load_more_posts',
      // WordPress action for AJAX
      nonce: PageCrafterAjax.nonce,
      // Nonce for security
      page: currentPage // Send the current page number
    },
    success: function (response) {
      // Append the new posts to the container
      jQuery('#your-post-container').html(response);
    },
    error: function () {
      alert('AJAX request failed.');
    }
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map