#!/usr/bin/env node

const countEntries = require("../lib/countEntries");
const log = require("../lib/log");

const yargs = require("yargs")
  .usage("Usage: $0 --directory=[path to a directory]")
  .demand("directory")
  .alias("directory", "d")
  .describe("directory", "the directory to count files within.").argv;

log(countEntries(yargs.directory));
