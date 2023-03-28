package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/serenite11/web-app-kinobebra/server/pkg/service"
)

type Handler struct {
	services *service.Service
}

func NewHandler(service *service.Service) *Handler {
	return &Handler{services: service}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()
	auth := router.Group("/auth")
	{
		auth.POST("/sign-up", h.signUp)
		auth.GET("/sign-in", h.signIn)
	}
	api := router.Group("/api")
	{
		films := api.Group("films")
		{
			films.POST("/", nil)
			films.GET("/", nil)
			films.GET("/:id", nil)
			films.PUT("/:id", nil)
			films.DELETE("/:id", nil)
		}
	}
	return router
}
