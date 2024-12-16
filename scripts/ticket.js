document.addEventListener("DOMContentLoaded", () => {
    // সিট সিলেকশন সেকশনে স্ক্রোল
    const buyTicketButton = document.querySelector("#buy-ticket");
    const paribahanSection = document.querySelector("#paribahan-section");

    buyTicketButton.addEventListener("click", (element) => {
        element.preventDefault();
        paribahanSection.scrollIntoView({ behavior: "smooth" });
    });

    // সিট সিলেকশন লজিক
    const seatCounter = document.getElementById("seat-counter");
    const seatLeftBtn = document.getElementById("seat-left-btn");
    const totalPriceElement = document.getElementById("total-price");
    const grandTotalElement = document.getElementById("grand-total");
    const nextBtn = document.getElementById("nextBtn");
    const phoneInput = document.getElementById("phoneNumber");

    const pricePerSeat = 550;
    let selectedSeats = new Set();  // সিলেক্ট করা সিট গুলি স্টোর হবে
    let totalSeats = 40;

    // সিট সিলেকশনে ক্লিক ইভেন্ট অ্যাড করা
    const seats = document.querySelectorAll(".seat"); // সিট গুলো আগে থেকেই সিলেক্ট করা

    seats.forEach(seat => {
        seat.addEventListener("click", toggleSeatSelection);
    });

    // সিট সিলেকশন টগল করা
    function toggleSeatSelection(event) {
        const seat = event.target;
        const seatId = seat.dataset.seatId;

        if (selectedSeats.has(seatId)) {
            selectedSeats.delete(seatId);  // সিট নির্বাচন না করা হলে সেট থেকে বাদ দেওয়া
            seat.classList.remove("selected");  // সিট থেকে "selected" ক্লাস মুছে ফেলা
            totalSeats++; // সিটের সংখ্যা বাড়ানো
        } else {
            selectedSeats.add(seatId);  // সিট নির্বাচন হলে সেটে যোগ করা
            seat.classList.add("selected");  // সিটে "selected" ক্লাস যোগ করা
            totalSeats--; // সিটের সংখ্যা কমানো
        }

        updateSeatDisplay(); // সিটের ডিসপ্লে এবং দাম আপডেট করা
    }

    // সিটের ডিসপ্লে এবং দাম আপডেট করা
    function updateSeatDisplay() {
        const total = selectedSeats.size * pricePerSeat; // নির্বাচিত সিটের মোট মূল্য
        seatCounter.textContent = selectedSeats.size; // নির্বাচিত সিটের সংখ্যা দেখানো
        seatLeftBtn.textContent = totalSeats; // অবশিষ্ট সিটের সংখ্যা দেখানো

        totalPriceElement.innerText = `BDT ${total}`; // মোট মূল্য দেখানো
        grandTotalElement.innerText = `BDT ${total}`; // গ্র্যান্ড টোটাল দেখানো
        validateForm();
    }

    // ফর্ম ভ্যালিডেশন (সিট + ফোন নাম্বার)
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

    // নেক্সট বাটন ক্লিক করা
    nextBtn.addEventListener("click", function () {
        document.getElementById('main-ticket-container').classList.add('hidden');
        document.getElementById('success-container').classList.remove('hidden');
    });

    // ফোন নাম্বার ইনপুট ইভেন্ট
    phoneInput.addEventListener("input", validateForm);
});
