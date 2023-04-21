package models

type Actor struct {
	Id       string `json:"id" bd:"id"`
	Name     string `json:"name" bd:"name"`
	LastName string `json:"lastName" bd:"lastname"`
	Gender   string `json:"gender" bd:"gender"`
	Image    string `json:"image" bd:"image"`
}
