//!!!! Problem-01 -

function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
    return "Invalid Input";
  }

  const difference = income - expenses;
  const tax = difference * 0.2;

  return tax;
}

//!!!! Problem-02 -

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

//!!!! Problem-03 -

function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  const checkNames = name.split(" ");

  for (let checkName of checkNames) {
    if (!isNaN(checkName)) {
      return true;
    }
  }
  return false;
}

//!!!! Problem-04 -

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  if (
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  let total_marks = obj.testScore + obj.schoolGrade;

  if (obj.isFFamily) {
    total_marks = total_marks + total_marks * 0.2;
  }
  return total_marks >= 80;
}

//!!!! Problem-05 -
