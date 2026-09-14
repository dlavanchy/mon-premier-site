# Mon premier site créé avec un agent ChatGPT

Petit site statique de démonstration comprenant une page moderne et un compteur
de clics interactif.

## Tester le site localement

Le plus simple est d’ouvrir `index.html` dans un navigateur. Pour utiliser un
petit serveur local avec Python :

```bash
python -m http.server 8000
```

Ouvrez ensuite <http://localhost:8000>.

## Publier avec GitHub Pages

1. Créez un nouveau dépôt GitHub, par exemple `mon-premier-site`.
2. Ajoutez ce dossier au dépôt et poussez la branche `main` sur GitHub.
3. Dans le dépôt, ouvrez **Settings > Pages**.
4. Sous **Build and deployment**, choisissez **Deploy from a branch**.
5. Sélectionnez la branche **main**, le dossier **/(root)**, puis cliquez sur
   **Save**.

Après le déploiement, le site sera disponible à une adresse de la forme :
`https://VOTRE-NOM.github.io/mon-premier-site/`.
