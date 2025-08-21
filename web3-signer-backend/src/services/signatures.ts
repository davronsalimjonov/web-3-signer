import { verifyMessage } from "ethers";

export function verifySignature(message: string, signature: string) {
  try {
    const signer = verifyMessage(message, signature);
    return { isValid: true, signer };
  } catch {
    return { isValid: false, signer: null };
  }
}