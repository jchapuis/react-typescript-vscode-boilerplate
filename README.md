# reactive
Material for reactive programming course

## Setup guide
1. Install node.js and npm package manager: https://nodejs.org/en/, or e.g. `sudo apt-get nodejs`, `sudo apt-get install npm`, `sudo apt-get install nodejs-legacy` (this latter one installs a symlink for `node` command to `nodejs`)
2. Install visual studio code: https://code.visualstudio.com/
4. Install git (if required), e.g. `sudo apt-get npm  install git` 
3. Fork this repository in gitbug, and clone your repo: `git clone https://github.com/jchapuis/reactive.git`
4. Run `npm install` in the root directory of this repo, this downloads all dependencies and tools.
6. Run `npm build` to build the application (this launches webpack behind the scenes) 
5. Run `npm run start` or hit F5 in visual studio code to startup the application: it becomes available on http://localhost:3000

## Files description
- `package.json`: npm configuration file, lists all dependencies of the project, contains building scripts and package meta-information
- `tsconfig.json`: typescript compiler options
- `tslint.json`: typescript linter options & rules configuration
- `webpack.config.js`: webpack configuration file
- `.vscode/extensions.json`: recommended visual studio code extensions
- `.vscode/launch.json`: configuration of what happens when pressing F5 in visual studio code
- `.vscode/settings.json`: settings for visual studio code and extensions
- `.vscode/tasks.json`: configuration of visual studio code tasks, will delegate to npm commands and e.g. support parsing console output from webpack to find out about errors  

## Links
The project boilerplate is inspired from https://github.com/skolmer/react-hot-boilerplate-vscode and https://github.com/tomduncalf/typescript-react-template