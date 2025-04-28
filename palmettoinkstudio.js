<script>
  const form = document.querySelector("form"); // only declare it ONCE
  const message = document.getElementById("message");
  const charCount = document.getElementById("charCount");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
    form.reset();
    charCount.textContent = "0/500 characters"; // resets counter
  });

  message.addEventListener("input", function() {
    const currentLength = message.value.length;
    charCount.textContent = `${currentLength}/500 characters`;
  });
</script>
