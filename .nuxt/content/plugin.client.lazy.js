import QueryBuilder from './query-builder'
import Loki from '@lokidb/loki'
import LokiFullTextSearch from '@lokidb/full-text-search'

LokiFullTextSearch.register()

const dirs = ["/","/about","/admission","/admission-fail","/admission-thanks","/careers","/company","/change-of-status","/contact","/contact-thanks","/common","/course","/faq","/faq-covid19","/firstday-at-mli","/freetrial","/feature","/freetrial-thanks","/going-to-college","/havevisa","/hollywood","/how-to-apply","/home","/how-to-apply-for-a-student-visa","/image-gallery","/material","/material-thanks","/mli-quarantine-policy","/nonf1","/others","/official-toefl-test","/overseas","/overseas-students","/price","/promo-contact-thanks","/price-auto","/promo-material","/promo-contact","/promo-material-thanks","/school-calendar","/safety-covid19","/school-magazine","/short","/stay","/testimonials","/student-visa-f1","/transfer-students","/teachers","/visa-overseas","/visaholder","/westwood","/common/footer","/common/header","/common/footer/first","/common/footer/second","/common/header/first","/common/header/second","/common/footer/third","/common/header/third","/campus","/language","/common/footer/third/en","/common/header/first/en","/common/footer/second/en","/common/header/second/en","/common/header/third/en"]
  let db, items

const $content = function () {
  let options = {}
  const paths = []
  Array.from(arguments).forEach((argument) => {
    if (typeof argument === 'string') {
      paths.push(argument)
    } else if (typeof argument === 'object') {
      options = argument
    }
  })

  const { text = false, deep = false } = options

  const path = `/${paths.join('/').replace(/\/+/g, '/')}`
  const isDir = !path || !!dirs.find(dir => dir === path)
  // Look for dir or path
  const query = isDir ? { dir: deep ? { $regex: new RegExp(`^${path}`) } : path } : { path }
  // Postprocess to get only first result (findOne)
  const postprocess = isDir ? [] : [data => data[0]]

  return new QueryBuilder({
    query: items.chain().find(query, !isDir),
    path,
    postprocess,
    text
  }, {
    fullTextSearchFields: ["title","description","slug","text"]
  })
}

export default (database) => {
  db = new Loki('content.db')
  db.loadJSONObject(database)
  items = db.getCollection('items')

  return $content
}
