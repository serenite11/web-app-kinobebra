package service

import (
	"github.com/serenite11/web-app-kinobebra/server/models"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
)

type FilmsActionsService struct {
	repo repository.IFilmsActions
}

func NewFilmsActionsService(repo repository.IFilmsActions) *FilmsActionsService {
	return &FilmsActionsService{repo: repo}
}

func (s *FilmsActionsService) AddFilm(film models.Film) (int, error) {
	return s.repo.AddFilm(film)
}
func (s *FilmsActionsService) GetAllFilms() ([]models.Film, error) {
	return s.repo.GetAllFilms()
}

func (s *FilmsActionsService) GetFilmById(filmId int) (models.Film, error) {
	return s.repo.GetFilmById(filmId)
}
