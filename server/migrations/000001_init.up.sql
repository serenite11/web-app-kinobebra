CREATE TABLE users
(
    id            serial       not null unique,
    login         varchar(255) not null unique,
    password_hash varchar(255) not null,
    name          varchar(255) not null,
    lastname      varchar(255),
    email         varchar(255) not null unique,
    birthday      text,
    image         varchar(255) not null
);

CREATE TABLE films
(
    id          serial not null unique,
    title       varchar(255),
    description text,
    rating      int,
    year_old    int,
    image       varchar(255)
);

CREATE TABLE favorites
(
    user_id int  references users (id) on delete cascade not null,
    film_id int  references films (id) on delete cascade not null,
    PRIMARY KEY (user_id, film_id)
);

CREATE TABLE actors
(
    id       serial not null unique,
    name     varchar(255),
    lastname varchar(255),
    image    varchar(255)
);

CREATE TABLE directors
(
    id       serial not null unique,
    name     varchar(255),
    lastname varchar(255),
    image    varchar(255)
);

CREATE TABLE films_actors
(
    film_id  int references films (id) on delete cascade,
    actor_id int references actors (id) on delete cascade
);

CREATE TABLE films_directors
(
    film_id     int references films (id) on delete cascade,
    director_id int references directors (id) on delete cascade
);


