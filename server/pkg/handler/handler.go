package handler

import (
	"github.com/gin-gonic/gin"
	"github.com/serenite11/web-app-kinobebra/pkg/service"
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
		auth.POST("sign-up", h.signUp)
		auth.GET("sign-in", h.signIn)
	}
	api := router.Group("/api")
	{
		films := api.Group("films")
		{
			films.POST("/", h.addFilm)
			films.GET("/", h.getAllFilms)
			films.GET("/:id", h.getFilmById)
			films.PUT("/:id", h.updateFilm)
			films.DELETE("/:id", h.deleteFilm)
		}
	}
	return router
}
