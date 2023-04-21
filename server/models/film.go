package models

type Film struct {
	Id          int    `json:"id" bd:"id"`
	Title       string `json:"title" bd:"title"`
	Description string `json:"description" bd:"description"`
	Rating      int    `json:"rating" bd:"rating"`
	Year_Old    int    `json:"year_old" bd:"year_old"`
	Image       string `json:"image" bd:"image"`
}
