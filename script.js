const form = document.getElementById("formId");
const inputs = document.querySelectorAll("#formId input");

const expresions = {
  name: /^[ a-zA-Z\-\’]+$/, // Letters and it can contain spaces.
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  phone: /^\d{7,14}$/, // 7 to 14 numbers.
  message: /^[ a-zA-Z\-\’]+$/, // Letters and it can contain spaces.
};

const areas = {
  name: false,
  email: false,
  phone: false,
  message: false,
};

const validateForm = (e) => {
  /*console.log("executed");-----check is working*/
  /*console.log(e.target.name);-----check is working*/
  switch (e.target.name) {
    case "name":
      /* console.log("name works!");-----check is working*/
      validateArea(expresions.name, e.target, "name");
      break;
    case "email":
      /*  console.log("email works!");-----check is working*/
      validateArea(expresions.email, e.target, "email");
      break;
    case "phone":
      /*  console.log("phone works!");-----check is working*/
      validateArea(expresions.phone, e.target, "phone");
      break;
    case "message":
      /*  console.log("msg works!");-----check is working*/
      validateArea(expresions.message, e.target, "message");
      break;
  }
};

/*Create function that will be re-used above */
const validateArea = (expresion, input, area) => {
  /*area is the value for all groups:name, email, phone, msg  */
  if (expresion.test(input.value)) {
    /*if everything is correct, what is inside -if- will be executed*/
    document
      .getElementById(`group__${area}`)
      .classList.remove("form__group-wrong");
    document
      .getElementById(`group__${area}`)
      .classList.add("form__group-right");
    document
      .querySelector(`#group__${area} i`)
      .classList.add(
        "fa-circle-check"
      ); /*add another icon where typing is correct */
    document
      .querySelector(`#group__${area} i`)
      .classList.remove("fa-circle-xmark"); /*remove xmark icon */
    document
      .querySelector(`#group__${area} .form__input-error`)
      .classList.remove("form__input-error-active");
    areas[area] = true;
  } else {
    document
      .getElementById(`group__${area}`)
      .classList.add("form__group-wrong");
    document
      .getElementById(`group__${area}`)
      .classList.remove("form__group-right");
    document
      .querySelector(`#group__${area} i`)
      .classList.add("fa-circle-xmark"); /*add xmark icon */
    document
      .querySelector(`#group__${area} i`)
      .classList.remove("fa-circle-check"); /*remove check icon */
    document
      .querySelector(
        `#group__${area} .form__input-error`
      ) /* Show message to specify user what should be written */
      .classList.add("form__input-error-active");
    areas[area] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  /*check all form areas are filled*/
  const terms = document.getElementById("terms");
  if (
    areas.name &&
    areas.email &&
    areas.phone &&
    areas.message &&
    terms.checked
  ) {
    form.reset();

    document
      .getElementById("form__msg-success")
      .classList.add("form__msg-success-active");
    setTimeout(() => {
      document
        .getElementById("form__msg-success")
        .classList.remove("form__msg-success-active");
    }, 5000); /*time we want this part to be executed */

    /*to remove icons after submission*/
    document.querySelectorAll(".form__group-right").forEach((icon) => {
      icon.classList.remove("form__group-right");
      /*send form data to our email ---- javatcat@gmail.com
      window.location.href =
        "mailto:window.location.href = 'mailto:javatcat@gmail.com?subject=The subject - ' + name + ' (' + email + ')' + '&body=' + message;?subject=The subject - " +
        name +
        " (" +
        email +
        ")" +
        "&body=" +
        message;*/
    });
  } else {
    document
      .getElementById("form__msg-Displayed")
      .classList.add("form__msg-Displayed-active");
  }
});

/*Use of an ARRAY 
/*declare array 
let catArray = [];
 
 /*create array 
 catArray[0] = "cat1";
 catArray[1] = "cat2";
 catArray[2] = "cat3";
 catArray[3] = "cat4";
 catArray[4] = "cat5";
 catArray[5] = "cat6";
 catArray[6] = "cat7";
 catArray[7] = "cat8";
 catArray[8] = "cat9";
 catArray[9] = "cat10";

 /*traversing an array = moving from one index to another 
for(i = 0, i < catArray.length, i++){
  alert(catArray[i]);
}*/
