
document.addEventListener("DOMContentLoaded", () => {
    
    const buyTicketButton = document.querySelector("#buy-ticket");
    const paribahanSection = document.querySelector("#paribahan-section");

    buyTicketButton.addEventListener("click", (element) => {
        element.preventDefault();
        paribahanSection.scrollIntoView({ behavior: "smooth" });
    });
});
// ......................................................

document.addEventListener("DOMContentLoaded", function () {
  const seats = document.querySelectorAll(".seat"); // All seats
  const seatCounter = document.getElementById("seat-counter"); // Selected seat count display
  const seatLeftBtn = document.getElementById("seat-left-btn"); // Remaining seats display
  const nextBtn = document.getElementById("nextBtn"); // Next button
  const phoneInput = document.getElementById("phoneNumber"); // Phone number input field

  let selectedSeats = 0; // Count of selected seats
  let totalSeats = 40; // Total available seats

  // Add event listener to each seat
  seats.forEach((seat) => {
      seat.addEventListener("click", function () {
          // Toggle seat selection
          if (seat.classList.contains("selected")) {
              seat.classList.remove("selected");
              selectedSeats--; // Decrease selected seat count
              totalSeats++; // Increase available seats
          } else {
              seat.classList.add("selected");
              selectedSeats++; // Increase selected seat count
              totalSeats--; // Decrease available seats
          }

          // Update seat count displays
          seatCounter.textContent = selectedSeats;
          seatLeftBtn.textContent = totalSeats;

          // Validate form after seat selection
          validateForm();
      });
  });

  // Add input event listener to phone number field
  phoneInput.addEventListener("input", function () {
      validateForm(); // Validate form after phone input
  });

  // Function to validate seat selection and phone number
  function validateForm() {
      const phoneNumber = phoneInput.value.trim(); // Get phone number value
      const isPhoneNumberValid = /^[0-9]{10,15}$/.test(phoneNumber); // Validate phone number (10-15 digits)

      // Check if at least one seat is selected and phone number is valid
      if (selectedSeats > 0 && isPhoneNumberValid) {
          nextBtn.disabled = false; // Enable the Next button
          nextBtn.classList.add("enabled");
      } else {
          nextBtn.disabled = true; // Disable the Next button
          nextBtn.classList.remove("enabled");
      }
  }
});

// ..........................................................

        document.getElementById('nextBtn').addEventListener('click', function () {
        document.getElementById('main-ticket-container').classList.add('hidden');
        document.getElementById('success-container').classList.remove('hidden');
      });
    