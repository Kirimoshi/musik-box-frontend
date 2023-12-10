@008 @adminSignIn @Regression
Feature: Admin Sign In

    @AdminLoginFeature @Smoke
    Scenario: Verify that the admin sign-in with valid data
        Given the admin user is open "login" page
        Then the admin is on the "login" page
        Then the admin "Input" "Email" in the "login" page as: "admin@example.com"
        Then the admin "Input" "Password" in the "login" page as: "secreT!123"
        When the admin clicks on the "login" form "Remember Me" "Checkbox"
        When the admin clicks on the "login" form "Login" "Button"
        Then the admin is on the "admin" page
        Then the admin user log-out

    Scenario Outline: Verify email data validation and email error messages during sign-in
        Then the admin is on the "login" page
        Then the admin "Input" <email> in the "login" page as: <email_value>
        Then the admin "Input" <password> in the "login" page as: <password_value>
        When the admin clicks on the "login" form "Login" "Button"
        And the "login" page "Login" "Message" is: <error_message>

        Examples:
            | email         | password         | email_value        | password_value | error_message                |
            | "Email"       | "Password"       | "adminexample.com" | "secreT!123"   | "Invalid Email or password." |
            | "Email"       | "Password"       | "admin@examplecom" | "secreT!123"   | "Invalid Email or password." |
            | "Email"       | "Password"       | "barfoo"           | "secreT!123"   | "Invalid Email or password." |

    Scenario Outline: Verify password data validation and password error messages during sign-in
        Then the admin is on the "login" page
        Then the admin "Input" <email> in the "login" page as: <email_value>
        Then the admin "Input" <password> in the "login" page as: <password_value>
        When the admin clicks on the "login" form "Login" "Button"
        And the "login" page "Login" "Message" is: <error_message>

        Examples:
            | email         | password         | email_value         | password_value | error_message                |
            | "Email"       | "Password"       | "admin@example.com" | "secreT123"    | "Invalid Email or password." |
            | "Email"       | "Password"       | "admin@example.com" | "secreT!"      | "Invalid Email or password." |
            | "Email"       | "Password"       | "admin@example.com" | "secre!123"    | "Invalid Email or password." |