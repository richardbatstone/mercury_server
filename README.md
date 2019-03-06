# mercury_server

This is a wrapper for Postlights Mercury-parser (https://github.com/postlight/mercury-parser) which exposes the parser in a simple API. 

## Server

Index.js is a very simple node express server with a single endpoint, '/'. The endpoint accepts POST requests with a body in the form {"url":"[URL_TO_BE PARSED]"}. The specified url is passed to mercury-parser (with the relevant node-modules being included in the server's requirements). It responds with a JSON object, being the output of the mercury-parsed url. The server is exposed on port 8080.

## Client

No specific client is provided to access the API. However, with the mercury-parser exposed in this way, it it straightforward to access it from other applications / languages. For example, you can access a page's contents and title using python requests:

```python
import requests
import json

mercury_server = "http://localhost:8080/"
resp = requests.post(mercury_server, data={'url': [URL_TO_BE_PARSED]})
j_response = resp.json()

page_content = j_response['content']
page_title = j_response['title']
```

## Setup

