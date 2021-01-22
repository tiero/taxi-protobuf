// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var taxi_pb = require('./taxi_pb.js');

function serialize_ListAssetsReply(arg) {
  if (!(arg instanceof taxi_pb.ListAssetsReply)) {
    throw new Error('Expected argument of type ListAssetsReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListAssetsReply(buffer_arg) {
  return taxi_pb.ListAssetsReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListAssetsRequest(arg) {
  if (!(arg instanceof taxi_pb.ListAssetsRequest)) {
    throw new Error('Expected argument of type ListAssetsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListAssetsRequest(buffer_arg) {
  return taxi_pb.ListAssetsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TopupWithAssetReply(arg) {
  if (!(arg instanceof taxi_pb.TopupWithAssetReply)) {
    throw new Error('Expected argument of type TopupWithAssetReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TopupWithAssetReply(buffer_arg) {
  return taxi_pb.TopupWithAssetReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_TopupWithAssetRequest(arg) {
  if (!(arg instanceof taxi_pb.TopupWithAssetRequest)) {
    throw new Error('Expected argument of type TopupWithAssetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_TopupWithAssetRequest(buffer_arg) {
  return taxi_pb.TopupWithAssetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TaxiService = exports.TaxiService = {
  // ListAssets rpc returns a subset of supported elements assets that could be accepted as payment
// for topups
listAssets: {
    path: '/Taxi/ListAssets',
    requestStream: false,
    responseStream: false,
    requestType: taxi_pb.ListAssetsRequest,
    responseType: taxi_pb.ListAssetsReply,
    requestSerialize: serialize_ListAssetsRequest,
    requestDeserialize: deserialize_ListAssetsRequest,
    responseSerialize: serialize_ListAssetsReply,
    responseDeserialize: deserialize_ListAssetsReply,
  },
  // TopupWithAsset rpc returns the a partial signed elements transaction with a LBTC input (eventual change) and a asset denominated output as payout fot the taxi.
// The transaction is signed with SIGHASH_SINGLE | ANYONECANPAY 
topupWithAsset: {
    path: '/Taxi/TopupWithAsset',
    requestStream: false,
    responseStream: false,
    requestType: taxi_pb.TopupWithAssetRequest,
    responseType: taxi_pb.TopupWithAssetReply,
    requestSerialize: serialize_TopupWithAssetRequest,
    requestDeserialize: deserialize_TopupWithAssetRequest,
    responseSerialize: serialize_TopupWithAssetReply,
    responseDeserialize: deserialize_TopupWithAssetReply,
  },
};

exports.TaxiClient = grpc.makeGenericClientConstructor(TaxiService);
