@008 @adminSignIn
Feature: Admin Sign In

    @Smoke
    Scenario: Verify that the admin sign-in with valid data
        Given the admin user is open "login" page
        When the admin is on the "login" page
        Then the admin "Input" "Email" in the "login" page as: "admin@example.com"
        And the admin "Input" "Password" in the "login" page as: "secreT!123"
        And the admin clicks on the "login" form "Remember Me" "Checkbox"
        And the admin clicks on the "login" form "Login" "Button"
        And the admin is on the "admin" page
        And the admin user log-out

    @Regression
    Scenario Outline: Verify email data validation and email error messages during sign-in
        Given the admin user is open "login" page
        When the admin is on the "login" page
        Then the admin "Input" <email> in the "login" page as: <email_value>
        And the admin "Input" <password> in the "login" page as: <password_value>
        And the admin clicks on the "login" form "Login" "Button"
        And the "login" page "Login" "Message" is: <error_message>

        Examples:
            | email         | password         | email_value        | password_value | error_message                |
            | "Email"       | "Password"       | "adminexample.com" | "secreT!123"   | "Invalid Email or password." |
            | "Email"       | "Password"       | "admin@examplecom" | "secreT!123"   | "Invalid Email or password." |
            | "Email"       | "Password"       | "barfoo"           | "secreT!123"   | "Invalid Email or password." |

    @Regression
    Scenario Outline: Verify password data validation and password error messages during sign-in
        Given the admin is on the "login" page
        When the admin "Input" <email> in the "login" page as: <email_value>
        Then the admin "Input" <password> in the "login" page as: <password_value>
        And the admin clicks on the "login" form "Login" "Button"
        And the "login" page "Login" "Message" is: <error_message>

        Examples:
            | email         | password         | email_value         | password_value | error_message                |
            | "Email"       | "Password"       | "admin@example.com" | "secreT123"    | "Invalid Email or password." |
            | "Email"       | "Password"       | "admin@example.com" | "secreT!"      | "Invalid Email or password." |
            | "Email"       | "Password"       | "admin@example.com" | "secre!123"    | "Invalid Email or password." |