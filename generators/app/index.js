'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the solid ${chalk.red('generator-deno-starter-kit')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Would you like to root name to be called?',
        default: 'my-project'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.name = props.name;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dev/'),
      this.destinationPath(`${this.name}/`)
    );
  }

  install() {
    this.installDependencies();
  }
};
