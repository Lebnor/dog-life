// get the element to animate
var element = document.getElementById("picarea");
var elementHeight = element.clientHeight;
var pic1 = document.getElementById("pic1");
var pic1Height = pic1.clientHeight;
var text = document.getElementById("headlineTxt");
var textHeight = text.clientHeight;
var pic1Block = document.getElementById("pic1Block");

// listen for scroll event and call animate function
document.addEventListener('scroll', animate);

// check if element is in view
function inView(element, elementHeight) {
  // get window height
  var windowHeight = window.innerHeight;
  // get number of pixels that the document is scrolled
  var scrollY = window.scrollY || window.pageYOffset;
  
  // get current scroll position (distance from the top of the page to the bottom of the current viewport)
  var scrollPosition = scrollY + windowHeight;
  // get element position (distance from the top of the page to the bottom of the element)
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  // is scroll position greater than element position? (is element in view?)
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

function isVisible(elem) {
    if (!(elem instanceof Element)) throw Error('DomUtil: elem is not an element.');
    const style = getComputedStyle(elem);
    if (style.display === 'none') return false;
    if (style.visibility !== 'visible') return false;
    if (style.opacity < 0.1) return false;
    if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width === 0) {
        return false;
    }
    const elemCenter   = {
        x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
        y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    if (elemCenter.x < 0) return false;
    if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
    if (elemCenter.y < 0) return false;
    if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
        if (pointContainer === elem) return true;
    } while (pointContainer = pointContainer.parentNode);
    return false;
}

// animate element when it is in view
function animate() {
    if (isVisible(text)) {
              text.classList.remove('pink');
      text.classList.add('fadein');
    } else {
        text.classList.remove('fadein');
        text.classList.add('pink');
    }

    if (isVisible(element)) {
               element.classList.add('animate');
      element.classList.add('in');

    }
    if (isVisible(pic1Block)) {
        pic1.classList.remove('hide-left');
        pic1.classList.add('in');
    } else {
        // pic1.classList.remove('in');
        // pic1.classList.add('hide-left');
    }

    // if (isVisible(pic1)) {
    //         pic1.classList.remove('hide-left');
    //         pic1.classList.add('in');

    // }



  // is element in view?
//   if (inView(element, elementHeight)) {
//       // element is in view, add class to element
//     //    element.classList.add('animate');
//       element.classList.add('in');
//     //   element.id.remove;
//   }
//   if (inView(text, textHeight)) {
//       text.classList.remove('pink');
//       text.classList.add('fadein');
//   } else {
//       text.classList.add('pink');
//   }

//   if (inView(pic1, pic1Height)) {
//       pic1.classList.remove('hide-left');
//       pic1.classList.add('in');
//   } else {
//       pic1.classList.remove('in');
//       pic1.classList.add('hide-left');
//   }

}
