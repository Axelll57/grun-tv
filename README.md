# Grün TV Dashboard

Affichage dynamique pour l'accueil de Grün Signalisation.

## Contenu

Le dashboard affiche en boucle :
1. **Météo** (10s) - Widget MeteoTV pour Bertrange
2. **Trafic** (10s) - Carte Waze en temps réel
3. **Vidéos** - 4 vidéos corporate en boucle (video3 > video1 > video4 > video2)

## Structure

```
grun-tv/
├── index.html      # Page principale
├── README.md
└── assets/
    ├── logo_grun.png
    ├── video1.mp4
    ├── video2.mp4
    ├── video3.mp4
    └── video4.mp4
```

## Configuration

Les durées sont configurables dans `index.html` :
- `METEO_DURATION` : durée d'affichage météo (défaut: 10000ms)
- `TRAFIC_DURATION` : durée d'affichage trafic (défaut: 10000ms)

## Déploiement

Héberger le dossier sur un serveur web ou ouvrir `index.html` dans un navigateur en plein écran (F11).
