/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "gpf16hwacft75x4",
    "created": "2024-02-07 11:11:43.279Z",
    "updated": "2024-02-07 11:11:43.279Z",
    "name": "vending_machines",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "niwtscvk",
        "name": "Locations",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "euzgub42",
        "name": "products",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "baab4gdb31bhv3y",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gpf16hwacft75x4");

  return dao.deleteCollection(collection);
})
