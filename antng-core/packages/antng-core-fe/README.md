# Component Library Readme

This repository contains a Front-End component library built with Tailwind CSS, TypeScript, React, and Storybook.

## Installation

To get started with the component library, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/your-username/component-library.git
   ```

2. Navigate to the project directory:

   ```
   cd component-library
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

## Usage

### Development

To run the development environment and start Storybook:

```
npm run storybook
```

This command will start the Storybook server, allowing you to preview and interact with the available components in your browser.

### Build

To build the component library for production:

```
npm run build
```

This command will generate a production-ready bundle of the component library, which can be consumed in your projects.

### Using Components

To use the components in your projects, you have multiple options:

1. Importing individual components:

   ```jsx
   import { Button } from "component-library";

   // Use the Button component
   <Button onClick={handleClick}>Click me</Button>;
   ```

2. Importing the entire library:

   ```jsx
   import * as Components from "component-library";

   // Use the Button component
   <Components.Button onClick={handleClick}>Click me</Components.Button>;
   ```

Make sure to consult the Storybook documentation and component examples to understand how to use each component effectively.

## Folder Structure

The repository's folder structure is organized as follows:

- `src`: Contains the source code for the component library.
  - `components`: Houses individual components.
  - `styles`: Stores Tailwind CSS styles and custom styles.
- `stories`: Includes Storybook stories for showcasing the components.
- `dist`: Contains the production build of the component library.
- `storybook`: Configures the Storybook environment and settings.

## Contributing

Contributions are welcome! If you'd like to contribute to the component library, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they pass the existing tests.
4. Commit your changes and push them to your forked repository.
5. Submit a pull request with a detailed description of your changes.

## License

The component library is open source and released under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as per the terms of the license.

## Acknowledgements

This component library was built with the help of various open-source technologies and libraries, including Tailwind CSS, TypeScript, React, and Storybook. We express our gratitude to the creators and maintainers of these tools for their valuable contributions to the development community.
