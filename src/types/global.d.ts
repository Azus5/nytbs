type Book = {
  title: string,
  rank: number,
  amazon_url: string,
  description: string,
  contributor: string,
  author: string,
  contributor_note: string,
  price: string,
  age_group: string,
  publisher: string,
  primary_isbn13: string,
  primary_isbn10: string
}

type Genre = {
  list_name: string,
  display_name: string,
  list_name_encoded: string,
  oldest_published_date: string,
  newest_published_date: string,
  updated: string
}

type NewYorkTimesAPIResponse = {
  status: string
  copyright: string
  num_results: string
  last_modified?: string
  results: array
}

type ListItem = {
  list_name: string,
  display_name: string,
  bestsellers_date: string,
  published_date: string,
  rank: number,
  rank_last_week: number,
  weeks_on_list: number,
  asterisk: number,
  dagger: number,
  amazon_product_url: string,
  isbns: Array<Object>,
  book_details: Book[], // It's an array but it only returns one object
  reviews: Array<Object>
}