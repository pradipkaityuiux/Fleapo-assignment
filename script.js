let navigation = document.querySelector('.navigation_links')

if (navigation) {
  navigation.addEventListener('click', (evt) => {
    console.log(evt.target.textContent);
  });
} else {
  console.error("Navigation element with class '.navigation_links' not found.");
}
