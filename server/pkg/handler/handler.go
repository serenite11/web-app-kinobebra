package handler

import (
	"github.com/gin-gonic/gin"
	cors "github.com/rs/cors/wrapper/gin"
	"github.com/serenite11/web-app-kinobebra/server/pkg/service"
)

type Handler struct {
	services *service.Service
}

func NewHandler(service *service.Service) *Handler {
	return &Handler{services: service}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.Default()
	router.Use(cors.New(cors.Options{
		AllowedOrigins:         nil,
		AllowOriginFunc:        nil,
		AllowOriginRequestFunc: nil,
		AllowedHeaders:         nil,
		ExposedHeaders:         nil,
		MaxAge:                 0,
		AllowCredentials:       false,
		AllowPrivateNetwork:    false,
		OptionsPassthrough:     false,
		OptionsSuccessStatus:   0,
		Debug:                  true,
	}))
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
