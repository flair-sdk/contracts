// SPDX-License-Identifier: MIT

pragma solidity 0.8.15;

import "@openzeppelin/contracts/utils/Strings.sol";

import "../../../../access/ownable/OwnableInternal.sol";

import "./ERC1155MetadataInternal.sol";
import "./ERC1155MetadataStorage.sol";

contract ERC1155MetadataOwnable is ERC1155MetadataInternal, OwnableInternal {
    function setBaseURI(string calldata newBaseURI) public onlyOwner {
        _setBaseURI(newBaseURI);
    }

    function setFallbackURI(string calldata newFallbackURI) public onlyOwner {
        _setFallbackURI(newFallbackURI);
    }

    function setURI(uint256 tokenId, string calldata newTokenURI)
        public
        onlyOwner
    {
        _setURI(tokenId, newTokenURI);
    }

    function setURIBatch(
        uint256[] calldata tokenIds,
        string[] calldata newTokenURIs
    ) public onlyOwner {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            _setURI(tokenIds[i], newTokenURIs[i]);
        }
    }

    function lockBaseURI() public onlyOwner {
        _lockBaseURI();
    }

    function lockFallbackURI() public onlyOwner {
        _lockFallbackURI();
    }

    function lockURIUntil(uint256 tokenId) public onlyOwner {
        _lockURIUntil(tokenId);
    }
}
