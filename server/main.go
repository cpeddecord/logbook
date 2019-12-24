package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", helloServer)
	http.ListenAndServe(":4000", nil)
}

func helloServer(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "{ \"message\": \"whale hello there, %s!\" }", r.URL.Path[1:])
}
