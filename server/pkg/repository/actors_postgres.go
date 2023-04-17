package repository

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"github.com/serenite11/web-app-kinobebra/server/models"
)

type ActorsPostgres struct {
	db *sqlx.DB
}

func NewActorsPostgres(db *sqlx.DB) *ActorsPostgres {
	return &ActorsPostgres{db: db}
}

func (r *ActorsPostgres) GetAllActors() ([]models.Actor, error) {
	var rows []models.Actor
	query := fmt.Sprintf("SELECT * FROM %s", actorsTable)
	err := r.db.Select(&rows, query)
	if err != nil {
		return nil, err
	}
	return rows, nil
}

func (r *ActorsPostgres) GetActorById(actorId int) (models.Actor, error) {
	var row models.Actor
	query := fmt.Sprintf("SELECT * FROM %s WHERE id = $1", actorsTable)
	err := r.db.Get(&row, query, actorId)
	return row, err
}
