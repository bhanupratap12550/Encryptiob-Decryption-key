const EncryptRsa = require('encrypt-rsa').default;
const encryptRsa = new EncryptRsa();

const { privateKey: privateKey1, publicKey: publicKey1 } = encryptRsa.createPrivateAndPublicKeys();
const { privateKey: privateKey2, publicKey: publicKey2 } = encryptRsa.createPrivateAndPublicKeys();



// FOR USER 1
// here user2 will be sharing the text message to user 1 in encrypted formart
// by using publicKey of user1, (publicKey1)
const encryptedText1 = encryptRsa.encryptStringWithRsaPublicKey({ 
    text: "Hello, I am  user2  and i am  going to use your publickey: publickey1",   
    publicKey: publicKey1,
});
console.log("publicKey1: ",encryptedText1);
// user1 received encrypted text msg format from user2 
// and  able to decrypt this text using their privatekey , (privatekey1)
const decryptedText1 = encryptRsa.decryptStringWithRsaPrivateKey({ 
    text: encryptedText1,
    privateKey: privateKey1
  });
console.log("privateKey1: " ,decryptedText1);



// FOR USER 2
// user1  will send text message to user2 in Encrypted format
// Now by  using publicKey of user2, i.e., publicKey2
const encryptedText2 = encryptRsa.encryptStringWithRsaPublicKey({ 
    text: "Hello, I am a user1  and  i am going to use your publickey: publickey2",   
    publicKey: publicKey2,
});
console.log("publicKey2: ",encryptedText2);

// user2  has received the  encrypted form text msg  from user1 
// andd now he is able to decrypt this text using their privatekey , (privatekey2)
const decryptedText2 = encryptRsa.decryptStringWithRsaPrivateKey({ 
    text: encryptedText2,
    privateKey: privateKey2
  });
console.log("privateKey2: ",decryptedText2);