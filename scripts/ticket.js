
document.addEventListener("DOMContentLoaded", () => {
    
    const buyTicketButton = document.querySelector("#buy-ticket");
    const paribahanSection = document.querySelector("#paribahan-section");

    buyTicketButton.addEventListener("click", (element) => {
        element.preventDefault();
        paribahanSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const seats = document.querySelectorAll(".seat");
    const seatCounter = document.getElementById("seat-counter");
    const seatLeftBtn = document.getElementById("seat-left-btn");
  
    let selectedSeats = 0; 
    let totalSeats = 40;
    seats.forEach((seat) => {
      seat.addEventListener("click", function () {
    
        if (seat.classList.contains("selected")) {
          seat.classList.remove("selected"); 
          selectedSeats--; 
          totalSeats++; 
        } else {
          seat.classList.add("selected"); 
          selectedSeats++; 
          totalSeats--; 
        }
        seatCounter.textContent = selectedSeats; 
        seatLeftBtn.textContent = ` ${totalSeats}`; 
      });
    });
  });


const selectedSeatsEl = document.getElementById("selected-seats");
const totalPriceEl = document.getElementById("total-price");
const grandTotalEl = document.getElementById("grand-total");

const seatPrice = 550;
let selectedSeats = [];

function updateUI() {
        seatCountEl.textContent = selectedSeats.length; 
        selectedSeatsEl.innerHTML = selectedSeats.map(seat => `<li>${seat}</li>`).join(''); // সিট লিস্ট আপডেট
        const total = selectedSeats.length * seatPrice;
        totalPriceEl.textContent = `BDT ${total}`; 
        grandTotalEl.textContent = `BDT ${total}`; 
    }
