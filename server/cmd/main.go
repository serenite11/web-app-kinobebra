package main

import (
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"github.com/serenite11/web-app-kinobebra/server"
	"github.com/serenite11/web-app-kinobebra/server/pkg/handler"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
	"github.com/serenite11/web-app-kinobebra/server/pkg/service"
	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
	"os"
)

func main() {
	logrus.SetFormatter(new(logrus.JSONFormatter))
	if err := initConfig(); err != nil {
		logrus.Fatalf("error initializing configs: %s", err.Error())
	}
	if err := godotenv.Load("server/.env"); err != nil {
		logrus.Fatalf("haven't file env:%s", err.Error())
	}

	db, err := repository.NewPostgresDB(repository.Config{
		Host:     viper.GetString("db.host"),
		Port:     viper.GetString("db.port"),
		Username: viper.GetString("db.username"),
		Password: os.Getenv("DB_PASSWORD"),
		DBName:   viper.GetString("db.dbname"),
		SSLMode:  viper.GetString("db.sslmode"),
	})
	if err != nil {
		logrus.Fatalf("failed to initializating DB:%s", err.Error())
	}
	repos := repository.NewRepository(db)
	services := service.NewService(repos)
	handlers := handler.NewHandler(services)

	srv := new(server.Server)
	if err := srv.Run(viper.GetString("port"), handlers.InitRoutes()); err != nil {
		logrus.Fatalf("error: %s", err.Error())
	}
}

func initConfig() error {
	viper.AddConfigPath("server/configs")
	viper.SetConfigName("config")
	return viper.ReadInConfig()
}
