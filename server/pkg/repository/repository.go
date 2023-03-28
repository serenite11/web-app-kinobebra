package repository

import (
	"github.com/jmoiron/sqlx"
	"github.com/serenite11/web-app-kinobebra/server"
)

type Authorization interface {
	CreateUser(user server.User) (int, error)
}

type Repository struct {
	Authorization
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
	}
}
