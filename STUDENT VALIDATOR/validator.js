(function () {
   var form = document.body.getElementsByClassName('form')[0];
   var usernameInput = document.getElementById('username');
   var emailInput = document.getElementById('email');
   var passwordInput = document.getElementById('password');
   var gradeInput = document.getElementById('grade');
   var submitButton = document.getElementById('submit-btn');

   var toValidateGrades = false;

   form.onsubmit = function (e) {
      e.preventDefault();

      if (!validatePassword(passwordInput.value)) {
         alert('Invalid password!');
         return;
      }

      if (toValidateGrades) {
         try {
            if (validateGrade(gradeInput.value)) {
               alert('Failed...');
            } else {
               alert('Passed!');
            }
         } catch (err) {
            alert('Invalid grade!');
            return;
         }
         window.location.href = '/';
      } else {
         alert('Validate the grade...');

         submitButton.value = 'Submit';

         usernameInput.disabled = true;
         emailInput.disabled = true;
         passwordInput.disabled = true;

         gradeInput.disabled = false;
         gradeInput.focus();

         toValidateGrades = true;
      }
   };

   //#region
   function validatePassword(password) {
      var PASSWORD = 'sas17';

      return password === PASSWORD;
   }

   function validateGrade(grade) {
      var PASSING_GRADE = 50;

      var convertedGrade = Number.parseInt(grade);

      if (isNaN(convertedGrade)) {
         throw new InvalidGradeError('Invalid grade!');
      }
      return grade < PASSING_GRADE;
   }

   class InvalidGradeError extends Error {
      constructor(message) {
         super(message);
         super.name = 'InvalidGradeError';
      }
   }
   //#endregion
})();
