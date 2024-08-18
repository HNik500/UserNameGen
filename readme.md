


# easyname-generator

**easyname-generator** is a lightweight JavaScript function designed to generate unique names by appending two random letters and a digit to a given base name. It’s perfect for creating unique usernames, IDs, or other identifiers where a bit of randomness is needed.

## Installation

You can install the package via npm:

```bash
npm install namegen
```

## Usage

Here’s a basic example of how to use the `NameGen` function:

```javascript
const NameGen = require('easyname-generator');

const uniqueName = NameGen("John");
console.log(uniqueName); // Example Output: "Johnaf7"
```

### Functionality

- **Input:** A base name (string).
- **Output:** A new name formed by appending two random letters and one random digit to the base name.

### Example

```javascript
console.log(NameGen("Alice")); // Possible Output: "Alicebx2"
console.log(NameGen("Bob"));   // Possible Output: "Bobyt5"
```

## How It Works

The `NameGen` function works by:

1. Generating two random letters from the English alphabet.
2. Generating a random digit between 0 and 9.
3. Appending these characters to the provided base name.

This ensures that the generated name is unique and somewhat unpredictable.



## Contributing

If you have any ideas, suggestions, or issues, feel free to open an issue or submit a pull request.

## Author

Nikhil Hazari

## Contact

For any inquiries or support, please contact me at: **nikhilhazari100@gmail.com**

## GITHUB
https://github.com/HNik500/UserNameGen
---
