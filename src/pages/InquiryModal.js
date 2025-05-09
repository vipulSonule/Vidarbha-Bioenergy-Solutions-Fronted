const handleSubmit = async (e) => {
  e.preventDefault();

  const inquiryData = {
    name,
    mobile,
    email,
    company,
    capacity,
    message,
  };

  try {
    const response = await fetch("http://localhost:5000/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(inquiryData),
    });

    const result = await response.json();
    alert(result.message);
    onClose();
  } catch (error) {
    alert("Failed to send inquiry");
  }
};
