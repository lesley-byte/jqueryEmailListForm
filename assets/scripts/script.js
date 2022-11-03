$(document).ready( () => {
    // handle click on "join_list" button
    $('#join_list').click( () => {
        // get values from email1 email2 and first_name fields
        let email1 = $('#email_1').val();
        let email2 = $('#email_2').val();
        let isValid = true;
    
        // asks if email1 and email2 are empty and if they are, it will display an error message
        if (email1 == '') {
            console.log('email1 is empty');
            $('#email_1').next().text('This field is required.');
            isValid = false;
        } else {
            $('#email_1').next().text('');
        }
        if (email2 == '') {
            console.log('email2 is empty');
            $('#email_2').next().text('This field is required.');
            isValid = false;
        } else if (email1 != email2) {
            $('#email_2').next().text('The email addresses must match.');
            isValid = false;
        } else {
            $('#email_2').next().text('');
        }

        // if first_name is empty, it will display an error message
        if ($('#first_name').val() == '') {
            console.log('first_name is empty');
            $('#first_name').next().text('This field is required.');
            isValid = false;
        }
        else {
            $('#first_name').next().text('');
        }
        // submit the form if all entries are valid
        if (isValid) {
            $('#email_form').submit();
        } return;
    });

    // handle click on "clear_entries" button
    $('#clear_entries').click( () => {
        // clear all text boxes
        $('#email1').val('');
        $('#email2').val('');
        $('#first_name').val('');
        // set focus on first text box
        $('#email1').focus();
    }
    );
    $('#email1').focus();
});