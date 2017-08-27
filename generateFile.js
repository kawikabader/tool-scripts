/**
 * @file Generate a file using Node's file system API
 */

// Using require, as 'import' is not yet supported in NodeJS
const fs = require('fs');

// Location is set in correlation to where this script is run
const createdFileLocation = "../test.txt";
const fileContent = "Hey there!";

fs.writeFile(createdFileLocation, fileContent, err => {
  if (err) {
    return console.error(err);
  }

  console.log("The file was saved!");
});