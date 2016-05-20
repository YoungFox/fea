#!/usr/bin/env node
var argv = require('yargs').argv;
var path = require('path');
require('shelljs/global');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}
// console.log(argv);
// console.log('hello ', argv.name);
// console.log(process.argv);
// console.log('done');
// console.log(process.argv[2]);
var cwd = process.cwd();
var execPath = process.execPath;
var argv = require('yargs')
  .alias('n', 'name')
  .argv;
// console.log(path.resolve(__dirname,'../src/seed'));
// console.log('hello ', argv.n);
// console.log(argv)

if(argv._[0] == 'init'&&argv._[1]){
	var dir = argv._[1];
	
	cp('-R', path.resolve(__dirname,'../src/seed') ,path.join(cwd,'/',dir) );
	// mkdir(path.join(cwd,'/AAA'));
	// touch();
	// ShellString('hello world').to('output.txt');
	// mkdir('bbb');
	// console.log(pwd().stdout);
	// console.log(cwd);
	console.log('done');
}