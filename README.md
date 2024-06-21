# SVG Logo Maker

## Description

SVG Logo Maker is a Node.js command-line application that allows users to generate a simple logo in SVG format based on user inputs. Users can customize the text, text color, shape, and shape color for the logo. The generated logo is saved as an SVG file and can be viewed in any web browser.

## Walkthrough Video

[Link to walkthrough video](./asset/demovideo.mov)

## Setup Instructions

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd SVG-Logo-Maker
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the application**:
    ```sh
    node index.js
    ```

4. **Run the tests**:
    ```sh
    npx jest
    ```

## Usage Instructions

Start the application by running:
```sh
node index.js
```

Follow the prompts to enter the following details:

- Text: Enter up to three characters for the logo text.
- Text Color: Enter a color keyword or hexadecimal value for the text color.
- Shape: Choose a shape for the logo (Circle, Triangle, Square).
- Shape Color: Enter a color keyword or hexadecimal value for the shape color.

The application will generate an SVG file named `logo.svg` in the `examples` directory.

Open the `logo.svg` file in a web browser to view the generated logo.

## Project Structure

```
SVG-Logo-Maker/
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
│   ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
│   ├── shapes.test.js  // Jest tests for shapes
│   └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions
```

## Dependencies

- Inquirer for user prompts
- Jest for testing

## License

This project is licensed under the MIT License.

