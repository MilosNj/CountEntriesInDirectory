const fs = require("fs/promises");
const path = require("path");

let files = 0;

async function countEntries(folderPath) {
  try {
    const usablePath = path.resolve(folderPath);
    const contents = await fs.readdir(usablePath);

    contents.forEach(() => {
      files++;
    });

    const numberOfEntries = `The number of entries in '${folderPath}' is: ${files}`;

    return numberOfEntries;
  } catch (error) {
    throw new Error(`There was an error. Is ${folderPath} a valid path?`);
  }
}

module.exports = countEntries;
