package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/serenite11/web-app-kinobebra/server/models"
	"net/http"
)

func (h *Handler) AddToFavorite(c *gin.Context) {
	var favorites models.FavoritesFilms
	if err := c.BindJSON(&favorites); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
	}

}
