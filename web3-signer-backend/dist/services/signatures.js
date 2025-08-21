import { verifyMessage } from "ethers";
export function verifySignature(message, signature) {
    try {
        const signer = verifyMessage(message, signature);
        return { isValid: true, signer };
    }
    catch {
        return { isValid: false, signer: null };
    }
}
//# sourceMappingURL=signatures.js.map