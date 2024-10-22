Ett klientgränsnsitt för att se om Tigrarna kan ta makten eller om Älgarna ska fortsätta regera i skogen.

Ett tillhörande REST-api för att rösta och se resultaten.

/animals
/votes
/election

## Skapa nedanstående resurser:

election:

- name : string
- id : number

animal:

- id: number
- name: string
- image: url

vote:

- id: number
- animal: animal (id)
- election: election (id)

## Lägg till GET /animals och POST /animals

## Skriv ut så att er html sida kan logga ut eller rita ut djuren.

1. Skapa en express server som kan dela ut statiska filer och svara på API anrop till /api
2. Gör ett REST API och ett klientgränssnitt som kan använda detta
