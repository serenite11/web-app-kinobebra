package models

type Favorites struct {
	User_id int `json:"user_id" db:"user_id"`
	Film_id int `json:"film_id" db:"film_id"`
}
