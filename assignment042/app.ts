// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.Call show_magicians() to see that the list has actually been modified.

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Define the make_great function
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => "the Great " + magician);
}

// Array of magician's names
let magicians: string[] = ["Merlin", "David Copperfield", "Harry Houdini"];

// Call the make_great function to modify the magicians array
magicians = make_great(magicians);

// Call the show_magicians function to see the modified list
show_magicians(magicians);
