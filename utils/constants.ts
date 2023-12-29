export const CTF_ABI = [
  {
    type: "function",
    name: "mintTokenWithProof",
    inputs: [
      { name: "nonce", type: "uint256", internalType: "uint256" },
      { name: "proof", type: "uint256[24]", internalType: "uint256[24]" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export const SECRET_HASH =
  "15514860137957992411716963528347796652230224498239149843465251542348029236386";

export const CTF_ADDRESS = "0x4221C8A2fD82f6949Cb60d35405f5a99e8E1016A";
