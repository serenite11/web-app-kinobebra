package repository

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"github.com/serenite11/web-app-kinobebra/server/models"
)

type SeriesPostgres struct {
	db *sqlx.DB
}

func NewSeriesPostgres(db *sqlx.DB) *SeriesPostgres {
	return &SeriesPostgres{db: db}
}

func (r *SeriesPostgres) AddSerial(serial models.Serial) (int, error) {
	var id int
	query := fmt.Sprintf("INSERT INTO %s (title,description,rating,Years) values ($1,$2, $3, $4) RETURNING id", seriesTable)
	row := r.db.QueryRow(query, serial.Title, serial.Description, serial.Rating, serial.Years)
	if err := row.Scan(&id); err != nil {
		return 0, err
	}
	return id, nil
}
func (r *SeriesPostgres) GetAllSeries() ([]models.Serial, error) {
	var rows []models.Serial
	query := fmt.Sprintf("SELECT * FROM %s", seriesTable)
	err := r.db.Select(&rows, query)
	if err != nil {
		return nil, err
	}
	return rows, nil
}

func (r *SeriesPostgres) GetSerialById(serialId int) (models.Serial, error) {
	var row models.Serial
	query := fmt.Sprintf("SELECT * FROM %s WHERE id = $1", seriesTable)
	err := r.db.Get(&row, query, serialId)
	return row, err
}
