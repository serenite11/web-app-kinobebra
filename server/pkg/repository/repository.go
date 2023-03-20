package repository

type Authorization interface {
}

type Repository struct {
}

func NewRepository() *Repository {
	return &Repository{}
}
