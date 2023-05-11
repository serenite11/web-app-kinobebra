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
    image       varchar(255),
    news bool      default false
);

CREATE TABLE series
(
    id          serial not null unique,
    title       varchar(255),
    description text,
    rating      float  default 0,
    years       int,
    image       varchar(255),
    news        bool   default false
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

CREATE TABLE series_actors
(
    serial_id  int references series (id) on delete cascade,
    actor_id   int references actors (id) on delete cascade
);

CREATE TABLE films_directors
(
    film_id     int references films (id) on delete cascade,
    director_id int references directors (id) on delete cascade
);


INSERT INTO films (title, description,year_old, image) VALUES ('Зеленая миля',
                                                               'В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга',
                                                               1999,
                                                               '');
INSERT INTO films (title, description,year_old, image) VALUES ('Бойцовский клуб',
                                                               'Страховой работник разрушает рутину своей благополучной жизни. Культовая драма по книге Чака Паланика',
                                                               1999,
                                                               '');
INSERT INTO films (title, description,year_old, image) VALUES ('Темный рыцарь',
                                                               'Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы Готэма от преступности. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным напуганным горожанам под именем Джокер.',
                                                               1999,
                                                               '');
INSERT INTO films (title, description,year_old, image) VALUES ('Зеленая миля',
                                                               'В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга',
                                                               1999,
                                                               '');
INSERT INTO films (title, description,year_old, image) VALUES ('Остров проклятых',
                                                                'Пристав оказывается заложником клиники для умалишенных. Сложносочиненный детектив с Леонардо ДиКаприо.',
                                                                2008,
                                                                '');
INSERT INTO films (title, description,year_old, image) VALUES ('Джентльмены',
                                                                'Один ушлый американец ещё со студенческих лет приторговывал наркотиками, а теперь придумал схему нелегального обогащения с использованием поместий обедневшей английской аристократии и очень неплохо на этом разбогател. Другой пронырливый журналист приходит к Рэю, правой руке американца, и предлагает тому купить киносценарий, в котором подробно описаны преступления его босса при участии других представителей лондонского криминального мира — партнёра-еврея, китайской диаспоры, чернокожих спортсменов и даже русского олигарха.',
                                                                2019,
                                                                '');
INSERT INTO films (title, description,year_old, image) VALUES ('По соображениям совести',
                                                                'Медик американской армии времён Второй мировой войны Десмонд Досс, который служил во время битвы за Окинаву, отказывается убивать людей и становится первым идейным уклонистом в американской истории, удостоенным Медали Почёта.',
                                                                2016,
                                                                '');
INSERT INTO films (title, description,year_old, image) VALUES ('Волк с Уолл-стрит',
                                                               '1987 год. Джордан Белфорт становится брокером в успешном инвестиционном банке. Вскоре банк закрывается после внезапного обвала индекса Доу-Джонса. По совету жены Терезы Джордан устраивается в небольшое заведение, занимающееся мелкими акциями. Его настойчивый стиль общения с клиентами и врождённая харизма быстро даёт свои плоды. Он знакомится с соседом по дому Донни, торговцем, который сразу находит общий язык с Джорданом и решает открыть с ним собственную фирму. В качестве сотрудников они нанимают нескольких друзей Белфорта, его отца Макса и называют компанию «Стрэттон Оукмонт». В свободное от работы время Джордан прожигает жизнь: лавирует от одной вечеринки к другой, вступает в сексуальные отношения с проститутками, употребляет множество наркотических препаратов, в том числе кокаин и кваалюд. Однажды наступает момент, когда быстрым обогащением Белфорта начинает интересоваться агент ФБР...',
                                                                2013,
                                                                '');
