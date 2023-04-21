package repository

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"github.com/serenite11/web-app-kinobebra/server/models"
)

type DirectorsPostgres struct {
	db *sqlx.DB
}

func NewDirectorsPostgres(db *sqlx.DB) *DirectorsPostgres {
	return &DirectorsPostgres{db: db}
}

func (r *DirectorsPostgres) AddDirector(director models.Director) (int, error) {
	var id int
	query := fmt.Sprintf("INSERT INTO %s (name,lastname,image) values ($1,$2, $3) RETURNING id", directorsTable)
	row := r.db.QueryRow(query, director.Name, director.LastName, director.Image)
	if err := row.Scan(&id); err != nil {
		return 0, err
	}
	return id, nil
}

func (r *DirectorsPostgres) GetAllDirectors() ([]models.Director, error) {
	var rows []models.Director
	query := fmt.Sprintf("SELECT * FROM %s", directorsTable)
	err := r.db.Select(&rows, query)
	if err != nil {
		return nil, err
	}
	return rows, nil
}
func (r *DirectorsPostgres) GetDirectorById(directorId int) (models.Director, error) {
	var row models.Director
	query := fmt.Sprintf("SELECT * FROM %s WHERE id = $1", directorsTable)
	err := r.db.Get(&row, query, directorId)
	return row, err
}
