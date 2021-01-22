import * as jspb from 'google-protobuf'



export class ListAssetsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetsRequest): ListAssetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAssetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetsRequest;
  static deserializeBinaryFromReader(message: ListAssetsRequest, reader: jspb.BinaryReader): ListAssetsRequest;
}

export namespace ListAssetsRequest {
  export type AsObject = {
  }
}

export class ListAssetsReply extends jspb.Message {
  getAssetsList(): Array<AssetDetails>;
  setAssetsList(value: Array<AssetDetails>): ListAssetsReply;
  clearAssetsList(): ListAssetsReply;
  addAssets(value?: AssetDetails, index?: number): AssetDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetsReply): ListAssetsReply.AsObject;
  static serializeBinaryToWriter(message: ListAssetsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetsReply;
  static deserializeBinaryFromReader(message: ListAssetsReply, reader: jspb.BinaryReader): ListAssetsReply;
}

export namespace ListAssetsReply {
  export type AsObject = {
    assetsList: Array<AssetDetails.AsObject>,
  }
}

export class TopupWithAssetRequest extends jspb.Message {
  getAssetHash(): string;
  setAssetHash(value: string): TopupWithAssetRequest;

  getFeeAmount(): number;
  setFeeAmount(value: number): TopupWithAssetRequest;

  getMillisatPerByte(): number;
  setMillisatPerByte(value: number): TopupWithAssetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopupWithAssetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TopupWithAssetRequest): TopupWithAssetRequest.AsObject;
  static serializeBinaryToWriter(message: TopupWithAssetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopupWithAssetRequest;
  static deserializeBinaryFromReader(message: TopupWithAssetRequest, reader: jspb.BinaryReader): TopupWithAssetRequest;
}

export namespace TopupWithAssetRequest {
  export type AsObject = {
    assetHash: string,
    feeAmount: number,
    millisatPerByte: number,
  }
}

export class TopupWithAssetReply extends jspb.Message {
  getTopup(): Topup | undefined;
  setTopup(value?: Topup): TopupWithAssetReply;
  hasTopup(): boolean;
  clearTopup(): TopupWithAssetReply;

  getExpiry(): number;
  setExpiry(value: number): TopupWithAssetReply;

  getPrivateBlindingKey(): string;
  setPrivateBlindingKey(value: string): TopupWithAssetReply;

  getPublicBlindingKey(): string;
  setPublicBlindingKey(value: string): TopupWithAssetReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TopupWithAssetReply.AsObject;
  static toObject(includeInstance: boolean, msg: TopupWithAssetReply): TopupWithAssetReply.AsObject;
  static serializeBinaryToWriter(message: TopupWithAssetReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TopupWithAssetReply;
  static deserializeBinaryFromReader(message: TopupWithAssetReply, reader: jspb.BinaryReader): TopupWithAssetReply;
}

export namespace TopupWithAssetReply {
  export type AsObject = {
    topup?: Topup.AsObject,
    expiry: number,
    privateBlindingKey: string,
    publicBlindingKey: string,
  }
}

export class Topup extends jspb.Message {
  getTopupId(): string;
  setTopupId(value: string): Topup;

  getPartial(): string;
  setPartial(value: string): Topup;

  getAssetHash(): string;
  setAssetHash(value: string): Topup;

  getAssetAmount(): number;
  setAssetAmount(value: number): Topup;

  getAssetSpread(): number;
  setAssetSpread(value: number): Topup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Topup.AsObject;
  static toObject(includeInstance: boolean, msg: Topup): Topup.AsObject;
  static serializeBinaryToWriter(message: Topup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Topup;
  static deserializeBinaryFromReader(message: Topup, reader: jspb.BinaryReader): Topup;
}

export namespace Topup {
  export type AsObject = {
    topupId: string,
    partial: string,
    assetHash: string,
    assetAmount: number,
    assetSpread: number,
  }
}

export class AssetDetails extends jspb.Message {
  getAssetHash(): string;
  setAssetHash(value: string): AssetDetails;

  getBasisPoint(): number;
  setBasisPoint(value: number): AssetDetails;

  getAssetPrice(): number;
  setAssetPrice(value: number): AssetDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetDetails.AsObject;
  static toObject(includeInstance: boolean, msg: AssetDetails): AssetDetails.AsObject;
  static serializeBinaryToWriter(message: AssetDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetDetails;
  static deserializeBinaryFromReader(message: AssetDetails, reader: jspb.BinaryReader): AssetDetails;
}

export namespace AssetDetails {
  export type AsObject = {
    assetHash: string,
    basisPoint: number,
    assetPrice: number,
  }
}

