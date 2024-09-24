import CryptoJS from 'crypto-js';

// Use a strong secret key
const secretKey = CryptoJS.enc.Hex.parse('603deb1015ca71be2b73aef0857d7781f352c073b6108d725a22ad3ec50b3400'); // 256-bit key

// Encrypt function
export function encryptText(text) {
    const encrypted = CryptoJS.AES.encrypt(text, secretKey, {
        mode: CryptoJS.mode.ECB, // Use ECB mode
        padding: CryptoJS.pad.Pkcs7 // Padding scheme
    }).toString();
    return encrypted;
}