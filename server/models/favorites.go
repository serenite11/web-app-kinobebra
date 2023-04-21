package models

type Favorites struct {
	User_id int `json:"user_id" bd:"user_id"`
	Film_id int `json:"film_id" bd:"film_id"`
}
