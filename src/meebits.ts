import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  CommunityGrantEnds as CommunityGrantEndsEvent,
  Deposit as DepositEvent,
  Mint as MintEvent,
  OfferCancelled as OfferCancelledEvent,
  SaleBegins as SaleBeginsEvent,
  Trade as TradeEvent,
  Transfer as TransferEvent,
  Withdraw as WithdrawEvent
} from "../generated/Meebits/Meebits"
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
  Withdraw
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCommunityGrantEnds(event: CommunityGrantEndsEvent): void {
  let entity = new CommunityGrantEnds(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.index = event.params.index
  entity.minter = event.params.minter
  entity.createdVia = event.params.createdVia

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferCancelled(event: OfferCancelledEvent): void {
  let entity = new OfferCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hash = event.params.hash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSaleBegins(event: SaleBeginsEvent): void {
  let entity = new SaleBegins(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTrade(event: TradeEvent): void {
  let entity = new Trade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.hash = event.params.hash
  entity.maker = event.params.maker
  entity.taker = event.params.taker
  entity.makerWei = event.params.makerWei
  entity.makerIds = event.params.makerIds
  entity.takerWei = event.params.takerWei
  entity.takerIds = event.params.takerIds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
