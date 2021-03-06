import chalk, {Chalk} from 'chalk'

export const menus: { [key: string]: any } = {
    main: (p_chalk: Chalk) => `
    thekla [${p_chalk.blue('command')} | ${p_chalk.green(`configFile`)}] ${p_chalk.magenta(`options`)}
    
    ${p_chalk.blue(`commands:
    help .............. print help menu
    version ........... show version number`)}
    ${p_chalk.green(`configFile ........ relative path to the thekla config file
        See: HelpSite for details on how to create a config file.`)}
    
    ${p_chalk.magenta(`options:
    All config file parameter can be overwritten by command line parameters e.g.:
    
    --specs=${p_chalk.magenta.bold(`PATH_TO_SPEC_OR_GLOB`)} .................................................... the spec files to execute (glob possible)
    --testFramework.frameworkName=${p_chalk.magenta.bold(`FRAMEWORK_TO_USE`)} .................................. name of the test framework to use (jasmine | cucumber)
    --seleniumConfig.capabilities.browserName=${p_chalk.magenta.bold(`BROWSER_TO_USE`)} ........................ browser to use for selenium tests`)}`,

    specs: `
    No Specs found in config file. 
    Please specify one as command line parameter or as a config file attribute
    
    Use:
        --specs=glob|dir|file ...... on command line or
        specs: [glob|dir|file] ..... in config file
            `,

    ccMultipleFeatureFiles: `
    Passing multiple features files in an array is not supported yet, please pass in a single string as described in: https://github.com/cucumber/cucumber-js/blob/master/docs/cli.md#running-specific-features.`
};

export const mainMenu = (level: number) => {
    const ctx = new chalk.constructor({level: level});

    return menus.main(ctx);
};

export const helpText = (args: any) => {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0];

    console.log(menus[subCmd] || menus.main(chalk))
};

export const printHelpText = (type: string) => {
    console.log(menus[type] || menus.main(chalk));
};