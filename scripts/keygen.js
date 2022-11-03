const { isReady, PrivateKey, shutdown } = require("snarkyjs");

async function generateKeypair() {
  await isReady;
  const privateKey = PrivateKey.random();
  const publicKey = privateKey.toPublicKey();
  const encodedPrivateKey = privateKey.toBase58();
  const encodedPublicKey = publicKey.toBase58();

  console.log({ privateKey: encodedPrivateKey, publicKey: encodedPublicKey });
}

generateKeypair().then(shutdown);
