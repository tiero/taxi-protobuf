/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as taxi_pb from './taxi_pb';


export class TaxiClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListAssets = new grpcWeb.MethodDescriptor(
    '/Taxi/ListAssets',
    grpcWeb.MethodType.UNARY,
    taxi_pb.ListAssetsRequest,
    taxi_pb.ListAssetsReply,
    (request: taxi_pb.ListAssetsRequest) => {
      return request.serializeBinary();
    },
    taxi_pb.ListAssetsReply.deserializeBinary
  );

  listAssets(
    request: taxi_pb.ListAssetsRequest,
    metadata: grpcWeb.Metadata | null): Promise<taxi_pb.ListAssetsReply>;

  listAssets(
    request: taxi_pb.ListAssetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: taxi_pb.ListAssetsReply) => void): grpcWeb.ClientReadableStream<taxi_pb.ListAssetsReply>;

  listAssets(
    request: taxi_pb.ListAssetsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: taxi_pb.ListAssetsReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Taxi/ListAssets',
        request,
        metadata || {},
        this.methodInfoListAssets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Taxi/ListAssets',
    request,
    metadata || {},
    this.methodInfoListAssets);
  }

  methodInfoTopupWithAsset = new grpcWeb.MethodDescriptor(
    '/Taxi/TopupWithAsset',
    grpcWeb.MethodType.UNARY,
    taxi_pb.TopupWithAssetRequest,
    taxi_pb.TopupWithAssetReply,
    (request: taxi_pb.TopupWithAssetRequest) => {
      return request.serializeBinary();
    },
    taxi_pb.TopupWithAssetReply.deserializeBinary
  );

  topupWithAsset(
    request: taxi_pb.TopupWithAssetRequest,
    metadata: grpcWeb.Metadata | null): Promise<taxi_pb.TopupWithAssetReply>;

  topupWithAsset(
    request: taxi_pb.TopupWithAssetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: taxi_pb.TopupWithAssetReply) => void): grpcWeb.ClientReadableStream<taxi_pb.TopupWithAssetReply>;

  topupWithAsset(
    request: taxi_pb.TopupWithAssetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: taxi_pb.TopupWithAssetReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Taxi/TopupWithAsset',
        request,
        metadata || {},
        this.methodInfoTopupWithAsset,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Taxi/TopupWithAsset',
    request,
    metadata || {},
    this.methodInfoTopupWithAsset);
  }

}

