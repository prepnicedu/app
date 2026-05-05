// services/v1-service/main.go
package main

import (
	"fmt"
	"log"
	"net/http"
)

func requireAuth(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		user := r.Header.Get("X-Remote-User")
		if user == "" {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}
		next(w, r)
	}
}

func main() {
	// Public API (/v1-service/public)
	http.HandleFunc("/public", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Public API: Success!\n"))
	})

	// Protected API 1 (/v1-service/protected)
	http.HandleFunc("/protected", requireAuth(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(fmt.Sprintf("Protected API: Welcome, %s!\n", r.Header.Get("X-Remote-User"))))
	}))

	// Protected API 2 (/v1-service/protected/settings) - Handled Automatically by PathPrefix!
	http.HandleFunc("/protected/settings", requireAuth(func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte(fmt.Sprintf("Settings for user: %s\n", r.Header.Get("X-Remote-User"))))
	}))

	log.Println("v1-service listening on :8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}