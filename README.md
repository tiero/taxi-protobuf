# taxi-protobuf
📃 Protocol Buffers schema specification for Liquid Taxi

## Requirements

* protoc
* Docker (for docgen)


## Compile

Build for Go

```sh
$ make go
```

Build for JavaScript

```sh
$ make js
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