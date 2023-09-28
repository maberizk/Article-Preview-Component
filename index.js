const button = document.querySelector(".arrow");
const popup = document.querySelector(".share-popup");

button.addEventListener("click", function () {
  popup.style.visibility = "visible";

  // Add a click event listener to the document to close the popup when clicking outside
  document.addEventListener("click", closePopupOnClickOutside);
});

// Function to close the popup when clicking outside
function closePopupOnClickOutside(event) {
  if (!popup.contains(event.target) && event.target !== button) {
    popup.style.visibility = "hidden";
    document.removeEventListener("click", closePopupOnClickOutside);
  }
}
