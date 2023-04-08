package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type Film struct {
	Id          string  `json:"id" bd:"id"`
	Title       string  `json:"title" bd:"title"`
	Description string  `json:"description" bd:"description"`
	Rating      float32 `json:"rating" bd:"rating"`
	YearOld     int     `json:"yearOld" bd:"title"`
}

func (h *Handler) AddFilm(c *gin.Context) {
	var film Film
	if err := c.BindJSON(&film); err != nil {
		return
	}
	id, err := h.services.AddFilm(film)
	if err != nil {
		return
	}
	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

type getAllFilmsResponse struct {
	filmsList []Film `json:"filmsList"`
}

func (h *Handler) GetAllFilms(c *gin.Context) {
	films, err := h.services.GetAllFilms()
	if err != nil {
		return
	}
	c.JSON(http.StatusOK, getAllFilmsResponse{
		filmsList: films,
	})
}

func (h *Handler) GetFilmById(c *gin.Context) {

}
func (h *Handler) UpdateFilm(c *gin.Context) {

}
func (h *Handler) DeleteFilm(c *gin.Context) {

}
