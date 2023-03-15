package handler

import "github.com/gin-gonic/gin"

type Handler struct {
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
