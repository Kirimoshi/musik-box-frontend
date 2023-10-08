@002 @adminUsersModeration

Feature: Admin "CRUD" new administrators
  Scenario: Verify that the admin user log in with valid data
    Given the admin "login" to the system as the admin user
    Then the admin is on the "admin" page

  Scenario: Verify that the admin user redirects to the "admin_users" page
    Given the admin is on the "admin" page
    When the admin clicks on the "header" "Admin Users" "Button"
    Then the admin is on the "admin_users" page

  Scenario: Verify that the admin can create new administrators by providing the necessary information: Email and Password
    Given the admin is on the "admin_users" page
    When the admin clicks on the "admin_users" page "New Admin User" "Button"
    Then the admin is on the "new_admin" page
    Then the admin "Input" "Email" in the "new_admin" page as: "admin@user.com"
    Then the admin "Input" "Password" in the "new_admin" page as: "admin123"
    Then the admin "Input" "Password Confirmation" in the "new_admin" page as: "admin123"
    When the admin clicks on the "new_admin" page "Create Admin User" "Button"
    Then the admin is on the "admin_users" "current_admin" page
    Then the "header" "Successfully" "Message" is: "Admin user was successfully created."

  Scenario: Verify that the admin can view administrator user details
    When the admin clicks on the "header" "Admin Users" "Button"
    Then the admin is on the "admin_users" page
    When the admin clicks on the "admin_users" page "View Admin User" "Button"
    Then the "current_admin" page "Admin User" "Nick Name" is: "EMPTY" // Not fully implemented
    Then the "current_admin" is "Created At" "Date"
    Then the "current_admin" page "Admin User" "Email" is: "admin@user.com"
    
  Scenario: Verify that the admin can update new administrator user details.
    Given the admin is on the "admin_users" "current_admin" page
    When the admin clicks on the "current_admin" page "Edit Admin User" "Button"
    Then the admin is on the "admin_edit" page
    Then the admin "Input" "Edited Email" in the "admin_edit" page as: "admin1@user.com"
    Then the admin "Input" "Edited Password" in the "admin_edit" page as: "admin1234"
    Then the admin "Input" "Edited Password Confirmation" in the "admin_edit" page as: "admin1234"
    When the admin clicks on the "admin_edit" page "Update Admin User" "Button"
    Then the "current_admin" is "Updated At" "Date"
    Then the "header" "Successfully" "Message" is: "Admin user was successfully updated."

  Scenario: Verify that the admin can delete administrator user
    Given the admin is on the "admin_users" "current_admin" page
    When the admin clicks on the "current_admin" page "Delete Admin User" "Button"
    When the admin "accepts" alert
    Then the "header" "Successfully" "Message" is: "Admin user was successfully destroyed."
    


  
  