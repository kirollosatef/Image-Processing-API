# Image Processing API #

## Introduction ##

This is a simple REST API allowing users resize images using the [Sharp](https://sharp.pixelplumbing.com/) Node.js image processing module.

---
## Getting Started ##

### Installing dependencies ###

After cloning the repo, all the project dependencies can be installed using npm:
```
npm i
```

### Running the server ###

To execute the application use the following command in terminal:

```
npm run start
```

the app will then be available on port 3000 by default

### Scripts ###

The following actions can be executed through npm scripts:

#### Transpiling typescript to javascript ####

```
npm run build
```

#### Testing ####

A jasmine testing

```
npm run test
```
###### for example: ######
![Screenshot 2022-04-23 120129](https://user-images.githubusercontent.com/74256854/165322350-879e927e-ec24-4394-9e07-6530c399358b.png)

#### Formatting ####

The code can be automatically formatted using prettier.

```
npm run format
```

#### Linting ####

The code can ba automatically linted using ESlint.

```
npm run lint
```
---
## How to use ##

The API offers one endpoint to access and resize images available in the `src/images` folder.

The endpoint is `api/images` and requires three query params:

| Query Param   | Value         |
| ------------- |:-------------:|
| filename      | the filename (without extension) of one of the images available in the folder |
| height        | it should be a positive integer and less than 1080     |
| width         | it should be a positive integer and less than 1080 |     |



An example of a correct endpoint call would be: 

[http://localhost:3000/api/images?fileName=palmtunnel&height=250&width=220](http://localhost:3000/api/images?fileName=palmtunnel&height=250&width=220)
