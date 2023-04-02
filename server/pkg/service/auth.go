package service

import (
	"crypto/sha1"
	"errors"
	"fmt"
	"github.com/golang-jwt/jwt/v5"
	. "github.com/serenite11/web-app-kinobebra/server"
	"github.com/serenite11/web-app-kinobebra/server/pkg/repository"
	"time"
)

const (
	salt       = "qwrqwrewr123"
	signingKey = "fsdufg1231asdads"
	tokenTTL   = 12 * time.Hour
)

type AuthService struct {
	repo repository.Authorization
}

func NewAuthService(repo repository.Authorization) *AuthService {
	return &AuthService{repo: repo}
}

type tokenClaims struct {
	jwt.MapClaims
	User_id int `json:"user_id"`
}

func (s *AuthService) CreateUser(user User) (int, error) {
	user.Password = generateHashPassword(user.Password)
	return s.repo.CreateUser(user)
}

func (s *AuthService) GenerateToken(login, password string) (string, error) {
	user, err := s.repo.GetUser(login, generateHashPassword(password))
	if err != nil {
		return "", err
	}
	claims := jwt.MapClaims{
		"exp": time.Now().Add(tokenTTL).Unix(),
		"sub": user.Id,
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &tokenClaims{
		claims,
		user.Id,
	})
	return token.SignedString([]byte(signingKey))
}

func (s *AuthService) ParseToken(tokenName string) (int, error) {
	token, err := jwt.ParseWithClaims(tokenName, &tokenClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("invalid signing method")
		}
		return []byte(signingKey), nil
	})
	if err != nil {
		return 0, nil
	}
	claims, ok := token.Claims.(*tokenClaims)
	if !ok {
		return 0, errors.New("token claims is not type *tokenClaims")
	}
	return claims.User_id, nil
}

func generateHashPassword(password string) string {
	hash := sha1.New()
	hash.Write([]byte(password))
	return fmt.Sprintf("%x", hash.Sum([]byte(salt)))

}
