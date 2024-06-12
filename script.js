$(document).ready(function () {
    // Function to roll a single die
    function rollDie() {
        return Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
    }

    // Function to update the display of a single die based on its value
    function updateDie(die, value) {
        // Reset all dots
        die.find('.dot').removeClass('active');

        // Activate the dots based on the value
        switch (value) {
            case 1:
                die.find('#dot4').addClass('active');
                break;
            case 2:
                die.find('#dot1').addClass('active');
                die.find('#dot7').addClass('active');
                break;
            case 3:
                die.find('#dot1').addClass('active');
                die.find('#dot4').addClass('active');
                die.find('#dot7').addClass('active');
                break;
            case 4:
                die.find('#dot1').addClass('active');
                die.find('#dot2').addClass('active');
                die.find('#dot6').addClass('active');
                die.find('#dot7').addClass('active');
                break;
            case 5:
                die.find('#dot1').addClass('active');
                die.find('#dot2').addClass('active');
                die.find('#dot4').addClass('active');
                die.find('#dot6').addClass('active');
                die.find('#dot7').addClass('active');
                break;
            case 6:
                die.find('#dot1').addClass('active');
                die.find('#dot2').addClass('active');
                die.find('#dot3').addClass('active');
                die.find('#dot5').addClass('active');
                die.find('#dot6').addClass('active');
                die.find('#dot7').addClass('active');
                break;
        }
    }
    
    // Function to roll both dice and update their display
    function rollDice() {
        // Add roll animation class to both dice
        $('#dice_1').addClass('roll');
        $('#dice_2').addClass('roll');

        // Remove the roll animation class after 1 second
        setTimeout(function () {
            $('#dice_1').removeClass('roll');
            $('#dice_2').removeClass('roll');

            // Generate random numbers for each die
            var value1 = rollDie($('#dice_1'));
            var value2 = rollDie($('#dice_2'));

            // Update the display of each die
            updateDie($('#dice_1'), value1);
            updateDie($('#dice_2'), value2);
        }, 1000); // 1 second delay to match the duration of roll animation
    }

    // Add click event listener to the button
    $('button').click(function () {
        // Roll the dice when the button is clicked
        rollDice();
    });
});
