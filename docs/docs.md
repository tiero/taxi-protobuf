# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [taxi.proto](#taxi.proto)
    - [Breakdown](#.Breakdown)
    - [GetAssetEstimateReply](#.GetAssetEstimateReply)
    - [GetAssetEstimateRequest](#.GetAssetEstimateRequest)
    - [GetTopupReply](#.GetTopupReply)
    - [GetTopupRequest](#.GetTopupRequest)
    - [Order](#.Order)
    - [PartialWithFees](#.PartialWithFees)
    - [TopupReply](#.TopupReply)
    - [TopupRequest](#.TopupRequest)
    - [TopupWithAssetReply](#.TopupWithAssetReply)
    - [TopupWithAssetRequest](#.TopupWithAssetRequest)
    - [TopupWithKeyReply](#.TopupWithKeyReply)
    - [TopupWithKeyRequest](#.TopupWithKeyRequest)
    - [Unsigned](#.Unsigned)
  
    - [Order.PaymentMethod](#.Order.PaymentMethod)
    - [Order.Status](#.Order.Status)
  
    - [Taxi](#.Taxi)
  
- [Scalar Value Types](#scalar-value-types)



<a name="taxi.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## taxi.proto



<a name=".Breakdown"></a>

### Breakdown



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| size | [uint64](#uint64) |  |  |
| sat_per_byte | [float](#float) |  | default 0.1 |
| fee | [uint64](#uint64) |  |  |
| rate | [float](#float) |  |  |
| spread | [uint64](#uint64) |  |  |
| total | [uint64](#uint64) |  |  |






<a name=".GetAssetEstimateReply"></a>

### GetAssetEstimateReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| breakdown | [Breakdown](#Breakdown) |  |  |
| asset_amount | [uint64](#uint64) |  |  |
| asset_hash | [string](#string) |  |  |
| order_id | [string](#string) |  |  |






<a name=".GetAssetEstimateRequest"></a>

### GetAssetEstimateRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unsigned | [Unsigned](#Unsigned) |  |  |
| asset_hash | [string](#string) |  |  |






<a name=".GetTopupReply"></a>

### GetTopupReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| order | [Order](#Order) |  |  |






<a name=".GetTopupRequest"></a>

### GetTopupRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| order_id | [string](#string) |  |  |






<a name=".Order"></a>

### Order



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| order_id | [string](#string) |  |  |
| status | [Order.Status](#Order.Status) |  |  |
| is_completed | [bool](#bool) |  |  |
| unsigned | [Unsigned](#Unsigned) |  |  |
| breakdown | [Breakdown](#Breakdown) |  |  |
| partial | [PartialWithFees](#PartialWithFees) |  | This is the pset with fees |
| created_at | [int64](#int64) |  |  |
| method | [Order.PaymentMethod](#Order.PaymentMethod) |  |  |
| asset_amount | [uint64](#uint64) |  |  |






<a name=".PartialWithFees"></a>

### PartialWithFees



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pset | [string](#string) |  |  |






<a name=".TopupReply"></a>

### TopupReply







<a name=".TopupRequest"></a>

### TopupRequest







<a name=".TopupWithAssetReply"></a>

### TopupWithAssetReply



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| order | [Order](#Order) |  |  |
| asset_amount | [uint64](#uint64) |  |  |
| asset_hash | [string](#string) |  |  |
| expiry | [uint64](#uint64) |  |  |






<a name=".TopupWithAssetRequest"></a>

### TopupWithAssetRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| unsigned | [Unsigned](#Unsigned) |  |  |
| asset_hash | [string](#string) |  |  |
| order_id | [string](#string) |  |  |






<a name=".TopupWithKeyReply"></a>

### TopupWithKeyReply







<a name=".TopupWithKeyRequest"></a>

### TopupWithKeyRequest







<a name=".Unsigned"></a>

### Unsigned



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| pset | [string](#string) |  |  |
| sat_per_byte | [float](#float) |  | default 0.1 |





 


<a name=".Order.PaymentMethod"></a>

### Order.PaymentMethod


| Name | Number | Description |
| ---- | ------ | ----------- |
| PAY_PER_USE | 0 |  |
| API_KEY | 1 |  |
| ASSET | 2 |  |



<a name=".Order.Status"></a>

### Order.Status


| Name | Number | Description |
| ---- | ------ | ----------- |
| UNPAID | 0 |  |
| PAID | 1 |  |


 

 


<a name=".Taxi"></a>

### Taxi


| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| Topup | [.TopupRequest](#TopupRequest) | [.TopupReply](#TopupReply) | The endpoint Topup it&#39;s called by the user without account and are willing to pay with Lightning Network.

The process will returs a BOLT11 Lightning Invoice to be paid

Once the LN invoice has been paid by the user the PSET with added LBTC fees could be found in the GetTopupResponse |
| GetTopup | [.GetTopupRequest](#GetTopupRequest) | [.GetTopupReply](#GetTopupReply) | The status of the topup can be fetched via GetTopup rpc. |
| TopupWithKey | [.TopupWithKeyRequest](#TopupWithKeyRequest) | [.TopupWithKeyReply](#TopupWithKeyReply) | Recurrent users could signup for an account and obtains an API KEY that allows to programmatically invoke topups. |
| GetAssetEstimate | [.GetAssetEstimateRequest](#GetAssetEstimateRequest) | [.GetAssetEstimateReply](#GetAssetEstimateReply) | A subset of supported stablecoins could be accepted as payment for topups. Before calling the actual TopupWithAsset the user could call the GetAssetEstimate rpc |
| TopupWithAsset | [.TopupWithAssetRequest](#TopupWithAssetRequest) | [.TopupWithAssetReply](#TopupWithAssetReply) |  |

 



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

