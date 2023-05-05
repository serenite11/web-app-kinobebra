package service

import (
	"github.com/serenite11/web-app-kinobebra/server/models"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
)

type Authorization interface {
	CreateUser(user models.User) (int, error)
	GenerateToken(login, password string) (string, error)
	ParseToken(token string) (*tokenClaims, error)
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
type IDirectorsActions interface {
	GetAllDirectors() ([]models.Director, error)
	AddDirector(director models.Director) (int, error)
	GetDirectorById(directorId int) (models.Director, error)
}

type IFavoritesFilms interface {
	GetAllFavorites(userId int) ([]models.Favorites, error)
	AddToFavorites(favorites models.Favorites) (models.Favorites, error)
}
type Service struct {
	Authorization
	IFilmsActions
	IActorsActions
	IDirectorsActions
	IFavoritesFilms
}

func NewService(repos *repository.Repository) *Service {
	return &Service{
		Authorization:     NewAuthService(repos.Authorization),
		IFilmsActions:     NewFilmsActionsService(repos.IFilmsActions),
		IActorsActions:    NewActorsActionsService(repos.IActorsActions),
		IDirectorsActions: NewDirectorsService(repos.IDirectorsActions),
		IFavoritesFilms:   NewFavoritesService(repos.IFavoritesFilms),
	}
}
