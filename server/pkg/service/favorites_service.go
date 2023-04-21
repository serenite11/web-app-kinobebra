package service

import (
	"github.com/serenite11/web-app-kinobebra/server/models"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
)

type FavoritesService struct {
	repo repository.IFavoritesFilms
}

func NewFavoritesService(repo repository.IFavoritesFilms) *FavoritesService {
	return &FavoritesService{repo: repo}
}

func (s *FavoritesService) GetAllFavorites(userId int) ([]models.Favorites, error) {
	return s.repo.GetAllFavorites(userId)
}

func (s *FavoritesService) AddToFavorites(favorites models.Favorites) (models.Favorites, error) {
	return s.repo.AddToFavorites(favorites)
}
