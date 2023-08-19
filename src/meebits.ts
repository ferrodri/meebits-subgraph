import { Address } from '@graphprotocol/graph-ts';
import { Autoglyphs } from '../generated/Meebits/Autoglyphs';
import { CryptoPunksMarket } from '../generated/Meebits/CryptoPunksMarket';
import { Mint } from '../generated/Meebits/Meebits';
import { Account, Meebit } from '../generated/schema';


export function handleMint(event: Mint): void {
    const autoglyphsAddress = Address.fromString('0xd4e4078ca3495DE5B1d4dB434BEbc5a986197782');
    const autoglyphsContract = Autoglyphs.bind(autoglyphsAddress);
    const cryptoPunksAddress = Address.fromString('0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB');
    const cryptopunksContract = CryptoPunksMarket.bind(cryptoPunksAddress);

    const mintedVia = parseInt(event.params.createdVia.toString());
    const accountAddress = event.params.minter.toHexString();

    // Look for existing account or create it
    let account = Account.load(accountAddress);
    if (!account) {
        account = new Account(event.params.minter.toHexString());
    }

    // Create meebit
    const meebit = new Meebit(event.params.index.toString());
    meebit.autoglyphsOfMinter = autoglyphsContract.balanceOf(event.params.minter);
    meebit.cryptopunksOfMinter = cryptopunksContract.balanceOf(event.params.minter);
    meebit.minter = account.id;
    meebit.createdAtBlockNumber = event.block.number;
    meebit.createdAtTimestamp = event.block.timestamp;
    meebit.transactionHash = event.transaction.hash;

    meebit.mintedVia =
        mintedVia > 0 && mintedVia <= 10000
            ? 'Cryptopunks'
            : mintedVia > 10000 && mintedVia <= 10512
                ? 'Autoglyphs'
                : 'PublicSale';

    meebit.save();
    account.save();
}