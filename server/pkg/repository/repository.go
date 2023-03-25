package repository

import "github.com/jmoiron/sqlx"

type Authorization interface {
}

type Repository struct {
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{}
}
