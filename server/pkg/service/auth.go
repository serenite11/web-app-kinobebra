package service

import (
	"crypto/sha1"
	"fmt"
	. "github.com/serenite11/web-app-kinobebra/server"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
)

const salt = "asdj3"

type AuthService struct {
	repo repository.Authorization
}

func NewAuthService(repo repository.Authorization) *AuthService {
	return &AuthService{repo: repo}
}

func (s *AuthService) CreateUser(user User) (int, error) {
	user.Password = generateHashPassword(user.Password)
	return s.repo.CreateUser(user)
}

func generateHashPassword(password string) string {
	hash := sha1.New()
	hash.Write([]byte(password))
	return fmt.Sprintf("%x", hash.Sum([]byte(salt)))
}
