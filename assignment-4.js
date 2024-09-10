//!!!! Problem-01 : Tax Calculator  !!!!

function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }

  const difference = income - expenses;
  const tax = difference * 0.2;

  return tax;
}

//!!!! Problem-02 : Tax Calculator  !!!!

function sendNotification(email) {
  if (email.indexOf("@") === -1) {
    return "Invalid Email";
  }

  let splitEmail = email.split("@");
  let userName = splitEmail[0];
  let domainName = splitEmail[1];

  let notification = userName + " sent you an email from" + " " + domainName;

  return notification;
}

//!!!! Problem-03 : Tax Calculator  !!!!
