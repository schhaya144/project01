
// FAQ underline visibility
function handleAccordionClick(button) {
  var isActive = button.classList.contains('active');
  var accordionButtons = document.querySelectorAll('.accordion-button');
  accordionButtons.forEach(function (otherButton) {
    otherButton.classList.remove('active');
  });
  if (!isActive) {
    button.classList.add('active');
  }
}
//  FAQ end


 // *********************open_cart_start**********************
        // Function to open the cart page
        function openCartPage() {
            document.getElementById('cart-page').style.transform = 'translateX(0)';
          }
        
          // Function to close the cart page
          function closeCartPage() {
            document.getElementById('cart-page').style.transform = 'translateX(100%)';
          }
        
          // Add an event listener to the "Cart" icon to open the cart page
          document.querySelector('.fa-cart-shopping').addEventListener('click', openCartPage);
        
          // Add an event listener to the entire page to close the cart when clicking anywhere
          document.addEventListener('click', function(event) {
            // Check if the clicked element is not within the cart page
            if (!document.getElementById('cart-page').contains(event.target) && event.target !== document.querySelector('.fa-cart-shopping')) {
              closeCartPage();
            }
          });
 // *********************open_cart_end**********************

 // ****************Tooltip enable function_start**********************
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
 // ****************Tooltip enable function_end************************
 

  //  *********************open_search_bar**********************
  function toggleSearchSlider() {
    const searchSlider = document.getElementById('search-slider');
    // Toggle the top position of the search slider
    if (searchSlider.style.top === '0px') {
        searchSlider.style.top = '-100%';
    } else {
        searchSlider.style.top = '0';
    }
  }

 // *********************end_search_bar**********************


// *********************sorting start**********************

document.addEventListener("DOMContentLoaded", function() {
    const sortingSelect = document.getElementById("sorting");
    const cardsContainer = document.getElementById("cards_container");
  
    sortingSelect.addEventListener("change", function() {
      const selectedOption = sortingSelect.value;
      sortCards(selectedOption);
    });
  
    function sortCards(option) {
      const cards = Array.from(cardsContainer.querySelectorAll(".card_product"));
      cards.sort((a, b) => {
        let cardAValue, cardBValue;
        switch(option) {
          case "az":
            cardAValue = a.querySelector(".product_card_title").textContent.toLowerCase();
            cardBValue = b.querySelector(".product_card_title").textContent.toLowerCase();
            return cardAValue.localeCompare(cardBValue);
          case "za":
            cardAValue = a.querySelector(".product_card_title").textContent.toLowerCase();
            cardBValue = b.querySelector(".product_card_title").textContent.toLowerCase();
            return cardBValue.localeCompare(cardAValue);
          case "lowToHigh":
            cardAValue = parseFloat(a.querySelector(".product_card_price").textContent.replace(/[^\d.]/g, ''));
            cardBValue = parseFloat(b.querySelector(".product_card_price").textContent.replace(/[^\d.]/g, ''));
            return cardAValue - cardBValue;
          case "highToLow":
            cardAValue = parseFloat(a.querySelector(".product_card_price").textContent.replace(/[^\d.]/g, ''));
            cardBValue = parseFloat(b.querySelector(".product_card_price").textContent.replace(/[^\d.]/g, ''));
            return cardBValue - cardAValue;
          default:
            return 0;
        }
      });
      // Remove existing cards from container
      cardsContainer.innerHTML = "";
      // Append sorted cards to container
      cards.forEach(card => {
        cardsContainer.appendChild(card);
      });
    }
  });
  