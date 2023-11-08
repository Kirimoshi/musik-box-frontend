const mockData = `{
    "playlists": {
        "data": [{
            "id": "121",
            "type": "my_playlist",
            "attributes": {
                "playlist_type": "public",
                "name": "The unique album",
                "logo": {
                    "id": "05dc33b58f1bf76c4b185e7d1f44bb17.jpg",
                    "storage": "store",
                    "metadata": {
                        "filename": "default_image.jpg",
                        "size": 425414,
                        "mime_type": "image/jpeg"
                    }
                },
                "description": "Vero exercitationem voluptatem modi mollitia co...",
                "number_likes_dislikes": "Likes: 6 / Dislikes: 1",
                "playlist_owner_nickname": "Danylo",
                "first_ten_songs": {
                    "data": [{
                        "id": "136",
                        "type": "song",
                        "attributes": {
                            "title": "Du hast",
                            "artist_name": ["Rammstein", "Тартак"]
                        }
                    }, {
                        "id": "134",
                        "type": "song",
                        "attributes": {
                            "title": "У полум'ї війни",
                            "artist_name": ["Жадан і собаки", "Sara Bareilles", "Courtney Barnett"]
                        }
                    }, {
                        "id": "132",
                        "type": "song",
                        "attributes": {
                            "title": "Моя Україна",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "128",
                        "type": "song",
                        "attributes": {
                            "title": "Мене вже немає",
                            "artist_name": ["Alan Silvestri", "Тінь сонця", "Diiv"]
                        }
                    }, {
                        "id": "124",
                        "type": "song",
                        "attributes": {
                            "title": "Родіна",
                            "artist_name": ["Тінь сонця"]
                        }
                    }, {
                        "id": "121",
                        "type": "song",
                        "attributes": {
                            "title": "Adventure Of A Lifetime",
                            "artist_name": ["Бумбокс"]
                        }
                    }, {
                        "id": "118",
                        "type": "song",
                        "attributes": {
                            "title": "Sorry",
                            "artist_name": ["Diiv", "Old Dominion"]
                        }
                    }, {
                        "id": "117",
                        "type": "song",
                        "attributes": {
                            "title": "Pretty Pimpin",
                            "artist_name": ["Slow Hands", "Тінь сонця", "The Japanese House"]
                        }
                    }, {
                        "id": "116",
                        "type": "song",
                        "attributes": {
                            "title": "Lean On",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "114",
                        "type": "song",
                        "attributes": {
                            "title": "Energy",
                            "artist_name": ["Тінь сонця"]
                        }
                    }]
                }
            },
            "relationships": {
                "songs": {
                    "data": [{
                        "id": "136",
                        "type": "song"
                    }, {
                        "id": "134",
                        "type": "song"
                    }, {
                        "id": "132",
                        "type": "song"
                    }, {
                        "id": "128",
                        "type": "song"
                    }, {
                        "id": "124",
                        "type": "song"
                    }, {
                        "id": "121",
                        "type": "song"
                    }, {
                        "id": "118",
                        "type": "song"
                    }, {
                        "id": "117",
                        "type": "song"
                    }, {
                        "id": "116",
                        "type": "song"
                    }, {
                        "id": "114",
                        "type": "song"
                    }]
                }
            }
        }, {
            "id": "112",
            "type": "my_playlist",
            "attributes": {
                "playlist_type": "public",
                "name": "When Shaun Met Charlotte",
                "logo": null,
                "description": "Totam beatae dolore occaecati provident eveniet...",
                "number_likes_dislikes": "Likes: 5 / Dislikes: 2",
                "playlist_owner_nickname": "bessie.sundqvist",
                "first_ten_songs": {
                    "data": [{
                        "id": "136",
                        "type": "song",
                        "attributes": {
                            "title": "Ой у лузі",
                            "artist_name": ["Жадан і собаки", "Тартак"]
                        }
                    }, {
                        "id": "134",
                        "type": "song",
                        "attributes": {
                            "title": "У полум'ї війни",
                            "artist_name": ["Жадан і собаки", "Sara Bareilles", "Courtney Barnett"]
                        }
                    }, {
                        "id": "133",
                        "type": "song",
                        "attributes": {
                            "title": "У цьому полі, синьому, як льон",
                            "artist_name": ["Diiv", "Slow Hands", "Slow Hands"]
                        }
                    }, {
                        "id": "132",
                        "type": "song",
                        "attributes": {
                            "title": "Моя Україна",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "131",
                        "type": "song",
                        "attributes": {
                            "title": "Спалена Земля",
                            "artist_name": ["Slow Hands"]
                        }
                    }, {
                        "id": "127",
                        "type": "song",
                        "attributes": {
                            "title": "Троєщина",
                            "artist_name": ["Old Dominion", "Карна"]
                        }
                    }, {
                        "id": "125",
                        "type": "song",
                        "attributes": {
                            "title": "Мальви",
                            "artist_name": ["Тартак", "Карна", "Alan Silvestri"]
                        }
                    }, {
                        "id": "124",
                        "type": "song",
                        "attributes": {
                            "title": "Родіна",
                            "artist_name": ["Тінь сонця"]
                        }
                    }, {
                        "id": "122",
                        "type": "song",
                        "attributes": {
                            "title": "Арта",
                            "artist_name": ["Old Dominion", "Slow Hands"]
                        }
                    }, {
                        "id": "120",
                        "type": "song",
                        "attributes": {
                            "title": "Blank Space",
                            "artist_name": ["Бумбокс", "Benoît Pioulard"]
                        }
                    }]
                }
            },
            "relationships": {
                "songs": {
                    "data": [{
                        "id": "136",
                        "type": "song"
                    }, {
                        "id": "134",
                        "type": "song"
                    }, {
                        "id": "133",
                        "type": "song"
                    }, {
                        "id": "132",
                        "type": "song"
                    }, {
                        "id": "131",
                        "type": "song"
                    }, {
                        "id": "127",
                        "type": "song"
                    }, {
                        "id": "125",
                        "type": "song"
                    }, {
                        "id": "124",
                        "type": "song"
                    }, {
                        "id": "122",
                        "type": "song"
                    }, {
                        "id": "120",
                        "type": "song"
                    }]
                }
            }
        }, {
            "id": "52",
            "type": "my_playlist",
            "attributes": {
                "playlist_type": "public",
                "name": "Bloody Men",
                "logo": null,
                "description": "Illum beatae sequi minus corporis amet at. Voluptates reprehenderit laborum quis iusto rem veniam accusantium. Laborum reprehenderit eius nulla ven...",
                "number_likes_dislikes": "Likes: 5 / Dislikes: 3",
                "playlist_owner_nickname": "charleypedro",
                "first_ten_songs": {
                    "data": [{
                        "id": "136",
                        "type": "song",
                        "attributes": {
                            "title": "Ой у лузі",
                            "artist_name": ["Жадан і собаки", "Тартак"]
                        }
                    }, {
                        "id": "135",
                        "type": "song",
                        "attributes": {
                            "title": "В хаті моїй дідько",
                            "artist_name": ["Sara Bareilles", "Benoît Pioulard"]
                        }
                    }, {
                        "id": "132",
                        "type": "song",
                        "attributes": {
                            "title": "Моя Україна",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "124",
                        "type": "song",
                        "attributes": {
                            "title": "Родіна",
                            "artist_name": ["Тінь сонця"]
                        }
                    }, {
                        "id": "119",
                        "type": "song",
                        "attributes": {
                            "title": "Laughing And Not Being Normal",
                            "artist_name": ["Тінь сонця", "Тартак"]
                        }
                    }, {
                        "id": "118",
                        "type": "song",
                        "attributes": {
                            "title": "Sorry",
                            "artist_name": ["Diiv", "Old Dominion"]
                        }
                    }, {
                        "id": "117",
                        "type": "song",
                        "attributes": {
                            "title": "Pretty Pimpin",
                            "artist_name": ["Slow Hands", "Тінь сонця", "The Japanese House"]
                        }
                    }, {
                        "id": "114",
                        "type": "song",
                        "attributes": {
                            "title": "Energy",
                            "artist_name": ["Тінь сонця"]
                        }
                    }, {
                        "id": "112",
                        "type": "song",
                        "attributes": {
                            "title": "Traveller",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "111",
                        "type": "song",
                        "attributes": {
                            "title": "Break Up In A Small Town",
                            "artist_name": ["Карна"]
                        }
                    }]
                }
            },
            "relationships": {
                "songs": {
                    "data": [{
                        "id": "136",
                        "type": "song"
                    }, {
                        "id": "135",
                        "type": "song"
                    }, {
                        "id": "132",
                        "type": "song"
                    }, {
                        "id": "124",
                        "type": "song"
                    }, {
                        "id": "119",
                        "type": "song"
                    }, {
                        "id": "118",
                        "type": "song"
                    }, {
                        "id": "117",
                        "type": "song"
                    }, {
                        "id": "114",
                        "type": "song"
                    }, {
                        "id": "112",
                        "type": "song"
                    }, {
                        "id": "111",
                        "type": "song"
                    }]
                }
            }
        }, {
            "id": "49",
            "type": "my_playlist",
            "attributes": {
                "playlist_type": "public",
                "name": "War of the Women",
                "logo": {
                    "id": "05dc33b58f1bf76c4b185e7d1f44bb17.jpg",
                    "storage": "store",
                    "metadata": {
                        "filename": "default_image.jpg",
                        "size": 425414,
                        "mime_type": "image/jpeg"
                    }
                },
                "description": "Minus debitis amet quam esse odio accusamus. Maxime vel aut velit ipsam. Voluptatum qui asperiores necessitatibus optio nesciunt debitis. Cupiditat...",
                "number_likes_dislikes": "Likes: 5 / Dislikes: 5",
                "playlist_owner_nickname": "charleypedro",
                "first_ten_songs": {
                    "data": [{
                        "id": "136",
                        "type": "song",
                        "attributes": {
                            "title": "Ой у лузі",
                            "artist_name": ["Жадан і собаки", "Тартак"]
                        }
                    }, {
                        "id": "133",
                        "type": "song",
                        "attributes": {
                            "title": "У цьому полі, синьому, як льон",
                            "artist_name": ["Diiv", "Slow Hands", "Slow Hands"]
                        }
                    }, {
                        "id": "132",
                        "type": "song",
                        "attributes": {
                            "title": "Моя Україна",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "131",
                        "type": "song",
                        "attributes": {
                            "title": "Спалена Земля",
                            "artist_name": ["Slow Hands"]
                        }
                    }, {
                        "id": "128",
                        "type": "song",
                        "attributes": {
                            "title": "Мене вже немає",
                            "artist_name": ["Alan Silvestri", "Тінь сонця", "Diiv"]
                        }
                    }, {
                        "id": "127",
                        "type": "song",
                        "attributes": {
                            "title": "Троєщина",
                            "artist_name": ["Old Dominion", "Карна"]
                        }
                    }, {
                        "id": "125",
                        "type": "song",
                        "attributes": {
                            "title": "Мальви",
                            "artist_name": ["Тартак", "Карна", "Alan Silvestri"]
                        }
                    }, {
                        "id": "124",
                        "type": "song",
                        "attributes": {
                            "title": "Родіна",
                            "artist_name": ["Тінь сонця"]
                        }
                    }, {
                        "id": "123",
                        "type": "song",
                        "attributes": {
                            "title": "Нема грошей",
                            "artist_name": ["Diiv", "Benoît Pioulard"]
                        }
                    }, {
                        "id": "122",
                        "type": "song",
                        "attributes": {
                            "title": "Арта",
                            "artist_name": ["Old Dominion", "Slow Hands"]
                        }
                    }]
                }
            },
            "relationships": {
                "songs": {
                    "data": [{
                        "id": "136",
                        "type": "song"
                    }, {
                        "id": "133",
                        "type": "song"
                    }, {
                        "id": "132",
                        "type": "song"
                    }, {
                        "id": "131",
                        "type": "song"
                    }, {
                        "id": "128",
                        "type": "song"
                    }, {
                        "id": "127",
                        "type": "song"
                    }, {
                        "id": "125",
                        "type": "song"
                    }, {
                        "id": "124",
                        "type": "song"
                    }, {
                        "id": "123",
                        "type": "song"
                    }, {
                        "id": "122",
                        "type": "song"
                    }]
                }
            }
        }, {
            "id": "28",
            "type": "my_playlist",
            "attributes": {
                "playlist_type": "public",
                "name": "Nuclear Woman",
                "logo": {
                    "id": "05dc33b58f1bf76c4b185e7d1f44bb17.jpg",
                    "storage": "store",
                    "metadata": {
                        "filename": "default_image.jpg",
                        "size": 425414,
                        "mime_type": "image/jpeg"
                    }
                },
                "description": "Odio rem numquam consequuntur optio deserunt cupiditate vero impedit. Explicabo cupiditate minus ipsa eos illo corporis. Architecto quasi aperiam v...",
                "number_likes_dislikes": "Likes: 5 / Dislikes: 2",
                "playlist_owner_nickname": "connie_lundin",
                "first_ten_songs": {
                    "data": [{
                        "id": "136",
                        "type": "song",
                        "attributes": {
                            "title": "Ой у лузі",
                            "artist_name": ["Жадан і собаки", "Тартак"]
                        }
                    }, {
                        "id": "134",
                        "type": "song",
                        "attributes": {
                            "title": "У полум'ї війни",
                            "artist_name": ["Жадан і собаки", "Sara Bareilles", "Courtney Barnett"]
                        }
                    }, {
                        "id": "132",
                        "type": "song",
                        "attributes": {
                            "title": "Моя Україна",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "125",
                        "type": "song",
                        "attributes": {
                            "title": "Мальви",
                            "artist_name": ["Тартак", "Карна", "Alan Silvestri"]
                        }
                    }, {
                        "id": "124",
                        "type": "song",
                        "attributes": {
                            "title": "Родіна",
                            "artist_name": ["Тінь сонця"]
                        }
                    }, {
                        "id": "123",
                        "type": "song",
                        "attributes": {
                            "title": "Нема грошей",
                            "artist_name": ["Diiv", "Benoît Pioulard"]
                        }
                    }, {
                        "id": "122",
                        "type": "song",
                        "attributes": {
                            "title": "Арта",
                            "artist_name": ["Old Dominion", "Slow Hands"]
                        }
                    }, {
                        "id": "120",
                        "type": "song",
                        "attributes": {
                            "title": "Blank Space",
                            "artist_name": ["Бумбокс", "Benoît Pioulard"]
                        }
                    }, {
                        "id": "118",
                        "type": "song",
                        "attributes": {
                            "title": "Sorry",
                            "artist_name": ["Diiv", "Old Dominion"]
                        }
                    }, {
                        "id": "117",
                        "type": "song",
                        "attributes": {
                            "title": "Pretty Pimpin",
                            "artist_name": ["Slow Hands", "Тінь сонця", "The Japanese House"]
                        }
                    }]
                }
            },
            "relationships": {
                "songs": {
                    "data": [{
                        "id": "136",
                        "type": "song"
                    }, {
                        "id": "134",
                        "type": "song"
                    }, {
                        "id": "132",
                        "type": "song"
                    }, {
                        "id": "125",
                        "type": "song"
                    }, {
                        "id": "124",
                        "type": "song"
                    }, {
                        "id": "123",
                        "type": "song"
                    }, {
                        "id": "122",
                        "type": "song"
                    }, {
                        "id": "120",
                        "type": "song"
                    }, {
                        "id": "118",
                        "type": "song"
                    }, {
                        "id": "117",
                        "type": "song"
                    }]
                }
            }
        }, {
            "id": "1",
            "type": "my_playlist",
            "attributes": {
                "playlist_type": "public",
                "name": "The Red Woman with a Thousand Faces",
                "logo": {
                    "id": "05dc33b58f1bf76c4b185e7d1f44bb17.jpg",
                    "storage": "store",
                    "metadata": {
                        "filename": "default_image.jpg",
                        "size": 425414,
                        "mime_type": "image/jpeg"
                    }
                },
                "description": "Repellendus commodi quaerat earum pariatur. A id eius aliquam doloribus reiciendis provident corporis. A quos iste incidunt laboriosam at esse sequi.",
                "number_likes_dislikes": "Likes: 5 / Dislikes: 4",
                "playlist_owner_nickname": "julia_sandstrm",
                "first_ten_songs": {
                    "data": [{
                        "id": "136",
                        "type": "song",
                        "attributes": {
                            "title": "Ой у лузі",
                            "artist_name": ["Жадан і собаки", "Тартак"]
                        }
                    }, {
                        "id": "134",
                        "type": "song",
                        "attributes": {
                            "title": "У полум'ї війни",
                            "artist_name": ["Жадан і собаки", "Sara Bareilles", "Courtney Barnett"]
                        }
                    }, {
                        "id": "133",
                        "type": "song",
                        "attributes": {
                            "title": "У цьому полі, синьому, як льон",
                            "artist_name": ["Diiv", "Slow Hands", "Slow Hands"]
                        }
                    }, {
                        "id": "132",
                        "type": "song",
                        "attributes": {
                            "title": "Моя Україна",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "131",
                        "type": "song",
                        "attributes": {
                            "title": "Спалена Земля",
                            "artist_name": ["Slow Hands"]
                        }
                    }, {
                        "id": "129",
                        "type": "song",
                        "attributes": {
                            "title": "Мій лицарський хрест",
                            "artist_name": ["Diiv", "Courtney Barnett"]
                        }
                    }, {
                        "id": "125",
                        "type": "song",
                        "attributes": {
                            "title": "Мальви",
                            "artist_name": ["Тартак", "Карна", "Alan Silvestri"]
                        }
                    }, {
                        "id": "124",
                        "type": "song",
                        "attributes": {
                            "title": "Родіна",
                            "artist_name": ["Тінь сонця"]
                        }
                    }, {
                        "id": "122",
                        "type": "song",
                        "attributes": {
                            "title": "Арта",
                            "artist_name": ["Old Dominion", "Slow Hands"]
                        }
                    }, {
                        "id": "118",
                        "type": "song",
                        "attributes": {
                            "title": "Sorry",
                            "artist_name": ["Diiv", "Old Dominion"]
                        }
                    }]
                }
            },
            "relationships": {
                "songs": {
                    "data": [{
                        "id": "136",
                        "type": "song"
                    }, {
                        "id": "134",
                        "type": "song"
                    }, {
                        "id": "133",
                        "type": "song"
                    }, {
                        "id": "132",
                        "type": "song"
                    }, {
                        "id": "131",
                        "type": "song"
                    }, {
                        "id": "129",
                        "type": "song"
                    }, {
                        "id": "125",
                        "type": "song"
                    }, {
                        "id": "124",
                        "type": "song"
                    }, {
                        "id": "122",
                        "type": "song"
                    }, {
                        "id": "118",
                        "type": "song"
                    }]
                }
            }
        }, {
            "id": "109",
            "type": "my_playlist",
            "attributes": {
                "playlist_type": "public",
                "name": "The Green Brains with a Thousand Faces",
                "logo": {
                    "id": "05dc33b58f1bf76c4b185e7d1f44bb17.jpg",
                    "storage": "store",
                    "metadata": {
                        "filename": "default_image.jpg",
                        "size": 425414,
                        "mime_type": "image/jpeg"
                    }
                },
                "description": "Placeat sint impedit ex dolorum maiores animi o...",
                "number_likes_dislikes": "Likes: 4 / Dislikes: 4",
                "playlist_owner_nickname": "bessie.sundqvist",
                "first_ten_songs": {
                    "data": [{
                        "id": "136",
                        "type": "song",
                        "attributes": {
                            "title": "Ой у лузі",
                            "artist_name": ["Жадан і собаки", "Тартак"]
                        }
                    }, {
                        "id": "132",
                        "type": "song",
                        "attributes": {
                            "title": "Моя Україна",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "129",
                        "type": "song",
                        "attributes": {
                            "title": "Мій лицарський хрест",
                            "artist_name": ["Diiv", "Courtney Barnett"]
                        }
                    }, {
                        "id": "124",
                        "type": "song",
                        "attributes": {
                            "title": "Родіна",
                            "artist_name": ["Тінь сонця"]
                        }
                    }, {
                        "id": "119",
                        "type": "song",
                        "attributes": {
                            "title": "Laughing And Not Being Normal",
                            "artist_name": ["Тінь сонця", "Тартак"]
                        }
                    }, {
                        "id": "118",
                        "type": "song",
                        "attributes": {
                            "title": "Sorry",
                            "artist_name": ["Diiv", "Old Dominion"]
                        }
                    }, {
                        "id": "117",
                        "type": "song",
                        "attributes": {
                            "title": "Pretty Pimpin",
                            "artist_name": ["Slow Hands", "Тінь сонця", "The Japanese House"]
                        }
                    }, {
                        "id": "116",
                        "type": "song",
                        "attributes": {
                            "title": "Lean On",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "114",
                        "type": "song",
                        "attributes": {
                            "title": "Energy",
                            "artist_name": ["Тінь сонця"]
                        }
                    }, {
                        "id": "111",
                        "type": "song",
                        "attributes": {
                            "title": "Break Up In A Small Town",
                            "artist_name": ["Карна"]
                        }
                    }]
                }
            },
            "relationships": {
                "songs": {
                    "data": [{
                        "id": "136",
                        "type": "song"
                    }, {
                        "id": "132",
                        "type": "song"
                    }, {
                        "id": "129",
                        "type": "song"
                    }, {
                        "id": "124",
                        "type": "song"
                    }, {
                        "id": "119",
                        "type": "song"
                    }, {
                        "id": "118",
                        "type": "song"
                    }, {
                        "id": "117",
                        "type": "song"
                    }, {
                        "id": "116",
                        "type": "song"
                    }, {
                        "id": "114",
                        "type": "song"
                    }, {
                        "id": "111",
                        "type": "song"
                    }]
                }
            }
        }, {
            "id": "111",
            "type": "my_playlist",
            "attributes": {
                "playlist_type": "public",
                "name": "Bloody Dreams: The Divina West Story",
                "logo": {
                    "id": "05dc33b58f1bf76c4b185e7d1f44bb17.jpg",
                    "storage": "store",
                    "metadata": {
                        "filename": "default_image.jpg",
                        "size": 425414,
                        "mime_type": "image/jpeg"
                    }
                },
                "description": "Molestias eaque consequatur deserunt corrupti beatae. Quis sequi culpa quia beatae repudiandae. Culpa corporis dolor eveniet cupiditate. Ratione mo...",
                "number_likes_dislikes": "Likes: 4 / Dislikes: 4",
                "playlist_owner_nickname": "bessie.sundqvist",
                "first_ten_songs": {
                    "data": [{
                        "id": "136",
                        "type": "song",
                        "attributes": {
                            "title": "Ой у лузі",
                            "artist_name": ["Жадан і собаки", "Тартак"]
                        }
                    }, {
                        "id": "133",
                        "type": "song",
                        "attributes": {
                            "title": "У цьому полі, синьому, як льон",
                            "artist_name": ["Diiv", "Slow Hands", "Slow Hands"]
                        }
                    }, {
                        "id": "132",
                        "type": "song",
                        "attributes": {
                            "title": "Моя Україна",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "127",
                        "type": "song",
                        "attributes": {
                            "title": "Троєщина",
                            "artist_name": ["Old Dominion", "Карна"]
                        }
                    }, {
                        "id": "125",
                        "type": "song",
                        "attributes": {
                            "title": "Мальви",
                            "artist_name": ["Тартак", "Карна", "Alan Silvestri"]
                        }
                    }, {
                        "id": "124",
                        "type": "song",
                        "attributes": {
                            "title": "Родіна",
                            "artist_name": ["Тінь сонця"]
                        }
                    }, {
                        "id": "121",
                        "type": "song",
                        "attributes": {
                            "title": "Adventure Of A Lifetime",
                            "artist_name": ["Бумбокс"]
                        }
                    }, {
                        "id": "120",
                        "type": "song",
                        "attributes": {
                            "title": "Blank Space",
                            "artist_name": ["Бумбокс", "Benoît Pioulard"]
                        }
                    }, {
                        "id": "119",
                        "type": "song",
                        "attributes": {
                            "title": "Laughing And Not Being Normal",
                            "artist_name": ["Тінь сонця", "Тартак"]
                        }
                    }, {
                        "id": "118",
                        "type": "song",
                        "attributes": {
                            "title": "Sorry",
                            "artist_name": ["Diiv", "Old Dominion"]
                        }
                    }]
                }
            },
            "relationships": {
                "songs": {
                    "data": [{
                        "id": "136",
                        "type": "song"
                    }, {
                        "id": "133",
                        "type": "song"
                    }, {
                        "id": "132",
                        "type": "song"
                    }, {
                        "id": "127",
                        "type": "song"
                    }, {
                        "id": "125",
                        "type": "song"
                    }, {
                        "id": "124",
                        "type": "song"
                    }, {
                        "id": "121",
                        "type": "song"
                    }, {
                        "id": "120",
                        "type": "song"
                    }, {
                        "id": "119",
                        "type": "song"
                    }, {
                        "id": "118",
                        "type": "song"
                    }]
                }
            }
        }, {
            "id": "99",
            "type": "my_playlist",
            "attributes": {
                "playlist_type": "public",
                "name": "Legend of Champagne City",
                "logo": {
                    "id": "05dc33b58f1bf76c4b185e7d1f44bb17.jpg",
                    "storage": "store",
                    "metadata": {
                        "filename": "default_image.jpg",
                        "size": 425414,
                        "mime_type": "image/jpeg"
                    }
                },
                "description": "Ut alias nihil quisquam officia. Earum corrupti...",
                "number_likes_dislikes": "Likes: 4 / Dislikes: 6",
                "playlist_owner_nickname": "melvin",
                "first_ten_songs": {
                    "data": [{
                        "id": "136",
                        "type": "song",
                        "attributes": {
                            "title": "Ой у лузі",
                            "artist_name": ["Жадан і собаки", "Тартак"]
                        }
                    }, {
                        "id": "134",
                        "type": "song",
                        "attributes": {
                            "title": "У полум'ї війни",
                            "artist_name": ["Жадан і собаки", "Sara Bareilles", "Courtney Barnett"]
                        }
                    }, {
                        "id": "133",
                        "type": "song",
                        "attributes": {
                            "title": "У цьому полі, синьому, як льон",
                            "artist_name": ["Diiv", "Slow Hands", "Slow Hands"]
                        }
                    }, {
                        "id": "132",
                        "type": "song",
                        "attributes": {
                            "title": "Моя Україна",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "129",
                        "type": "song",
                        "attributes": {
                            "title": "Мій лицарський хрест",
                            "artist_name": ["Diiv", "Courtney Barnett"]
                        }
                    }, {
                        "id": "125",
                        "type": "song",
                        "attributes": {
                            "title": "Мальви",
                            "artist_name": ["Тартак", "Карна", "Alan Silvestri"]
                        }
                    }, {
                        "id": "124",
                        "type": "song",
                        "attributes": {
                            "title": "Родіна",
                            "artist_name": ["Тінь сонця"]
                        }
                    }, {
                        "id": "122",
                        "type": "song",
                        "attributes": {
                            "title": "Арта",
                            "artist_name": ["Old Dominion", "Slow Hands"]
                        }
                    }, {
                        "id": "121",
                        "type": "song",
                        "attributes": {
                            "title": "Adventure Of A Lifetime",
                            "artist_name": ["Бумбокс"]
                        }
                    }, {
                        "id": "120",
                        "type": "song",
                        "attributes": {
                            "title": "Blank Space",
                            "artist_name": ["Бумбокс", "Benoît Pioulard"]
                        }
                    }]
                }
            },
            "relationships": {
                "songs": {
                    "data": [{
                        "id": "136",
                        "type": "song"
                    }, {
                        "id": "134",
                        "type": "song"
                    }, {
                        "id": "133",
                        "type": "song"
                    }, {
                        "id": "132",
                        "type": "song"
                    }, {
                        "id": "129",
                        "type": "song"
                    }, {
                        "id": "125",
                        "type": "song"
                    }, {
                        "id": "124",
                        "type": "song"
                    }, {
                        "id": "122",
                        "type": "song"
                    }, {
                        "id": "121",
                        "type": "song"
                    }, {
                        "id": "120",
                        "type": "song"
                    }]
                }
            }
        }, {
            "id": "25",
            "type": "my_playlist",
            "attributes": {
                "playlist_type": "public",
                "name": "American Ninjas",
                "logo": null,
                "description": "Dicta nesciunt error atque debitis omnis sapien...",
                "number_likes_dislikes": "Likes: 4 / Dislikes: 3",
                "playlist_owner_nickname": "connie_lundin",
                "first_ten_songs": {
                    "data": [{
                        "id": "136",
                        "type": "song",
                        "attributes": {
                            "title": "Ой у лузі",
                            "artist_name": ["Жадан і собаки", "Тартак"]
                        }
                    }, {
                        "id": "132",
                        "type": "song",
                        "attributes": {
                            "title": "Моя Україна",
                            "artist_name": ["Diiv"]
                        }
                    }, {
                        "id": "131",
                        "type": "song",
                        "attributes": {
                            "title": "Спалена Земля",
                            "artist_name": ["Slow Hands"]
                        }
                    }, {
                        "id": "129",
                        "type": "song",
                        "attributes": {
                            "title": "Мій лицарський хрест",
                            "artist_name": ["Diiv", "Courtney Barnett"]
                        }
                    }, {
                        "id": "125",
                        "type": "song",
                        "attributes": {
                            "title": "Мальви",
                            "artist_name": ["Тартак", "Карна", "Alan Silvestri"]
                        }
                    }, {
                        "id": "124",
                        "type": "song",
                        "attributes": {
                            "title": "Родіна",
                            "artist_name": ["Тінь сонця"]
                        }
                    }, {
                        "id": "123",
                        "type": "song",
                        "attributes": {
                            "title": "Нема грошей",
                            "artist_name": ["Diiv", "Benoît Pioulard"]
                        }
                    }, {
                        "id": "122",
                        "type": "song",
                        "attributes": {
                            "title": "Арта",
                            "artist_name": ["Old Dominion", "Slow Hands"]
                        }
                    }, {
                        "id": "120",
                        "type": "song",
                        "attributes": {
                            "title": "Blank Space",
                            "artist_name": ["Бумбокс", "Benoît Pioulard"]
                        }
                    }, {
                        "id": "119",
                        "type": "song",
                        "attributes": {
                            "title": "Laughing And Not Being Normal",
                            "artist_name": ["Тінь сонця", "Тартак"]
                        }
                    }]
                }
            },
            "relationships": {
                "songs": {
                    "data": [{
                        "id": "136",
                        "type": "song"
                    }, {
                        "id": "132",
                        "type": "song"
                    }, {
                        "id": "131",
                        "type": "song"
                    }, {
                        "id": "129",
                        "type": "song"
                    }, {
                        "id": "125",
                        "type": "song"
                    }, {
                        "id": "124",
                        "type": "song"
                    }, {
                        "id": "123",
                        "type": "song"
                    }, {
                        "id": "122",
                        "type": "song"
                    }, {
                        "id": "120",
                        "type": "song"
                    }, {
                        "id": "119",
                        "type": "song"
                    }]
                }
            }
        }],
        "included": [{
            "id": "136",
            "type": "song",
            "attributes": {
                "title": "Ой у лузі",
                "artist_name": ["Жадан і собаки", "Тартак"]
            }
        }, {
            "id": "134",
            "type": "song",
            "attributes": {
                "title": "У полум'ї війни",
                "artist_name": ["Жадан і собаки", "Sara Bareilles", "Courtney Barnett"]
            }
        }, {
            "id": "132",
            "type": "song",
            "attributes": {
                "title": "Моя Україна",
                "artist_name": ["Diiv"]
            }
        }, {
            "id": "128",
            "type": "song",
            "attributes": {
                "title": "Мене вже немає",
                "artist_name": ["Alan Silvestri", "Тінь сонця", "Diiv"]
            }
        }, {
            "id": "124",
            "type": "song",
            "attributes": {
                "title": "Родіна",
                "artist_name": ["Тінь сонця"]
            }
        }, {
            "id": "121",
            "type": "song",
            "attributes": {
                "title": "Adventure Of A Lifetime",
                "artist_name": ["Бумбокс"]
            }
        }, {
            "id": "118",
            "type": "song",
            "attributes": {
                "title": "Sorry",
                "artist_name": ["Diiv", "Old Dominion"]
            }
        }, {
            "id": "117",
            "type": "song",
            "attributes": {
                "title": "Pretty Pimpin",
                "artist_name": ["Slow Hands", "Тінь сонця", "The Japanese House"]
            }
        }, {
            "id": "116",
            "type": "song",
            "attributes": {
                "title": "Lean On",
                "artist_name": ["Diiv"]
            }
        }, {
            "id": "114",
            "type": "song",
            "attributes": {
                "title": "Energy",
                "artist_name": ["Тінь сонця"]
            }
        }, {
            "id": "133",
            "type": "song",
            "attributes": {
                "title": "У цьому полі, синьому, як льон",
                "artist_name": ["Diiv", "Slow Hands", "Slow Hands"]
            }
        }, {
            "id": "131",
            "type": "song",
            "attributes": {
                "title": "Спалена Земля",
                "artist_name": ["Slow Hands"]
            }
        }, {
            "id": "127",
            "type": "song",
            "attributes": {
                "title": "Троєщина",
                "artist_name": ["Old Dominion", "Карна"]
            }
        }, {
            "id": "125",
            "type": "song",
            "attributes": {
                "title": "Мальви",
                "artist_name": ["Тартак", "Карна", "Alan Silvestri"]
            }
        }, {
            "id": "122",
            "type": "song",
            "attributes": {
                "title": "Арта",
                "artist_name": ["Old Dominion", "Slow Hands"]
            }
        }, {
            "id": "120",
            "type": "song",
            "attributes": {
                "title": "Blank Space",
                "artist_name": ["Бумбокс", "Benoît Pioulard"]
            }
        }, {
            "id": "135",
            "type": "song",
            "attributes": {
                "title": "В хаті моїй дідько",
                "artist_name": ["Sara Bareilles", "Benoît Pioulard"]
            }
        }, {
            "id": "119",
            "type": "song",
            "attributes": {
                "title": "Laughing And Not Being Normal",
                "artist_name": ["Тінь сонця", "Тартак"]
            }
        }, {
            "id": "112",
            "type": "song",
            "attributes": {
                "title": "Traveller",
                "artist_name": ["Diiv"]
            }
        }, {
            "id": "111",
            "type": "song",
            "attributes": {
                "title": "Break Up In A Small Town",
                "artist_name": ["Карна"]
            }
        }, {
            "id": "123",
            "type": "song",
            "attributes": {
                "title": "Нема грошей",
                "artist_name": ["Diiv", "Benoît Pioulard"]
            }
        }, {
            "id": "129",
            "type": "song",
            "attributes": {
                "title": "Мій лицарський хрест",
                "artist_name": ["Diiv", "Courtney Barnett"]
            }
        }]
    },
    "pagination_metadata": {
        "count": 44,
        "page": 1,
        "items": 10,
        "last": 5,
        "pages": 5
    }
}`;



