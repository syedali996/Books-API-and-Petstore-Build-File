# Books API

The Books API provides information about book reviews and The New York Times Best Sellers lists.

### Best Sellers Lists Services

##### List Names

The lists/names service returns a list of all the NYT Best Sellers Lists. Some lists are published weekly and others monthly. The response includes when each list was first published and last published.

`/lists/names.json`

##### List Data
The lists/{date}/{name} service returns the books on the best sellers list for the specified date and list name.

`/lists/2019-01-20/hardcover-fiction.json`

Use "current" for {date} to get the latest list.

`/lists/current/hardcover-fiction.json`

### Book Reviews Services

The book reviews service lets you get NYT book review by author, ISBN, or title.

`/reviews.json?author=Michelle+Obama`

`/reviews.json?isbn=9781524763138`

`/reviews.json?title=Becoming`








