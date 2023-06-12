import AES from "crypto-js/aes";
import { enc } from "crypto-js";
import { keys } from "./keys";
import CryptoJS from "crypto-js";

export const encryptData = (str: any) => {
  if (keys.encryptKey) {
    const ciphertext = AES.encrypt(str, keys.encryptKey);
    return encodeURIComponent(ciphertext.toString());
  }
};

export const decryptData = (str: any) => {
  if (keys.encryptKey) {
    const decodedData = CryptoJS.AES.decrypt(str, keys.encryptKey).toString(
      enc.Utf8
    );
    return decodedData;
  }
};