const mockSongsData = `{
    "data": {
        "id": "1",
        "type": "playlist",
        "attributes": {
            "playlist_type": "public",
            "name": "The Woman Without a Tentacle",
            "logo": {
                "id": "e24864e79abd77f15a9939e9cf20d1e0.jpg",
                "storage": "store",
                "metadata": {
                    "filename": "default_image.jpg",
                    "size": 425414,
                    "mime_type": "image/jpeg"
                }
            },
            "description": "Tempore repellendus doloremque quaerat ab eligendi dolore temporibus. Placeat beatae eius itaque consectetur quas. Ex quos mollitia incidunt atque ...",
            "number_likes_dislikes": "Likes: 3 / Dislikes: 4",
            "created_on": "2022-11-04T17:01:00.126+02:00",
            "updated_on": "2023-11-04T17:01:00.380+02:00"
        },
        "relationships": {
            "user": {
                "data": {
                    "id": "1",
                    "type": "user"
                }
            },
            "songs": {
                "data": [
                    {
                        "id": "77",
                        "type": "song"
                    },
                    {
                        "id": "85",
                        "type": "song"
                    },
                    {
                        "id": "23",
                        "type": "song"
                    },
                    {
                        "id": "86",
                        "type": "song"
                    },
                    {
                        "id": "102",
                        "type": "song"
                    },
                    {
                        "id": "42",
                        "type": "song"
                    },
                    {
                        "id": "125",
                        "type": "song"
                    },
                    {
                        "id": "16",
                        "type": "song"
                    },
                    {
                        "id": "133",
                        "type": "song"
                    },
                    {
                        "id": "47",
                        "type": "song"
                    },
                    {
                        "id": "113",
                        "type": "song"
                    },
                    {
                        "id": "129",
                        "type": "song"
                    },
                    {
                        "id": "7",
                        "type": "song"
                    },
                    {
                        "id": "60",
                        "type": "song"
                    },
                    {
                        "id": "97",
                        "type": "song"
                    },
                    {
                        "id": "76",
                        "type": "song"
                    },
                    {
                        "id": "22",
                        "type": "song"
                    },
                    {
                        "id": "19",
                        "type": "song"
                    },
                    {
                        "id": "94",
                        "type": "song"
                    },
                    {
                        "id": "5",
                        "type": "song"
                    },
                    {
                        "id": "1",
                        "type": "song"
                    },
                    {
                        "id": "74",
                        "type": "song"
                    },
                    {
                        "id": "26",
                        "type": "song"
                    },
                    {
                        "id": "28",
                        "type": "song"
                    },
                    {
                        "id": "104",
                        "type": "song"
                    },
                    {
                        "id": "62",
                        "type": "song"
                    },
                    {
                        "id": "130",
                        "type": "song"
                    },
                    {
                        "id": "112",
                        "type": "song"
                    },
                    {
                        "id": "78",
                        "type": "song"
                    },
                    {
                        "id": "71",
                        "type": "song"
                    },
                    {
                        "id": "53",
                        "type": "song"
                    },
                    {
                        "id": "96",
                        "type": "song"
                    },
                    {
                        "id": "120",
                        "type": "song"
                    },
                    {
                        "id": "106",
                        "type": "song"
                    },
                    {
                        "id": "12",
                        "type": "song"
                    },
                    {
                        "id": "30",
                        "type": "song"
                    },
                    {
                        "id": "24",
                        "type": "song"
                    },
                    {
                        "id": "126",
                        "type": "song"
                    },
                    {
                        "id": "45",
                        "type": "song"
                    },
                    {
                        "id": "18",
                        "type": "song"
                    },
                    {
                        "id": "131",
                        "type": "song"
                    },
                    {
                        "id": "75",
                        "type": "song"
                    },
                    {
                        "id": "116",
                        "type": "song"
                    },
                    {
                        "id": "48",
                        "type": "song"
                    },
                    {
                        "id": "33",
                        "type": "song"
                    },
                    {
                        "id": "111",
                        "type": "song"
                    },
                    {
                        "id": "135",
                        "type": "song"
                    },
                    {
                        "id": "81",
                        "type": "song"
                    },
                    {
                        "id": "114",
                        "type": "song"
                    },
                    {
                        "id": "50",
                        "type": "song"
                    },
                    {
                        "id": "6",
                        "type": "song"
                    },
                    {
                        "id": "68",
                        "type": "song"
                    },
                    {
                        "id": "127",
                        "type": "song"
                    },
                    {
                        "id": "17",
                        "type": "song"
                    },
                    {
                        "id": "73",
                        "type": "song"
                    },
                    {
                        "id": "89",
                        "type": "song"
                    },
                    {
                        "id": "41",
                        "type": "song"
                    },
                    {
                        "id": "20",
                        "type": "song"
                    },
                    {
                        "id": "10",
                        "type": "song"
                    },
                    {
                        "id": "118",
                        "type": "song"
                    },
                    {
                        "id": "92",
                        "type": "song"
                    },
                    {
                        "id": "90",
                        "type": "song"
                    },
                    {
                        "id": "93",
                        "type": "song"
                    },
                    {
                        "id": "134",
                        "type": "song"
                    },
                    {
                        "id": "82",
                        "type": "song"
                    },
                    {
                        "id": "80",
                        "type": "song"
                    },
                    {
                        "id": "63",
                        "type": "song"
                    },
                    {
                        "id": "44",
                        "type": "song"
                    },
                    {
                        "id": "95",
                        "type": "song"
                    },
                    {
                        "id": "105",
                        "type": "song"
                    },
                    {
                        "id": "99",
                        "type": "song"
                    },
                    {
                        "id": "4",
                        "type": "song"
                    },
                    {
                        "id": "100",
                        "type": "song"
                    }
                ]
            }
        }
    },
    "included": [
        {
            "id": "1",
            "type": "user",
            "attributes": {
                "email": "test.user@example.com",
                "nickname": "shonta_berglund",
                "profile_picture": {
                    "id": "9594c509918d1bfa2be9e16bf319a161.png",
                    "storage": "store",
                    "metadata": {
                        "filename": "user_default_image.png",
                        "size": 23357,
                        "mime_type": "image/png"
                    }
                },
                "register_date": "2023-11-04T17:00:57.672+02:00",
                "playlists_number": 12,
                "friends_count": null
            }
        }
    ]
}`

module.exports = {
    mockData,
    mockSongsData
};
