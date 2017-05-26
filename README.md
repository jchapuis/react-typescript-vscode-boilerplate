# reactive
Material for reactive programming course

## Setup guide
1. Install node.js and npm package manager: https://nodejs.org/en/, or e.g. `sudo apt-get nodejs`, `sudo apt-get install npm`, `sudo apt-get install nodejs-legacy` (this latter one installs a symlink for `node` command to `nodejs`)
2. Install visual studio code: https://code.visualstudio.com/
4. Install git (if required), e.g. `sudo apt-getnpm  install git` 
3. Fork this repository in gitbug, and clone your repo: `git clone https://github.com/jchapuis/reactive.git`
4. Run `npm install` in the root directory of this repo. 
5. Run `npm start` or hit F5 in visual studio code to startup the application: it becomes available on http://localhost:3000

## rxjs support
`npm install rxjs --global`

then to resolve dependencies, run
`npm install` in the root repository directory (this will fetch dependencies from `package.json`)

## jquery support
`npm install typings --global` to install the typescript definitions manager

then you can do

`typings install dt~jquery --save` 

in order to install jquery typings: this will create the `typings` directory and all required files (`typings.json`)


## webpack
install webpack globally

`npm install -g webpack`

need to install these dependencies to support typescript compilation from webpack
`npm install --save-dev awesome-typescript-loader`

and for source maps to work
`npm install --save-dev source-map-loader`

then to make the bundled build, run `webpack`

## files description
- `package.json`: npm configuration file, lists all dependencies of the project, contains building scripts and package meta-information
- `tsconfig.json`: typescript compiler options
- `tslint.json`: typescript linter options & rules configuration
- `webpack.config.js`: webpack configuration file
- `.vscode/extensions.json`: recommended visual studio code extensions
- `.vscode/launch.json`: configuration of what happens when pressing F5 in visual studio code
- `.vscode/settings.json`: settings for visual studio code and extensions
- `.vscode/tasks.json`: configuration of visual studio code tasks, will delegate to npm commands and e.g. support parsing console output from webpack to find out about errors  

## links
The boilerplate is inspired from https://github.com/skolmer/react-hot-boilerplate-vscode and https://github.com/tomduncalf/typescript-react-template