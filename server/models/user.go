package models

type User struct {
	Id          int    `json:"-" db:"id"`
	Name        string `json:"name"`
	LastName    string `json:"lastname"`
	Login       string `json:"login"`
	Password    string `json:"password"`
	Email       string `json:"email"`
	DateOfBirth string `json:"birthday"`
	Image       string `json:"image"`
	Agree       bool   `json:"agree"`
}
