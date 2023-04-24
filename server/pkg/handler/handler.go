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
		auth.POST("/sign-in", h.signIn)
	}
	profile := router.Group("/profile", h.userIdentity)
	{
		profile.GET("/")
		favorites := profile.Group("/favorites")
		{
			favorites.GET("/:id", h.GetAllFavorites)
		}
	}
	api := router.Group("/api", h.userIdentity)
	{
		films := api.Group("/films")
		{
			films.POST("/", h.AddFilm)
			films.GET("/", h.GetAllFilms)
			films.GET("/:id", h.GetFilmById)
			films.PUT("/:id", h.UpdateFilm)
			films.DELETE("/:id", h.DeleteFilm)
			films.POST("/addtofavs", h.AddToFavorites)
		}
		actors := api.Group("/actors")
		{
			actors.GET("/", h.GetAllActors)
			actors.GET("/:id", h.GetActorById)
		}
	}
	return router
}
