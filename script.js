
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  
  slides.forEach(slide => slide.classList.remove("active"));


  slides[slideIndex].classList.add("active");

  slideIndex = (slideIndex + 1) % totalSlides;

  setTimeout(showSlides, 3000); 
}

showSlides();



showSlides();



showSlides();


  function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
  }

  function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
  }

  function submitLogin() {
    alert("Login submitted!");
    closeLoginModal();
  }

  
  window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
      closeLoginModal();
    }
  };


document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll(".buy-now");

  buyButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      alert("Please login to continue with your purchase.");
    
    });
  });
});

document.querySelectorAll('.product-card button:first-of-type').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('popupOverlay').style.display = 'flex';
  });
});


function closePopup() {
  document.getElementById('popupOverlay').style.display = 'none';
}


function proceedToCheckout() {
  alert("Login successful! Proceeding to checkout...");
  closePopup();
}
function proceedToCheckout() {
  alert("Details submitted! Proceeding to checkout...");
  closePopup();
}
