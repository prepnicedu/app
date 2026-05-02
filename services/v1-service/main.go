// services/v1-service/main.go
package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	// Public API
	http.HandleFunc("/public", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Public API: Success!\n"))
	})

	// Protected API (Trusts X-Remote-User header from Envoy)
	http.HandleFunc("/protected", func(w http.ResponseWriter, r *http.Request) {
		user := r.Header.Get("X-Remote-User")
		if user == "" {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(fmt.Sprintf("Protected API: Welcome, %s!\n", user)))
	})

	log.Println("Microservice listening on :8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}