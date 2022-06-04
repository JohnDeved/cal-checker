export interface IProductDetail {
  articleGroupIds: string[]
  articleId: string
  articleOnlyCanonicalPath: string
  attributes: string[]
  authenticatedOnly: boolean
  availability: number
  badges: any[]
  brand: string
  brandPath: string
  canonicalPath: string
  category: string
  description: string
  eanCodes: string[]
  foodInformation: FoodInformation[]
  grammage: string
  grammageBadge: string
  grammagePriceFactor: number
  grammageUnit: string
  hasBrandTab: boolean
  hasDescription: boolean
  hasSpecialDeliveryWindows: boolean
  isAvailable: boolean
  isDelicatessen: boolean
  isMedical: boolean
  isSugarFree: boolean
  isSugarReduced: boolean
  isWeightArticle: boolean
  loyaltyPrice: LoyaltyPrice
  maximalOrderQuantity: number
  minimalOrderQuantity: number
  name: string
  orderQuantityStepSize: number
  paths: string[]
  price: Price
  properties: string[]
  quantitySteps: number[]
  rank: number
  recommendationArticleIds: any[]
  seoDescription: string
  seoTitle: string
  slug: string
  storeAvalibility: string[]
  url: string
  vatCode: string
  video: string
}

export interface FoodInformation {
  allergens: Allergen[]
  attributeGroups: AttributeGroup[]
  contacts: Contact[]
  countryOrigins: string[]
  fromDate: string
  ingredients: string
  measurements: Measurement[]
  name: string
  nutritions: Nutrition[]
  origin: string
  preperations: any[]
  storageHint: string
}

export interface Allergen {
  allergenName: string
  grade: string
}

export interface AttributeGroup {
  attributes: Attribute[]
  description: string
  groupCode: string
}

export interface Attribute {
  attributeCode: string
  description: string
  hasTranslation: string
  value: string
  valueTranslation: string
}

export interface Contact {
  channel: string
  detail: string
  type: string
}

export interface Measurement {
  type: string
  unit: string
  value: number
}

export interface Nutrition {
  householdPortion: string
  nutritions: Nutrition2[]
  preperationGrade: string
  relationValue: number
  unit: string
}

export interface Nutrition2 {
  measureDefinition: string
  nutritionName: string
  nutritionalValue: number
  unit: string
}

export interface LoyaltyPrice {
  bulkDiscountPriceTypes: any[]
  defaultPriceTypes: any[]
  final: number
  isPlusPromotion: boolean
  isQuantityDiscount: boolean
  normal: number
  priceAdditionalInfo: PriceAdditionalInfo
  priceTypeDefinitions: any[]
  sale: number
  unit: string
}

export interface PriceAdditionalInfo {}

export interface Price {
  bulkDiscountPriceTypes: any[]
  defaultPriceTypes: any[]
  final: number
  isPlusPromotion: boolean
  isQuantityDiscount: boolean
  normal: number
  priceAdditionalInfo: PriceAdditionalInfo2
  priceTypeDefinitions: any[]
  sale: number
  unit: string
}

export interface PriceAdditionalInfo2 {}
