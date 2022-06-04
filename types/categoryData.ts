export interface ICategoryData {
  cart: Cart
  cartStatus: number
  correlationId: string
  customNavigation: CustomNavigation[]
  elemIdToRemoveAfterStyleLoad: string
  enabledFeatures: EnabledFeatures
  includeExt: boolean
  logLevel: string
  mainNavigation: MainNavigation[]
  noRecommendationArticleGroupIds: any[]
  promotionPages: PromotionPages
  showOeChange: boolean
  sitekey: string
  styleToLoadOnInit: string
  track: Track
  user: User
}

export interface Cart {
  appliedPromotions: any[]
  costOfDelivery: number
  costOfDeliveryNormal: number
  costSavings: number
  employeeCredit: number
  id: string
  isEvaluated: boolean
  items: any[]
  lastModified: string
  maxAllowedCartWeight: number
  minimumOrderValue: number
  notEnoughCoins: boolean
  promotionResults: any[]
  reservationFactors: ReservationFactors
  serviceFee: number
  serviceFeeNormal: number
  toMinimumOrderValue: number
  totalOrderValue: number
  totalSum: number
  totalSumNormal: number
  totalSumOfGoods: number
  totalSumOfGoodsNormal: number
  usedPoints: number
}

export interface ReservationFactors {
  creditCard: number
  payPal: number
}

export interface CustomNavigation {
  categoryTeasers: any[]
  children?: Children[]
  customNavigation: boolean
  title: string
  url?: string
}

export interface Children {
  children: Children2[]
  customNavigation: boolean
  title: string
}

export interface Children2 {
  categoryTeasers: CategoryTeaser[]
  children: any[]
  customNavigation: boolean
  title: string
}

export interface CategoryTeaser {
  buttonText: string
  caption: string
  imageAlt: string
  imageSrc: string
  isActive: boolean
  teaserLink: TeaserLink
  text: string
}

export interface TeaserLink {
  target: string
  type: string
  url: string
}

export interface EnabledFeatures {
  chatbot: boolean
  checkoutLottery: boolean
  driveIn: boolean
  giftcards: boolean
  salutation: boolean
}

export interface MainNavigation {
  articleGroupId: string
  children: MainNavigation[]
  customNavigation: boolean
  title: string
  url: string
}

export interface CategoryTeaser2 {
  buttonText: string
  caption: string
  ctaTrack: string
  imageAlt: string
  imageSrc: string
  isActive: boolean
  teaserLink: TeaserLink2
  text: string
}

export interface TeaserLink2 {
  target: string
  text: string
  type: string
  url: string
}

export interface CategoryTeaser3 {
  buttonText: string
  caption: string
  ctaTrack: string
  imageAlt: string
  imageSrc: string
  isActive: boolean
  teaserLink: TeaserLink3
  text: string
}

export interface TeaserLink3 {
  target: string
  text: string
  type: string
  url: string
}

export interface PromotionPages {}

export interface Track {
  events: any[]
}

export interface User {
  customerId: string
  email: string
  firstname: string
  gender: string
  isAuthenticated: boolean
  isDP: boolean
  isLoyalty: boolean
  mpCardId: string
  newsletterSubscriptions: any[]
  numCoupons: number
  numFavorites: number
  referenceType: string
  surname: string
}
