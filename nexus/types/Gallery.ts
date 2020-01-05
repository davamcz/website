import { objectType } from "nexus"

export const Gallery = objectType({
  name: 'Gallery',
  definition: t => {
    t.model.id()
    t.model.images()
  },
})