/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("baab4gdb31bhv3y")

  collection.name = "players"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("baab4gdb31bhv3y")

  collection.name = "products"

  return dao.saveCollection(collection)
})
