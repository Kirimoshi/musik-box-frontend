@002_admin @adminUsersModeration

Feature: Admin "CRUD" new administrators
  Scenario: Verify that the admin user log in with valid data
    Given the user "login" to the system as the admin user
    Then the user is on the "admin" page

  Scenario: Verify that the admin user redirects to the "admin_users" page
    Given the user is on the "admin" page
    When the user clicks on the "header" "Admin Users" "Button"
    Then the user is on the "admin_users" page

  Scenario: Verify that the admin can create new administrators by providing the necessary information: Email and Password
    Given the user is on the "admin_users" page
    When the user clicks on the "admin_users" page "New Admin User" "Button"
    Then the user is on the "new_admin" page
    Then the user "Input" "Email" in the "new_admin" page as: "admin@user.com"
    Then the user "Input" "Password" in the "new_admin" page as: "admin123"
    Then the user "Input" "Password Confirmation" in the "new_admin" page as: "admin123"
    When the user clicks on the "new_admin" page "Create Admin User" "Button"
    Then the user is on the "current" "admin_users" page
    Then "new_admin" page "Successfully" "Message" text is: "Admin user was successfully created."

  Scenario: Verify that the admin can view administrator user details
    When the user clicks on the "header" "Admin Users" "Button"
    Then the user is on the "admin_users" page
    When the user clicks on the "admin_users" page "View Admin User" "Button"
    Then "new_admin" page "Admin User" "Nick Name" text is: "EMPTY" // Not fully implemented
    Then the "new_admin" user "Created At" "Date"
    Then the "new_admin" user "Updated At" "Date"
    Then "new_admin" page "Admin User" "Email" text is: "admin@user.com"
    
  Scenario: Verify that the admin can update new administrator user details.
    Given the user is on the "current" "admin_users" page
    When the user clicks on the "new_admin" page "Edit Admin User" "Button"
    Then the user is on the "edit" page
    Then the user "Input" "Edited Email" in the "edit" page as: "admin1@user.com"
    Then the user "Input" "Edited Password" in the "edit" page as: "admin1234"
    Then the user "Input" "Edited Password Confirmation" in the "edit" page as: "admin1234"
    When the user clicks on the "edit" page "Update Admin User" "Button"
    Then "new_admin" page "Successfully" "Message" text is: "Admin user was successfully updated."

  Scenario: Verify that the admin can delete administrator user
    Given the user is on the "current" "admin_users" page
    When the user clicks on the "new_admin" page "Delete Admin User" "Button"
    When the user "accepts" alert
    Then "admin_users" page "Successfully" "Message" text is: "Admin user was successfully destroyed."
    


  
  