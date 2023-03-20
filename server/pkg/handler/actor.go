package handler

import "github.com/gin-gonic/gin"

type Actor struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	LastName string `json:"lastName"`
	Gender   string `json:"gender"`
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
