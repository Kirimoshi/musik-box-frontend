@002 @adminUsersModeration @Smoke
Feature: Admin "CRUD" new administrators

  Scenario: Verify that the admin can create new administrators by providing the necessary information: Email and Password
    Given the admin "login" to the system as the admin user
    When the admin is on the "admin" page
    Then the admin clicks on the "header" "Admin Users" "Button"
    And the admin is on the "admin_users" page
    And the admin clicks on the "admin_users" page "New Admin User" "Button"
    And the admin is on the "new_admin" page
    And the admin "Input" "Email" in the "new_admin" page as: "admin@user.com"
    And the admin "Input" "Password" in the "new_admin" page as: "admin123"
    And the admin "Input" "Password Confirmation" in the "new_admin" page as: "admin123"
    And the admin clicks on the "new_admin" page "Create Admin User" "Button"
    And the admin is on the "admin_users" "current_admin" page
    And the "header" "Successfully" "Message" is: "Admin user was successfully created."

  Scenario: Verify that the admin can view administrator user details
    Given the admin clicks on the "header" "Admin Users" "Button"
    When the admin is on the "admin_users" page
    Then the admin clicks on the "admin_users" page "View Admin User" "Button"
    And the "current_admin" page "Admin User" "Nick Name" is: "EMPTY" // Not fully implemented
    And the "current_admin" is "Created At" "Date"
    And the "current_admin" page "Admin User" "Email" is: "admin@user.com"

  Scenario: Verify that the admin can update new administrator user details.
    Given the admin is on the "admin_users" "current_admin" page
    When the admin clicks on the "current_admin" page "Edit Admin User" "Button"
    Then the admin is on the "admin_edit" page
    And the admin "Input" "Edited Email" in the "admin_edit" page as: "admin1@user.com"
    And the admin "Input" "Edited Password" in the "admin_edit" page as: "admin1234"
    And the admin "Input" "Edited Password Confirmation" in the "admin_edit" page as: "admin1234"
    And the admin clicks on the "admin_edit" page "Update Admin User" "Button"
    And the "current_admin" is "Updated At" "Date"
    And the "header" "Successfully" "Message" is: "Admin user was successfully updated."

  Scenario: Verify that the admin can delete administrator user
    Given the admin is on the "admin_users" "current_admin" page
    When the admin clicks on the "current_admin" page "Delete Admin User" "Button"
    Then the admin "accepts" alert
    And the "header" "Successfully" "Message" is: "Admin user was successfully destroyed."

    


  
  