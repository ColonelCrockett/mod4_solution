(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        var greeting;

        if (firstLetter === 'j') {
            greeting = "Good Bye " + names[i];
        } else {
            greeting = "Hello " + names[i];
        }

        // Log the greeting to the console
        console.log(greeting);
    }
})();
