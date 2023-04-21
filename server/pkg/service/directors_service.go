package service

import (
	"github.com/serenite11/web-app-kinobebra/server/models"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
)

type DirectorsService struct {
	repo repository.IDirectorsActions
}

func NewDirectorsService(repo repository.IDirectorsActions) *DirectorsService {
	return &DirectorsService{repo: repo}
}

func (s *DirectorsService) GetDirectorById(directorId int) (models.Director, error) {
	return s.repo.GetDirectorById(directorId)
}

func (s *DirectorsService) AddDirector(director models.Director) (int, error) {
	return s.repo.AddDirector(director)
}

func (s *DirectorsService) GetAllDirectors() ([]models.Director, error) {
	return s.repo.GetAllDirectors()
}
