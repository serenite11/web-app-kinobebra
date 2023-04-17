package service

import (
	"github.com/serenite11/web-app-kinobebra/server/models"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
)

type ActorsActionsService struct {
	repo repository.IActorsActions
}

func NewActorsActionsService(repo repository.IActorsActions) *ActorsActionsService {
	return &ActorsActionsService{repo: repo}
}

func (s *ActorsActionsService) GetAllActors() ([]models.Actor, error) {
	return s.repo.GetAllActors()
}

func (s *ActorsActionsService) GetActorById(actorId int) (models.Actor, error) {
	return s.repo.GetActorById(actorId)
}
