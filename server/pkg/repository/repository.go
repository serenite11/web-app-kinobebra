package repository

import (
	"github.com/jmoiron/sqlx"
	"github.com/serenite11/web-app-kinobebra/server"
	"github.com/serenite11/web-app-kinobebra/server/pkg/handler"
)

type Authorization interface {
	CreateUser(user server.User) (int, error)
	GetUser(login, password string) (server.User, error)
}

type IFilmsActions interface {
	AddFilm(film handler.Film) (int, error)
	GetFilmById(filmId int) handler.Film
	GetAllFilms() ([]handler.Film, error)
	UpdateFilm()
	DeleteFilm()
}

type Repository struct {
	Authorization
	IFilmsActions
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
		IFilmsActions: NewFilmsPostgres(db),
	}
}
