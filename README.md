# TypeScript Pokedex

This project is a Pokedex built using TypeScript, HTML, and CSS. It allows users to view a list of Pokémon, fetching their data from the public Pokémon API.

## Project Structure

The project is organized as follows:

- `index.html`: Main page that loads the styles and the main script.
- `public/`: Folder containing static files.
  - `js/`: Contains `app.js`, the JavaScript file compiled from TypeScript.
  - `style.css`: Global styles for the application.
- `src/`: Folder containing the TypeScript source code.
  - `app.ts`: Main TypeScript file that handles the application logic.
- `tsconfig.json`: Configuration for the TypeScript compiler.

## Features

- **Pokémon Display**: Shows a list of Pokémon with their image, name, and type.
- **Pokémon API Integration**: Dynamically fetches Pokémon data using the public Pokémon API.

## Technologies Used

- HTML
- CSS
  - Use of `@import` for external fonts.
  - Styles for presenting the Pokémon list and basic animations.
- JavaScript / TypeScript
  - Use of asynchronous functions to fetch data from the API.
  - DOM manipulation to display Pokémon data.

## How to Run the Project

1. Clone the repository to your local machine.
2. Open `index.html` in your browser to see the application in action.

## Contributing

If you wish to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Submit a pull request for review.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
