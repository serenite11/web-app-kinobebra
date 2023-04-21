package models

type Director struct {
	Id       int    `json:"id" db:"id"`
	Name     string `json:"name" db:"name"`
	LastName string `json:"last_name" db:"lastname"`
	Image    string `json:"image" db:"image"`
}
