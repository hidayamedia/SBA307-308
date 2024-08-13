$(document).ready(function() {
  // Toggle dropdown menu
  $('.nav-classes li').hover(function() {
    $(this).find('.dropdown').stop(true, true).slideToggle();
  });

  // Validate contact form
  $('#contactForm').on('submit', function(event) {
    event.preventDefault();
    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();

    if (name && email && message) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  });

  // Validate topic suggestion form
  $('#suggestionForm').on('submit', function(event) {
    event.preventDefault();
    const name = $('#suggestionName').val();
    const email = $('#suggestionEmail').val();
    const topic = $('#suggestedTopic').val();

    if (name && email && topic) {
      alert('Suggestion submitted successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  });

  // Implement infinite scroll
  $(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      loadMoreInspiration();
    }
  });

  function loadMoreInspiration() {
    console.log('Loading more inspiration...');
    // 
  }
});
