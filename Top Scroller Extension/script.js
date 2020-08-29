document.addEventListener("DOMContentLoaded", function (event) {
  console.log("extension script started");
  const btn = getScrollUpBtn();
  document.body.insertBefore(btn, document.body.firstChild);
});

/**
 * Scroll smoothly from the given height to the top of the site.
 * The smoothness is achieved by scrolling in multiple small steps.
 *
 * @param fromHeight the height to scroll from (in pixels)
 * @param step how many pixels to scroll in each step, higher means
 *  faster scrolling
 * @param interval time to wait between each step (in millis)
 */
function smoothScroll(fromHeight, step = 30, interval = 10) {
  let i = fromHeight || 0;
  if (i > 0) {
    window.scrollTo(0, i - step);
    setTimeout(() => {
      smoothScroll(i - step);
    }, interval);
  }
}

function getScrollUpBtn() {
  const bg = getBackground();
  const arrow = getArrow();
  bg.insertAdjacentElement('afterbegin', arrow);

  bg.addEventListener('click', function (event) {
    console.log('scroll up btn clicked');
    // window.scroll(0, 0);
    smoothScroll(window.scrollY);
  })

  return bg;
}

function getBackground() {
  const bg = document.createElement("div");

  // position
  bg.style.position = "fixed";
  bg.style.right = "20px";
  bg.style.bottom = "20px";
  bg.style.zIndex = "99";

  // size
  bg.style.height = "50px";
  bg.style.width = "50px";

  // decoration
  bg.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  bg.style.borderRadius = "10px";

  // setup flexbox to align contents
  bg.style.display = "flex";
  bg.style.flex = "row";
  bg.style.justifyContent = "center";
  bg.style.alignItems = "center";

  return bg;
}

function getArrow() {
  const arrow = document.createElement("img");
  try {
    arrow.src = safari.extension.baseURI + "up_arrow_256.png";
  } catch (error) {
    console.warn(
      error,
      'this error always appears when opening with raw html so we ignore it'
    );
    arrow.src = "../up_arrow_256.png";
  }

  // styling
  arrow.className = "top_scroller";
  arrow.style.height = "30px";
  arrow.style.width = "30px";

  return arrow;
}
