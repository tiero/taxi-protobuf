# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [taxi.proto](#taxi.proto)
    - [AddAssetReply](#.AddAssetReply)
    - [AddAssetRequest](#.AddAssetRequest)
    - [ChangeSpreadReply](#.ChangeSpreadReply)
    - [ChangeSpreadRequest](#.ChangeSpreadRequest)
    - [ListAssetsReply](#.ListAssetsReply)
    - [ListAssetsRequest](#.ListAssetsRequest)
    - [ListTopupsReply](#.ListTopupsReply)
    - [ListTopupsRequest](#.ListTopupsRequest)
    - [Timestamps](#.Timestamps)
    - [Topup](#.Topup)
    - [TopupInfo](#.TopupInfo)
    - [TopupWithAssetReply](#.TopupWithAssetReply)
    - [TopupWithAssetRequest](#.TopupWithAssetRequest)
  
    - [TopupInfo.Status](#.TopupInfo.Status)
  
    - [Admin](#.Admin)
    - [Taxi](#.Taxi)
  
- [Scalar Value Types](#scalar-value-types)



<a name="taxi.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## taxi.proto



<a name=".AddAssetReply"></a>

### AddAssetReply







<a name=".AddAssetRequest"></a>

### AddAssetRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| asset_hash | [string](#string) |  | The asset_hash to update (or to create if the taxi doesn&#39;t know it) |
| price | [float](#float) |  | The current prive for the given asset hash |






<a name=".ChangeSpreadReply"></a>

### ChangeSpreadReply







<a name=".ChangeSpreadRequest"></a>

### ChangeSpreadRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| basis_point | [int32](#int32) |  |  |






<a name=".ListAssetsReply"></a>

### ListAssetsReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| asset_hash | [string](#string) | repeated | asset hash accepted as payout |






<a name=".ListAssetsRequest"></a>

### ListAssetsRequest







<a name=".ListTopupsReply"></a>

### ListTopupsReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| topups | [TopupInfo](#TopupInfo) | repeated |  |






<a name=".ListTopupsRequest"></a>

### ListTopupsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| asset_hash | [string](#string) |  | the asset hash to filetr the topups. If empty, all topups of all assets will be returned |






<a name=".Timestamps"></a>

### Timestamps



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| requested_at | [uint64](#uint64) |  | the unix timestamp of when the taxi received the request of a topup from a client |
| completed_at | [uint64](#uint64) |  | the unix timestamp of when the taxi completed the topup and responded to client |
| settled_at | [uint64](#uint64) |  | the unix timestamp of the block in wich the topup is included in the chain. |
| expired_at | [uint64](#uint64) |  | the unix timestamp after wich the locked bitcoin input could have been double-spent (if any) |






<a name=".Topup"></a>

### Topup



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| topup_id | [string](#string) |  | random identifier of the currer topup |
| partial | [string](#string) |  | PSET signed with SIGHASH_ALL | ANYONECANPAY |
| asset_hash | [string](#string) |  | the asset hash used as payout for bitcoin fees |
| asset_amount | [uint64](#uint64) |  | the asset denominated amount expressed in satoshis to be used as payout. It includes also the spread as taxi service fee |
| asset_price | [float](#float) |  | the price of bitcoin expressed in asset |
| basis_point | [int32](#int32) |  | the spread expressed in basis point on top the amount needed to repay for bitcoin fees |






<a name=".TopupInfo"></a>

### TopupInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| topup | [Topup](#Topup) |  |  |
| status | [TopupInfo.Status](#TopupInfo.Status) |  |  |
| fee_amount | [uint64](#uint64) |  | amount in satoshis of bitcoin needed to cover the fees |
| millisat_per_byte | [uint64](#uint64) |  | how many millisatoshi per byte we want to spend. ie. 0.1 sat/byte is 100 |
| times | [Timestamps](#Timestamps) |  | the timestamps of each status change |






<a name=".TopupWithAssetReply"></a>

### TopupWithAssetReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| topup | [Topup](#Topup) |  |  |
| expiry | [uint64](#uint64) |  | the unix timestamp after wich the locked LBTC input will provably be double-spent |






<a name=".TopupWithAssetRequest"></a>

### TopupWithAssetRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| asset_hash | [string](#string) |  | asset hash to be used for payout |
| fee_amount | [uint64](#uint64) |  | amount in satoshis of bitcoin needed to cover the fees. It&#39;s up to the client to estimate and ask the precise amount |
| millisat_per_byte | [uint64](#uint64) |  | how many millisatoshi per byte we want to spend. ie. 0.1 sat/byte is 100 |





 


<a name=".TopupInfo.Status"></a>

### TopupInfo.Status


| Name | Number | Description |
| ---- | ------ | ----------- |
| REQUESTED | 0 | when the request for a topup has been received by the taxi |
| COMPLETED | 1 | when the reply with a partially signed topup has been delivered to the client |
| SETTLED | 2 | when the topup has been included in the blockchain |


 

 


<a name=".Admin"></a>

### Admin


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListTopups | [.ListTopupsRequest](#ListTopupsRequest) | [.ListTopupsReply](#ListTopupsReply) | ListTopups returns all the internal topups |
| ChangeSpread | [.ChangeSpreadRequest](#ChangeSpreadRequest) | [.ChangeSpreadReply](#ChangeSpreadReply) | ChangeSpread updates the percentage taken as service fee |
| AddAsset | [.AddAssetRequest](#AddAssetRequest) | [.AddAssetReply](#AddAssetReply) | AddAsset lets update the asset_hash with price if exists, or creates it |


<a name=".Taxi"></a>

### Taxi


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| ListAssets | [.ListAssetsRequest](#ListAssetsRequest) | [.ListAssetsReply](#ListAssetsReply) | ListAssets rpc returns a subset of supported elements assets that could be accepted as payment for topups |
| TopupWithAsset | [.TopupWithAssetRequest](#TopupWithAssetRequest) | [.TopupWithAssetReply](#TopupWithAssetReply) | TopupWithAsset rpc returns the a partial signed elements transaction with a LBTC input (eventual change) and a asset denominated output as payout fot the taxi. The transaction is signed with SIGHASH_ALL | ANYONECANPAY |

 



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

