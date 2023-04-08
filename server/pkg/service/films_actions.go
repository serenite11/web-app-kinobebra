package service

import (
	"github.com/serenite11/web-app-kinobebra/server/pkg/handler"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
)

type FilmsActionsService struct {
	repo repository.IFilmsActions
}

func NewFilmsActionsService(repo repository.IFilmsActions) *FilmsActionsService {
	return &FilmsActionsService{repo: repo}
}

func (s *FilmsActionsService) AddFilm(film handler.Film) (int, error) {
	return s.repo.AddFilm(film)
}
func (s *FilmsActionsService) GetAllFilms() ([]handler.Film, error) {
	return s.repo.GetAllFilms()
}

func (s *FilmsActionsService) GetFilmById(filmId int) handler.Film {
	return s.repo.GetFilmById(filmId)
}
func (s *FilmsActionsService) UpdateFilm() {

}
func (s *FilmsActionsService) DeleteFilm() {

}
