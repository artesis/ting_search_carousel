(function ($) {
  var carousel = false;

  Drupal.behaviors.tingSearchCarousel = {
    attach: function(context) {
      // Don't proceed if you're on mobile version, since carousel script hangs when container is not visible.
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(document).width() < 740 ) {
        $('.ting-search-carousel').hide();
      } else {
        $('.ting-search-carousel').show();
        // If panels IPE form ("Cancel" button) fired this attachment we have to ignore it
        // even in case it is called after form-triggered attachment.
        if (context.nodeName != '#document' || (window.tsc_noinit !== undefined && window.tsc_noinit)) {
          window.tsc_noinit = true;
          return;
        }

        carousel_init(0);

        $('.search-controller li').click(function() {
          $(this).parent().find('li').removeClass('active');
          $(this).addClass('active');

          carousel_init($(this).index());

          return false;
        });
      }
    }
  }

  carousel_init = function(index) {
    $.ajax({
      type: 'get',
      url : Drupal.settings.basePath + 'ting_search_carousel/results/ajax/' + index,
      dataType : 'json',
      success : function(msg) {
        $('.ting-search-carousel .subtitle').html(msg.subtitle);
        $('.ting-search-carousel .ting-rs-carousel .rs-carousel-runner').html(msg.content);
        carousel = $('.ting-search-carousel .ting-rs-carousel').carousel();
        carousel.carousel('refresh');
      }
    });
  }
})(jQuery);
