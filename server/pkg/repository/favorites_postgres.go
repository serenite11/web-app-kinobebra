package repository

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"github.com/serenite11/web-app-kinobebra/server/models"
)

type FavoritesPostgres struct {
	db *sqlx.DB
}

func NewFavoritesPostgres(db *sqlx.DB) *FavoritesPostgres {
	return &FavoritesPostgres{db: db}
}

func (r *FavoritesPostgres) GetAllFavorites(userId int) ([]models.Favorites, error) {
	var rows []models.Favorites
	query := fmt.Sprintf("SELECT * FROM %s WHERE user_id=$1", favoritesTable)
	err := r.db.Select(&rows, query, userId)
	if err != nil {
		return []models.Favorites{}, err
	}
	return rows, nil
}

func (r *FavoritesPostgres) AddToFavorites(favorites models.Favorites) (models.Favorites, error) {
	query := fmt.Sprintf("INSERT INTO %s (user_id,film_id) values ($1,$2)", favoritesTable)
	_, err := r.db.Query(query, favorites.User_id, favorites.Film_id)
	if err != nil {
		return models.Favorites{}, err
	}
	return favorites, nil
}
