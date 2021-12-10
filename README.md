# taxi-protobuf
📃 Protocol Buffers schema specification for Liquid Taxi

## Requirements

* [Buf](https://buf.build)
* Docker (for docgen)


## Compile stubs

```bash
make buf
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