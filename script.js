$(document).ready(function() {
    // Open the modal when the "Contact Us" button is clicked
    $("#openFormBtn").click(function() {
      $("#contactForm").modal('show'); 
    });
  
    // Handle form submission (replace with your actual server-side logic)
    $("#contactForm form").submit(function(event) {
      event.preventDefault(); // Prevent default form submission
      
      // Get values from the form
      var name = $("#firstname").val();
      var lastname=$('#lastname').val();
      var email = $("#email").val();
      var message = $("#message").val();
      
      // ... (Send data to your server here using AJAX or a similar method) 
      const form = document.getElementById("contactForm");
      form.addEventListener("submit", formSubmit);
  
      function formSubmit(e) {
          e.preventDefault();
          const formData = new FormData(e.target);
  
          fetch("https://getform.io/f/avrewdqa", {
              method: "POST",
              body: formData,
              headers: {
                  "Accept": "application/json",
              },
          })
          .then(response => console.log(alert("Thank you, " + lastname +"! Your message has been sent.")))
          .catch(error => console.log(alert("Error submitting form: " + error)))
      }
    });
  });
const carouselItems = document.querySelectorAll('.carousel-item');
carouselItems.forEach(item => {
    item.addEventListener('mouseover', function() {
        // Replace the image with "Web Development" design 
        item.querySelector('img').src = 'frame2_1.webp'; // Replace with your design image path
    });
    item.addEventListener('mouseout', function() {
        // Restore the original image
        // You'll need to store the original image source in a variable when you set up the image initially.
        item.querySelector('img').src = 'frame2_2.web4'; 
    });
    item.addEventListener('mouseout', function() {
      // Restore the original image
      // You'll need to store the original image source in a variable when you set up the image initially.
      item.querySelector('img').src = 'frame2_4.web4'; 
  });
});
const indicators = document.querySelectorAll('.carousel-indicators li'); // Assuming Bootstrap provides a way to select the indicators
const items = document.querySelectorAll('.carousel-item');

items.forEach((item, index) => {
    // Create/update dots for each item
    // ... (Your implementation to create or update indicators)
});

$(document).ready(function() {
  // Click event for content items
  $(".content-item").click(function() {
      // Get the image path from the data attribute
      var imagePath = $(this).data("image");

      // Update the main image
      $("#main-image").attr("src", imagePath);
  });
});

let currentIndex = 0;

function moveSlide(direction) {
    const cardWrapper = document.querySelector('.card-wrapper');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    cardWrapper.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function currentSlide(index) {
    currentIndex = index;
    const cardWrapper = document.querySelector('.card-wrapper');
    const offset = -currentIndex * 100;
    cardWrapper.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}
