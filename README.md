# taxi-protobuf
📃 Protocol Buffers schema specification for Liquid Taxi

## Requirements

* protoc
* Docker (for docgen)


## Compile stubs

Build with [Buf](https://buf.build)

```bash
# or with buf directly
buf generate
```


## Documentation

Automatically generate HTML and Markdown documentation (Docker running is required)

```sh
$ make doc
```

## Usage

### Go 

```sh
$ go get github.com/vulpemventures/taxi-protobuf
```

### JavaScript 

```sh
$ npm i vulpemventures/taxi-protobuf
# or with yarn
$ yarn add vulpemventures/taxi-protobuf
```