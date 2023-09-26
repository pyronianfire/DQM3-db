let monsters = {
    slime: {
        name: "Slime",
        number: 1,
        rank: "G",
        family: "Slime",
        description: "Adored by all for its flexy physique and funny face, this little monster is something of an icon. Who wouldn't want one for a pal?",
        drops: {
            normal: "medicinal_herb",
            rare: "seed_of_agility"
        },
        growth: {
            hp: 1,
            mp: 2,
            atk: 1,
            def: 1,
            agi: 3,
            wis: 1
        },
        talents: ["slimer"],
        traits: {
            small: {
                zapmeister: 1,
                critical_triumph: 20,
                big_bully: 40
            },
            large: {
                tactical_genius: 1,
                insta_accel: 1,
                ultra_crafty_zapper: 60
            }
        },
        resistances: {
            fire: 0,
            water: 50,
            wind: 0,
            earth: -25,
            explosions: 50,
            ice: 0,
            electricity: 50,
            light: 50,
            dark: -25,
            debilitation: 25,
            bedazzlement: 50,
            antimagic: 0,
            mp_absorption: -25,
            confusion: 25,
            sleep: 0,
            paralysis: 50,
            stun: 0,
            poison: 25,
            instant_death: 0
        }
    },
    wing_slime: {
        name: "Wing Slime",
        number: 6,
        rank: "G",
        family: "Slime",
        description: "Slimes which sprouted wings after dreaming of soaring through the sky. Their wings double up as a snug sleeping bag at night.",
        drops: {
            normal: "antimagic_powder",
            rare: "seed_of_agility"
        },
        growth: {
            hp: 1,
            mp: 3,
            atk: 2,
            def: 1,
            agi: 3,
            wis: 2
        },
        talents: ["blusterer"],
        traits: {
            small: {
                ace_evader: 1,
                health_professional: 20,
                ultra_crafty_woosher: 40
            },
            large: {
                tactical_commander: 1,
                wizardly_wind: 1,
                absorbent_touch: 60
            }
        },
        resistances: {
            fire: 0,
            water: 0,
            wind: 75,
            earth: -25,
            explosions: 50,
            ice: 0,
            electricity: 50,
            light: 25,
            dark: -25,
            debilitation: 0,
            bedazzlement: 50,
            antimagic: 25,
            mp_absorption: -25,
            confusion: 0,
            sleep: 0,
            paralysis: 50,
            stun: 50,
            poison: 0,
            instant_death: 0
        }
    },
    bubble_slime: {
        name: "Bubble Slime",
        number: 7,
        description: null
    },
    healslime: {
        name: "Healslime",
        number: 8,
        description: null
    },
    she_slime: {
        name: "She-Slime",
        number: 16,
        description: null
    },
    dragonthorn: {
        name: "Dragonthorn",
        number: 65,
        rank: "G",
        family: "Dragon",
        description: "Cursed thickets of thorn tangled into draconic shape. Those entwined in their terrifying clutches have no hope of escape.",
        drops: {
            normal: "strong_medicine",
            rare: "seed_of_life"
        },
        growth: {
            hp: 1,
            mp: 1,
            atk: 2,
            def: 3,
            agi: 2,
            wis: 1
        },
        talents: ["blowy_slasher"],
        traits: {
            small: {
                spiky_skin: 1,
                sleepy_touch: 20,
                ultra_crafty_paralyser: 40
            },
            large: {
                tactical_genius: 1,
                uber_beastbane: 1,
                major_downer: 60
            }
        },
        resistances: {
            fire: 50,
            water: -25,
            wind: 0,
            earth: 25,
            explosions: 50,
            ice: 0,
            electricity: 0,
            light: 50,
            dark: 0,
            debilitation: -25,
            bedazzlement: 50,
            antimagic: 25,
            mp_absorption: 50,
            confusion: 0,
            sleep: 25,
            paralysis: 0,
            stun: 50,
            poison: -25,
            instant_death: 0
        }
    },
    komodo: {
        name: "Komodo",
        number: 66,
        rank: "G",
        family: "Dragon",
        description: "Nippy little dragons who have learned to stand on their highly developed hind legs. At full pelt they can outpace a racehorse, but haven't yet mastered the subtle art of slowing down.",
        drops: {
            normal: "manky_meat",
            rare: "seed_of_agility"
        },
        growth: {
            hp: 1,
            mp: 1,
            atk: 3,
            def: 2,
            agi: 3,
            wis: 1
        },
        talents: ["defender"],
        traits: {
            small: {
                insta_accel: 1,
                strong_starter: 20,
                ultra_craft_frizzer: 40
            },
            large: {
                tactical_genius: 1,
                ultra_crafty_dazzler: 1,
                last_legs: 60
            }
        },
        resistances: {
            fire: 50,
            water: -25,
            wind: 25,
            earth: 25,
            explosions: 50,
            ice: 0,
            electricity: 0,
            light: 0,
            dark: 25,
            debilitation: 0,
            bedazzlement: 50,
            antimagic: 25,
            mp_absorption: 25,
            confusion: 0,
            sleep: 0,
            paralysis: 0,
            stun: 50,
            poison: -25,
            instant_death: 25
        }
    },
    vegandragora: {
        name: "Vegandragora",
        number: 69,
        rank: "G",
        family: "Dragon",
        description: "Dragons which live in harmony with herbs and flowers. They love nothing more than basking in the sun and will get together to lap up the sun's rays on summer days.",
        drops: {
            normal: "medicinal_herb",
            rare: "seed_of_wisdom"
        },
        growth: {
            hp: 1,
            mp: 3,
            atk: 3,
            def: 1,
            agi: 2,
            wis: 1
        },
        talents: ["sizz_afficionado"],
        traits: {
            small: {
                close_scraper: 1,
                metal_beater: 20,
                ultra_crafty_frizzer: 40
            },
            large: {
                tactical_genius: 1,
                insta_accel: 1,
                ultra_crafty_zapper: 60
            }
        },
        resistances: {
            fire: 50,
            water: -25,
            wind: 0,
            earth: 50,
            explosions: 50,
            ice: 0,
            electricity: 0,
            light: 25,
            dark: 0,
            debilitation: 50,
            bedazzlement: 50,
            antimagic: 0,
            mp_absorption: 0,
            confusion: 0,
            sleep: 0,
            paralysis: 25,
            stun: 50,
            poison: -25,
            instant_death: 0
        }
    },
    damselfly: {
        name: "Damselfly",
        number: 70,
        description: null
    },
    lumbering_lizard: {
        name: "Lumbering Lizard",
        number: 89,
        description: null
    },
    stark_raven: {
        name: "Stark Raven",
        number: 135,
        description: null
    },
    bantamweight: {
        name: "Bantamweight",
        number: 136,
        rank: "G",
        family: "Plant",
        description: "These thumping great chickens have learned how to fly. Thanks to their highly-developed flight muscles, they can strike with the power of a trainer pugilist.",
        drops: {
            normal: "monster_manure",
            rare: "seed_of_wisdom"
        },
        growth: {
            hp: 1,
            mp: 1,
            atk: 2,
            def: 2,
            agi: 4,
            wis: 3
        },
        talents: ["hulk"],
        traits: {
            small: {
                strong_starter: 1,
                sleepy_touch: 20,
                ultra_crafty_sleeper: 40
            },
            large: {
                tactical_titan: 1,
                little_menace: 1,
                sobering_slap: 60
            }
        },
        resistances: {
            fire: -25,
            water: 50,
            wind: 25,
            earth: 50,
            explosions: -25,
            ice: 0,
            electricity: 25,
            light: 50,
            dark: 0,
            debilitation: 0,
            bedazzlement: 25,
            antimagic: 25,
            mp_absorption: 25,
            confusion: 0,
            sleep: 50,
            paralysis: 50,
            stun: -25,
            poison: 0,
            instant_death: 0
        }
    },
    killerpillar: {
        name: "Killerpillar",
        number: 138,
        rank: "G",
        family: "Plant",
        description: "Though these creepy-crawlies might look like larvae, they are in fact fully grown. They keep themselves warm in cold weather by rolling up into snug little balls.",
        drops: {
            normal: "manky_meat",
            rare: "seed_of_resilience"
        },
        growth: {
            hp: 1,
            mp: 2,
            atk: 2,
            def: 2,
            agi: 2,
            wis: 2
        },
        talents: ["hive_mind"],
        traits: {
            small: {
                insta_buff: 1,
                critical_moment: 20,
                ultra_crafty_poisoner: 40
            },
            large: {
                tactical_genius: 1,
                poisonous_touch: 1,
                desperate_measures: 60
            }
        },
        resistances: {
            fire: -25,
            water: 50,
            wind: 25,
            earth: 50,
            explosions: -25,
            ice: 0,
            electricity: 50,
            light: 25,
            dark: 0,
            debilitation: 0,
            bedazzlement: 0,
            antimagic: 50,
            mp_absorption: 0,
            confusion: 0,
            sleep: 50,
            paralysis: 50,
            stun: -25,
            poison: 25,
            instant_death: 0
        }
    },
    capsichum: {
        name: "Capsichum",
        number: 139,
        rank: "G",
        family: "Plant",
        description: "These terrible twins are in fact born already skewered. Always butting heads, they are often witnessed mid-argument.",
        drops: {
            normal: "medicinal_herb",
            rare: "seed_of_agility"
        },
        growth: {
            hp: 1,
            mp: 2,
            atk: 2,
            def: 2,
            agi: 2,
            wis: 2
        },
        talents: ["willing_helper"],
        traits: {
            small: {
                ultra_crafty_spellbinder: 1,
                spiky_skin: 20,
                big_bully: 40
            },
            large: {
                tactical_genius: 1,
                close_scraper: 1,
                insta_oomph: 60
            }
        },
        resistances: {
            fire: 0,
            water: 50,
            wind: 50,
            earth: 50,
            explosions: -25,
            ice: 25,
            electricity: 0,
            light: 0,
            dark: 0,
            debilitation: 0,
            bedazzlement: 0,
            antimagic: 0,
            mp_absorption: 50,
            confusion: 0,
            sleep: 50,
            paralysis: 50,
            stun: -25,
            poison: 25,
            instant_death: 0
        }
    },
    mad_mollusk: {
        name: "Mad Mollusk",
        number: 141,
        description: null
    },
    woebergine: {
        name: "Woebergine",
        number: 142,
        rank: "G",
        family: "Plant",
        description: "These adorable vegetable-based monsters are proud of their ability to cut some rug. Any traveller straying into their terrain should be prepared to see them strut their stuff.",
        drops: {
            normal: "medicinal_herb",
            rare: "seed_of_wisdom"
        },
        growth: {
            hp: 1,
            mp: 4,
            atk: 1,
            def: 2,
            agi: 2,
            wis: 2
        },
        talents: ["dancer"],
        traits: {
            small: {
                ace_evader: 1,
                confusing_touch: 20,
                ultra_crafty_stunner: 40
            },
            large: {
                tactical_commander: 1,
                insta_accel: 1,
                stunning_skin: 60
            }
        },
        resistances: {
            fire: 0,
            water: 50,
            wind: 0,
            earth: 50,
            explosions: -25,
            ice: 0,
            electricity: 25,
            light: 25,
            dark: 25,
            debilitation: 0,
            bedazzlement: 0,
            antimagic: 0,
            mp_absorption: 25,
            confusion: 0,
            sleep: 50,
            paralysis: 50,
            stun: -25,
            poison: 50,
            instant_death: 0
        }
    },
    khalamari_kid: {
        name: "Khalamari Kid",
        number: 144,
        rank: "G",
        family: "Plant",
        description: "These squid-like squirts are baby khalamri. Though small in stature, they're as tough as any full-grown sea-dweller.",
        drops: {
            normal: "medicinal_herb",
            rare: "seed_of_wisdom"
        },
        growth: {
            hp: 1,
            mp: 3,
            atk: 2,
            def: 2,
            agi: 2,
            wis: 2
        },
        talents: ["aquapothecary"],
        traits: {
            small: {
                splishmeister: 1,
                ace_evader: 20,
                ultra_crafty_splasher: 40
            },
            large: {
                tactical_genius: 1,
                wizardly_wind: 1,
                strangely_alluring: 60
            }
        },
        resistances: {
            fire: -25,
            water: 100,
            wind: 0,
            earth: 50,
            explosions: -25,
            ice: 0,
            electricity: -25,
            light: 25,
            dark: 50,
            debilitation: 0,
            bedazzlement: 0,
            antimagic: 0,
            mp_absorption: 50,
            confusion: 0,
            sleep: 50,
            paralysis: 50,
            stun: -25,
            poison: 25,
            instant_death: 0
        }
    },
    toady: {
        name: "Toady",
        number: 145,
        description: null
    },
    cyclown: {
        name: "Cyclown",
        number: 148,
        description: null
    },
    antguzzler: {
        name: "Antguzzler",
        number: 205,
        rank: "G",
        family: "Beast",
        description: "These long-snouted monsters resemble spiny anteaters. Their length tongues are well-adapted to slurping army ants up from their nests.",
        drops: {
            normal: "medicinal_herb",
            rare: "seed_of_strength"
        },
        growth: {
            hp: 1,
            mp: 2,
            atk: 2,
            def: 1,
            agi: 2,
            wis: 2
        },
        talents: ["power_player"],
        traits: {
            small: {
                ultra_crafty_stunner: 1,
                metal_beater: 20,
                stunning_touch: 40
            },
            large: {
                tactical_genius: 1,
                agent_of_chaos: 1,
                rando_oomph: 60
            }
        },
        resistances: {
            fire: 50,
            water: 0,
            wind: 50,
            earth: 50,
            explosions: 25,
            ice: -25,
            electricity: 0,
            light: 0,
            dark: 0,
            debilitation: 0,
            bedazzlement: 0,
            antimagic: 0,
            mp_absorption: 0,
            confusion: -25,
            sleep: 50,
            paralysis: 25,
            stun: 50,
            poison: 50,
            instant_death: 0
        }
    },
    mischievous_mole: {
        name: "Mischievous Mole",
        number: 206,
        rank: "G",
        family: "Beast",
        description: "These tunnelling tykes traditionally loved to play pranks, but these days tend to keep their heads down and focus on digging.",
        drops: {
            normal: "pretty_pebble",
            rare: "seed_of_strength"
        },
        growth: {
            hp: 1,
            mp: 1,
            atk: 3,
            def: 3,
            agi: 2,
            wis: 2
        },
        talents: ["prankster"],
        traits: {
            small: {
                attacking_impulse: 1,
                rando_muster: 20,
                metal_medley: 40
            },
            large: {
                tactical_genius: 1,
                critical_triumph: 1,
                little_menace: 60
            }
        },
        resistances: {
            fire: 50,
            water: -25,
            wind: 50,
            earth: 75,
            explosions: 0,
            ice: -25,
            electricity: 0,
            light: -25,
            dark: 50,
            debilitation: 0,
            bedazzlement: 25,
            antimagic: 0,
            mp_absorption: 0,
            confusion: -25,
            sleep: 50,
            paralysis: 50,
            stun: 50,
            poison: 0,
            instant_death: 0
        }
    },
    bunicorn: {
        name: "Bunicorn",
        number: 207,
        rank: "G",
        family: "Beast",
        description: "These creatures might resemble rabbits, but meet one of their horns head-on and you'll understand the difference rather sharpish. They pass the long nights huddled together in their warrens.",
        drops: {
            normal: "medicinal_herb",
            rare: "seed_of_agility"
        },
        growth: {
            hp: 1,
            mp: 1,
            atk: 2,
            def: 2,
            agi: 2,
            wis: 2
        },
        talents: ["naturalist"],
        traits: {
            small: {
                attacking_impulse: 1,
                spiky_skin: 20,
                late_bloomer: 40
            },
            large: {
                tactical_genius: 1,
                ace_evader: 1,
                last_legs: 60
            }
        },
        resistances: {
            fire: 50,
            water: 25,
            wind: 50,
            earth: 0,
            explosions: 0,
            ice: -25,
            electricity: 0,
            light: 50,
            dark: 0,
            debilitation: 0,
            bedazzlement: 0,
            antimagic: 0,
            mp_absorption: 0,
            confusion: -25,
            sleep: 50,
            paralysis: 0,
            stun: 50,
            poison: 25,
            instant_death: 50
        }
    },
    feralball: {
        name: "Feralball",
        number: 213,
        rank: "G",
        family: "Beast",
        description: "This flufball is covered in green fur from top to toe. Though easily spooked, those with sharp eyes might spot something funny where this beastie's nose should be before it scarpers.",
        drops: {
            normal: "medicinal_herb",
            rare: "seed_of_agility"
        },
        growth: {
            hp: 2,
            mp: 3,
            atk: 1,
            def: 1,
            agi: 1,
            wis: 3
        },
        talents: ["blowy_slasher"],
        traits: {
            small: {
                ace_evader: 1,
                ultra_crafty_sleeper: 20,
                strangely_alluring: 40
            },
            large: {
                tactical_genius: 1,
                insta_accel: 1,
                somnolent_skin: 60
            }
        },
        resistances: {
            fire: 50,
            water: 0,
            wind: 50,
            earth: 0,
            explosions: 25,
            ice: -25,
            electricity: 0,
            light: 25,
            dark: 25,
            debilitation: -25,
            bedazzlement: 25,
            antimagic: 0,
            mp_absorption: 50,
            confusion: -25,
            sleep: 50,
            paralysis: 0,
            stun: 50,
            poison: 25,
            instant_death: 0
        }
    },
    lampling: {
        name: "Lampling",
        number: 288,
        description: null
    },
    foo_dog: {
        name: "Foo Dog",
        number: 290,
        description: null
    },
    bongo_drongo: {
        name: "Bongo Drongo",
        number: 294,
        description: null
    },
    leery_lout: {
        name: "Leery Lout",
        number: 354,
        description: "These shy scoundrels dish out damage from behind their smirking shields, which are precious family heirlooms, passed down from father to son."
    },
    dracky: {
        name: "Dracky",
        number: 355,
        rank: "G",
        family: "Demon",
        description: "These flapping pains in the neck only come out at night. They love nothing more than slurping up human blood, the fresher the better.",
        drops: {
            normal: "pretty_pebble",
            rare: "seed_of_agility"
        },
        growth: {
            hp: 1,
            mp: 2,
            atk: 1,
            def: 2,
            agi: 5,
            wis: 2
        },
        talents: ["zam_afficionado"],
        traits: {
            small: {
                zammeister: 1,
                insta_accel: 20,
                big_bully: 40
            },
            large: {
                tactical_commander: 1,
                ace_evader: 1,
                ultra_crafty_zammer: 60
            }
        },
        resistances: {
            fire: 0,
            water: 50,
            wind: 50,
            earth: 0,
            explosions: 0,
            ice: 0,
            electricity: -25,
            light: 0,
            dark: 75,
            debilitation: 50,
            bedazzlement: 0,
            antimagic: 0,
            mp_absorption: 50,
            confusion: 50,
            sleep: 0,
            paralysis: -25,
            stun: 0,
            poison: 0,
            instant_death: 25
        }
    },
    lunatick: {
        name: "Lunatick",
        number: 359,
        description: null
    },
    teeny_sanguini: {
        name: "Teeny Sanguini",
        number: 360,
        rank: "G",
        family: "Demon",
        description: "Baby monsters known for their distinctive bovine markings. Considered to be fully-grown once the black fur grows out, replaced entirely with a ravishing shade of rose pink.",
        drops: {
            normal: "medicinal_herb",
            rare: "seed_of_agility"
        },
        growth: {
            hp: 1,
            mp: 3,
            atk: 1,
            def: 2,
            agi: 4,
            wis: 2
        },
        talents: ["dark_artist"],
        traits: {
            small: {
                stunning_touch: 1,
                insta_accel: 20,
                late_bloomer: 40
            },
            large: {
                tactical_genius: 1,
                ace_evader: 1,
                strangely_alluring: 60
            }
        },
        resistances: {
            fire: 0,
            water: 50,
            wind: 50,
            earth: 0,
            explosions: 25,
            ice: 25,
            electricity: -25,
            light: 0,
            dark: 25,
            debilitation: 0,
            bedazzlement: 0,
            antimagic: 0,
            mp_absorption: 50,
            confusion: 50,
            sleep: 0,
            paralysis: -25,
            stun: 75,
            poison: 0,
            instant_death: 0
        }
    },
    lips: {
        name: "Lips",
        number: 361,
        description: null
    },
    cyclops: {
        name: "Cyclops",
        number: 376,
        description: null
    },
    putrefido: {
        name: "Putrefido",
        number: 428,
        description: null
    },
    funghoul: {
        name: "Funghoul",
        number: 429,
        description: null
    },
    skeleton: {
        name: "Skeleton",
        number: 431,
        description: "Recycled from the bodies of fallen warriors, these unfortunate cadavers truly get worked to the bone."
    },
    stump_chump: {
        name: "Stump Chump",
        number: 432,
        rank: "G",
        family: "Undead",
        description: "The tragic remains of chopped-down trees whose deep-seated malice has made them morph into monsters. They attack travellers who try to sit on them, sucking out all their nutrients before discarding the husk.",
        drops: {
            normal: "medicinal_herb",
            rare: "seed_of_strength"
        },
        growth: {
            hp: 1,
            mp: 3,
            atk: 2,
            def: 3,
            agi: 2,
            wis: 1
        },
        talents: ["nature_child"],
        traits: {
            small: {
                ultra_crafty_dazzler: 1,
                major_downer: 20,
                ultra_crafty_debilitator: 40
            },
            large: {
                tactical_commander: 1,
                detox: 1,
                ultra_crafty_sleeper: 60
            }
        },
        resistances: {
            fire: -25,
            water: 0,
            wind: 25,
            earth: 50,
            explosions: 0,
            ice: 50,
            electricity: 0,
            light: 0,
            dark: 50,
            debilitation: 0,
            bedazzlement: -25,
            antimagic: 0,
            mp_absorption: 50,
            confusion: 0,
            sleep: 25,
            paralysis: 25,
            stun: 25,
            poison: 50,
            instant_death: 0
        }
    },
    ghost: {
        name: "Ghost",
        number: 433,
    },
    firespirit: {
        name: "Firespirit",
        number: 437,
        description: null
    },
    shadow: {
        name: "Shadow",
        number: 441,
        description: null
    },
    fright_bulb: {
        name: "Fright Bulb",
        number: null,
        rank: "G",
        family: "Slime",
        description: null,
        growth: {
            hp: 1,
            mp: 3,
            atk: 2,
            def: 2,
            agi: 2,
            wis: 2
        },
        talents: ["soothesayer"],
        traits: {
            small: {
                ultra_crafty_stunner: 1,
                evasive_impulse: 20,
                ace_evader: 40
            },
            large: {}
        },
        resistances: {
            fire: 0,
            water: 25,
            wind: 0,
            earth: 25,
            explosions: 0,
            ice: 25,
            electricity: 50,
            light: 25,
            dark: 0,
            debilitation: 25,
            bedazzlement: 50,
            antimagic: 0,
            mp_absorption: -25,
            confusion: 50,
            sleep: 0,
            paralysis: 50,
            stun: 0,
            poison: 0,
            instant_death: 0
        }
    },
    drake_slime: {
        name: "Drake Slime",
        number: null,
        rank: "F",
        family: "Slime",
        description: null,
        drops: null,
        growth: null,
        talents: null,
        traits: {
            small: {
                ace_evader: 1,
                insta_accel: 20,
                critical_moment: 40
            },
            large: null
        },
        resistances: {
            fire: 50,
            water: 0,
            wind: 0,
            earth: -25,
            explosions: 50,
            ice: 0,
            electricity: 50,
            light: 25,
            dark: 0,
            debilitation: 25,
            bedazzlement: 50,
            antimagic: 25,
            mp_absorption: -25,
            confusion: 0,
            sleep: 25,
            paralysis: 50,
            stun: 0,
            poison: 0,
            instant_death: 0
        }
    },
    onion_slime: {
        name: "Onion Slime",
        number: null,
        rank: "F",
        family: "Slime",
        description: null,
        drops: null,
        growth: null,
        talents: null,
        traits: {
            small: {
                cragmeister: 1,
                ultra_crafty_dazzler: 20,
                rando_mister: 40
            },
            large: null
        },
        resistances: {
            fire: 0,
            water: 50,
            wind: 0,
            earth: 0,
            explosions: 25,
            ice: 0,
            electricity: 50,
            light: 50,
            dark: -25,
            debilitation: 0,
            bedazzlement: 50,
            antimagic: 0,
            mp_absorption: -25,
            confusion: 50,
            sleep: 0,
            paralysis: 50,
            stun: 25,
            poison: 0,
            instant_death: 0
        }
    }
};
