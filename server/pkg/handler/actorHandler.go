package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func (h *Handler) GetAllActors(c *gin.Context) {
	films, err := h.services.IFilmsActions.GetAllFilms()
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	c.JSON(http.StatusOK, getAllFilmsResponse{
		Data: films,
	})
}

func (h *Handler) GetActorById(c *gin.Context) {

}
