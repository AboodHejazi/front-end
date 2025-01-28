# Example Project

This project is built using Node.js and Webpack. It supports both development and production modes and includes modern JavaScript and SCSS processing. Below are some key details about the project and important notes regarding the setup and dependencies.

## Features
- **Webpack Configuration**: Includes separate configurations for development and production.
- **SCSS Support**: Style processing with `sass-loader`, `css-loader`, and `style-loader`.
- **JavaScript Support**: Transpiles modern JavaScript using Babel.
- **Service Worker**: Integrated Workbox for generating a service worker in production.
- **Development Server**: Configured with hot module replacement and custom port (8081).

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd example-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Important Note
To reduce the size of this project during sharing or version control, the `node_modules` directory has been excluded. This significantly reduces the size of the project, as the `node_modules` directory can be regenerated when needed.

### How to Regenerate `node_modules`
1. Ensure `package.json` and `package-lock.json` are present in the root directory.
2. Run the following command:
   ```bash
   npm install
   ```
   This will download and recreate the `node_modules` directory based on the dependencies specified in `package.json`.

## Additional Information
- Make sure to configure `.env` files for environment-specific variables.
- For testing, Jest is pre-configured with sample test structure inside the `tests` directory.
- The `dist` folder is auto-generated and cleaned with every build.

## File Exclusions
The following files and directories are excluded from version control and the final package:
- `node_modules/`
- `dist/`
- `.env`
- Log files (`npm-debug.log*`, `yarn-debug.log*`, `yarn-error.log*`).
- OS-specific files (e.g., `.DS_Store`, `Thumbs.db`).
- IDE-specific settings (e.g., `.vscode/`, `.idea/`).

For any questions or contributions, please reach out to the project maintainer.
