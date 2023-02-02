# Pet Store and Books API

### Introduction

This Portal is made up of two APIs, the Pet Store API, and the Books API. These APIs have been documented on the Portal and their specification files have been merged together to make this possible.

### Pet Store API

The Pet Store API is a sample API for a Pet Store hosted and maintained by Swagger. To find out more information about this API you can refer to the [Swagger Petstore](https://petstore.swagger.io/)

#### Environments:

This API has support for the following environment(s). Each environment has one or more base URIs defined.

| Server | Base URL |
| ------ | :------: |
| server1 | https://petstore.swagger.io/v2 |
| server2 | http://petstore.swagger.io/v2 |
| auth server | https://petstore.swagger.io/oauth |

The default environment is production and the default server is server1.

### Books API

The Books API provides information about book reviews and The New York Times Best Sellers lists.

For more information regarding the Books API, you can access the following resource,[Books API](https://developer.nytimes.com/docs/books-product/1/overview).

#### Authorization:

This API uses `Custom Query Parameter`.

This API uses the following query parameters for authentication.


| Query |Default  |
| --- | --- |
|  api-key	| S36VNES3R5jDxeBwfdVeWvqKUQoWem8l |

The request looks like this:

```
curl https://api.nytimes.com/svc/books/v3?api-key=~~~~S36VNES3R5jDxeBwfdVeWvqKUQoWem8l

```

