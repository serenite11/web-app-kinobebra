package handler

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/serenite11/web-app-kinobebra/server/models"
	"log"
	"net/http"
	"path"
)

func (h *Handler) signUp(c *gin.Context) {
	var input models.User
	if err := c.Bind(&input); err != nil {
		log.Print(input.Image)
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	file, err := c.FormFile("image")
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	filename := input.Login + ".jpg"
	fmt.Println(file.Filename, filename)
	err = c.SaveUploadedFile(file, path.Join("..", "../static/", filename))

	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	input.Image = file
	/*if input.Agree == false {
		newErrorResponse(c, http.StatusBadGateway, "You must agree to the processing of data")
		return
	}*/

	id, err := h.services.Authorization.CreateUser(input)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	token, err := h.services.Authorization.GenerateToken(input.Login, input.Password)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	c.JSON(http.StatusOK, map[string]interface{}{
		"id":    id,
		"token": token,
	})
}

type signInInput struct {
	Login    string `json:"login"`
	Password string `json:"password"`
}

func (h *Handler) signIn(c *gin.Context) {
	var input signInInput
	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}
	token, err := h.services.Authorization.GenerateToken(input.Login, input.Password)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	c.JSON(http.StatusOK, map[string]interface{}{
		"token": token,
	})
}
