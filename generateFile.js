/**
 * @file Generate a file using Node's file system API
 */

// Using require, as 'import' is not yet supported in NodeJS
const fs = require('fs');

const createdFileLocation = `${process.env.HOME}/Desktop/test.txt`;
const fileContent = "Hey there!";

fs.writeFile(createdFileLocation, fileContent, err => {
  if (err) {
    return console.error(err);
  }

  console.log("The file was saved!");
});