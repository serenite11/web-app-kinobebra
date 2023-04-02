package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type Film struct {
	Id          string  `json:"id"`
	Title       string  `json:"title"`
	Description string  `json:"description"`
	Rating      float32 `json:"rating"`
}

func (h *Handler) getAllFilms(c *gin.Context) {

}

//
func (h *Handler) addFilm(c *gin.Context) {
	id, _ := c.Get(userCtx)
	c.JSONP(http.StatusOK, map[string]interface{}{
		"id": id,
	})

}

func (h *Handler) getFilmById(c *gin.Context) {

}
func (h *Handler) updateFilm(c *gin.Context) {

}
func (h *Handler) deleteFilm(c *gin.Context) {

}
