package handler

import "github.com/gin-gonic/gin"

type Film struct {
	Id          string
	Title       string
	Description string
	Rating      float32
	Actors      []Actor
}

func (h *Handler) getAllFilms(c *gin.Context) {

}

//
func (h *Handler) addFilm(c *gin.Context) {

}

func (h *Handler) getFilmById(c *gin.Context) {

}
func (h *Handler) updateFilm(c *gin.Context) {

}
func (h *Handler) deleteFilm(c *gin.Context) {

}
