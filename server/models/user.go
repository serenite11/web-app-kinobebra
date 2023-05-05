package models

import "mime/multipart"

type User struct {
	Id          int                  `json:"id" db:"id" form:"-"`
	Name        string               `json:"name" db:"name" form:"name"`
	LastName    string               `json:"lastname" db:"lastname" form:"lastname"`
	Login       string               `json:"login" db:"login" form:"login"`
	Password    string               `json:"password" db:"password_hash" form:"password"`
	Email       string               `json:"email" db:"email" form:"email"`
	DateOfBirth string               `json:"date" db:"birthday" form:"date"`
	Image       multipart.FileHeader `json:"image" db:"image" form:"image"`
	Agree       bool                 `json:"agree"  form:"agree"`
}
