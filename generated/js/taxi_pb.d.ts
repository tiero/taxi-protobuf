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
  getAssetHashList(): Array<string>;
  setAssetHashList(value: Array<string>): ListAssetsReply;
  clearAssetHashList(): ListAssetsReply;
  addAssetHash(value: string, index?: number): ListAssetsReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAssetsReply.AsObject;
  static toObject(includeInstance: boolean, msg: ListAssetsReply): ListAssetsReply.AsObject;
  static serializeBinaryToWriter(message: ListAssetsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAssetsReply;
  static deserializeBinaryFromReader(message: ListAssetsReply, reader: jspb.BinaryReader): ListAssetsReply;
}

export namespace ListAssetsReply {
  export type AsObject = {
    assetHashList: Array<string>,
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

  getAssetPrice(): number;
  setAssetPrice(value: number): Topup;

  getBasisPoint(): number;
  setBasisPoint(value: number): Topup;

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
    assetPrice: number,
    basisPoint: number,
  }
}

