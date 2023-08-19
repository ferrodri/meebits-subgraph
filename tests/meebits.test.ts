import { Address, BigInt } from '@graphprotocol/graph-ts';
import {
    afterEach,
    assert,
    beforeEach,
    clearStore,
    describe,
    test,
} from 'matchstick-as/assembly/index';
import { handleMint } from '../src/meebits';
import { createMintEvent } from './meebits-utils';

const meebitId = 1;
const minterAddress = '0x0000000000000000000000000000000000000001';
const createdViaPublicSale = 0;


describe('handleMintMeebit', () => {
    beforeEach(() => {
        const newMintEvent = createMintEvent(
            BigInt.fromI32(meebitId),
            Address.fromString(minterAddress),
            BigInt.fromI32(createdViaPublicSale)
        );
        handleMint(newMintEvent);
    });

    afterEach(() => {
        clearStore();
    });

    test('Meebit created and stored', () => {
        assert.entityCount('Meebit', 1);
        assert.fieldEquals('Meebit', meebitId.toString(), 'minter', '0x0000000000000000000000000000000000000001');
        assert.fieldEquals('Meebit', meebitId.toString(), 'mintedVia', 'PublicSale');
    });

    test('Additional Meebit minted by same account created and stored', () => {
        assert.entityCount('Account', 1);
        assert.entityCount('Meebit', 1);
        const extraMint = createMintEvent(
            BigInt.fromI32(2),
            Address.fromString(minterAddress),
            BigInt.fromI32(createdViaPublicSale)
        );
        handleMint(extraMint);
        assert.entityCount('Account', 1);
        assert.entityCount('Meebit', 2);
    });
});
