var Form = /** @class */ (function () {
    function Form() {
        this.maxUserNameLength = 20;
        this.minUserNameLength = 4;
        this.minYear = 1900;
        this.maxYear = 2022;
        this.maxPassword = 20;
        this.minPassword = 4;
        this.logError = [];
        this.displayBox = document.getElementById("displayBox");
        this.userName = document.getElementById("username");
        this.password = document.getElementById("password");
        this.dob = document.getElementById("dob");
        this.submitButton = document.getElementById("sendForm");
    }
    // constructor(){
    //     this.userName.addEventListener('keyup',()=>{
    //         this.displayBox.innerHTML = this.userName.value;
    //     });
    // }
    Form.prototype.activateValidation = function () {
        var _this = this;
        this.submitButton.addEventListener("click", function (e) {
            e.preventDefault();
            _this.validateForm();
        });
    };
    Form.prototype.validateForm = function () {
        this.validateUserName();
        this.displayErrors();
    };
    Form.prototype.validateUserName = function () {
        if (this.userName.value == "") {
            this.logError.push("Username is empty");
        }
        else if (this.userName.value.length < this.minUserNameLength ||
            this.userName.value.length > this.maxUserNameLength) {
            this.logError.push("Username is too short or too long");
        }
    };
    Form.prototype.displayErrors = function () {
        var _this = this;
        this.displayBox.innerHTML = '';
        this.logError.forEach(function (element) {
            _this.displayBox.innerHTML += element + "<br>";
        });
        this.logError = [];
    };
    return Form;
}());
var a = new Form();
a.activateValidation();
