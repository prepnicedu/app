// services/v2-service/main.go
package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	// Public API
	http.HandleFunc("/public", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("v2-service: This is a public endpoint!\n"))
	})

	// Protected API
	http.HandleFunc("/secure", func(w http.ResponseWriter, r *http.Request) {
		user := r.Header.Get("X-Remote-User")
		if user == "" {
			http.Error(w, "Unauthorized v2", http.StatusUnauthorized)
			return
		}
		w.Write([]byte(fmt.Sprintf("v2-service: Hello %s, you access v2 secured data!\n", user)))
	})

	log.Println("v2-service listening on :8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}