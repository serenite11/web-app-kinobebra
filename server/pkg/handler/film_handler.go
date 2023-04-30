package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/serenite11/web-app-kinobebra/server/models"
	"net/http"
	"strconv"
)

func (h *Handler) AddFilm(c *gin.Context) {
	var film models.Film
	if err := c.BindJSON(&film); err != nil {
		return
	}
	id, err := h.services.IFilmsActions.AddFilm(film)
	if err != nil {
		return
	}
	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

type getAllFilmsResponse struct {
	Data []models.Film `json:"data"`
}

func (h *Handler) GetAllFilms(c *gin.Context) {
	films, err := h.services.IFilmsActions.GetAllFilms()
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	c.JSON(http.StatusOK, getAllFilmsResponse{
		Data: films,
	})
}

func (h *Handler) GetFilmById(c *gin.Context) {
	filmId, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	film, err := h.services.IFilmsActions.GetFilmById(filmId)
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	c.JSON(http.StatusOK, models.Film{
		Id:          film.Id,
		Title:       film.Title,
		Description: film.Description,
		Rating:      film.Rating,
		Year_Old:    film.Year_Old,
	})
}

func (h *Handler) UpdateFilm(c *gin.Context) {

}
func (h *Handler) DeleteFilm(c *gin.Context) {
}
