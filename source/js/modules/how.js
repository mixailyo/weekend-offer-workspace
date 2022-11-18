function how() {
  let howItemFirst = document.querySelector('.how__item--first');
  let howTimelineProgress = document.querySelector('.how__timeline-progress');

  howTimelineProgress.style.height = getComputedStyle(howItemFirst).height;

  window.addEventListener('resize', () => {
    howTimelineProgress.style.height = getComputedStyle(howItemFirst).height;
  })

  document.addEventListener('scroll', () => {
    if (howTimelineProgress.getBoundingClientRect().top + howItemFirst.clientHeight < document.documentElement.clientHeight / 2) {
      howTimelineProgress.style.height = `${(document.documentElement.clientHeight / 2) - howTimelineProgress.getBoundingClientRect().top}px`
    } else {
      howTimelineProgress.style.height = getComputedStyle(howItemFirst).height;
    }
  })
}

export { how }