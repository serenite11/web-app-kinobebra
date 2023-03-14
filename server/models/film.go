package models

type Film struct {
	Id          string
	Title       string
	Description string
	Rating      float32
	Actors      []Actor
}
