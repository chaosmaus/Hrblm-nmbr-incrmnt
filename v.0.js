




$(document).ready(function () {


    $.fn.isInViewport = function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
  
      var viewportTop = $(window).scrollTop() - 300;
      var viewportBottom = viewportTop + $(window).height();
  
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };
  
    $(window).on('scroll', function () {
      if ($('#numbers-container').isInViewport()) {
  
        Number.prototype.format = function (n) {
          var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
          return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&,');
        };
  
        $('.number').each(function () {
          $(this).prop('counter', 0).animate({
            counter: $(this).text()
          }, {
            duration: 1000,
            step: function (step) {
              $(this).text('' + step.format());
            }
          });
        });
  
        const decimalIncrement = () => {
          var total = 2.5,
            value = 0,
            ment = (total - value) / 200,
            elem = $('.decimal-number');
  
          var interval = setInterval(function () {
            if (value >= total) {
              return clearInterval(interval);
            }
            elem.text(value.toFixed(1));
            value = value + ment;
          }, 5);
        }
  
        decimalIncrement();
        $(window).off('scroll')
      }
  
      
    });
  
  
  
  })
  
  
  
  
