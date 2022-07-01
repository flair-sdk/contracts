// SPDX-License-Identifier: AGPL-3.0

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

import "../../../common/meta-transactions/ERC2771ContextOwnable.sol";
import "../../ERC721/extensions/ERC721CollectionMetadataExtension.sol";
import "../../ERC721/extensions/ERC721RoyaltyExtension.sol";
import "../extensions/ERC721AMinterExtension.sol";
import "../extensions/ERC721APerTokenMetadataExtension.sol";
import "../extensions/ERC721AOneOfOneMintExtension.sol";
import "../extensions/ERC721AOwnerMintExtension.sol";
import "../extensions/ERC721AOpenSeaNoGasExtension.sol";

contract ERC721AOneOfOneCollection is
    Ownable,
    ERC165Storage,
    ERC2771ContextOwnable,
    ERC721A,
    ERC721AMinterExtension,
    ERC721CollectionMetadataExtension,
    ERC721AOwnerMintExtension,
    ERC721APerTokenMetadataExtension,
    ERC721AOneOfOneMintExtension,
    ERC721RoyaltyExtension,
    ERC721AOpenSeaNoGasExtension
{
    struct Config {
        string name;
        string symbol;
        string contractURI;
        uint256 maxSupply;
        address defaultRoyaltyAddress;
        uint16 defaultRoyaltyBps;
        address openSeaProxyRegistryAddress;
        address openSeaExchangeAddress;
        address trustedForwarder;
    }

    constructor(Config memory config)
        ERC721A(config.name, config.symbol)
        ERC721CollectionMetadataExtension(config.contractURI)
        ERC721APerTokenMetadataExtension()
        ERC721AOneOfOneMintExtension()
        ERC721AMinterExtension(config.maxSupply)
        ERC721RoyaltyExtension(
            config.defaultRoyaltyAddress,
            config.defaultRoyaltyBps
        )
        ERC721AOpenSeaNoGasExtension(
            config.openSeaProxyRegistryAddress,
            config.openSeaExchangeAddress
        )
        ERC2771ContextOwnable(config.trustedForwarder)
    {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(MINTER_ROLE, _msgSender());
    }

    function _burn(uint256 tokenId)
        internal
        virtual
        override(
            ERC721A,
            ERC721APerTokenMetadataExtension,
            ERC721AOneOfOneMintExtension
        )
    {
        return ERC721AOneOfOneMintExtension._burn(tokenId);
    }

    function _msgSender()
        internal
        view
        virtual
        override(ERC2771ContextOwnable, Context)
        returns (address sender)
    {
        return super._msgSender();
    }

    function _msgData()
        internal
        view
        virtual
        override(ERC2771ContextOwnable, Context)
        returns (bytes calldata)
    {
        return super._msgData();
    }

    /* PUBLIC */

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(
            ERC165Storage,
            ERC721A,
            ERC721AMinterExtension,
            ERC721CollectionMetadataExtension,
            ERC721AOwnerMintExtension,
            ERC721AOneOfOneMintExtension,
            ERC721APerTokenMetadataExtension,
            ERC721RoyaltyExtension,
            ERC721AOpenSeaNoGasExtension
        )
        returns (bool)
    {
        return ERC165Storage.supportsInterface(interfaceId);
    }

    /**
     * Override isApprovedForAll to whitelist user's OpenSea proxy accounts to enable gas-less listings.
     */
    function isApprovedForAll(address owner, address operator)
        public
        view
        override(ERC721A, ERC721AOpenSeaNoGasExtension)
        returns (bool)
    {
        return super.isApprovedForAll(owner, operator);
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        virtual
        override(
            ERC721A,
            ERC721AOneOfOneMintExtension,
            ERC721APerTokenMetadataExtension
        )
        returns (string memory)
    {
        return ERC721AOneOfOneMintExtension.tokenURI(_tokenId);
    }

    function getInfo()
        external
        view
        returns (
            uint256 _maxSupply,
            uint256 _totalSupply,
            uint256 _senderBalance
        )
    {
        uint256 balance = 0;

        if (_msgSender() != address(0)) {
            balance = this.balanceOf(_msgSender());
        }

        return (maxSupply, this.totalSupply(), balance);
    }
}