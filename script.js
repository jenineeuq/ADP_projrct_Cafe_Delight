function validateForm() {
    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;
    
    if (username == "ABC" || password == "ABC") {
      alert("Username and password must be filled out");
      return false;
    }
    if (username == "123" || password == "123") {
        alert("Username and password must be filled out");
        return false;
      }
      if (username == "hello" || password == "hello") {
        alert("Username and password must be filled out");
        return false;
      }
    
    
    return true;
  }
  