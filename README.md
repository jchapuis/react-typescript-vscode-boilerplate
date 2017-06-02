# Visual Studio Code - Typescript - React - Redux-Observable Boilerplate
Boilerplate for hot-reload react-redux-observable Typescript experience in Visual Studio Code

## Setup guide
1. Install node.js and npm package manager: https://nodejs.org/en/, or e.g. `sudo apt-get nodejs`, `sudo apt-get install npm`, `sudo apt-get install nodejs-legacy` (this latter one installs a symlink for `node` command to `nodejs`)
2. Install visual studio code: https://code.visualstudio.com/
4. Install git (if required), e.g. `sudo apt-get npm  install git` 
3. Fork this repository in gitbug, and clone your repo: `git clone https://github.com/jchapuis/reactive.git`
4. Run `npm install` in the root directory of this repo, this downloads all dependencies and tools.
6. Run `npm build` to build the application (this launches webpack behind the scenes) 
5. Run `npm run start` or hit F5 in visual studio code to startup the application: it becomes available on http://localhost:3000

## Configuration files description
- `package.json`: npm configuration file, lists all dependencies of the project, contains building scripts and package meta-information
- `tsconfig.json`: typescript compiler options (inspired from https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
- `tslint.json`: typescript linter options & rules configuration
- `webpack.config.js`: webpack configuration file
- `.vscode/extensions.json`: recommended visual studio code extensions
- `.vscode/launch.json`: configuration of what happens when pressing F5 in visual studio code
- `.vscode/settings.json`: settings for visual studio code and extensions
- `.vscode/tasks.json`: configuration of visual studio code tasks, will delegate to npm commands and e.g. support parsing console output from webpack to find out about errors  

## Shortcuts
CRTL+SHIFT+B: Build (runs `npm run build`)
F5: Run application and open chrome window (note that due to a vscode bug when stopping the debug session the server does not shut down, and you need to 'terminate running task')
CTRL+SHIFT+T: Terminate running task (need to be customized, not built-in)

## Links
Webpack guidebook: https://survivejs.com/webpack/
Simple boilerplate from which this was inspired: https://github.com/Glavin001/react-hot-ts
Another interesting guide (which involves Babel - we don't use it):
http://blog.tomduncalf.com/posts/setting-up-typescript-and-react/

## Credits
The project boilerplate is mostly inspired from https://github.com/Glavin001/react-hot-ts
Other boilerplates worth mentionning:
https://github.com/skolmer/react-hot-boilerplate-vscode and https://github.com/tomduncalf/typescript-react-template