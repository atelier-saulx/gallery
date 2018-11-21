// -----------------UITLEG------------------
// zie het bestandje "content.json"

// Stukje programming :) Alles tussen de [] heten arrays, alles tussen de {} heten objects.
// een array kan meerdere objects bevatten. Objecs hebben named fields zoals title: en type:
// Je kan de inhoud van de website vrij aanpassen zolang je de structuur zoals hij is opgezet aanhoudt.
// nieuwe categorieen kan je toevoegen in de array categories. elke category is een object met de fields
// title en items. In de array items kan objects aanmaken  van het type 'image' of 'text'. Zorg dat de objects gescheiden zijn door een komma.
// Nieuwe fotos plaats je in de folder Public, dat moet je doen want dan worden ze automatisch gecompressed. De url is het pad naar de folder.
// Zorg dat je in de url geen spaties hebt, zorg dus dat er in de naam van de foto geen spatie zit. Als je in tekst een enter
// wilt toevoegen, type dan </br>. Voor overige vragen weet je me te vinden! ;) Succes!!

content = {
  "title": "Studio Lapien",
  "categories": [
    {
      "title": "Berg.",
      "items": [
        {
          "title": "Berg 1",
          "type": "image",
          "url": "./public/berg/Berg1.jpg"
        },
        {
          "title": "",
          "type": "text",
          "text": "What are men to rocks and mountains?"
        },
        {
          "title": "Berg 2",
          "type": "image",
          "url": "./public/berg/Berg2.jpg"
        },
        {
          "title": "Berg 3",
          "type": "image",
          "url": "./public/berg/Berg3.jpg"
        },
        {
          "title": "Berg 4",
          "type": "image",
          "url": "./public/berg/Berg4.jpg"
        },
        {
          "title": "Berg 5",
          "type": "image",
          "url": "./public/berg/Berg5.jpg"
        },
        {
          "title": "Berg 6",
          "type": "image",
          "url": "./public/berg/Berg6.jpg"
        },
        {
          "title": "Berg 7",
          "type": "image",
          "url": "./public/berg/Berg7.jpg"
        },
        {
          "title": "Berg 8",
          "type": "image",
          "url": "./public/berg/Berg8.jpg"
        }
      ]
    },
    {
      "title": "Pheriphery.",
      "items": [
        {
          "title": "Pheriphery 1",
          "type": "image",
          "url": "./public/periphery/Periphery1.jpg"
        },
        {
          "title": "Pheriphery 2",
          "type": "image",
          "url": "./public/periphery/Periphery2.jpg"
        },
        {
          "title": "Pheriphery 3",
          "type": "image",
          "url": "./public/periphery/Periphery3.jpg"
        },
        {
          "title": "Pheriphery 4",
          "type": "image",
          "url": "./public/periphery/Periphery4.jpg"
        },
        {
          "title": "Pheriphery 5",
          "type": "image",
          "url": "./public/periphery/Periphery5.jpg"
        }
      ]
    },
    {
      "title": "Contact",
      "items": [
        {
          "title": "Studio Lapien",
          "type": "text",
          "text": "Mail: info@lapien.com </br> tel: 015770446168 </br> </br> All images: copyright Nick Lapien </br> No unauthorized Published or reproduction "
        }
      ]
    }
  ]
}
