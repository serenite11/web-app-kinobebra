package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/serenite11/web-app-kinobebra/server/models"
	"net/http"
	"strconv"
)

func (h *Handler) AddToFavorites(c *gin.Context) {
	var favorites models.Favorites
	if err := c.BindJSON(&favorites); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	favorites, err := h.services.IFavoritesFilms.AddToFavorites(favorites)
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	c.JSON(http.StatusOK, favorites)
}
func (h *Handler) GetAllFavorites(c *gin.Context) {
	var favorites []models.Favorites
	userId, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	favorites, err = h.services.IFavoritesFilms.GetAllFavorites(userId)
	c.JSON(http.StatusOK, favorites)
}
