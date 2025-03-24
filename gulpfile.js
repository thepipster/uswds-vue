import * as uswds from "@uswds/compile";

uswds.settings.version = 3;
uswds.paths.dist.css = './src/styles/uswds/css';
uswds.paths.dist.theme = './src/styles/uswds/theme';
uswds.paths.dist.fonts = './src/styles/uswds/fonts';
uswds.paths.dist.img = './src/styles/uswds/img';

/**
* Exports
* Add as many as you need
*/
//exports.init = uswds.init;
//exports.watch = uswds.watch;

export const compile = uswds.compile;
export const init = uswds.init;
export const watch = uswds.watch;
export const copyAll = uswds.copyAll;
export const compileSass = uswds.compileSass;


