import { expect } from 'chai';
import hre from 'hardhat';

import { ERC1155MintableExtension, Multicall } from '../../src/typechain';
import { setupTest } from '../setup';
import { deployDiamond } from '../utils/diamond';

const deployERC1155 = async () => {
  return await deployDiamond({
    facets: ['ERC1155'],
    initializations: [
      {
        facet: 'ERC1155SupplyOwnable',
        function: 'setMaxSupply',
        args: [33, 1000],
      },
    ],
  });
};

describe('ERC1155MintableExtension', function () {
  it('should not be able to mint when external account calls', async function () {
    const { userA } = await setupTest();

    const diamond = await deployERC1155();

    const mintableFacet = await hre.ethers.getContractAt<ERC1155MintableExtension>(
      'ERC1155MintableExtension',
      diamond.address,
    );

    await expect(
      mintableFacet
        .connect(userA.signer)
        ['mintByFacet(address,uint256,uint256,bytes)'](userA.signer.address, 33, 1, '0x'),
    ).to.be.revertedWith('SenderIsNotSelf()');
  });

  it('should not be able to mint when calling via multicall', async function () {
    const { userA } = await setupTest();

    const diamond = await deployERC1155();

    const multiCallContract = await hre.ethers.getContractAt<Multicall>('Multicall', diamond.address);

    const mintableFacet = await hre.ethers.getContractAt<ERC1155MintableExtension>(
      'ERC1155MintableExtension',
      diamond.address,
    );

    // @ts-ignore
    const callData = mintableFacet.interface.encodeFunctionData('mintByFacet(address,uint256,uint256,bytes)', [
      userA.signer.address,
      33,
      1,
      '0x',
    ]);

    await expect(multiCallContract.connect(userA.signer).multicall([callData])).to.be.revertedWith('SenderIsNotSelf()');
  });

  it('should not be able to mint when calling via nested multicall', async function () {
    const { userA } = await setupTest();

    const diamond = await deployERC1155();

    const multiCallContract = await hre.ethers.getContractAt<Multicall>('Multicall', diamond.address);

    const mintableFacet = await hre.ethers.getContractAt<ERC1155MintableExtension>(
      'ERC1155MintableExtension',
      diamond.address,
    );

    // @ts-ignore
    const callData = mintableFacet.interface.encodeFunctionData('mintByFacet(address,uint256,uint256,bytes)', [
      userA.signer.address,
      33,
      1,
      '0x',
    ]);

    const callDataNested = multiCallContract.interface.encodeFunctionData('multicall', [[callData]]);

    await expect(multiCallContract.connect(userA.signer).multicall([callDataNested])).to.be.revertedWith(
      'SenderIsNotSelf()',
    );
  });
});
