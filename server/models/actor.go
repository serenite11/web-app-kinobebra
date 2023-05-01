package models

type Actor struct {
	Id       string `json:"id" db:"id"`
	Name     string `json:"name" db:"name"`
	LastName string `json:"lastName" db:"lastname"`
	Gender   string `json:"gender" db:"gender"`
	Image    string `json:"image" db:"image"`
}
