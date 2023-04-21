package repository

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"github.com/serenite11/web-app-kinobebra/server/models"
)

type FilmsPostgres struct {
	db *sqlx.DB
}

func NewFilmsPostgres(db *sqlx.DB) *FilmsPostgres {
	return &FilmsPostgres{db: db}
}

func (r *FilmsPostgres) AddFilm(film models.Film) (int, error) {
	var id int
	query := fmt.Sprintf("INSERT INTO %s (title,description,rating,year_old) values ($1,$2, $3, $4) RETURNING id", filmsTable)
	row := r.db.QueryRow(query, film.Title, film.Description, film.Rating, film.Year_Old)
	if err := row.Scan(&id); err != nil {
		return 0, err
	}
	return id, nil
}
func (r *FilmsPostgres) GetAllFilms() ([]models.Film, error) {
	var rows []models.Film
	query := fmt.Sprintf("SELECT * FROM %s", filmsTable)
	err := r.db.Select(&rows, query)
	if err != nil {
		return nil, err
	}
	return rows, nil
}

func (r *FilmsPostgres) GetFilmById(filmId int) (models.Film, error) {
	var row models.Film
	query := fmt.Sprintf("SELECT * FROM %s WHERE id = $1", filmsTable)
	err := r.db.Get(&row, query, filmId)
	return row, err
}
func (r *FilmsPostgres) UpdateFilm() {

}

func (r *FilmsPostgres) DeleteFilm() {

}
