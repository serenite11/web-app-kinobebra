package handler

type User struct {
	Id          string `json:"id"`
	Name        string `json:"name"`
	Login       string `json:"login"`
	Email       string `json:"email"`
	DateOfBirth string `json:"date-of-birth"`
}
