document.addEventListener("DOMContentLoaded", function () {
  const messagesDiv = document.getElementById("messages");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send");

  // Event listener for sending a message
  sendButton.addEventListener("click", function () {
      const userMessage = userInput.value;
      if (userMessage.trim() !== "") {
          displayMessage("You: " + userMessage);
          sendRequestToChatbot(userMessage);
          userInput.value = ""; // Clear the input field
      }
  });

  // Event listener for the Enter key
  userInput.addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
          sendButton.click(); // Simulate a click on the send button
      }
  });

  // Function to send a message to the chatbot
  function sendRequestToChatbot(userMessage) {
      const url = "https://web.up.railway.app/send_message"; // Your chatbot URL
      const data = {
          message: userMessage,
          model: "GPT-3",
      };

      fetch(url, {
          method: "POST",
          headers: {
            "Host": "web.up.railway.app",
            "Cookie": "session=.eJwlzUEKAyEMQNG7uK6gZmJMLzNoEkspdco4dFN69w50--HxP0628bZ91uO-jfWu7uoigkQW9r1Q9AsU8ZzEPAKkApiVqbuLk7n39dgeNk5zpgA5hsyRkCRU7ZihLRlMm5jmYKoly-ledbdxrE-bs97sv0wQC1ALniUlvzCxZ8DmFRGQqIYUovv-AENAMSM.ZTBU4w.Aa5Mv88xKhSMSRACFMYV3FjFf84",
            "Content-Length": "32",
            "Sec-Ch-Ua": "\"Chromium\";v=\"117\", \"Not;A=Brand\";v=\"8\"",
            "Sec-Ch-Ua-Mobile": "?0",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.5938.132 Safari/537.36",
            "Content-Type": "application/json",
            "Accept": "*/*",
            "X-Requested-With": "XMLHttpRequest",
            "X-Csrftoken": "Ijk3ZjAzNjEwNjkxNzU3YzBhZGY1NjNiNDYzZWRiY2VkNjBlZGQ4NmMi.ZTBU3g.Mg7_I50hvI59wr7FdM1llw8ui68",
            "Sec-Ch-Ua-Platform": "\"Windows\"",
            "Origin": "https://web.up.railway.app",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://web.up.railway.app/",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9"
          },
          body: JSON.stringify(data),
      })
          .then((response) => response.json())
          .then((data) => {
              const chatbotMessage = data.message;
              displayMessage("Chatbot: " + chatbotMessage);
          })
          .catch((error) => {
              console.error("Error:", error);
          });
  }

  // Function to display a message in the chat
  function displayMessage(message) {
      const messageDiv = document.createElement("div");
      messageDiv.textContent = message;
      messagesDiv.appendChild(messageDiv);
  }
});
