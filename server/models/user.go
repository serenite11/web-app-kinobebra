package models

type User struct {
	Id          int    `json:"-" db:"id"`
	Name        string `json:"name" db:"name"`
	LastName    string `json:"lastname" db:"lastname"`
	Login       string `json:"login" db:"login"`
	Password    string `json:"password" db:"password"`
	Email       string `json:"email" db:"email"`
	DateOfBirth string `json:"birthday" db:"birthday"`
	Image       string `json:"image" db:"image"`
	Agree       bool   `json:"agree"`
}
