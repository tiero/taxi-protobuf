// package: 
// file: taxi.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as taxi_pb from "./taxi_pb";

interface ITaxiService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listAssets: ITaxiService_IListAssets;
    topupWithAsset: ITaxiService_ITopupWithAsset;
}

interface ITaxiService_IListAssets extends grpc.MethodDefinition<taxi_pb.ListAssetsRequest, taxi_pb.ListAssetsReply> {
    path: "/Taxi/ListAssets";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<taxi_pb.ListAssetsRequest>;
    requestDeserialize: grpc.deserialize<taxi_pb.ListAssetsRequest>;
    responseSerialize: grpc.serialize<taxi_pb.ListAssetsReply>;
    responseDeserialize: grpc.deserialize<taxi_pb.ListAssetsReply>;
}
interface ITaxiService_ITopupWithAsset extends grpc.MethodDefinition<taxi_pb.TopupWithAssetRequest, taxi_pb.TopupWithAssetReply> {
    path: "/Taxi/TopupWithAsset";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<taxi_pb.TopupWithAssetRequest>;
    requestDeserialize: grpc.deserialize<taxi_pb.TopupWithAssetRequest>;
    responseSerialize: grpc.serialize<taxi_pb.TopupWithAssetReply>;
    responseDeserialize: grpc.deserialize<taxi_pb.TopupWithAssetReply>;
}

export const TaxiService: ITaxiService;

export interface ITaxiServer extends grpc.UntypedServiceImplementation {
    listAssets: grpc.handleUnaryCall<taxi_pb.ListAssetsRequest, taxi_pb.ListAssetsReply>;
    topupWithAsset: grpc.handleUnaryCall<taxi_pb.TopupWithAssetRequest, taxi_pb.TopupWithAssetReply>;
}

export interface ITaxiClient {
    listAssets(request: taxi_pb.ListAssetsRequest, callback: (error: grpc.ServiceError | null, response: taxi_pb.ListAssetsReply) => void): grpc.ClientUnaryCall;
    listAssets(request: taxi_pb.ListAssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: taxi_pb.ListAssetsReply) => void): grpc.ClientUnaryCall;
    listAssets(request: taxi_pb.ListAssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: taxi_pb.ListAssetsReply) => void): grpc.ClientUnaryCall;
    topupWithAsset(request: taxi_pb.TopupWithAssetRequest, callback: (error: grpc.ServiceError | null, response: taxi_pb.TopupWithAssetReply) => void): grpc.ClientUnaryCall;
    topupWithAsset(request: taxi_pb.TopupWithAssetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: taxi_pb.TopupWithAssetReply) => void): grpc.ClientUnaryCall;
    topupWithAsset(request: taxi_pb.TopupWithAssetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: taxi_pb.TopupWithAssetReply) => void): grpc.ClientUnaryCall;
}

export class TaxiClient extends grpc.Client implements ITaxiClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listAssets(request: taxi_pb.ListAssetsRequest, callback: (error: grpc.ServiceError | null, response: taxi_pb.ListAssetsReply) => void): grpc.ClientUnaryCall;
    public listAssets(request: taxi_pb.ListAssetsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: taxi_pb.ListAssetsReply) => void): grpc.ClientUnaryCall;
    public listAssets(request: taxi_pb.ListAssetsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: taxi_pb.ListAssetsReply) => void): grpc.ClientUnaryCall;
    public topupWithAsset(request: taxi_pb.TopupWithAssetRequest, callback: (error: grpc.ServiceError | null, response: taxi_pb.TopupWithAssetReply) => void): grpc.ClientUnaryCall;
    public topupWithAsset(request: taxi_pb.TopupWithAssetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: taxi_pb.TopupWithAssetReply) => void): grpc.ClientUnaryCall;
    public topupWithAsset(request: taxi_pb.TopupWithAssetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: taxi_pb.TopupWithAssetReply) => void): grpc.ClientUnaryCall;
}
