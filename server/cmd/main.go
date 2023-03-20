package main

import (
	server "github.com/serenite11/web-app-kinobebra"
	"github.com/serenite11/web-app-kinobebra/pkg/handler"
	"github.com/serenite11/web-app-kinobebra/pkg/repository"
	"github.com/serenite11/web-app-kinobebra/pkg/service"
	"github.com/spf13/viper"
	"log"
)

func main() {
	if err := initConfig(); err != nil {
		log.Fatalf("error initializing configs: %s", err.Error())
	}
	repos := repository.NewRepository()
	services := service.NewService(repos)
	handlers := handler.NewHandler(services)

	srv := new(server.Server)
	if err := srv.Run(viper.GetString("port"), handlers.InitRoutes()); err != nil {
		log.Fatalf("error: %s", err)
	}
}

func initConfig() error {
	viper.AddConfigPath("configs")
	viper.SetConfigName("config")
	return viper.ReadInConfig()
}
