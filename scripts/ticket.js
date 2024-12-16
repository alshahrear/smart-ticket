document.addEventListener("DOMContentLoaded", () => {
    const buyTicketButton = document.querySelector("#buy-ticket");
    const paribahanSection = document.querySelector("#paribahan-section");

    buyTicketButton.addEventListener("click", (element) => {
        element.preventDefault();
        paribahanSection.scrollIntoView({ behavior: "smooth" });
    });

    const seatCounter = document.getElementById("seat-counter");
    const seatLeftBtn = document.getElementById("seat-left-btn");
    const totalPriceElement = document.getElementById("total-price");
    const grandTotalElement = document.getElementById("grand-total");
    const nextBtn = document.getElementById("nextBtn");
    const phoneInput = document.getElementById("phoneNumber");
    const selectedSeatDisplay = document.getElementById("selected-seats");

    const applyButton = document.getElementById("btn-apply");
    const pricePerSeat = 550;
    let selectedSeats = new Set();
    let totalSeats = 40;

    const seats = document.querySelectorAll(".seat");

    seats.forEach(seat => {
        seat.addEventListener("click", toggleSeatSelection);
    });

    function toggleSeatSelection(event) {
        const seat = event.target;
        const seatId = seat.dataset.seatId;

        if (selectedSeats.has(seatId)) {
            selectedSeats.delete(seatId);
            seat.classList.remove("selected");
            totalSeats++;
        } else {
            selectedSeats.add(seatId);
            seat.classList.add("selected");
            totalSeats--;
        }

        updateSeatDisplay();
        validateApplyButton();
    }

    function updateSeatDisplay() {
        const total = selectedSeats.size * pricePerSeat;
        seatCounter.textContent = selectedSeats.size;
        seatLeftBtn.textContent = totalSeats;

        totalPriceElement.innerText = `BDT ${total}`;
        grandTotalElement.innerText = `BDT ${total}`;

        updateSelectedSeatDisplay();
        validateForm();
    }

    function updateSelectedSeatDisplay() {
        if (selectedSeats.size > 0) {
            selectedSeatDisplay.textContent = Array.from(selectedSeats).join(", ");
        } else {
            selectedSeatDisplay.textContent = "No seat selected";
        }
    }

    function validateForm() {
        const phoneNumber = phoneInput.value.trim();
        const isPhoneNumberValid = /^[0-9]{10,15}$/.test(phoneNumber);

        if (selectedSeats.size > 0 && isPhoneNumberValid) {
            nextBtn.disabled = false;
            nextBtn.classList.add("enabled");
        } else {
            nextBtn.disabled = true;
            nextBtn.classList.remove("enabled");
        }
    }

    function validateApplyButton() {
        if (selectedSeats.size >= 4) {
            applyButton.disabled = false;
        } else {
            applyButton.disabled = true;
        }
    }

    nextBtn.addEventListener("click", function () {
        document.getElementById('main-ticket-container').classList.add('hidden');
        document.getElementById('success-container').classList.remove('hidden');
    });

    phoneInput.addEventListener("input", validateForm);
});
