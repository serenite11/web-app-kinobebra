package service

import (
	"github.com/serenite11/web-app-kinobebra/server/models"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
)

type SeriesActionsService struct {
	repo repository.ISeriesActions
}

func NewSeriesActionsService(repo repository.ISeriesActions) *SeriesActionsService {
	return &SeriesActionsService{repo: repo}
}

func (s *SeriesActionsService) AddSerial(serial models.Serial) (int, error) {
	return s.repo.AddSerial(serial)
}
func (s *SeriesActionsService) GetAllSeries() ([]models.Serial, error) {
	return s.repo.GetAllSeries()
}

func (s *SeriesActionsService) GetSerialById(serialId int) (models.Serial, error) {
	return s.repo.GetSerialById(serialId)
}
