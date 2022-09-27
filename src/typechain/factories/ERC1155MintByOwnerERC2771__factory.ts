/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ERC1155MintByOwnerERC2771,
  ERC1155MintByOwnerERC2771Interface,
} from "../ERC1155MintByOwnerERC2771";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tos",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
    ],
    name: "mintByOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mintByOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061072f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633d6b27061461003b5780635135bec114610050575b600080fd5b61004e61004936600461031b565b610063565b005b61004e61005e36600461042a565b610177565b7fc0ea367cb0174dd5521cd2372c76f8c13e6c1f832c71f1d6e0cbc185c9cc8ed4546001600160a01b031661009661027a565b6001600160a01b0316146100f15760405162461bcd60e51b815260206004820152601d60248201527f4f776e61626c653a2073656e646572206d757374206265206f776e657200000060448201526064015b60405180910390fd5b6040517f0a13c5030000000000000000000000000000000000000000000000000000000081523090630a13c5039061013b908b908b908b908b908b908b908b908b90600401610577565b600060405180830381600087803b15801561015557600080fd5b505af1158015610169573d6000803e3d6000fd5b505050505050505050505050565b7fc0ea367cb0174dd5521cd2372c76f8c13e6c1f832c71f1d6e0cbc185c9cc8ed4546001600160a01b03166101aa61027a565b6001600160a01b0316146102005760405162461bcd60e51b815260206004820152601d60248201527f4f776e61626c653a2073656e646572206d757374206265206f776e657200000060448201526064016100e8565b6040517fb164884b000000000000000000000000000000000000000000000000000000008152309063b164884b90610242908790879087908790600401610685565b600060405180830381600087803b15801561025c57600080fd5b505af1158015610270573d6000803e3d6000fd5b5050505050505050565b6000610284610289565b905090565b7fdb1d5e345c4903e9a32b6674ecc8b1deaddbbb2551474fb34c9d34becbe7f420546000906001600160a01b031633036102ca575060131936013560601c90565b503390565b60008083601f8401126102e157600080fd5b50813567ffffffffffffffff8111156102f957600080fd5b6020830191508360208260051b850101111561031457600080fd5b9250929050565b6000806000806000806000806080898b03121561033757600080fd5b883567ffffffffffffffff8082111561034f57600080fd5b61035b8c838d016102cf565b909a50985060208b013591508082111561037457600080fd5b6103808c838d016102cf565b909850965060408b013591508082111561039957600080fd5b6103a58c838d016102cf565b909650945060608b01359150808211156103be57600080fd5b506103cb8b828c016102cf565b999c989b5096995094979396929594505050565b80356001600160a01b03811681146103f657600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806000806080858703121561044057600080fd5b610449856103df565b93506020850135925060408501359150606085013567ffffffffffffffff8082111561047457600080fd5b818701915087601f83011261048857600080fd5b81358181111561049a5761049a6103fb565b604051601f8201601f19908116603f011681019083821181831017156104c2576104c26103fb565b816040528281528a60208487010111156104db57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561053157600080fd5b8260051b8083602087013760009401602001938452509192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6080808252810188905260008960a08301825b8b8110156105b8576001600160a01b036105a3846103df565b1682526020928301929091019060010161058a565b5060209150838103828501526105cf818a8c6104ff565b905083810360408501526105e481888a6104ff565b84810360608601528581529050818101600586901b820183018760005b8881101561067157848303601f190184528135368b9003601e1901811261062757600080fd5b8a01868101903567ffffffffffffffff81111561064357600080fd5b80360382131561065257600080fd5b61065d85828461054e565b958801959450505090850190600101610601565b50909e9d5050505050505050505050505050565b6001600160a01b038516815260006020858184015284604084015260806060840152835180608085015260005b818110156106ce5785810183015185820160a0015282016106b2565b818111156106e057600060a083870101525b50601f01601f19169290920160a001969550505050505056fea264697066735822122080c7858aa760914165d26b32f1f39b8b8a22806b789dfb4946dafbe8ce858d8e64736f6c634300080f0033";

export class ERC1155MintByOwnerERC2771__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155MintByOwnerERC2771> {
    return super.deploy(overrides || {}) as Promise<ERC1155MintByOwnerERC2771>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155MintByOwnerERC2771 {
    return super.attach(address) as ERC1155MintByOwnerERC2771;
  }
  connect(signer: Signer): ERC1155MintByOwnerERC2771__factory {
    return super.connect(signer) as ERC1155MintByOwnerERC2771__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155MintByOwnerERC2771Interface {
    return new utils.Interface(_abi) as ERC1155MintByOwnerERC2771Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155MintByOwnerERC2771 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155MintByOwnerERC2771;
  }
}