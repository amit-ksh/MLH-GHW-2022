const smsForm = document.querySelector("#sms");

function sendSms(e) {
  e.preventDefault();

  const msg = this.querySelector("input#msg").value;
  const phone = this.querySelector("input#phone").value;

  console.log(msg, phone);
}

smsForm.addEventListener("submit", sendSms);
