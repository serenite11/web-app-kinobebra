package handler

import (
	"github.com/gin-gonic/gin"
)

type Film struct {
	Id          string  `json:"id"`
	Title       string  `json:"title"`
	Description string  `json:"description"`
	Rating      float32 `json:"rating"`
}

func getAllFilms(c *gin.Context) {

}

//
func addFilm(c *gin.Context) {

}

func getFilmById(c *gin.Context) {

}
func updateFilm(c *gin.Context) {

}
func deleteFilm(c *gin.Context) {

}
