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

function submitData(formData){
  return fetch("http://localhost:3000/users", configObj)
  .then(function(response){
    return response.json();
  })
  .then(function(object){
    console.log(object);
  })
  .catch(function(error){
    alert("Something is wrong");
    console.log(error.message);
  });
}
