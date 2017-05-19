# reactive
Material for reactive programming course

## rxjs support
----------
`npm install rxjs --global`

then to resolve dependencies, run
`npm install` in the root repository directory (this will fetch dependencies from `package.json`)

## jquery support
----------
`npm install typings --global` to install the typescript definitions manager

then you can do

`typings install dt~jquery --save` 

in order to install jquery typings: this will create the `typings` directory and all required files (`typings.json`)

## vs code configuration
----------
to hide the `node_modules, typings` folders in visual studio code, edit the user settings in *Files->Preferences->User Settings* files.exclude pattern

## webpack
----------
install webpack globally

`npm install -g webpack`

need to install these dependencies to support typescript compilation from webpack
`npm install --save-dev awesome-typescript-loader`

and for source maps to work
`npm install --save-dev source-map-loader`

then to make the bundled build, run `webpack`
