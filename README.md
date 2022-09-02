## Description

Project itself is a Single Page Application built using [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/), which main purpose is to **render UI form** based on user input in valid **JSON** format. This app consist of 2 forms tabs, the inital form is accepts the user JSON input, I am calling it as a _Configuration Form_ because this JSON is a set of rules and based on that the UI of second form (I'm calling it _Result Form_) is rendering.

## Installation

1. Clone the repo

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

## How to build & run the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Run

Run the app in the development mode:

```
npm start
```

If somehow the local server is not opened in a browser but it application is running try to access it through default port:

```
http://localhost:3000/
```

### Build

Build the app for production:

```
npm run build
```

## Notes

- I've used typescript instead of flow because flow extension for VS Code on my PC didn't run well so I decided to use install create react app with a typescript template to minimize time solving errors with my IDE and concentrate more on a project itself.
- I've used [formik](https://formik.org/) because I like this library it well maintained and has all the features (helpers) which will save my time while building the project and furthemore while I'm building the really simple forms it can be improved in a future using this library.
- I've used styled-components because it is just convenient to me. The project is small so there is no big difference using sass or styled component.

### Potential improvements

I understand that there's a lot of things that should be improved:

- Set up husky & lint staged it will prevent dev (me) from pushing the bad code into repo so whenever I will try to commit the code git hook will check the commiting files and if there is an errors or some code which is out of configured rules it will prevent dev to push this code to repo. So the repo will be clean and have a better quality code.
- Improve json input validation. This is a must have improvement which will keep the application working with a stricked JSON validation so the result form won't be broken and user will see the more specific error.
- Add validation to the dynamic input fields it is better to show user that his input is not valid while he is typing so user will see the highlighted message that his input value is not correct. Also user can have an option to make the field required or not.

### Testing

In order to test the application you can use [sample.json](./src/components//sampleInput.json) file I've created. Simply copy-paste json into the configuration form and click apply.
Everything is typed with typescript (shouldn't be hard to migrate to flow if needed). So you can find acceptable Input format in [type.ts](./src/components/types.ts).

I've set up a basic json validation, so you can try to insert invalid json and see the error.
