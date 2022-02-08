### Questions

1. En sachant que les jeux de lotterie en ligne doivent tourner 21ℎ/24ℎ et 6𝑗/7𝑗, quel
serait le coût de votre architecture si chacun de vos services s’exécutent dans une
VM qui est facturé à 0.00065$/ℎ ?

0.00065*21*6*52 = 4.2588$/an pour une seule VM.
Dans notre architecture, nous avons 2 VM donc 8.5176$/an.

2. D’après vous, quel est le composant qui pourrait représenter un goulot d’étranglement
si vous déployer votre architecture dans le Cloud ? Que préconisez-vous pour ce
composant ?

Le serveur et la BDD pourraientt représenter des goulots d'étranglement. Il pourrait donc être intéressant de répliquer ces composants pour pouvoir passer à l'échelle plus facilement. Il faut néanmoins faire attention à intégrer un load balancer afin de rediriger les requêtes des clients vers les différents serveur en fonction de leur charge. Cela implique des augmentations de coûts car il y a plus de VM à gérer.

3. Sur 10 tests, les joueurs ont besoin de combien d’itérations pour gagner la partie
en moyenne ? Combien de fois en moyenne sont-ils débiteurs ?

Gagné en 25.2 coups et aucun n'a été débiteur.

### COmmandes

    docker-compose up -d

    docker-compose scale client1=10
    docker-compose scale client1=20
    docker-compose scale client1=40
    docker-compose scale client1=80
    docker-compose scale client1=120

En moyenne, le temps de réponse avec peu d'utilisateurs était de l'ordre de 3/4 ms mais quand on met 100 client, le temps de réponse pouvait monter jusqu'à 40ms.
