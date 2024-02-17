document.addEventListener("DOMContentLoaded", function() {
    const reasons = document.querySelectorAll('.reason');
    let currentReasonIndex = 0;

    // Function to show the current reason
    function showCurrentReason() {
        reasons.forEach((reason, i) => {
            if (i === currentReasonIndex) {
                reason.style.display = 'block';
            } else {
                reason.style.display = 'none';
            }
        });
    }

    // Function to show the next reason
    function nextReason() {
        currentReasonIndex++;
        if (currentReasonIndex >= reasons.length) {
            currentReasonIndex = reasons.length - 1;
        }
        showCurrentReason();
        // Show "Will you be my Valentine?" section after the 10th reason
        if (currentReasonIndex === reasons.length - 1) {
            document.querySelector('.will-you-be-my-valentine').style.display = 'block';
            document.querySelector('.yes').style.display = 'inline-block'; // Show the "Yes" button
        }
    }

    // Initial setup: Hide all reasons except the first one
    for (let i = 1; i < reasons.length; i++) {
        reasons[i].style.display = 'none';
    }

    // Show the first reason initially
    showCurrentReason();

    // Function to trigger confetti animation
    function celebrate() {
        // Trigger confetti animation
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('prev')) {
            currentReasonIndex--;
            if (currentReasonIndex < 0) {
                currentReasonIndex = 0;
            }
            showCurrentReason();
        }
        if (event.target.classList.contains('next')) {
            nextReason();
        }
        if (event.target.classList.contains('yes')) {
            celebrate(); // Call celebrate function when "Yes" button is clicked
        }
    });
});
