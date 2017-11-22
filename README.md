# Teaching React Interactive

![React + Redux](./presentation-slides/assets/images/ReactRedux.png)
### React + Redux

> An interactive tutorial to knowledge share some basic React+Redux knowledge.

## Setting up the project

### Prerequisits

Install the following Chrome extensions..

[https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd]
[https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi]

### Start the project

To start the project it is as easy as running the one following commend..

`yarn start`

Then opening `localhost:3000` or 3001/3002 is port 3000 was taken.

### Running the slides (Reveal.js Presentation)

`cd presentation-slides`

`yarn && yarn start`

Open your browser to `localhost:8000`

## Chapter 1: React Basics

### 1.1 JSX

Pull the v1.1 Tag of the master branch

--> Open the file `src/app/index.js`

#### 1.1.1 Logic to choose components

Pull the v1.1.1 tag from the master branch

--> Open file `src/containers/about/aboutUs.js`

### 1.2 Props and State

Pull the v1.2 tag of the master branch

--> open `src/containers/about/aboutClassComponent.js`
--> then open `src/containers/about/aboutUs.js`

#### 1.2.1 State

Pull the v1.2.1 tag of the master branch

--> open `src/containers/home/index.js`

### 1.3 Components

Pull the v1.3 tag of the master branch

--> open `src/containers/about/aboutUs.js`

#### 1.3.1 Class Components and Lifecycle Methods

Pull the v1.3.1 tag of the master branch

--> open `src/containers/about/aboutClassComponent.js`


## Chapter 2 Redux Basics

### 2.1 Actions

Pull the v2.1 tag of the master branch

--> open `src/modules/actions/counterActions.js`
--> open `src/modules/index.js`
--> open `src/containers/home/index.js`

### 2.2 Reducers

Pull the v2.2 tag of the master branch

--> open `src/modules/actions/counterActions.js`
--> open `src/modules/actions/counterReducers.js`
--> open `src/modules/index.js`
--> open `src/containers/home/index.js`

### 2.3 Store

Pull the v2.3 tag from master branch

--> open `src/store.js`

### 2.4 Data Flow

## The future expansion of this talk

### Testing

Testing in both React and Redux should have a runthrough.
- Redux testing may prove to be easier to explain in the sample project that React testing.
- Both should be explored at some level

Enzyme should be used since it is used in production and adds a lot of useful syntax that Jest does not have.

Mocha, Chai should maybe also have some form of explanation as well in the presentation.

? Are any of these requirements or should a quick run-through be done of each?

### Rules and guidelines

List some rules and guidelines to writing good React and Redux code.
- List the idea
- Explain what makes it a good pattern
- Explain why other patterns are not as good
- maybe, show other patterns and how they work