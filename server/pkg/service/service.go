package service

import (
	"github.com/serenite11/web-app-kinobebra/server/models"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
)

type Authorization interface {
	CreateUser(user models.User) (int, error)
	GenerateToken(login, password string) (string, error)
	ParseToken(token string) (int, error)
}

type IFilmsActions interface {
	AddFilm(film models.Film) (int, error)
	GetFilmById(filmId int) (models.Film, error)
	GetAllFilms() ([]models.Film, error)
	UpdateFilm()
	DeleteFilm()
}
type IActorsActions interface {
	GetActorById(actorId int) (models.Actor, error)
	GetAllActors() ([]models.Actor, error)
}
type Service struct {
	Authorization
	IFilmsActions
	IActorsActions
}

func NewService(repos *repository.Repository) *Service {
	return &Service{
		Authorization:  NewAuthService(repos.Authorization),
		IFilmsActions:  NewFilmsActionsService(repos.IFilmsActions),
		IActorsActions: NewActorsActionsService(repos.IActorsActions),
	}
}
