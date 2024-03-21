/**
 * TODO:
 *
 * - Get the form data (username, email, password, grade)
 * - Validate the data upon submission
 *
 *  Username:
 *  - must only contain alphanumeric characters (underscore is allowed)
 *  - length must be (5 <= ?? >= 16)
 *  - /^[a-zA-Z0-9_]{5,16}$/
 *
 *  Email:
 *  - Email must only contain alphanumeric characters (underscore is allowed)
 *  - must end with "@school.edu.ph"
 *  - /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.(edu\.ph)$/
 *
 *  Password:
 *  - length must be (8 <= ?? >= 254)
 *  - /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,254}$/
 *  - /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,254}$/
 *
 *  Grade:
 *  - length must be (0 <= ?? >= 100)
 *  - If a password is correct display validate the grade; if grade < 50 use DOM
 *    method->” document.getElementById(<create your id> display failed otherwise display “Wrong”
 *  - /^100$|^\d{1,2}(\.\d{1,2})?$/
 */