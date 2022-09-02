# Description

This project is a Signle Page Application, built to prepresent the rendered UI Form based on JSON Input.

## Installation

1. Clone the repo
2. Install NPM packages

## How to build & run the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Run

Run the app in the development mode: `npm start`

### Build

Build the app for production: `npm run build`

## Notes

- I've used typescript instead of flow because flow extention for VS Code on my PC didn't run well si I descided to use install create react app with a typescript template so I do not have to spend time to configure everything.
- I've used [formik](https://formik.org/) because it is one of the popular open source form library whith a tested solutions for input validation, formatting and error handling.

### Potential improvements

I understand that there's a lot of things that should be improved:

- set up husky & lint staged
- improve json input validation
- add validation to the dynamic input fields

### Testing

In order to test the application you can use [sample.json](./src/components//sampleInput.json) file I've created. Simpli copy-paste json into the configuration form and click apply.
Everything is typed with typescript (shouldn't be hard to migrate to flow if needed). So you can find acceptable Input format in [type.ts](./src/components/types.ts).

I've set up a basic json validation, so you can try to insert invalid json and see the error.
