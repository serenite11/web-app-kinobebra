package service

import (
	"github.com/serenite11/web-app-kinobebra/server"
	"github.com/serenite11/web-app-kinobebra/server/pkg/handler"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
)

type Authorization interface {
	CreateUser(user server.User) (int, error)
	GenerateToken(login, password string) (string, error)
	ParseToken(token string) (int, error)
}

type IFilmsActions interface {
	AddFilm(film handler.Film) (int, error)
	GetFilmById(filmId int) handler.Film
	GetAllFilms() ([]handler.Film, error)
	UpdateFilm()
	DeleteFilm()
}

type Service struct {
	Authorization
	IFilmsActions
}

func NewService(repos *repository.Repository) *Service {
	return &Service{
		Authorization: NewAuthService(repos.Authorization),
		IFilmsActions: NewFilmsActionsService(repos.IFilmsActions),
	}
}
