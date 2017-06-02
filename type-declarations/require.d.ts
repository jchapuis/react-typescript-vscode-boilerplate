// Create our own declaration for require: see https://github.com/TypeStrong/ts-loader#loading-other-resources-and-code-splitting
// Require allows us to import modules without a type declaration, and is used for hot-reloading the react app
// Any *.ts file in the entire project except those in node_modules will automatically
// be include in the compilation, so we don't need to explicitely tell Typescript to include this file
declare var require: {
    (path: string): any;
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};