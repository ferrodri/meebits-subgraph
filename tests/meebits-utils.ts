import { Address, BigInt, Bytes, ethereum } from '@graphprotocol/graph-ts';
import { newMockEvent } from 'matchstick-as';
import {
    Approval,
    ApprovalForAll,
    CommunityGrantEnds,
    Deposit,
    Mint,
    OfferCancelled,
    SaleBegins,
    Trade,
    Transfer,
    Withdraw,
} from '../generated/Meebits/Meebits';

export function createApprovalEvent(
    owner: Address,
    approved: Address,
    tokenId: BigInt
): Approval {
    const approvalEvent = changetype<Approval>(newMockEvent());

    approvalEvent.parameters = [];

    approvalEvent.parameters.push(
        new ethereum.EventParam('owner', ethereum.Value.fromAddress(owner))
    );
    approvalEvent.parameters.push(
        new ethereum.EventParam(
            'approved',
            ethereum.Value.fromAddress(approved)
        )
    );
    approvalEvent.parameters.push(
        new ethereum.EventParam(
            'tokenId',
            ethereum.Value.fromUnsignedBigInt(tokenId)
        )
    );

    return approvalEvent;
}

export function createApprovalForAllEvent(
    owner: Address,
    operator: Address,
    approved: boolean
): ApprovalForAll {
    const approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent());

    approvalForAllEvent.parameters = [];

    approvalForAllEvent.parameters.push(
        new ethereum.EventParam('owner', ethereum.Value.fromAddress(owner))
    );
    approvalForAllEvent.parameters.push(
        new ethereum.EventParam(
            'operator',
            ethereum.Value.fromAddress(operator)
        )
    );
    approvalForAllEvent.parameters.push(
        new ethereum.EventParam(
            'approved',
            ethereum.Value.fromBoolean(approved)
        )
    );

    return approvalForAllEvent;
}

export function createCommunityGrantEndsEvent(): CommunityGrantEnds {
    const communityGrantEndsEvent = changetype<CommunityGrantEnds>(
        newMockEvent()
    );

    communityGrantEndsEvent.parameters = [];

    return communityGrantEndsEvent;
}

export function createDepositEvent(account: Address, amount: BigInt): Deposit {
    const depositEvent = changetype<Deposit>(newMockEvent());

    depositEvent.parameters = [];

    depositEvent.parameters.push(
        new ethereum.EventParam('account', ethereum.Value.fromAddress(account))
    );
    depositEvent.parameters.push(
        new ethereum.EventParam(
            'amount',
            ethereum.Value.fromUnsignedBigInt(amount)
        )
    );

    return depositEvent;
}

export function createMintEvent(
    index: BigInt,
    minter: Address,
    createdVia: BigInt
): Mint {
    const mintEvent = changetype<Mint>(newMockEvent());

    mintEvent.parameters = [];

    mintEvent.parameters.push(
        new ethereum.EventParam(
            'index',
            ethereum.Value.fromUnsignedBigInt(index)
        )
    );
    mintEvent.parameters.push(
        new ethereum.EventParam('minter', ethereum.Value.fromAddress(minter))
    );
    mintEvent.parameters.push(
        new ethereum.EventParam(
            'createdVia',
            ethereum.Value.fromUnsignedBigInt(createdVia)
        )
    );

    return mintEvent;
}

export function createOfferCancelledEvent(hash: Bytes): OfferCancelled {
    const offerCancelledEvent = changetype<OfferCancelled>(newMockEvent());

    offerCancelledEvent.parameters = [];

    offerCancelledEvent.parameters.push(
        new ethereum.EventParam('hash', ethereum.Value.fromFixedBytes(hash))
    );

    return offerCancelledEvent;
}

export function createSaleBeginsEvent(): SaleBegins {
    const saleBeginsEvent = changetype<SaleBegins>(newMockEvent());

    saleBeginsEvent.parameters = [];

    return saleBeginsEvent;
}

export function createTradeEvent(
    hash: Bytes,
    maker: Address,
    taker: Address,
    makerWei: BigInt,
    makerIds: Array<BigInt>,
    takerWei: BigInt,
    takerIds: Array<BigInt>
): Trade {
    const tradeEvent = changetype<Trade>(newMockEvent());

    tradeEvent.parameters = [];

    tradeEvent.parameters.push(
        new ethereum.EventParam('hash', ethereum.Value.fromFixedBytes(hash))
    );
    tradeEvent.parameters.push(
        new ethereum.EventParam('maker', ethereum.Value.fromAddress(maker))
    );
    tradeEvent.parameters.push(
        new ethereum.EventParam('taker', ethereum.Value.fromAddress(taker))
    );
    tradeEvent.parameters.push(
        new ethereum.EventParam(
            'makerWei',
            ethereum.Value.fromUnsignedBigInt(makerWei)
        )
    );
    tradeEvent.parameters.push(
        new ethereum.EventParam(
            'makerIds',
            ethereum.Value.fromUnsignedBigIntArray(makerIds)
        )
    );
    tradeEvent.parameters.push(
        new ethereum.EventParam(
            'takerWei',
            ethereum.Value.fromUnsignedBigInt(takerWei)
        )
    );
    tradeEvent.parameters.push(
        new ethereum.EventParam(
            'takerIds',
            ethereum.Value.fromUnsignedBigIntArray(takerIds)
        )
    );

    return tradeEvent;
}

export function createTransferEvent(
    from: Address,
    to: Address,
    tokenId: BigInt
): Transfer {
    const transferEvent = changetype<Transfer>(newMockEvent());

    transferEvent.parameters = [];

    transferEvent.parameters.push(
        new ethereum.EventParam('from', ethereum.Value.fromAddress(from))
    );
    transferEvent.parameters.push(
        new ethereum.EventParam('to', ethereum.Value.fromAddress(to))
    );
    transferEvent.parameters.push(
        new ethereum.EventParam(
            'tokenId',
            ethereum.Value.fromUnsignedBigInt(tokenId)
        )
    );

    return transferEvent;
}

export function createWithdrawEvent(
    account: Address,
    amount: BigInt
): Withdraw {
    const withdrawEvent = changetype<Withdraw>(newMockEvent());

    withdrawEvent.parameters = [];

    withdrawEvent.parameters.push(
        new ethereum.EventParam('account', ethereum.Value.fromAddress(account))
    );
    withdrawEvent.parameters.push(
        new ethereum.EventParam(
            'amount',
            ethereum.Value.fromUnsignedBigInt(amount)
        )
    );

    return withdrawEvent;
}
