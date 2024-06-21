import fs from 'fs';
import inquirer from 'inquirer';
import { Circle, Triangle, Square } from './lib/shapes.js';

inquirer.prompt([
    { type: 'input', name: 'text', message: 'Enter text (up to 3 characters):', validate: input => input.length <= 3 },
    { type: 'input', name: 'textColor', message: 'Enter text color (keyword or hex):' },
    { type: 'list', name: 'shape', message: 'Choose a shape:', choices: ['Circle', 'Triangle', 'Square'] },
    { type: 'input', name: 'shapeColor', message: 'Enter shape color (keyword or hex):' }
]).then(answers => {
    const { text, textColor, shape, shapeColor } = answers;
    let shapeObj;

    switch(shape) {
        case 'Circle':
            shapeObj = new Circle(shapeColor);
            break;
        case 'Triangle':
            shapeObj = new Triangle(shapeColor);
            break;
        case 'Square':
            shapeObj = new Square(shapeColor);
            break;
    }

    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeObj.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;

    fs.writeFileSync('examples/logo.svg', svgContent);
    console.log('Generated logo.svg');
});
