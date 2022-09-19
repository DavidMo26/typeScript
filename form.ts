class Form {
  private maxUserNameLength: number = 20;
  private minUserNameLength: number = 4;
  private minYear: number = 1900;
  private maxYear: number = 2022;
  private maxPassword: number = 20;
  private minPassword: number = 4;

  private logError: string[] = [];
  private displayBox: HTMLDivElement = document.getElementById(
    "displayBox"
  ) as HTMLDivElement;
  private userName: HTMLInputElement = document.getElementById(
    "username"
  ) as HTMLInputElement;
  private password: HTMLInputElement = document.getElementById(
    "password"
  ) as HTMLInputElement;
  private dob: HTMLInputElement = document.getElementById(
    "dob"
  ) as HTMLInputElement;
  private submitButton: HTMLInputElement = document.getElementById(
    "sendForm"
  ) as HTMLInputElement;

  // constructor(){
  //     this.userName.addEventListener('keyup',()=>{
  //         this.displayBox.innerHTML = this.userName.value;
  //     });
  // }

  public activateValidation() {
    this.submitButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.validateForm();
    });
  }

  private validateForm() {
    this.validateUserName();
    this.displayErrors();
  }
  private validateUserName() {
    if (this.userName.value == "") {
      this.logError.push("Username is empty");
    }
    else if (
      this.userName.value.length < this.minUserNameLength ||
      this.userName.value.length > this.maxUserNameLength
    ) {
      this.logError.push("Username is too short or too long");
    }
  }
  private displayErrors() {
    this.displayBox.innerHTML = '';
    this.logError.forEach((element) => {
        this.displayBox.innerHTML += element + "<br>";
        });
        this.logError = [];
  }
}

let a = new Form();
a.activateValidation();
