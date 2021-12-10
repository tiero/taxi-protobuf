# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [taxi.proto](#taxi.proto)
    - [AssetDetails](#taxi.AssetDetails)
    - [ListAssetsReply](#taxi.ListAssetsReply)
    - [ListAssetsRequest](#taxi.ListAssetsRequest)
    - [Topup](#taxi.Topup)
    - [TopupWithAssetReply](#taxi.TopupWithAssetReply)
    - [TopupWithAssetRequest](#taxi.TopupWithAssetRequest)
  
    - [Taxi](#taxi.Taxi)
  
- [Scalar Value Types](#scalar-value-types)



<a name="taxi.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## taxi.proto



<a name="taxi.AssetDetails"></a>

### AssetDetails



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| asset_hash | [string](#string) |  | the asset hash used as identifier on the network |
| basis_point | [uint32](#uint32) |  | the taxi service fee expressed in basis points for the given asset |
| asset_price | [float](#float) |  | the price = the amount of assets to equal 1 BTC |






<a name="taxi.ListAssetsReply"></a>

### ListAssetsReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| assets | [AssetDetails](#taxi.AssetDetails) | repeated | all the assets available for topups |






<a name="taxi.ListAssetsRequest"></a>

### ListAssetsRequest







<a name="taxi.Topup"></a>

### Topup



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| topup_id | [string](#string) |  | random identifier of the current topup |
| partial | [string](#string) |  | PSET signed with SIGHASH_SINGLE | ANYONECANPAY |
| asset_hash | [string](#string) |  | the asset hash used as payout for bitcoin fees |
| asset_amount | [uint64](#uint64) |  | the asset denominated amount expressed in satoshis to be used as payout. It includes also the spread as taxi service fee |
| asset_spread | [uint64](#uint64) |  | the spread amount expressed in asset denominated satoshis used to pay the taxi service fees |






<a name="taxi.TopupWithAssetReply"></a>

### TopupWithAssetReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| topup | [Topup](#taxi.Topup) |  | The Topup message |
| expiry | [uint64](#uint64) |  | the unix timestamp after wich the locked LBTC input will provably be double-spent |
| private_blinding_key | [string](#string) |  | the hex encoded blinding private key of the locked LBTC input |
| public_blinding_key | [string](#string) |  | the hex encoded blinding public key of the pay to taxi output |






<a name="taxi.TopupWithAssetRequest"></a>

### TopupWithAssetRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| asset_hash | [string](#string) |  | asset hash to be used for payout |
| fee_amount | [uint64](#uint64) |  | amount in satoshis of bitcoin needed to cover the fees. It&#39;s up to the client to estimate and ask the precise amount |
| millisat_per_byte | [uint64](#uint64) |  | how many millisatoshi per byte we want to spend. ie. 0.1 sat/byte is 100 |





 

 

 


<a name="taxi.Taxi"></a>

### Taxi


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListAssets | [ListAssetsRequest](#taxi.ListAssetsRequest) | [ListAssetsReply](#taxi.ListAssetsReply) | ListAssets rpc returns a subset of supported elements assets that could be accepted as payment for topups |
| TopupWithAsset | [TopupWithAssetRequest](#taxi.TopupWithAssetRequest) | [TopupWithAssetReply](#taxi.TopupWithAssetReply) | TopupWithAsset rpc returns the a partial signed elements transaction with a LBTC input (eventual change) and a asset denominated output as payout fot the taxi. The transaction is signed with SIGHASH_SINGLE | ANYONECANPAY |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

