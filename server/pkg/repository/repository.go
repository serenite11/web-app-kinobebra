package repository

import "github.com/jmoiron/sqlx"

type Authorization interface {
}

type Repository struct {
	db *sqlx.DB
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{}
}
