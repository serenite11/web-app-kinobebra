package models

type Film struct {
	Id          int    `json:"id" db:"id"`
	Title       string `json:"title" db:"title"`
	Description string `json:"description" db:"description"`
	Rating      int    `json:"rating" db:"rating"`
	Year_Old    int    `json:"year_old" db:"year_old"`
	Image       string `json:"image" db:"image"`
}
