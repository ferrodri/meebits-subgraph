## Subgraph Development Query URL

https://api.studio.thegraph.com/query/46766/meebits-subgraph/v1.0.1

## Description

The purpose of this subgraph is to discover who minted the initial Meebits, and if they minted through their CryptoPunks or AutoGlyphs. Meebits minted through CryptoPunks or AutoGlyphs were free.

Moreover, you can check for every Meebit how many historic owners it has had. For every owner, you can check how many historic meebits it has had.

## Technical specialties

-   Enumerations within a schema.
-   One-to-many relationships.
-   Many-to-many relationships.
-   Executing contract calls to other smart contracts (CryptoPunks and AutoGlyphs) within the same mapping.

## Example queries

To check who minted meebit 10610, if they minted via autoglyphs or cryptopunks and how many of those they had at the time of minting, we could use the following query:

```graphql
{
    meebit(id: "10510") {
        id
        autoglyphsOfMinter
        cryptopunksOfMinter
        minter {
            id
        }
        mintedVia
        createdAtTimestamp
    }
}
```

To check how many meebits an account minted we could use the following query:

```graphql
{
    account(id: "0x000001f568875f378bf6d170b790967fe429c81a") {
        id
        meebitsMinted {
            id
        }
    }
}
```

To check how many meebits have passed by an account we could use the following query:

```graphql
{
    account(id: "0x000001f568875f378bf6d170b790967fe429c81a") {
        id
        historicMeebits {
            historicMeebit {
                id
            }
        }
    }
}
```

To check how many accounts have owned a specific meebit we could use the following query:

```graphql
{
    meebit(id: "5357") {
        historicAccounts {
            historicAccount {
                id
            }
        }
    }
}
```
