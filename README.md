# Event Registration Platform

## Scripts

### `install:all`

- Command: `npm install & npm run install:backend && npm run install:frontend`
- Description: This script installs all dependencies for both backend and frontend.

### `install:backend`

- Command: `cd back_end && npm install`
- Description: This script installs backend dependencies.

### `install:frontend`

- Command: `cd front_end && npm install`
- Description: This script installs frontend dependencies.

### `start`

- Command: `concurrently "npm run start:backend" "npm run start:frontend"`
- Description: This script concurrently starts both the backend and frontend servers.
  
### `start:backend`

- Command: `cd back_end && npm run dev`
- Description: This script changes the directory to `back_end` and starts the backend server in development mode.

### `start:frontend`

- Command: `cd front_end && npm run dev`
- Description: This script changes the directory to `front_end` and starts the frontend server in development mode.

## Project Information

- **Author**: @ocamilomontealegre
- **License**: ISC

## Dependencies

- **concurrently**: "^8.2.2"
  - Description: This dependency allows running multiple commands concurrently. It's utilized in the `start` script to run both backend and frontend servers simultaneously during development.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository.
2. Install dependencies by running `npm install`.
3. Use the available scripts to start the servers or perform other tasks as needed.

Feel free to reach out to @ocamilomontealegre for any inquiries or contributions regarding this project.