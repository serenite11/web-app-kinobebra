package main

import (
	server "github.com/serenite11/web-app-kinobebra"
	"github.com/serenite11/web-app-kinobebra/pkg/handler"
	"log"
)

func main() {
	handlers := new(handler.Handler)
	srv := new(server.Server)
	if err := srv.Run("8008", handlers.InitRoutes()); err != nil {
		log.Fatalf("error: %s", err)
	}
}
