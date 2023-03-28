package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/serenite11/web-app-kinobebra/server"
	"net/http"
)

func (h *Handler) signUp(c *gin.Context) {
	var input server.User
	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	id, err := h.services.Authorization.CreateUser(input)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

func (h *Handler) signIn(c *gin.Context) {

}
