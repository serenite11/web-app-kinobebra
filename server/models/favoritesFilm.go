package models

type FavoritesFilms struct {
	User_id  int   `json:"user_id"`
	Films_id []int `json:"films_id"`
}
