package repository

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"github.com/serenite11/web-app-kinobebra/server/pkg/handler"
)

type FilmsPostgres struct {
	db *sqlx.DB
}

func NewFilmsPostgres(db *sqlx.DB) *FilmsPostgres {
	return &FilmsPostgres{db: db}
}

func (r *FilmsPostgres) AddFilm(film handler.Film) (int, error) {
	var id int
	query := fmt.Sprintf("INSERT INTO %s (title,description,rating,year_old) values ($1,$2, $3, $4) RETURNING id", filmsTable)
	row := r.db.QueryRow(query, film.Title, film.Description, film.Rating, film.YearOld)
	if err := row.Scan(&id); err != nil {
		return 0, err
	}
	return id, nil
}
func (r *FilmsPostgres) GetAllFilms() ([]handler.Film, error) {
	var rows []handler.Film
	query := fmt.Sprintf("SELECT * FROM %s", filmsTable)
	_, err := r.db.Query(query, &rows)
	if err != nil {
		return []handler.Film{}, err
	}
	return rows, nil
}

func (r *FilmsPostgres) GetFilmById(filmId int) handler.Film {
	var row handler.Film
	query := fmt.Sprintf("SELECT * FROM %s WHERE id = %1", filmsTable, filmId)
	r.db.QueryRow(query, &row)
	return row
}
func (r *FilmsPostgres) UpdateFilm() {

}
func (r *FilmsPostgres) DeleteFilm() {

}
