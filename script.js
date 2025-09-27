function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}



// Wrap in DOMContentLoaded to ensure elements exist
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero-slider .slide");
  if (!slides.length) return; // safety

  let current = 0;

  function show(i) {
    slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
  }

  function next() {
    current = (current + 1) % slides.length;
    show(current);
  }

  // initial
  show(0);
  // auto-rotate every 5s
  setInterval(next, 5000);
});


// Mini contact form (home page)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("homeContactForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = {
        name: document.getElementById("homeName").value,
        email: document.getElementById("homeEmail").value,
        phone: "", // optional for home form
        message: document.getElementById("homeMessage").value,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      document.getElementById("homeResponse").innerText = result.success
        ? "✅ Message sent successfully!"
        : "❌ Error sending message.";
      form.reset();
    });
  }
});
