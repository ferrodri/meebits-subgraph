import { Mint } from '../generated/Meebits/Meebits';
import { Account, Meebit } from '../generated/schema';


export function handleMint(event: Mint): void {
    const mintedVia = parseInt(event.params.createdVia.toString());
    const accountId = event.params.minter.toHexString();

    // Look for existing account or create it
    let account = Account.load(accountId);
    if (!account) {
        account = new Account(event.params.minter.toHexString());
    }

    // Create meebit
    const meebit = new Meebit(event.params.index.toString());
    meebit.minter = account.id;
    meebit.blockNumber = event.block.number;
    meebit.blockTimestamp = event.block.timestamp;
    meebit.transactionHash = event.transaction.hash;

    meebit.mintedVia =
        mintedVia > 0 && mintedVia <= 10000
            ? 'Cryptopunks'
            : mintedVia > 10000 && mintedVia <= 10512
                ? 'Autoglyphs'
                : 'PublicSale';

    meebit.save();
    account.save();
    //
    // let contract = Contract.bind(event.address)
    //
    // The following functions can then be called on this contract to access
    // state variables and other data:
    //
    // - contract.SALE_LIMIT(...)
    // - contract.TOKEN_LIMIT(...)
    // - contract.balanceOf(...)
    // - contract.cancelledOffers(...)
    // - contract.communityGrant(...)
    // - contract.contentHash(...)
    // - contract.contractSealed(...)
    // - contract.creatorNftMints(...)
    // - contract.ethBalance(...)
    // - contract.getApproved(...)
    // - contract.getPrice(...)
    // - contract.hashToSign(...)
    // - contract.isApprovedForAll(...)
    // - contract.marketPaused(...)
    // - contract.mintWithPunkOrGlyph(...)
    // - contract.mintsRemaining(...)
    // - contract.name(...)
    // - contract.ownerOf(...)
    // - contract.publicSale(...)
    // - contract.saleDuration(...)
    // - contract.saleStartTime(...)
    // - contract.supportsInterface(...)
    // - contract.symbol(...)
    // - contract.tokenByIndex(...)
    // - contract.tokenOfOwnerByIndex(...)
    // - contract.tokenURI(...)
    // - contract.totalSupply(...)
    // - contract.tradeValid(...)
}

// export function handleApprovalForAll(event: ApprovalForAll): void { }

// export function handleCommunityGrantEnds(event: CommunityGrantEnds): void { }

// export function handleDeposit(event: Deposit): void { }

// export function handleOfferCancelled(event: OfferCancelled): void { }

// export function handleSaleBegins(event: SaleBegins): void { }

// export function handleTrade(event: Trade): void { }

// export function handleTransfer(event: Transfer): void { }

// export function handleWithdraw(event: Withdraw): void { }
