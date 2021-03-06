![image](https://user-images.githubusercontent.com/34389545/35821974-62e0e25c-0a70-11e8-87dd-2cfffeb6ed47.png)

# TurtleCoin RPC

[![NPM](https://nodei.co/npm/turtlecoin-rpc.png?downloads=true&stars=true)](https://nodei.co/npm/turtlecoin-rpc/)

![Prerequisite](https://img.shields.io/badge/node-%3E%3D8-blue.svg) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://js-rpc.turtlecoin.dev) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/turtlecoin/turtlecoin-rpc-js/graphs/commit-activity) [![License: GPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-yellow.svg)](https://github.com/turtlecoin/turtlecoin-rpc-js/blob/master/LICENSE) [![Twitter: TurtlePay](https://img.shields.io/twitter/follow/_TurtleCoin.svg?style=social)](https://twitter.com/_TurtleCoin)

#### Master Build Status
[![Build Status](https://travis-ci.org/turtlecoin/turtlecoin-rpc-js.png?branch=master)](https://travis-ci.org/turtlecoin/turtlecoin-rpc-js) [![Build Status](https://ci.appveyor.com/api/projects/status/github/brandonlehmann/turtlecoin-rpc?branch=master&svg=true)](https://ci.appveyor.com/project/brandonlehmann/turtlecoin-rpc/branch/master)

This project is designed to make it very easy to interact with various RPC APIs available within the [TurtleCoin](https://turtlecoin.lol) Project. This entire project uses [Javascript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) to make things fast, easy, and safe.

## Package Upgrade Warning

v2.0.0+ contains multiple breaking changes to the package including the removal of support for Turtle-Service, removal of deprecated TurtleCoind RPC calls that will be removed, renaming of methods, and method argument changes throughout. Please be sure to read the documentation in full before upgrading to v2.0.0+.

## Table of Contents

1. [Dependencies](#dependencies)
2. [Installation](#installation)
3. [Intialization](#intialization)
4. [TurtleCoind RPC API Interface](#turtlecoind-rpc-api-interface)
5. [WalletAPI Interface](#walletapi-interface)

## Dependencies

* [NodeJS v8.x](https://nodejs.org) >= 8.x
* [TurtleCoin](https://github.com/turtlecoin/turtlecoin/releases) >= v0.8.4

## Installation

```bash
npm install turtlecoin-rpc
```

## Intialization

### TurtleCoind
```javascript
const TurtleCoind = require('turtlecoin-rpc').TurtleCoind

const daemon = new TurtleCoind({
  host: '127.0.0.1', // ip address or hostname of the TurtleCoind host
  port: 11898, // what port is the RPC server running on
  timeout: 2000, // request timeout
  ssl: false, // whether we need to connect using SSL/TLS
  userAgent: 'turtlecoin-rpc/2.0.0' // specify a customer user-agent or use the default
})
```

### Wallet-API
```javascript
const WalletAPI = require('turtlecoin-rpc').WalletAPI

const wallet = new WalletAPI({
  host: '127.0.0.1', // ip address or hostname of wallet-api host
  port: 8070, // port wallet-api is running on, default is 8070
  timeout: 5000, // how long to wait before timing out the connection
  ssl: false, // whether or not to connect through SSL
  password: 'password', // your rpc password
  defaultMixin: 3, // should be configured to the default mixin, or false if no default mixin is set
  defaultFee: 0.1, // the default fee of your network, in decimal not atomic units
  decimalDivisor: 100, // how many decimals will be used
  defaultUnlockTime: 0, // default unlock time
  userAgent: 'turtlecoin-rpc/2.0.0' // specify a customer user-agent or use the default
})
```

### Documentation

You can find the full documentation for this library [here](https://js-rpc.turtlecoin.dev)

## License

```
Copyright (C) 2018-2019 Brandon Lehmann, The TurtleCoin Developers

Please see the included LICENSE file for more information.
```
