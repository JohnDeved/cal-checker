import * as cheerio from 'cheerio'
import pLimit from 'p-limit'
import { IProductPage } from './types/productPage'
import { IProductDetail } from './types/pruductDetail'
import fs from 'fs'

const plimit = pLimit(25)

console.time()
fetch("https://shop.billa.at/api/search/full?category=B2&page=1&pageSize=10000")
  .then<IProductPage>(res => res.json())
  .then(json => {
    return Promise.all(json.tiles.map(product => {
      return plimit(() => {
        if (!product.data) return
        const id = product.data.articleId
        const url = `https://shop.billa.at${product.data.url}`

        return fs.promises.readFile(`./cache/${id}.json`)
          .then<IProductDetail>(data => JSON.parse(data.toString()))
          .catch(() => {
            return fetch(url)
              .then(res => res.text())
              .then(html => {
                const $ = cheerio.load(html)
                const detail = $("[data-dd-product-detail]").attr("data-dd-product-detail")
                if (!detail) return
                const data: IProductDetail = JSON.parse(detail)
                return data
              })
          })
          .then(data => {
            if (!data || !product.data) return
            const nutritions = data.foodInformation?.[0].nutritions.find(n => n.relationValue >= 100)
            const name = product.data.name
            const id = product.data.articleId

            fs.promises.writeFile(`./cache/${id}.json`, JSON.stringify(data, null, 2))

            // console.log(nutritions)
            console.log("gathering data", json.tiles.length - (plimit.pendingCount + plimit.activeCount) + 1, 'of', json.tiles.length)
            return {
              name,
              url,
              id: product.data.articleId,
              description: data.description,
              eanCode: data.eanCodes[0],
              articleGroupIds: data.articleGroupIds,
              cals: nutritions?.nutritions.find(n => n.unit === "Kilokalorie")?.nutritionalValue,
              carbs: nutritions?.nutritions.find(n => n.nutritionName === "Kohlenhydrate")?.nutritionalValue,
              fat: nutritions?.nutritions.find(n => n.nutritionName === "Fett")?.nutritionalValue,
              fiber: nutritions?.nutritions.find(n => n.nutritionName === "Ballaststoffe")?.nutritionalValue,
              g: nutritions?.relationValue
            }
          })
      })
    }))
  })
  .then(data => data.filter((d): d is NonNullable<typeof d> => Boolean(d)))
  .then(data => data.filter(d => typeof d.cals === "number"))
  .then(async data => {
    data.sort((a, b) => (a.cals ?? 0) - (b.cals ?? 0))
    await fs.promises.writeFile('./data.json', JSON.stringify(data, null, 2))
    console.timeEnd()
  })

export { }