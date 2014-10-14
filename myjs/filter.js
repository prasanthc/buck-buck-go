bbgApp.filter('atCharacterLimit', function() {
    return function(input) {
        if (typeof (input) !== "undefined" && input !== null) {
            if (input.length > 200) {
                return input.substring(0, 200) + "...";
            }            
        }
        
        return input;
    };
});

bbgApp.filter('rtCharacterLimit', function() {
    return function(input) {
        if (typeof (input) !== "undefined" && input !== null) {
            if (input.length > 40) {
                return input.substring(0, 40) + "...";
            }            
        }
        
        return input;
    };
});