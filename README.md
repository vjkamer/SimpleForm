## Description

This project was built to represent the practical skills working with a serveral forms and data flow between them. Project itself is Single Page Aplication built using [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/), which main purpose is to **render UI form** based on user input in valid **JSON** format.

## Installation

1. Clone the repository

```
git@github.com:vjkamer/SimpleForm.git
```

or

```
https://github.com/vjkamer/SimpleForm.git
```

2. Install NPM packages

```
npm install
```

or

```
yarn add
```

## How to build & run the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Run

Run the app in the development mode:

```
npm start
```

### Build

Build the app for production:

```
npm run build
```

## Notes

- I've used typescript instead of flow because flow extention for VS Code on my PC didn't run well so I decided to use install create react app with a typescript template to minimize time solving errors with my IDE and concentrate more on a project itself.
- I've used [formik](https://formik.org/) because I like this library it well maintained and has all the features (helpers) which will save my time while building the project and furthemore while I'm building the really simple forms it can be improved in a future using this library.
- I've used styled-components because it is just convinient to me. The project is small so there is no big difference using sass or styled component.

### Potential improvements

I understand that there's a lot of things that should be improved:

- set up husky & lint staged to avoid pushing the bad code.
- improve json input validation to avoid breaking result form.
- add validation to the dynamic input fields it is better to show user that his input is not valid while he is typing rather then showing error message on submit.

### Testing

In order to test the application you can use [sample.json](./src/components//sampleInput.json) file I've created. Simply copy-paste json into the configuration form and click apply.
Everything is typed with typescript (shouldn't be hard to migrate to flow if needed). So you can find acceptable Input format in [type.ts](./src/components/types.ts).

I've set up a basic json validation, so you can try to insert invalid json and see the error.
