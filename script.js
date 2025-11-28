function firstChar(str) {
    // Step 2: Trim the string
    let trimmedStr = str.trim();
    
    // Step 3: Check if the trimmed string is empty
    if (trimmedStr.length === 0) {
        return ''; // Return empty string
    }
    
    // Step 4: Return the first character
    return trimmedStr[0]; // Return the first character
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
