package server

type User struct {
	Id          int    `json:"id"`
	Name        string `json:"name"`
	LastName    string `json:"lastname"`
	Login       string `json:"login"`
	Password    string `json:"password_hash"`
	Email       string `json:"email"`
	DateOfBirth string `json:"birthday"`
	ImageUrl    string `json:"image"`
	Agree       bool   `json:"agree"`
}
