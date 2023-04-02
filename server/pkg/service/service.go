package service

import (
	"github.com/serenite11/web-app-kinobebra/server"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
)

type Authorization interface {
	CreateUser(user server.User) (int, error)
	GenerateToken(login, password string) (string, error)
	ParseToken(token string) (int, error)
}

type Service struct {
	Authorization
}

func NewService(repos *repository.Repository) *Service {
	return &Service{
		Authorization: NewAuthService(repos.Authorization),
	}
}
