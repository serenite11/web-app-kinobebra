package repository

import (
	"github.com/jmoiron/sqlx"
	"github.com/serenite11/web-app-kinobebra/server/models"
)

type Authorization interface {
	CreateUser(user models.User) (int, error)
	GetUser(login, password string) (models.User, error)
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

type Repository struct {
	Authorization
	IFilmsActions
	IActorsActions
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization:  NewAuthPostgres(db),
		IFilmsActions:  NewFilmsPostgres(db),
		IActorsActions: NewActorsPostgres(db),
	}
}
