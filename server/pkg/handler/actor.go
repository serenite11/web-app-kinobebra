package handler

import "github.com/gin-gonic/gin"

type Actor struct {
	Name     string
	LastName string
	Gender   string
	Film     []Film
}

func (h *Handler) getAllActors(c *gin.Context) {

}

func (h *Handler) addActor(c *gin.Context) {

}

func (h *Handler) getActorById(c *gin.Context) {

}
func (h *Handler) updateActor(c *gin.Context) {

}
func (h *Handler) deleteActor(c *gin.Context) {

}
