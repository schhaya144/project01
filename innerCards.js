
//  ****************************wedding planner card section 
  // shop cart counting funtion 
  // Function to count the badges  copy
  let quantity = 1;

  function increaseQuantity() {
    quantity++;
    updateQuantity();
  }

  function decreaseQuantity() {
    if (quantity > 1) {
      quantity--;
      updateQuantity();
    }
  }

  function updateQuantity() {
    document.getElementById("quantity").innerText = quantity;
  }

//    shop cards 
  //function to traverse pictures
  let currentIndex = 0;
    const totalImages = 3; // Change this to the total number of images

    function changeImage(index) {
        currentIndex = index;
        updateCarousel();
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }

    function updateCarousel() {
        const mainImage = $('#main-img');
        const targetImage = $('.thumbnail').eq(currentIndex);

        mainImage.attr('src', targetImage.attr('src'));

        // Highlight the selected thumbnail
        const thumbnails = $('.thumbnail');
        thumbnails.each(function (index) {
            $(this).css('border', index === currentIndex ? '1px solid black' : '2px solid #ccc');
        });
    }
    // traversing end 
//  ********************wedding planner card section 
