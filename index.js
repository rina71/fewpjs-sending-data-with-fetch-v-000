let formData = {
  userName: "Byron",
  useEmail: "ser@gmail.com"
};


let configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};

fetch("http://localhost:3000/users", configObj)
