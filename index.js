let configObj = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name,
    email
  })
};

function submitData(name, email){
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
