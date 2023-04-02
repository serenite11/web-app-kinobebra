package repository

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"github.com/serenite11/web-app-kinobebra/server"
)

type AuthPostgres struct {
	db *sqlx.DB
}

func NewAuthPostgres(db *sqlx.DB) *AuthPostgres {
	return &AuthPostgres{db: db}
}

func (r *AuthPostgres) CreateUser(user server.User) (int, error) {
	var id int
	query := fmt.Sprintf("INSERT INTO %s (name,lastname , login, password_hash, email, birthday) values ($1,$2, $3, $4, $5, $6) RETURNING id", usersTable)
	row := r.db.QueryRow(query, user.Name, user.LastName, user.Login, user.Password, user.Email, user.DateOfBirth)
	if err := row.Scan(&id); err != nil {
		return 0, err
	}
	return id, nil
}

func (r *AuthPostgres) GetUser(login, password string) (server.User, error) {
	var user server.User
	query := fmt.Sprintf("SELECT id FROM %s WHERE login=$1 AND password_hash=$2", usersTable)
	err := r.db.Get(&user, query, login, password)
	return user, err
}
