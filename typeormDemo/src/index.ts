const main = async () => {};

main().catch((error) => {
  console.error(error.stack);
  process.exit(1);
});
