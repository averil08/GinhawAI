document.getElementById("selfCheckForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.querySelector("input[name='gender']:checked")?.value;
  const symptom = document.getElementById("symptom").value;
  const details = Array.from(document.querySelectorAll("input[name='details']:checked")).map(cb => cb.value);

  if (!name || !age || !gender || !symptom) {
    alert("Please complete all required fields.");
    return;
  }

  let urgency = "Non-Urgent";
  let redirectPage = "nonurgent.html";

  if (symptom.toLowerCase().includes("chest pain") || symptom.toLowerCase().includes("bleeding")) {
    urgency = "Urgent";
    redirectPage = "urgent.html";
  } else if (symptom.toLowerCase().includes("fever")) {
    urgency = "Check Soon";
    redirectPage = "checksoon.html";
  }

  // Optional: You can show a message before redirecting
  alert(`Hi ${name}, based on your inputs:\n\nAssessment: ${urgency}\n\nYou will now be redirected to the ${urgency} page.`);

  // Redirect after short delay (e.g., 1 second)
  setTimeout(() => {
    window.location.href = redirectPage;
  }, 1000);
});
