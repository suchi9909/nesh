/* Script for popover positioning */
(function (selector, horizontalOffset, verticalOffset) {
  var items;

  selector = selector || '.popover-item';
  horizontalOffset = horizontalOffset || 5;
  verticalOffset = verticalOffset || 5;

  items = document.querySelectorAll(selector);
  items = Array.prototype.slice.call(items);

  items.forEach(function (item) {
    // Every time the pointer moves over the element the 
    //  CSS-rule in overwritten with new values for 
    //  top and left.
    item.addEventListener('mousemove', function (e) {
      let countCssRules = document.styleSheets[0].cssRules.length;
      var rightSpace = document.body.clientWidth - e.pageX;
      if (rightSpace > 300) {
        var newRule = selector +
          ':hover .popover-content {  ' +
          'right:auto; left: ' + (horizontalOffset + e.offsetX) + 'px; ' +
          'top: ' + (e.offsetY + verticalOffset) + 'px; }';
      } else {
        var newRule = selector +
          ':hover .popover-content {  ' +
          'left:auto; right: ' + (item.offsetWidth - e.offsetX) + 'px; ' +
          'top: ' + (e.offsetY + verticalOffset) + 'px; }';
      }


      document.styleSheets[0].insertRule(newRule, countCssRules);
    });
  });
})('.popover-item', 10, 5);