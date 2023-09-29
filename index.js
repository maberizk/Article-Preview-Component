const button = document.querySelector(".arrow");
const popup = document.querySelector(".share-popup");
const popupMobile = document.querySelector(".share-popup-mobile");
const viewportWidth = window.innerWidth;

button.addEventListener("click", function () {
  if (viewportWidth < 500) {
    popupMobile.style.visibility = "visible";
  } else if (viewportWidth > 500) {
    popup.style.visibility = "visible";
  }

  // Add a click event listener to the document to close the popup when clicking outside
  document.addEventListener("click", closePopupOnClickOutside);
});

// Function to close the popup when clicking outside
function closePopupOnClickOutside(event) {
  if (
    !popup.contains(event.target) &&
    event.target !== button &&
    !popupMobile.contains(event.target)
  ) {
    popup.style.visibility = "hidden";
    popupMobile.style.visibility = "hidden";
    document.removeEventListener("click", closePopupOnClickOutside);
  }
}
