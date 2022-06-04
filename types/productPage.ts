export interface IProductPage {
  tiles: Tile[]
  showFilter: boolean
  resultCategories: string[]
  noResultsFound: boolean
  facets: Facet[]
  pagingInfo: PagingInfo
  sortInfo: SortInfo
}

export interface Tile {
  quantity: number
  type: string
  data?: Data
  contentData: any
  filter: any
  size: string
}

export interface Data {
  category: any
  availability: number
  url: string
  articleOnlyCanonicalPath: string
  canonicalPath: string
  paths: any
  recipeID: any
  articleId: string
  name: string
  description?: string
  hasDescription: boolean
  productText: any
  articleGroupIds: string[]
  slug: string
  brand: string
  brandPath: any
  hasBrandTab: boolean
  video: string
  authenticatedOnly: boolean
  hasSpecialDeliveryWindows: boolean
  isDelicatessen: boolean
  isSugarFree: boolean
  isSugarReduced: boolean
  recommendationArticleIds: any[]
  grammageBadge: string
  grammageUnit: string
  grammagePriceFactor: number
  grammage: string
  minimalOrderQuantity: number
  maximalOrderQuantity: number
  quantitySteps: number[]
  orderQuantityStepSize: number
  score: number
  articleTypeIndicator: any
  isWeightArticle: boolean
  price: Price
  loyaltyPrice: LoyaltyPrice
  vatCode: string
  storeAvalibility: string[]
  badges: string[]
  attributes: string[]
  properties: string[]
  rank: number
  isMedical: boolean
}

export interface Price {
  normal: number
  sale: number
  unit: string
  final: number
  priceTypeDefinitions: PriceTypeDefinition[]
  isQuantityDiscount: boolean
  priceAdditionalInfo: PriceAdditionalInfo
  bulkDiscountPriceTypes: any[]
  defaultPriceTypes: string[]
  isPlusPromotion: boolean
}

export interface PriceTypeDefinition {
  name: string
  startDate: any
  startDateText: any
}

export interface PriceAdditionalInfo {}

export interface LoyaltyPrice {
  normal: number
  sale: number
  unit: string
  final: number
  priceTypeDefinitions: PriceTypeDefinition2[]
  isQuantityDiscount: boolean
  priceAdditionalInfo: PriceAdditionalInfo2
  bulkDiscountPriceTypes: any[]
  defaultPriceTypes: string[]
  isPlusPromotion: boolean
}

export interface PriceTypeDefinition2 {
  name: string
  startDate: any
  startDateText: any
}

export interface PriceAdditionalInfo2 {}

export interface Facet {
  values: Value[]
  name: string
  displayName: string
}

export interface Value {
  total: number
  value: string
  active: boolean
}

export interface PagingInfo {
  page: number
  pageSize: number
  numResults: number
  offset: number
  limit: number
  isFirstPage: boolean
  isLastPage: boolean
}

export interface SortInfo {
  currentSort: string
  availableSort: string[]
  sortParameter: string
}
