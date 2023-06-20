package models

type Serial struct {
	Id          int    `json:"id" db:"id"`
	Title       string `json:"title" db:"title"`
	Description string `json:"description" db:"description"`
	Rating      int    `json:"rating" db:"rating"`
	Years       string `json:"years" db:"years"`
	Image       string `json:"image" db:"image"`
}
