async function log(awaitedMethod) {
  try {
    console.log(await awaitedMethod);
  } catch (error) {
    throw new Error(error.toString());
  }
}

module.exports = log;
