package models

type Actor struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	LastName string `json:"lastName"`
	Gender   string `json:"gender"`
	Image    string `json:"image"`
}
