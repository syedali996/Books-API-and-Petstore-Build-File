# Getting Started

### Example Calls

`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey`


`https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=yourkey
`

### Resource Types

URIs are relative to https://api.nytimes.com/svc/books/v3, unless otherwise noted.

##### OverviewResponse

| Method |          Endpoint         |                             Description                            |
|--------|:-------------------------:|:------------------------------------------------------------------:|
| GET    | /lists/full-overview.json |   Get all books for all the Best Sellers lists for a specific date.  |
| GET    |    /lists/overview.json   | Get top 5 books for all the Best Sellers lists for the specified date. |
